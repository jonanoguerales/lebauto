-- 0003 · Bucket de imágenes (spec 002, AC-1/AC-4/AC-7).
-- Bucket público: las fotos se sirven por /storage/v1/object/public/car-images/<ruta> sin política de
-- lectura. No se crea política SELECT para anon a propósito: con el bucket público basta para ver las
-- fotos, y una política SELECT abierta permitiría además listar todo el bucket.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'car-images',
  'car-images',
  true,
  5242880, -- 5 MB
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Escritura solo de administradores. El upsert de Storage necesita SELECT + INSERT + UPDATE,
-- y remove() necesita SELECT + DELETE.
create policy car_images_bucket_select_admin on storage.objects
  for select to authenticated
  using (bucket_id = 'car-images' and (select public.is_admin()));

create policy car_images_bucket_insert_admin on storage.objects
  for insert to authenticated
  with check (bucket_id = 'car-images' and (select public.is_admin()));

create policy car_images_bucket_update_admin on storage.objects
  for update to authenticated
  using (bucket_id = 'car-images' and (select public.is_admin()))
  with check (bucket_id = 'car-images' and (select public.is_admin()));

create policy car_images_bucket_delete_admin on storage.objects
  for delete to authenticated
  using (bucket_id = 'car-images' and (select public.is_admin()));
