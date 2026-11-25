# 001 — Lebauto (comportamiento a conservar en el refactor)
Estado: Aprobada (línea base del refactor a Next.js 16)

## Contexto
Lebauto es la web de un concesionario de coches de segunda mano y vehículos eléctricos. Esta spec describe lo que
la aplicación **hace hoy** (Next 15.2, junio de 2025) y debe seguir haciendo tras el refactor (`docs/REFACTOR_PLAN.md`),
más las correcciones que el plan ya decidió (marcadas con **[mejora]**). Toda tarea del refactor se verifica
contra estos criterios en las zonas que toque.

## Requisitos
- R1 Parte pública sin login: portada, catálogo, ficha de coche, cargadores, renting, vender tu coche, contacto.
- R2 Captación de clientes (leads) por formularios y por el chatbot guiado, que llegan por email al concesionario.
- R3 Administración privada (dashboard) para gestionar vehículos, imágenes, características y cargadores.
- R4 Interfaz en español, usable a 375 px y sin JavaScript en lo esencial **[mejora]**.

## Criterios de aceptación

### Portada (`/`)
- AC-1 La portada muestra el hero, marcas, categorías, la sección de vehículos eléctricos (hasta 8 coches reales
  del catálogo), la sección de cargadores (datos reales), calculadora de ahorro, renting, vender tu coche,
  testimonios, ubicaciones y ayudas. Los datos llegan en el HTML **[mejora: sin `useEffect`]**.
- AC-2 Desde la portada se navega al catálogo, a la ficha de un coche, a cargadores, renting, contacto y vender.

### Catálogo (`/coches-segunda-mano`)
- AC-3 Lista los coches disponibles en vista **cuadrícula o lista** (conmutador) y muestra «Se han encontrado N vehículo(s)».
- AC-4 Filtros: marca y modelo, carrocería (`bodyType`), combustible/motor (`fuel`), color, ubicación, precio
  (`minPrice`/`maxPrice`), año (`minYear`/`maxYear`), kilómetros (`minKm`/`maxKm`), puertas y plazas. Los filtros
  viven en la URL (enlace compartible) y el resultado coincide con lo filtrado. Varios valores de un filtro se
  combinan con O; filtros distintos, con Y.
- AC-5 Orden: más recientes (por defecto), precio ascendente, precio descendente, menos kilómetros
  **[mejora: el orden también en la URL y aplicado en el servidor]**.
- AC-6 Paginación del listado **[mejora: en el servidor con `range()`]**.
- AC-7 Sin resultados → estado vacío con la opción de limpiar filtros.
- AC-8 Mientras se recarga el listado al cambiar un filtro se ve un skeleton con la forma de las tarjetas.

### Ficha de coche (`/coches-segunda-mano/[slug]`)
- AC-9 Muestra galería de imágenes, datos principales (marca, modelo, año, km, combustible, precio…),
  características/equipamiento, dimensiones y prestaciones, ubicación (con mapa), simulador de financiación y
  formas de contacto.
- AC-10 Metadatos SEO propios (título y descripción del coche). Un slug inexistente devuelve la página 404.

### Cargadores (`/cargadores`, `/cargadores/[slug]`)
- AC-11 Listado de cargadores con tarjeta (nombre, potencia kW, conector, precio, categoría home/community/business).
- AC-12 Ficha de cargador con descripción, características, eficiencia, dimensiones, peso, garantía y notas de
  compatibilidad; metadatos SEO; 404 si no existe.

### Páginas de contenido
- AC-13 `/renting` muestra hero, ofertas destacadas, servicios incluidos, proceso, FAQ y llamada a la acción.
- AC-14 `/contacto` muestra el formulario de contacto, mapa y FAQ.

### Formularios y leads
- AC-15 Vender tu coche (`/gestion-de-venta`): nombre (≥2), email válido, teléfono (≥5), marca, modelo, año,
  kilómetros, combustible y comentarios opcionales. Al enviarlo, el concesionario recibe un email con los datos y
  el usuario un email de confirmación; la página muestra un mensaje de éxito.
- AC-16 Contacto: nombre (≥2), apellidos (≥2), email válido, teléfono (≥9), mensaje (≥10). Mismo comportamiento
  de emails y mensaje de éxito.
- AC-17 Los errores de validación se muestran junto a cada campo, en español, y se validan también en el servidor.
- AC-18 **[mejora]** Los formularios funcionan sin JavaScript (también el caso de error), los datos del usuario
  van escapados en el HTML del email y hay honeypot + límite de envíos.

### Chatbot guiado
- AC-19 Un botón flotante abre el chatbot en todas las páginas públicas. Ofrece los flujos: comprar coche,
  vender coche, renting, recomendación y soporte (FAQ, petición de llamada, email).
- AC-20 Los flujos que capturan datos (vender coche, valoración por teléfono, llamada de soporte, email de soporte)
  envían el lead por email igual que los formularios.
- AC-21 **[mejora]** `/api/chat` (asistente con RAG) valida la entrada, tiene límite de peticiones y no devuelve
  errores internos. Se decidirá con el humano si se conecta a la interfaz.

### Autenticación y dashboard
- AC-22 `/sign-in` permite entrar con email y contraseña (Supabase Auth); con credenciales erróneas muestra un
  error en español sin revelar si el email existe. Con sesión, `/sign-in` redirige a `/dashboard`.
- AC-23 Sin sesión, cualquier ruta `/dashboard/**` redirige a `/sign-in`. **[mejora]** Además de la sesión se
  exige que el usuario sea administrador, comprobado en el servidor.
- AC-24 `/dashboard/vehiculos`: listar, crear, editar y borrar vehículos; gestionar sus imágenes (subir, borrar,
  ordenar/principal) y sus características. Al crear/editar se genera el slug y se actualiza el documento de
  embeddings del chatbot; al borrar se borra también su documento **[mejora: hoy queda huérfano]**.
- AC-25 `/dashboard/cargadores`: listar, crear, editar y borrar cargadores (validación de `chargerSchema`).
- AC-26 `/dashboard/caracteristicas`: listar, crear, editar y borrar características.
- AC-27 **[mejora]** Tras cualquier cambio en el dashboard, el catálogo, la ficha afectada y la portada muestran
  el dato nuevo (invalidación de caché por etiqueta).
- AC-28 **[mejora]** `/dashboard` muestra estadísticas reales (nº de vehículos, distribución por tipo/combustible,
  últimos vehículos) en lugar de datos de ejemplo.
- AC-29 Cerrar sesión desde el dashboard vuelve a `/sign-in`.

### Transversales
- AC-30 Navbar con menú móvil y footer en todas las páginas públicas.
- AC-31 Sin scroll horizontal a 375 px y sin bloquear el zoom.
- AC-32 Imágenes optimizadas (`next/image`) desde el bucket de Supabase Storage.

## Contratos
- **Tablas:** `cars`, `car_images`, `car_features`, `features`, `chargers`, `documentos` (pgvector) y la función
  `match_documentos`. **[mejora]** `admins` + `is_admin()`. Esquema versionado en `supabase/migrations/` (T-13).
- **Storage:** un bucket de imágenes de coches y cargadores.
- **Variables de entorno:** ver `.env.example`.
- **Servicios externos:** SMTP (nodemailer), Hugging Face (`sentence-transformers/all-MiniLM-L6-v2`), OpenRouter.

## Fuera de alcance
- Registro público de usuarios y recuperación de contraseña (hoy desactivados con carpetas `_`); se retoman solo
  si el humano lo pide.
- Cambiar de proveedor de IA.
