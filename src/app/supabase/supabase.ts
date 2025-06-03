import { Car, Feature, Charger } from "@/lib/definitions"; // Charger añadido
import { mapCarFromDB, mapCarToDB } from "@/utils/mappers";
import { generateVehicleSlug, generateChargerSlug } from "@/utils/slug"; // generateChargerSlug añadido
import { createClient } from "../../lib/supabase/client";
import { updateCarDocument } from "@/utils/carDocuments";
import { ChargerFormValues } from "@/lib/validations";

export const supabaseClient = createClient();

// He modificado el path para ser más específico: `entityType/entityId/fileName`
// entityType podría ser 'cars' o 'chargers'
export async function uploadImage(
  file: File,
  entityType: 'cars' | 'chargers', // Nuevo parámetro para diferenciar
  entityId: string,
): Promise<string | null> {
  try {
    if (!supabaseClient) {
      console.error("Supabase client is not initialized");
      return null;
    }
    if (!file) {
      console.error("No file provided");
      return null;
    }
    if (!entityId) {
      console.error("No entity ID provided");
      return null;
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}.${fileExt}`;
    // El path ahora incluye el tipo de entidad y el ID
    const filePath = `${entityType}/${entityId}/${fileName}`;

    // Asumimos que tienes un solo bucket, por ejemplo 'public-assets'
    // O si tienes buckets separados 'car-images', 'charger-images', ajustarías el .from()
    const BUCKET_NAME = "car-images"; // Cambia esto si usas un bucket diferente o múltiples buckets

    const { data, error } = await supabaseClient.storage
      .from(BUCKET_NAME) // OJO: Cambiar si usas buckets diferentes
      .upload(filePath, file, { cacheControl: "3600" });

    if (error) {
      console.error("Error uploading image:", error);
      return null;
    }

    const { data: urlData } = supabaseClient.storage
      .from(BUCKET_NAME) // OJO: Cambiar si usas buckets diferentes
      .getPublicUrl(filePath);

    if (!urlData || !urlData.publicUrl) {
      console.error("Failed to get public URL");
      return null;
    }

    return urlData.publicUrl;
  } catch (error) {
    console.error("Error in uploadImage:", error);
    return null;
  }
}


export async function deleteImage(url: string): Promise<boolean> {
  try {
    if (!url) return false;

    const urlObj = new URL(url);
    // Ejemplo de URL: https://<project_ref>.supabase.co/storage/v1/object/public/car-images/chargers/<charger_id>/<filename.ext>
    // pathParts[0] = ""
    // pathParts[1] = "storage"
    // pathParts[2] = "v1"
    // pathParts[3] = "object"
    // pathParts[4] = "public"
    // pathParts[5] = "car-images" <--- BUCKET_NAME
    // pathParts[6] = "chargers" <--- entityType
    // pathParts[7] = "<charger_id>"
    // pathParts[8] = "<filename.ext>"
    const pathParts = urlObj.pathname.split("/");


    if (pathParts.length < 7) { // Ajustado para la nueva estructura si el bucket está en el path
      console.error("URL con estructura inesperada para eliminar imagen:", url, "Path parts:", pathParts);
      return false;
    }

    const BUCKET_NAME = pathParts[5]; // Asumiendo que el nombre del bucket está en esta posición
    const filePath = pathParts.slice(6).join("/"); // El resto es el path dentro del bucket

    const { error } = await supabaseClient.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error("Error deleting image from storage:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Exception in deleteImage:", error);
    return false;
  }
}

export async function fetchCars(): Promise<Car[]> {
  try {
    const { data: cars, error } = await supabaseClient.from("cars").select("*");

    if (error) {
      console.error("Error fetching cars:", error);
      return [];
    }

    const carsWithDetails = await Promise.all(
      cars.map(async (car) => {
        const { data: carImages } = await supabaseClient
          .from("car_images")
          .select("image_url")
          .eq("car_id", car.id);

        const { data: carFeatures } = await supabaseClient
          .from("car_features")
          .select("feature_id")
          .eq("car_id", car.id);

        let features: string[] = [];
        if (carFeatures && carFeatures.length > 0) {
          const featureIds = carFeatures.map((cf) => cf.feature_id);
          const { data: featureDetails } = await supabaseClient
            .from("features")
            .select("id")
            .in("id", featureIds);

          features = featureDetails?.map((f) => f.id) || [];
        }

        return mapCarFromDB({
          ...car,
          images: carImages?.map((img) => img.image_url) || [],
          features,
        });
      })
    );

    return carsWithDetails || [];
  } catch (error) {
    console.error("Error in fetchCars:", error);
    return [];
  }
}

export async function fetchCarById(id: string): Promise<Car | null> {
  try {
    const { data: car, error } = await supabaseClient
      .from("cars")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching car:", error);
      return null;
    }

    const { data: carImages } = await supabaseClient
      .from("car_images")
      .select("image_url")
      .eq("car_id", id);

    const { data: carFeatures } = await supabaseClient
      .from("car_features")
      .select("feature_id")
      .eq("car_id", id);

    let features: string[] = [];
    if (carFeatures && carFeatures.length > 0) {
      const featureIds = carFeatures.map((cf) => cf.feature_id);
      const { data: featureDetails } = await supabaseClient
        .from("features")
        .select("id")
        .in("id", featureIds);

      features = featureDetails?.map((f) => f.id) || [];
    }

    return mapCarFromDB({
      ...car,
      images: carImages?.map((img) => img.image_url) || [],
      features,
    });
  } catch (error) {
    console.error("Error in fetchCarById:", error);
    return null;
  }
}

export async function createCar(
  car: Omit<Car, "id" | "created_at" | "slug">
): Promise<Car | null> {
  try {
    const { images, features, ...carData } = car;
    // Convertir los datos a snake_case antes de enviarlos
    const carDataDB = mapCarToDB(carData);

    const { data: newCarData, error } = await supabaseClient
      .from("cars")
      .insert([carDataDB])
      .select()
      .single();

    if (error || !newCarData) {
      console.error("Error creating car:", error);
      return null;
    }

    const newCarId = newCarData.id; // Asegurar que tenemos el ID

    const slug = generateVehicleSlug({
      brand: newCarData.brand,
      model: newCarData.model,
      mileage: newCarData.mileage,
      year: newCarData.year,
      id: newCarId,
    });

    const { data: updatedCarWithSlug, error: updateError } = await supabaseClient
      .from("cars")
      .update({ slug })
      .eq("id", newCarId)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating slug for car:", updateError);
      // Decidir si devolver el coche sin slug o null. Por ahora, devolvemos con los datos que tenemos.
      return mapCarFromDB({ ...newCarData, images: images || [], features: features || [] });
    }
    
    const finalCarData = updatedCarWithSlug || newCarData;

    if (images && images.length > 0) {
      const carImagesData = images.map((imageUrl) => ({
        car_id: newCarId,
        image_url: imageUrl,
      }));

      const { error: imagesError } = await supabaseClient
        .from("car_images")
        .insert(carImagesData);

      if (imagesError) {
        console.error("Error adding car images:", imagesError);
      }
    }

    if (features && features.length > 0) {
      const carFeaturesData = features.map((featureId) => ({
        car_id: newCarId,
        feature_id: featureId,
      }));

      const { error: featuresError } = await supabaseClient
        .from("car_features")
        .insert(carFeaturesData);

      if (featuresError) {
        console.error("Error adding car features:", featuresError);
      }
    }

    await updateCarDocument(mapCarFromDB({ ...finalCarData, images: images || [], features: features || [] }));

    return mapCarFromDB({
      ...finalCarData,
      images: images || [],
      features: features || [],
    });
  } catch (error) {
    console.error("Exception in createCar:", error);
    return null;
  }
}


export async function updateCar(
  id: string,
  car: Partial<Car>
): Promise<Car | null> {
  try {
    const { images, features, ...carData } = car;
    const carDataDB = mapCarToDB(carData);

    let updatedCarData: any = { id }; // Inicializa con el id existente

    if (Object.keys(carDataDB).length > 0) {
      const { data, error } = await supabaseClient
        .from("cars")
        .update(carDataDB)
        .eq("id", id)
        .select()
        .single(); // .single() es importante aquí

      if (error) {
        console.error("Error updating car details:", error);
        return null;
      }
      updatedCarData = data; // Asigna los datos actualizados
    } else {
      // Si no hay datos en carDataDB para actualizar, obtenemos el coche actual
      const { data: currentCarData, error: fetchError } = await supabaseClient
        .from("cars")
        .select("*")
        .eq("id", id)
        .single();
      if (fetchError || !currentCarData) {
        console.error("Error fetching current car data or car not found:", fetchError);
        return null;
      }
      updatedCarData = currentCarData;
    }
    
    // Regenerar slug si brand o model cambian y updatedCarData está definido
    if (updatedCarData && (carDataDB.brand || carDataDB.model)) {
        const slug = generateVehicleSlug({
            brand: updatedCarData.brand,
            model: updatedCarData.model,
            mileage: updatedCarData.mileage,
            year: updatedCarData.year,
            id: updatedCarData.id,
        });
        const { data: carWithNewSlug, error: slugUpdateError } = await supabaseClient
            .from("cars")
            .update({ slug })
            .eq("id", id)
            .select()
            .single();
        if (slugUpdateError) {
            console.error("Error updating slug for car:", slugUpdateError);
        } else if (carWithNewSlug) {
            updatedCarData = carWithNewSlug;
        }
    }


    if (images !== undefined) {
      await supabaseClient.from("car_images").delete().eq("car_id", id);
      if (images.length > 0) {
        const carImagesData = images.map((imageUrl) => ({ car_id: id, image_url: imageUrl }));
        const { error: imagesError } = await supabaseClient.from("car_images").insert(carImagesData);
        if (imagesError) console.error("Error updating car images:", imagesError);
      }
    }

    if (features !== undefined) {
      await supabaseClient.from("car_features").delete().eq("car_id", id);
      if (features.length > 0) {
        const carFeaturesData = features.map((featureId) => ({ car_id: id, feature_id: featureId }));
        const { error: featuresError } = await supabaseClient.from("car_features").insert(carFeaturesData);
        if (featuresError) console.error("Error updating car features:", featuresError);
      }
    }

    // Obtener las imágenes y características actuales para el objeto de retorno
    const { data: currentImages } = await supabaseClient.from("car_images").select("image_url").eq("car_id", id);
    const { data: currentCarFeaturesRaw } = await supabaseClient.from("car_features").select("feature_id").eq("car_id", id);
    
    let currentFeatureIds: string[] = [];
    if (currentCarFeaturesRaw && currentCarFeaturesRaw.length > 0) {
        const featureIds = currentCarFeaturesRaw.map(cf => cf.feature_id);
        // No es necesario volver a consultar los nombres de las características si solo almacenamos IDs.
        currentFeatureIds = featureIds;
    }
    
    const finalCarState = mapCarFromDB({
        ...updatedCarData,
        images: currentImages?.map(img => img.image_url) || [],
        features: currentFeatureIds,
    });

    await updateCarDocument(finalCarState);

    return finalCarState;

  } catch (error) {
    console.error("Exception in updateCar:", error);
    return null;
  }
}

export async function deleteCar(id: string): Promise<boolean> {
  try {
    await supabaseClient.from("car_features").delete().eq("car_id", id);
    await supabaseClient.from("car_images").delete().eq("car_id", id);

    const { error } = await supabaseClient.from("cars").delete().eq("id", id);

    if (error) {
      console.error("Error deleting car:", error);
      return false;
    }

    await supabaseClient.from("car_documents").delete().eq("car_id", id);

    return true;
  } catch (error) {
    console.error("Exception in deleteCar:", error);
    return false;
  }
}

export async function fetchFeatures(): Promise<Feature[]> {
  const { data, error } = await supabaseClient.from("features").select("*");

  if (error) {
    console.error("Error fetching features:", error);
    return [];
  }

  return data || [];
}

export async function createFeature(
  feature: Omit<Feature, "id" | "created_at">
): Promise<Feature | null> {
  const { name } = feature;

  const { data, error } = await supabaseClient
    .from("features")
    .insert([{ name }])
    .select()
    .single();

  if (error) {
    console.error("Error creating feature:", error);
    return null;
  }

  return data;
}

export async function updateFeature(
  id: string,
  feature: Partial<Feature>
): Promise<Feature | null> {
  const { data, error } = await supabaseClient
    .from("features")
    .update(feature)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating feature:", error);
    return null;
  }

  return data;
}

export async function deleteFeature(id: string): Promise<boolean> {
  const { error } = await supabaseClient.from("features").delete().eq("id", id);

  if (error) {
    console.error("Error deleting feature:", error);
    return false;
  }

  return true;
}

export async function fetchCarDetailsBySlug(slug: string): Promise<Car | null> {
  try {
    const { data: car, error } = await supabaseClient
      .from("cars")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching car details by slug:", error);
      return null;
    }

    const { data: carImages } = await supabaseClient
      .from("car_images")
      .select("image_url")
      .eq("car_id", car.id);

    const { data: carFeaturesRaw } = await supabaseClient
      .from("car_features")
      .select("feature_id")
      .eq("car_id", car.id);

    let features: string[] = [];
    if (carFeaturesRaw && carFeaturesRaw.length > 0) {
      const featureIds = carFeaturesRaw.map((cf) => cf.feature_id);
      const { data: featureDetails } = await supabaseClient
        .from("features")
        .select("name") // Seleccionamos el nombre para mostrar en la página de detalles
        .in("id", featureIds);
      features = featureDetails?.map((f) => f.name) || [];
    }

    return mapCarFromDB({
      ...car,
      images: carImages?.map((img) => img.image_url) || [],
      features,
    });
  } catch (error) {
    console.error("Error in fetchCarDetailsBySlug:", error);
    return null;
  }
}

export async function fetchElectricVehicles(limit = 4): Promise<Car[]> {
  const { data, error } = await supabaseClient
    .from("cars")
    .select("*")
    .eq("fuel", "Eléctrico")
    .limit(limit);

  if (error) {
    console.error("Error fetching electric vehicles:", error);
    return [];
  }

  const carsWithImages = await Promise.all(
    (data || []).map(async (car) => {
      const { data: carImages } = await supabaseClient
        .from("car_images")
        .select("image_url")
        .eq("car_id", car.id);

      return mapCarFromDB({
        ...car,
        images: carImages ? carImages.map((img) => img.image_url) : [],
      });
    })
  );

  return carsWithImages || [];
}

// --- Funciones CRUD para Cargadores ---

export async function fetchChargers(): Promise<Charger[]> {
  try {
    const { data, error } = await supabaseClient.from("chargers").select("*");
    if (error) {
      console.error("Error fetching chargers:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in fetchChargers:", error);
    return [];
  }
}

export async function fetchChargerById(id: string): Promise<Charger | null> {
  try {
    const { data, error } = await supabaseClient
      .from("chargers")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      console.error("Error fetching charger by ID:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error in fetchChargerById:", error);
    return null;
  }
}

export async function createCharger(
  // chargerData aquí es Omit<Charger, "id" | "created_at" | "slug">
  // pero en el formulario, los campos opcionales pueden ser undefined
  chargerInput: ChargerFormValues // Cambiamos el tipo de entrada para ser más precisos
): Promise<Charger | null> {
  try {
    // Preparamos el objeto para insertar, asegurando que los opcionales
    // que son undefined no se envíen si la BD no los quiere explícitamente como NULL
    const dataToInsert: Partial<Charger> = { // Usamos Partial<Charger> para construir
      name: chargerInput.name,
      brand: chargerInput.brand,
      power_kw: chargerInput.power_kw,
      connector_type: chargerInput.connector_type,
      price_eur: chargerInput.price_eur,
      installation_cost_eur: chargerInput.installation_cost_eur,
      features: chargerInput.features,
      description: chargerInput.description,
      image_url: chargerInput.image_url,
      category: chargerInput.category,
      efficiency: chargerInput.efficiency,
      dimensions: chargerInput.dimensions,
      weight_kg: chargerInput.weight_kg,
      warranty_years: chargerInput.warranty_years,
      compatibility_notes: chargerInput.compatibility_notes,
      // slug se genera después, created_at y updated_at son DEFAULT
    };

    // Filtrar propiedades undefined para no enviarlas explícitamente a Supabase
    // a menos que quieras que se establezcan como NULL (si la columna lo permite).
    // Si una columna es NOT NULL y no tiene DEFAULT, enviarle undefined causará error.
    // Si es NULLABLE, enviar undefined está bien, Supabase lo tratará como NULL.
    Object.keys(dataToInsert).forEach(keyStr => {
        const key = keyStr as keyof Partial<Charger>;
        if (dataToInsert[key] === undefined) {
            delete dataToInsert[key];
        }
    });


    const { data: newCharger, error: insertError } = await supabaseClient
      .from("chargers")
      .insert([dataToInsert]) // Usar el objeto filtrado
      .select()
      .single();

    if (insertError || !newCharger) {
      console.error("Error creating charger (initial insert):", insertError);
      // Loguear el objeto que se intentó insertar puede ayudar
      console.error("Data attempted to insert:", dataToInsert);
      return null;
    }
    
    const slug = generateChargerSlug({
      name: newCharger.name,
      brand: newCharger.brand,
      id: newCharger.id,
    });

    const { data: updatedChargerWithSlug, error: slugError } = await supabaseClient
      .from("chargers")
      .update({ slug, updated_at: new Date().toISOString() }) // Actualizar updated_at también
      .eq("id", newCharger.id)
      .select()
      .single();

    if (slugError) {
      console.error("Error updating charger with slug:", slugError);
      return newCharger as Charger; // Devolver el cargador sin slug si falla la actualización del slug
    }

    return updatedChargerWithSlug as Charger;
  } catch (error) {
    console.error("Exception in createCharger:", error);
    return null;
  }
}

export async function updateCharger(
  id: string,
  chargerData: Partial<Omit<Charger, "id" | "created_at">>
): Promise<Charger | null> {
  try {
    let dataToUpdate = { ...chargerData };

    // Si se actualiza el nombre o la marca, regenerar el slug
    if (chargerData.name || chargerData.brand) {
      const { data: currentCharData } = await supabaseClient
        .from("chargers")
        .select("name, brand")
        .eq("id", id)
        .single();
      
      if (currentCharData) {
        const newName = chargerData.name || currentCharData.name;
        const newBrand = chargerData.brand || currentCharData.brand;
        dataToUpdate.slug = generateChargerSlug({ name: newName, brand: newBrand, id });
      }
    }
    
    const { data, error } = await supabaseClient
      .from("chargers")
      .update(dataToUpdate)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating charger:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Exception in updateCharger:", error);
    return null;
  }
}

export async function deleteCharger(id: string): Promise<boolean> {
  try {
    // Primero, si el cargador tiene una imagen asociada, eliminarla de Storage
    const { data: charger, error: fetchError } = await supabaseClient
      .from("chargers")
      .select("image_url")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.warn("Could not fetch charger details before delete, proceeding with DB delete only. Error:", fetchError.message);
    }
    
    if (charger && charger.image_url) {
      const imageDeleted = await deleteImage(charger.image_url);
      if (!imageDeleted) {
        // Podrías decidir si fallar la operación completa o solo loggear un warning
        console.warn(`Failed to delete image ${charger.image_url} from storage for charger ${id}.`);
      }
    }

    const { error: deleteError } = await supabaseClient
      .from("chargers")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("Error deleting charger from database:", deleteError);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Exception in deleteCharger:", error);
    return false;
  }
}

// Función para obtener detalles de un cargador por su slug (para la página pública)
export async function fetchChargerDetailsBySlug(slug: string): Promise<Charger | null> {
  try {
    const { data, error } = await supabaseClient
      .from("chargers")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching charger details by slug:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error in fetchChargerDetailsBySlug:", error);
    return null;
  }
}