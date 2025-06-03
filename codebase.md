# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# codebase
.codebase.md
```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "@/styles/global.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

# next.config.ts

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mwqlcfaptwgoylhdngmb.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

```

# package.json

```json
{
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev --turbopack",
    "start": "next start"
  },
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "@hookform/resolvers": "^4.1.3",
    "@huggingface/inference": "^3.12.1",
    "@huggingface/transformers": "^3.4.2",
    "@langchain/community": "^0.3.40",
    "@langchain/core": "^0.3.44",
    "@langchain/openai": "^0.5.5",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.5",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@supabase/ssr": "^0.6.1",
    "@supabase/supabase-js": "^2.49.1",
    "@tailwindcss/forms": "^0.5.10",
    "autoprefixer": "10.4.20",
    "bcrypt": "^5.1.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel": "^8.5.2",
    "embla-carousel-react": "^8.5.2",
    "formidable": "^3.5.2",
    "framer-motion": "^12.11.0",
    "langchain": "^0.3.21",
    "lucide-react": "^0.475.0",
    "next": "15.2.1",
    "next-auth": "5.0.0-beta.25",
    "next-view-transitions": "^0.3.4",
    "node-fetch": "^3.3.2",
    "nodemailer": "^6.10.0",
    "openai": "^4.94.0",
    "pdf-parse": "^1.1.1",
    "pdfjs-dist": "^5.1.91",
    "pnpm": "^10.11.0",
    "postcss": "8.5.1",
    "postgres": "^3.4.5",
    "react": "latest",
    "react-dom": "latest",
    "react-hook-form": "^7.54.2",
    "react-intersection-observer": "^9.16.0",
    "react-markdown": "^10.1.0",
    "recharts": "^2.15.1",
    "remark-gfm": "^4.0.1",
    "slugify": "^1.6.6",
    "tailwind-merge": "^3.0.2",
    "tailwind-scrollbar": "^4.0.1",
    "tailwindcss": "3.4.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "5.7.3",
    "use-debounce": "^10.0.4",
    "zod": "^3.24.2",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/formidable": "^3.4.5",
    "@types/node": "22.10.7",
    "@types/nodemailer": "^6.4.17",
    "@types/pdf-parse": "^1.1.5",
    "@types/react": "19.0.7",
    "@types/react-dom": "19.0.3"
  }
}

```

# pnpm-workspace.yaml

```yaml
ignoredBuiltDependencies:
  - bcrypt
  - sharp

```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

# public/asesoramiento-cargadores.png

This is a binary file of the type: Image

# public/cargadores/cargador1.png

This is a binary file of the type: Image

# public/cargadores/cargador2.png

This is a binary file of the type: Image

# public/cargadores/cargador3.png

This is a binary file of the type: Image

# public/cargadores/cargador4.png

This is a binary file of the type: Image

# public/coches/audi-a4.jpg

This is a binary file of the type: Image

# public/coches/audi-etron-gt.jpg

This is a binary file of the type: Image

# public/coches/bmw-i4.jpg

This is a binary file of the type: Image

# public/coches/porsche-911.jpg

This is a binary file of the type: Image

# public/coches/porsche-taycan.jpg

This is a binary file of the type: Image

# public/coches/tesla-model-3.jpg

This is a binary file of the type: Image

# public/coches/toyota-tacoma.webp

This is a binary file of the type: Image

# public/distintivos/B.svg

This is a file of the type: SVG Image

# public/distintivos/C.svg

This is a file of the type: SVG Image

# public/distintivos/CERO.svg

This is a file of the type: SVG Image

# public/distintivos/ECO.svg

This is a file of the type: SVG Image

# public/dudas-banner.png

This is a binary file of the type: Image

# public/dudas-rojo.png

This is a binary file of the type: Image

# public/imagen-renting.png

This is a binary file of the type: Image

# public/imgHome-mobile.png

This is a binary file of the type: Image

# public/imgHome-mobile2.png

This is a binary file of the type: Image

# public/imgHome-mobile3.png

This is a binary file of the type: Image

# public/imgHome-ultrawide.png

This is a binary file of the type: Image

# public/imgHome-ultrawide2.png

This is a binary file of the type: Image

# public/imgHome.png

This is a binary file of the type: Image

# public/imgHome2.png

This is a binary file of the type: Image

# public/logo.webp

This is a binary file of the type: Image

# public/logos-coches/audi-logo.png

This is a binary file of the type: Image

# public/logos-coches/bmw-logo.png

This is a binary file of the type: Image

# public/logos-coches/ford-logo.png

This is a binary file of the type: Image

# public/logos-coches/jaguar-logo.png

This is a binary file of the type: Image

# public/logos-coches/land-rover-logo.png

This is a binary file of the type: Image

# public/logos-coches/mercedes-logo.png

This is a binary file of the type: Image

# public/logos-coches/peugeot-logo.png

This is a binary file of the type: Image

# public/logos-coches/porsche-logo.png

This is a binary file of the type: Image

# public/logos-coches/renault-logo.png

This is a binary file of the type: Image

# public/logos-coches/tesla-logo.png

This is a binary file of the type: Image

# public/logos-coches/toyota-logo.png

This is a binary file of the type: Image

# public/logos-coches/vw-logo.png

This is a binary file of the type: Image

# public/placeholder.svg

This is a file of the type: SVG Image

# public/robots.txt

```txt
User-agent: *
Allow: /

```

# public/seccion-categorias/caravana-img.png

This is a binary file of the type: Image

# public/seccion-categorias/cargador-img.png

This is a binary file of the type: Image

# public/seccion-categorias/electrico-img.png

This is a binary file of the type: Image

# public/seccion-categorias/furgoneta-img.png

This is a binary file of the type: Image

# public/seccion-categorias/km0-img.png

This is a binary file of the type: Image

# public/seccion-categorias/ocasion-img.png

This is a binary file of the type: Image

# public/seccion-gestion-coche.webp

This is a binary file of the type: Image

# public/tipo-carroceria/body-4x4-suv.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-berlina.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-cabrio.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-compacto.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-coupe.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-familiar.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-monovolumen.png

This is a binary file of the type: Image

# public/tipo-carroceria/body-pick-up.png

This is a binary file of the type: Image

# README.md

```md
# Concesionario de Coches de Segunda Mano
Este proyecto es una aplicación web para la gestión y exhibición de un concesionario de coches de segunda mano, desarrollada con Next.js 15 y siguiendo el patrón de diseño Clean Architecture. La aplicación permite visualizar un listado de vehículos, ver detalles individuales y gestionar la información de forma escalable.

## Características
- **Listado de coches**: Muestra todos los coches disponibles.
- **Detalles de cada coche**: Página dinámica para ver la información completa de un vehículo.
- **Filtros y búsqueda**: Permite filtrar por marca, modelo, precio, etc.
- **Panel de administración**: Gestión de vehículos, clientes y ventas.
- **Conexión a base de datos**: Uso de PostgreSQL a través de Prisma ORM.
- **Arquitectura escalable**: Organización modular y limpia para facilitar el crecimiento del proyecto.

## Tecnologías Utilizadas
- **Next.js 15 (React)**
- **TypeScript**
- **Prisma ORM para la conexión con PostgreSQL**
- **PostgreSQL**
- **Clean Architecture**
```

# src/app/(auth-pages)/_forgot-password/page.tsx

```tsx
import { forgotPasswordAction } from "@/app/actions/actions";
import { FormMessage, Message } from "@/components/FormMessage";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">Restablecer contraseña</h1>
          <p className="text-sm text-secondary-foreground">
            Ya tienes una cuenta?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Iniciar sesión
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Restablecer contraseña
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}

```

# src/app/(auth-pages)/_sign-up/page.tsx

```tsx
import { signUpAction } from "@/app/actions/actions";
import { FormMessage, Message } from "@/components/FormMessage";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Registrarse</h1>
        <p className="text-sm text text-foreground">
          Ya tienes una cuenta?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Iniciar sesión
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            name="password"
            placeholder="Tú contraseña"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Regristrando...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}

```

# src/app/(auth-pages)/layout.tsx

```tsx
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-12 items-center justify-center h-[calc(100vh-24.8125rem)] ">
      {children}
    </section>
  );
}

```

# src/app/(auth-pages)/sign-in/page.tsx

```tsx
import { signInAction } from "@/app/actions/actions";
import { FormMessage, Message } from "@/components/FormMessage";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <>
      <section className="group min-w-64 ">
        <Link
          href="/"
          className="inline-flex items-center hover:text-black/70 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Volver a inicio
        </Link>
      </section>
      <form className="flex flex-col min-w-64">
        <h1 className="text-2xl font-medium">Sign in</h1>
{/*         <p className="text-sm text-foreground">
          No tienes una cuenta?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/sign-up"
          >
            Registrarse
          </Link>
        </p> */}
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Contraseña</Label>
            {/*           <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Contraseña olvidada?
          </Link> */}
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Tú contraseña"
            required
          />
          <SubmitButton
            pendingText="Iniciando sesión..."
            formAction={signInAction}
          >
            Iniciar sesión
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}

```

# src/app/(dashboard)/_reset-password/page.tsx

```tsx
import { resetPasswordAction } from "@/app/actions/actions";
import { FormMessage, Message } from "@/components/FormMessage";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">
        Please enter your new password below.
      </p>
      <Label htmlFor="password">New password</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
      <Label htmlFor="confirmPassword">Confirm password</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Reset password
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}

```

# src/app/(dashboard)/dashboard/caracteristicas/page.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { DashboardHeader } from "@/features/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { fetchFeatures, createFeature, updateFeature, deleteFeature } from "@/app/supabase/supabase";
import { useToast } from "@/hooks/useToast";
import { Feature } from "@/lib/definitions";
import { FeaturesTable } from "@/features/dashboard/features/FeatureTable";
import { FeatureFormDialog } from "@/features/dashboard/features/FeatureFormDialog";

export default function FeaturesPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadFeatures = async () => {
      setIsLoading(true);
      try {
        const fetched = await fetchFeatures();
        setFeatures(fetched);
      } catch (error) {
        console.error("Error al cargar características:", error);
        toast({
          title: "Error",
          description: "No se pudieron cargar las características. Inténtalo de nuevo.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    loadFeatures();
  }, [toast]);

  const handleAddNew = () => {
    setIsFormDialogOpen(true);
  };

  const handleSaveFeature = async (newFeatureData: { name: string }) => {
    try {
      const created = await createFeature(newFeatureData);
      if (created) {
        setFeatures((prev) => [...prev, created]);
        toast({
          title: "Característica añadida",
          description: "La característica ha sido añadida correctamente.",
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo añadir la característica. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error añadiendo característica:", error);
      toast({
        title: "Error",
        description: "Ocurrió un error al añadir la característica.",
        variant: "destructive",
      });
    }
  };

  const handleEditFeature = async (id: string, newName: string) => {
    try {
      const updated = await updateFeature(id, { name: newName });
      if (updated) {
        setFeatures((prev) =>
          prev.map((f) => (f.id === id ? { ...f, name: newName } : f))
        );
        toast({
          title: "Característica actualizada",
          description: "La característica ha sido actualizada correctamente.",
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo actualizar la característica. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error actualizando característica:", error);
      toast({
        title: "Error",
        description: "Ocurrió un error al actualizar la característica.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteFeature = async (id: string) => {
    try {
      const success = await deleteFeature(id);
      if (success) {
        setFeatures((prev) => prev.filter((f) => f.id !== id));
        toast({
          title: "Característica eliminada",
          description: "La característica ha sido eliminada correctamente.",
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo eliminar la característica. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error eliminando característica:", error);
      toast({
        title: "Error",
        description: "Ocurrió un error al eliminar la característica.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Gestión de Características"
        description="Administra las características disponibles"
        action={
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Característica
          </Button>
        }
      />

      {isLoading ? (
        <div className="text-center py-8">
          <p>Cargando características...</p>
        </div>
      ) : (
        <FeaturesTable
          features={features}
          onEdit={handleEditFeature}
          onDelete={handleDeleteFeature}
        />
      )}

      <FeatureFormDialog
        open={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        onSave={handleSaveFeature}
      />
    </div>
  );
}

```

# src/app/(dashboard)/dashboard/page.tsx

```tsx
import { DashboardHeader } from "@/features/dashboard/DashboardHeader";
import { StatsCards } from "@/features/dashboard/home/StatsCards";
import { SalesChart } from "@/features/dashboard/home/SalesChart";
import { VehicleDistributionChart } from "@/features/dashboard/home/VehicleDistributionChart";
import { RecentVehicles } from "@/features/dashboard/home/RecentVehicles";

export default function Home() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard"
        description="Resumen general de la gestión de vehículos"
      />
      <StatsCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesChart />
        <VehicleDistributionChart />
      </div>

      <RecentVehicles />
    </div>
  );
}

```

# src/app/(dashboard)/dashboard/vehiculos/page.tsx

```tsx
"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/features/dashboard/DashboardHeader"
import { VehiclesTable } from "@/features/dashboard/vehicles/VehiclesTable"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { VehicleFormDialog } from "@/features/dashboard/vehicles/VehicleFormDialog"
import { ImageManagerDialog } from "@/features/dashboard/vehicles/ImageManagerDialog"
import { FeaturesManagerDialog } from "@/features/dashboard/vehicles/FeaturesManagerDialog"
import { fetchCars, createCar, updateCar, deleteCar } from "@/app/supabase/supabase"
import { useToast } from "@/hooks/useToast"
import { Car } from "@/lib/definitions"

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false)
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false)
  const [isFeaturesDialogOpen, setIsFeaturesDialogOpen] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<Car | null>(null)
  const [selectedVehicle, setSelectedVehicle] = useState<Car | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const loadVehicles = async () => {
      setIsLoading(true)
      try {
        const cars = await fetchCars()
        setVehicles(cars)
      } catch (error) {
        console.error("Error loading vehicles:", error)
        toast({
          title: "Error",
          description: "No se pudieron cargar los vehículos. Inténtalo de nuevo.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadVehicles()
  }, [toast])

  const handleAddNew = () => {
    setEditingVehicle(null)
    setIsFormDialogOpen(true)
  }

  const handleEdit = (vehicle: Car) => {
    setEditingVehicle(vehicle)
    setIsFormDialogOpen(true)
  }

  const handleManageImages = (vehicle: Car) => {
    setSelectedVehicle(vehicle)
    setIsImageDialogOpen(true)
  }

  const handleManageFeatures = (vehicle: Car) => {
    setSelectedVehicle(vehicle)
    setIsFeaturesDialogOpen(true)
  }

  const handleSaveVehicle = async (vehicle: Car) => {
    try {
      if (editingVehicle) {
        const updatedVehicle = await updateCar(vehicle.id, vehicle)
        if (updatedVehicle) {
          setVehicles((prev) => prev.map((v) => (v.id === vehicle.id ? updatedVehicle : v)))
          toast({
            title: "Vehículo actualizado",
            description: "El vehículo ha sido actualizado correctamente.",
          })
        } else {
          toast({
            title: "Error",
            description: "No se pudo actualizar el vehículo. Inténtalo de nuevo.",
            variant: "destructive",
          })
        }
      } else {
        const newVehicle = await createCar(vehicle)
        if (newVehicle) {
          setVehicles((prev) => [...prev, newVehicle])
          toast({
            title: "Vehículo añadido",
            description: "El vehículo ha sido añadido correctamente.",
          })
        } else {
          toast({
            title: "Error",
            description: "No se pudo añadir el vehículo. Inténtalo de nuevo.",
            variant: "destructive",
          })
        }
      }
      setIsFormDialogOpen(false)
    } catch (error) {
      console.error("Error saving vehicle:", error)
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar el vehículo. Verifica los datos e inténtalo de nuevo.",
        variant: "destructive",
      })
    }
  }

  const handleSaveImages = async (images: string[]) => {
    if (!selectedVehicle) return

    try {
      const vehicleToUpdate = { ...selectedVehicle, images: [...images] }

      const updatedVehicle = await updateCar(selectedVehicle.id, {
        images: [...images],
      })

      if (updatedVehicle) {
        setVehicles((prev) =>
          prev.map((v) =>
            v.id === selectedVehicle.id
              ? {
                  ...v,
                  images: updatedVehicle.images || [],
                }
              : v,
          ),
        )

        toast({
          title: "Imágenes actualizadas",
          description: "Las imágenes del vehículo han sido actualizadas correctamente.",
        })
      } else {
        toast({
          title: "Error",
          description: "No se pudieron actualizar las imágenes. Inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error saving images:", error)
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar las imágenes.",
        variant: "destructive",
      })
    }
  }

  const handleSaveFeatures = async (features: string[]) => {
    if (!selectedVehicle) return

    try {
      const vehicleToUpdate = { ...selectedVehicle, features: [...features] }

      const updatedVehicle = await updateCar(selectedVehicle.id, { features })

      if (updatedVehicle) {
        setVehicles((prev) =>
          prev.map((v) => (v.id === selectedVehicle.id ? { ...v, features: updatedVehicle.features || [] } : v)),
        )

        toast({
          title: "Características actualizadas",
          description: "Las características del vehículo han sido actualizadas correctamente.",
        })
      } else {
        toast({
          title: "Error",
          description: "No se pudieron actualizar las características. Inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error saving features:", error)
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar las características.",
        variant: "destructive",
      })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const success = await deleteCar(id)
      if (success) {
        setVehicles((prev) => prev.filter((v) => v.id !== id))
        toast({
          title: "Vehículo eliminado",
          description: "El vehículo ha sido eliminado correctamente.",
        })
      } else {
        toast({
          title: "Error",
          description: "No se pudo eliminar el vehículo. Inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error)
      toast({
        title: "Error",
        description: "Ocurrió un error al eliminar el vehículo.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Gestión de Vehículos"
        description="Administra tu inventario de vehículos"
        action={
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir vehículo
          </Button>
        }
      />

      {isLoading ? (
        <div className="text-center py-8">
          <p>Cargando vehículos...</p>
        </div>
      ) : (
        <VehiclesTable
          vehicles={vehicles}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onManageImages={handleManageImages}
          onManageFeatures={handleManageFeatures}
        />
      )}

      <VehicleFormDialog
        open={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        vehicle={editingVehicle}
        onSave={handleSaveVehicle}
      />

      {selectedVehicle && (
        <>
          <ImageManagerDialog
            open={isImageDialogOpen}
            onOpenChange={setIsImageDialogOpen}
            vehicle={selectedVehicle}
            onSave={handleSaveImages}
          />

          <FeaturesManagerDialog
            open={isFeaturesDialogOpen}
            onOpenChange={setIsFeaturesDialogOpen}
            vehicle={selectedVehicle}
            onSave={handleSaveFeatures}
          />
        </>
      )}
    </div>
  )
}


```

# src/app/(dashboard)/layout.tsx

```tsx
import { Sidebar } from "@/features/dashboard/Sidebar";
import "@/styles/global.css";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background p-6 max-md:mt-20">
        {children}
      </main>
    </div>
  );
}

```

# src/app/(site)/coches-segunda-mano/[slug]/CarDetailsLoader.tsx

```tsx
import { notFound } from "next/navigation";
import { fetchCarDetailsBySlug } from "@/app/supabase/supabase";
import CarGallery from "@/features/car/components/CarGallery";
import CarInfo from "@/features/car/components/CarInfo";
import CarFeatures from "@/features/car/components/CarFeatures";
import CarContact from "@/features/car/components/CarContact";

interface CarDetailsLoaderProps {
  slug: string;
}

export default async function CarDetailsLoader({ slug }: CarDetailsLoaderProps) {
  const car = await fetchCarDetailsBySlug(slug); 

  if (!car) {
    notFound(); 
  }

  return (
    <section className="grid lg:grid-cols-[2fr_1fr] gap-8 animate-fadeInAfterLoad">
      <div>
        <CarGallery images={car.images || []} /> 
        <CarInfo car={car} />
        <CarFeatures features={car.features || []} /> 
      </div>
      <div className="lg:sticky lg:top-24 h-fit">
        <CarContact car={car} />
      </div>
    </section>
  );
}
```

# src/app/(site)/coches-segunda-mano/[slug]/page.tsx

```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { fetchCarDetailsBySlug } from "@/app/supabase/supabase";
import CarDetailsLoader from "./CarDetailsLoader";
import { CarDetailSkeleton } from "@/features/car/skeleton/CarSkeleton";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const paramsResolved = await Promise.resolve(params);
  const { slug } = paramsResolved;
  const car = await fetchCarDetailsBySlug(slug);

  if (!car) {
    return {
      title: "Vehículo no encontrado",
      description:
        "Este vehículo no se encuentra disponible en nuestra base de datos.",
    };
  }
  return {
    title: `${car.brand} ${car.model} - Lebauto`,
    description: `Descubre el ${car.brand} ${car.model} del año ${
      car.year
    } con ${car.mileage.toLocaleString()} km, disponible por ${car.price.toLocaleString()}€.`,
    openGraph: {
      images: car.images?.[0] || "/placeholder.svg",
    },
  };
}

export default async function CarPage({
  params,
}: {
  params: any;
}) {
  const paramsResolved = await Promise.resolve(params);
  const { slug } = paramsResolved;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 mt-16">
        <Suspense fallback={<CarDetailSkeleton />}>
          <CarDetailsLoader slug={slug} />
        </Suspense>
      </div>
    </main>
  );
}

```

# src/app/(site)/coches-segunda-mano/LoadingContent.tsx

```tsx
import { fetchFilteredCars } from "@/lib/supabase/fetchFilteredCars";
import { fetchCars } from "@/app/supabase/supabase";
import CatalogClient from "@/features/catalog-cars/components/CatalogClient";

export default async function LoadingContent({ searchParams }: { searchParams: any }) {
  const params = await Promise.resolve(searchParams);
  const filteredCars = await fetchFilteredCars(params);
  const allCars = await fetchCars();

  return (
    <CatalogClient
      allCars={allCars}
      initialCars={filteredCars}
      brand={typeof params.brand === "string" ? params.brand : ""}
      model={typeof params.model === "string" ? params.model : ""}
      fuel={typeof params.fuel === "string" ? params.fuel : ""}
      color={typeof params.color === "string" ? params.color : ""}
      location={typeof params.location === "string" ? params.location : ""}
      minPrice={typeof params.minPrice === "string" ? params.minPrice : ""}
      maxPrice={typeof params.maxPrice === "string" ? params.maxPrice : ""}
      minYear={typeof params.minYear === "string" ? params.minYear : ""}
      maxYear={typeof params.maxYear === "string" ? params.maxYear : ""}
      minKm={typeof params.minKm === "string" ? params.minKm : ""}
      maxKm={typeof params.maxKm === "string" ? params.maxKm : ""}
      bodyType={typeof params.bodyType === "string" ? params.bodyType : ""}
      doorFrom={typeof params.doorFrom === "string" ? Number(params.doorFrom) : undefined}
      doorTo={typeof params.doorTo === "string" ? Number(params.doorTo) : undefined}
      seatFrom={typeof params.seatFrom === "string" ? Number(params.seatFrom) : undefined}
      seatTo={typeof params.seatTo === "string" ? Number(params.seatTo) : undefined}
    />
  );
}

```

# src/app/(site)/coches-segunda-mano/page.tsx

```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import LoadingContent from "./LoadingContent";
import CatalogPageSkeleton from "@/features/catalog-cars/skeleton/CatalogPageSkeleton";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Coches de segunda mano - Concesionario",
  description:
    "Explora nuestra amplia selección de vehículos de segunda mano, de ocasión y km 0.",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: any;
}) {

  return (
    <div>
      <Suspense fallback={<CatalogPageSkeleton />}>
        <LoadingContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

```

# src/app/(site)/contacto/page.tsx

```tsx
import ContactForm from "@/features/contact/components/ContactForm";
import Faq from "@/features/contact/components/FAQ";
import Map from "@/features/contact/components/Map";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contacto | Lebauto Concesionario",
  description:
    "Ponte en contacto con Lebauto para cualquier consulta sobre nuestros coches de segunda mano y ocasión.",
  openGraph: {
    title: "Contacto | Lebauto Concesionario",
    description:
      "Consulta con nuestro equipo sobre cualquier vehículo de nuestro catálogo de segunda mano y ocasión.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-900 text-primary-foreground py-16 mt-[50px] md:mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Contacto</h1>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para
            cualquier consulta o visita nuestro concesionario.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="tel:+34912345678">
                <Phone className="mr-2 h-4 w-4" /> Llamar ahora
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:info@lebauto.com">
                <Mail className="mr-2 h-4 w-4" /> Enviar email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Envíanos un mensaje</h2>
            <p className="text-lg text-muted-foreground">
              ¿Tienes alguna pregunta o necesitas más información? Completa el
              formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col max-md:items-center">
              <h2 className="text-3xl font-bold mb-6">Ven a conocernos</h2>
              <p className="max-md:text-center text-lg text-muted-foreground mb-8">
                Visita nuestro concesionario y descubre nuestra amplia selección
                de vehículos. Nuestro equipo estará encantado de atenderte y
                ayudarte a encontrar el coche perfecto para ti.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dirección</h3>
                    <p className="text-muted-foreground">
                      Avenida de los Coches, 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Teléfono</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+34912345678" className="hover:text-primary">
                        +34 91 234 56 78
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 - 20:00
                      <br />
                      Sábados: 10:00 - 14:00
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
              <p className="text-lg text-muted-foreground">
                Encuentra respuestas a las preguntas más comunes sobre nuestros
                servicios y horarios.
              </p>
            </div>
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}

```

# src/app/(site)/gestion-de-venta/page.tsx

```tsx
import type { Metadata } from "next"
import SellCarForm from "@/components/SellCarForm"
import { ArrowLeft, CheckCircle, Clock, Banknote, FileText, Star, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Vender mi coche | Tasación gratuita | Concesionario",
  description:
    "Vende tu coche de forma rápida, segura y al mejor precio. Tasación gratuita sin compromiso. Gestionamos todo el proceso por ti, pago inmediato y seguro.",
  keywords: [
    "vender coche",
    "tasación coche",
    "valoración vehículo",
    "venta de coches",
    "compra de coches usados",
    "vender coche usado",
    "vender coche segunda mano",
    "mejor precio coche usado",
    "vender coche rápido",
    "compra venta automóviles",
  ],
  openGraph: {
    title: "Vende tu coche al mejor precio | Tasación gratuita sin compromiso",
    description:
      "Gestionamos todo el proceso de venta de tu vehículo. Valoración gratuita, pago inmediato y sin complicaciones.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vende tu coche al mejor precio | Tasación gratuita",
    description:
      "Gestionamos todo el proceso de venta de tu vehículo. Valoración gratuita, pago inmediato y sin complicaciones.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/vender-mi-coche",
  },
}

export default function SellCarPage() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Valoración gratuita",
      description: "Valoramos tu vehículo sin compromiso y te ofrecemos el mejor precio del mercado.",
    },
    {
      icon: FileText,
      title: "Documentación",
      description: "Nos encargamos de toda la gestión documental para que no tengas que preocuparte.",
    },
    {
      icon: Clock,
      title: "Proceso rápido",
      description: "Completamos todo el proceso en tiempo récord para tu comodidad.",
    },
    {
      icon: Banknote,
      title: "Pago seguro",
      description: "Recibes el pago de forma inmediata y segura, sin esperas ni complicaciones.",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Mejor valoración garantizada",
      description: "Ofrecemos hasta un 10% más que la competencia por tu vehículo.",
    },
    {
      icon: Shield,
      title: "Seguridad y confianza",
      description: "Más de 15 años de experiencia y miles de clientes satisfechos.",
    },
    {
      icon: Clock,
      title: "Proceso en 24-48h",
      description: "Desde la valoración hasta el pago en menos de 48 horas.",
    },
  ]

  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <section className="relative mt-[50px] md:mt-20 py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vende tu coche <span className="text-yellow-300">sin complicaciones</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Gestionamos todo el proceso de venta de tu vehículo para que tú solo tengas que preocuparte de recibir el
              dinero.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base" asChild>
                <a href="#formulario">Solicitar valoración gratuita</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-base"
                asChild
              >
                <a href="tel:+34912345678">Llamar ahora</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-lg text-gray-600">
              Nuestro proceso está diseñado para ser rápido, transparente y sin complicaciones para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="absolute -top-5 -left-5 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mb-8">
                  <h2 className="text-3xl font-bold mb-6">Solicita una valoración gratuita</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Rellena el formulario y nos pondremos en contacto contigo para valorar tu vehículo sin ningún
                    compromiso.
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">Sin compromiso</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    Lo que dicen nuestros clientes
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="italic mb-2">
                      "Proceso rápido y sin complicaciones. Vendí mi coche en menos de una semana y al mejor precio."
                    </p>
                    <p className="font-medium">Carlos Martínez</p>
                    <p className="text-sm text-gray-600">Vendió un Audi A4 2018</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-1">
                <SellCarForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>

            <div className="space-y-6">
              {[
                {
                  question: "¿Cuánto tiempo tarda el proceso de venta?",
                  answer:
                    "El proceso completo suele durar entre 24 y 48 horas desde la valoración inicial hasta el pago. Nos esforzamos por hacer el proceso lo más rápido y cómodo posible.",
                },
                {
                  question: "¿Qué documentación necesito para vender mi coche?",
                  answer:
                    "Necesitarás el permiso de circulación, la ficha técnica (ITV), el libro de mantenimiento si lo tienes, y tu DNI. Nosotros nos encargamos de gestionar toda la documentación adicional.",
                },
                {
                  question: "¿Cómo se realiza el pago?",
                  answer:
                    "Ofrecemos varias opciones de pago: transferencia bancaria inmediata, cheque bancario o efectivo (hasta los límites legales establecidos). Tú eliges la que más te convenga.",
                },
                {
                  question: "¿Compráis coches con averías o muy antiguos?",
                  answer:
                    "Sí, compramos vehículos en cualquier estado. La valoración dependerá de factores como la marca, modelo, año, kilometraje y estado general, pero siempre ofrecemos un precio justo.",
                },
                {
                  question: "¿Tengo que llevar el coche a vuestras instalaciones?",
                  answer:
                    "No es necesario para la valoración inicial. Podemos hacer una primera valoración online o telefónica. Para la inspección final y formalización de la venta, sí sería necesario.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">¿Listo para vender tu coche?</h2>
            <p className="text-xl mb-8">
              Obtén una valoración gratuita sin compromiso y vende tu coche al mejor precio posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base" asChild>
                <a href="#formulario">Solicitar valoración</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-base"
                asChild
              >
                <a href="tel:+34912345678">Llamar ahora</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Servicio de compra de vehículos usados",
            provider: {
              "@type": "AutoDealer",
              name: "Concesionario de Coches de Segunda Mano",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenida de los Coches, 123",
                addressLocality: "Madrid",
                postalCode: "28001",
                addressCountry: "ES",
              },
              telephone: "+34912345678",
              priceRange: "€€",
            },
            description:
              "Servicio de compra de vehículos usados con tasación gratuita, gestión de documentación y pago inmediato.",
            offers: {
              "@type": "Offer",
              description: "Tasación gratuita sin compromiso",
            },
          }),
        }}
      />
    </main>
  )
}


```

# src/app/(site)/layout.tsx

```tsx
import Footer from "@/components/Footer";
import GlobalChatButton from "@/components/GlobalChatButton";
import Navbar from "@/features/header/components/Nvbar";
import "@/styles/global.css";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
      <GlobalChatButton /> 
    </>
  );
}

```

# src/app/(site)/page.tsx

```tsx
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import HomePageSections from "@/features/home/components/HomePageSections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Lebauto | Concesionario de Coches Eléctricos y de Segunda Mano | Vehículos Sostenibles",
  description:
    "Compra tu coche de segunda mano, ocasión, eléctricos o Km 0 en Lebauto. Vehículos revisados, con garantía y financiación. Ofrecemos soluciones de carga, financiación especializada y asesoramiento en ayudas y subvenciones para la movilidad sostenible.",
  keywords: [
    "coches segunda mano", "coches km0", "concesionario coches", "Lebauto",
    "coches eléctricos", "vehículos segunda mano", "cargadores eléctricos",
    "concesionario sostenible", "km0", "financiación vehículos eléctricos",
    "ayudas movilidad eléctrica", "concesionario de coches eléctricos",
  ],
  openGraph: {
    title: "Lebauto | Concesionario de Coches Eléctricos y de Segunda Mano | Vehículos Sostenibles",
    description: "Compra tu coche de segunda mano, ocasión, eléctricos o Km 0 en Lebauto. Vehículos revisados, con garantía y financiación. Ofrecemos soluciones de carga, financiación especializada y asesoramiento en ayudas y subvenciones para la movilidad sostenible.",
    type: "website",
    locale: "es_ES",
    url: "https://lebauto.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollToTopOnMount />
      <HomePageSections /> 

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization",
            name: "Lebauto",
            description: "Concesionario de Coches Eléctricos y de Segunda Mano. Especialistas en vehículos eléctricos de segunda mano, km0 y nuevos. Ofrecemos soluciones de carga, financiación especializada y asesoramiento en ayudas y subvenciones para la movilidad sostenible.",
            url: "https://lebauto.vercel.app",
            telephone: "+34912345678",
            address: {
              "@type": "PostalAddress", streetAddress: "Avenida de los Coches, 123",
              addressLocality: "Madrid", postalCode: "28001", addressCountry: "ES",
            },
            geo: { "@type": "GeoCoordinates", latitude: "40.4168", longitude: "-3.7038" },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "20:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "14:00" },
            ],
            sameAs: ["https://www.facebook.com/lebauto", "https://www.instagram.com/lebauto", "https://twitter.com/lebauto"],
          }),
        }}
      />
    </>
  );
}
```

# src/app/actions/actions.ts

```ts
"use server"

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/lib/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { contactFormSchema, sellCarSchema } from "@/lib/validations";
import { createServerClient } from "@supabase/ssr";

export async function submitSellCarForm(_: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries())
  const result = sellCarSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
      submitting: false,
    }
  }

  const data = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  })

  // ------------------------------
  // PLANTILLA HTML PARA EL CLIENTE
  // ------------------------------
  const clientEmailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Copia de tu Solicitud de Tasación</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #008060; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
          color: #777;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
        .logo {
          width: 80px;
          margin-bottom: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Confirmación de Solicitud de Tasación</h1>
        </div>
        <div class="content">
          <p>Hola ${data.name},</p>
          <p>Gracias por contactarnos. Hemos recibido tu solicitud de tasación de vehículo. Aquí tienes una copia de los datos que enviaste:</p>
          <table>
            <tr><th>Nombre</th><td>${data.name}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Teléfono</th><td>${data.phone}</td></tr>
            <tr><th>Marca</th><td>${data.brand}</td></tr>
            <tr><th>Modelo</th><td>${data.model}</td></tr>
            <tr><th>Año</th><td>${data.year}</td></tr>
            <tr><th>Kilómetros</th><td>${data.kilometers}</td></tr>
            <tr><th>Combustible</th><td>${data.fuel}</td></tr>
            <tr><th>Comentarios</th><td>${data.comments || '-'}</td></tr>
          </table>
          <p>En breves momentos nos pondremos en contacto contigo para ofrecerte una valoración personalizada.</p>
        </div>
        <div class="footer">
          <p>Por favor, no respondas a este mensaje. Si deseas contactar con nosotros, hazlo a través de <a href="mailto:info@lebauto.es">info@lebauto.es</a>.</p>
          <div><strong>Lebauto</strong></div>
          <div>© 2025 Lebauto, S.L.</div>
        </div>
      </div>
    </body>
  </html>
  `

  // ------------------------------
  // PLANTILLA HTML PARA LA EMPRESA
  // ------------------------------
  const companyEmailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Nueva Solicitud de Tasación</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #004080; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }
        .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nueva Solicitud de Tasación</h1>
        </div>
        <div class="content">
          <p>Se ha recibido la siguiente solicitud:</p>
          <table>
            <tr><th>Nombre</th><td>${data.name}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Teléfono</th><td>${data.phone}</td></tr>
            <tr><th>Marca</th><td>${data.brand}</td></tr>
            <tr><th>Modelo</th><td>${data.model}</td></tr>
            <tr><th>Año</th><td>${data.year}</td></tr>
            <tr><th>Kilómetros</th><td>${data.kilometers}</td></tr>
            <tr><th>Combustible</th><td>${data.fuel}</td></tr>
            <tr><th>Comentarios</th><td>${data.comments || '-'}</td></tr>
          </table>
        </div>
        <div class="footer">
          <p>Este correo es confidencial y para uso interno.</p>
        </div>
      </div>
    </body>
  </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: `Solicitud de tasación de coche - ${data.name}`,
      html: companyEmailHtml,
    })

    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: data.email,
      subject: "Copia de tu solicitud de tasación",
      html: clientEmailHtml,
    })

    return {
      success: true,
      message: "Solicitud enviada correctamente. Revisa tu correo para confirmar.",
      errors: {},
      submitting: false,
    }
  } catch (error: any) {
    return {
      success: false,
      message: "Error al enviar el formulario. Intenta más tarde.",
      errors: {},
      submitting: false,
    }
  }
}

export async function submitContactForm(_: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries())
  const result = contactFormSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, revisa los campos del formulario.",
      errors: result.error.flatten().fieldErrors,
      submitting: false,
    }
  }

  const data = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.CORREO_HOST,
    port: Number(process.env.CORREO_PORT),
    secure: true,
    auth: {
      user: process.env.CORREO_USUARIO,
      pass: process.env.CORREO_PASS,
    },
  })

  // ------------------------------
  // PLANTILLA HTML PARA EL CLIENTE
  // ------------------------------
  const clientEmailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Confirmación de Contacto</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #008060; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
          color: #777;
          border-top: 1px solid #ddd;          
        }
      </style>    
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Confirmación de Contacto</h1>
        </div>
        <div class="content">
          <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
        <div class="footer">
          <p>Por favor, no respondas a este mensaje. Si deseas contactar con nosotros, hazlo a través de <a href="mailto:info@lebauto.es">info@lebauto.es</a>.</p>
          <div><strong>Lebauto</strong></div>
          <div>© 2025 Lebauto, S.L.</div>
        </div>
      </div>
    </body>
  </html>
  `
  // ------------------------------
  // PLANTILLA HTML PARA LA EMPRESA
  // ------------------------------
  const companyEmailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Nueva Solicitud de Contacto</title>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #004080; color: #fff; padding: 10px; text-align: center; }
        .content { padding: 20px; }        
        .footer {
          margin-top: 20px;
          font-size: 12px;
          text-align: center;
          color: #777;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nueva Solicitud de Contacto</h1>
        </div>
        <div class="content">
          <p>Se ha recibido la siguiente solicitud:</p>
          <table>
            <tr><th>Nombre</th><td>${data.name}</td></tr>
            <tr><th>Apellidos</th><td>${data.surnames}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Teléfono</th><td>${data.phone || '-'}</td></tr>            
            <tr><th>Mensaje</th><td>${data.message}</td></tr>
          </table>
        </div>        
        <div class="footer">
          <p>Este correo es confidencial y para uso interno.</p>
        </div>
      </div>
    </body>
  </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: "Nueva Solicitud de Contacto",
      html: companyEmailHtml,
    })
    await transporter.sendMail({
      from: process.env.CORREO_USUARIO,
      to: data.email,
      subject: "Confirmación de Contacto",
      html: clientEmailHtml,
    })
    return {
      success: true,
      message: "Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.",
      errors: {},
      submitting: false,
    }
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return {
      success: false,
      message: "Error al enviar el formulario. Intenta más tarde.",
      errors: {},
      submitting: false,
    }
  }
}

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email y contraseña son requeridos",
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/sign-up",
      "Gracias por registrarte, te hemos enviado un email de confirmación",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return encodedRedirect("error", "/sign-in", error?.message || "Error en la autenticación");
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email es requerido");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Fallo al restablecer la contraseña",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Cheque su correo para restablecer la contraseña",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Contraseña y confirmar contraseña son requeridos",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Las contraseñas no coinciden",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Fallo al actualizar la contraseña",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};


```

# src/app/api/chat/route.ts

```ts
import { getAssistantStream } from '@/utils/chatbot'; 
import { NextResponse } from 'next/server'; 

export async function POST(request: Request) {
  let question: string;
  try {
    const body = await request.json();
    question = body.question;
  } catch (error) {
    return NextResponse.json({ error: 'Solicitud inválida. Asegúrate de enviar un JSON con el campo "question".' }, { status: 400 });
  }

  if (typeof question !== 'string' || !question.trim()) {
    return NextResponse.json({ error: 'El campo "question" es requerido y no puede estar vacío.' }, { status: 400 });
  }

  try {
    const stream = await getAssistantStream(question);
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8', 
      },
    });
  } catch (error: any) {
    console.error("Error en API route /api/chat al obtener stream:", error);
    return NextResponse.json({ error: error.message || 'Error interno del servidor al procesar la solicitud de stream.' }, { status: 500 });
  }
}
```

# src/app/auth/callback/route.ts

```ts
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  return NextResponse.redirect(`${origin}/dashboard`);
}
```

# src/app/layout.tsx

```tsx
import "@/styles/global.css";
import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import { Toaster } from "@/components/ui/toaster";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://lebauto.vercel.app"),
  title: "Lebauto | Concesionario de coches de segunda mano",
  description:
    "Compra y vende coches nuevos y usados en Lebauto, tu concesionario de confianza.",
  keywords: [
    "coches nuevos",
    "coches usados",
    "concesionario online",
    "segunda mano",
    "vehículos ocasión",
    "km0",
  ],
  openGraph: {
    title: "Lebauto | Concesionario de coches de segunda mano",
    description:
      "Explora una amplia gama de coches nuevos, de segunda mano en Lebauto, km0.",
    images: "/imgHome.png",
  },
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="es">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
          />
        </head>
        <body
          className={`${inter.className} antialiased flex flex-col min-h-screen overflow-x-hidden bg-background text-foreground`}
        >
          <main className="flex-1 w-screen" role="main">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}

```

# src/app/not-found.tsx

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Página No Encontrada</h2>
      <p className="text-muted-foreground mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-medium transition-colors"
      >
        Volver a Inicio
      </Link>
    </div>
  );
}
```

# src/app/supabase/supabase.ts

```ts
import { Car, Feature } from "@/lib/definitions";
import { mapCarFromDB, mapCarToDB } from "@/utils/mappers";
import { generateVehicleSlug } from "@/utils/slug";
import { createClient } from "../../lib/supabase/client";
import { updateCarDocument } from "@/utils/carDocuments";

export const supabaseClient = createClient();

export async function uploadImage(
  file: File,
  path: string
): Promise<string | null> {
  try {
    if (!supabaseClient) {
      console.error("Supabase supabaseClient is not initialized");
      return null;
    }

    if (!file) {
      console.error("No file provided");
      return null;
    }

    if (!path) {
      console.error("No path provided");
      return null;
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { data, error } = await supabaseClient.storage
      .from("car-images")
      .upload(filePath, file, { cacheControl: "3600" });

    if (error) {
      console.error("Error uploading image:", error);
      return null;
    }

    const { data: urlData } = supabaseClient.storage
      .from("car-images")
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
    const pathParts = urlObj.pathname.split("/");

    if (pathParts.length < 6) {
      console.error("URL con estructura inesperada:", url);
      return false;
    }

    const bucketName = pathParts[5];
    const filePath = pathParts.slice(6).join("/");

    const { error } = await supabaseClient.storage
      .from(bucketName)
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

    const { data: newCar, error } = await supabaseClient
      .from("cars")
      .insert([carDataDB])
      .select()
      .single();

    if (error) {
      console.error("Error creating car:", error);
      return null;
    }

    const slug = generateVehicleSlug({
      brand: newCar.brand,
      model: newCar.model,
      mileage: newCar.mileage,
      year: newCar.year,
      id: newCar.id,
    });

    const { data: updatedCar, error: updateError } = await supabaseClient
      .from("cars")
      .update({ slug })
      .eq("id", newCar.id)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating slug:", updateError);
      return mapCarFromDB(newCar);
    }

    if (images && images.length > 0) {
      const carImages = images.map((imageUrl) => ({
        car_id: newCar.id,
        image_url: imageUrl,
      }));

      const { error: imagesError } = await supabaseClient
        .from("car_images")
        .insert(carImages);

      if (imagesError) {
        console.error("Error adding car images:", imagesError);
      }
    }

    if (features && features.length > 0) {
      const carFeatures = features.map((featureId) => ({
        car_id: newCar.id,
        feature_id: featureId,
      }));

      const { error: featuresError } = await supabaseClient
        .from("car_features")
        .insert(carFeatures);

      if (featuresError) {
        console.error("Error adding car features:", featuresError);
      }
    }

    await updateCarDocument(mapCarFromDB(updatedCar || newCar));

    return mapCarFromDB({
      ...(updatedCar || newCar),
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
    // Convertir datos a snake_case antes de actualizar
    const carDataDB = mapCarToDB(carData);

    let updatedCar: any = { id };

    if (Object.keys(carDataDB).length > 0) {
      const { data, error } = await supabaseClient
        .from("cars")
        .update(carDataDB)
        .eq("id", id)
        .select();

      if (error) {
        console.error("Error updating car:", error);
        return null;
      }

      if (data && data.length > 0) {
        updatedCar = data[0];
      } else {
        const { data: currentCar } = await supabaseClient
          .from("cars")
          .select("*")
          .eq("id", id)
          .single();

        if (currentCar) {
          updatedCar = currentCar;
        }
      }
    }

    if (images !== undefined) {
      await supabaseClient.from("car_images").delete().eq("car_id", id);

      if (images.length > 0) {
        const carImages = images.map((imageUrl) => ({
          car_id: id,
          image_url: imageUrl,
        }));

        const { error: imagesError } = await supabaseClient
          .from("car_images")
          .insert(carImages);

        if (imagesError) {
          console.error("Error updating car images:", imagesError);
        }
      }
    }

    if (features !== undefined) {
      await supabaseClient.from("car_features").delete().eq("car_id", id);

      if (features.length > 0) {
        const carFeatures = features.map((featureId) => ({
          car_id: id,
          feature_id: featureId,
        }));

        const { error: featuresError } = await supabaseClient
          .from("car_features")
          .insert(carFeatures);

        if (featuresError) {
          console.error("Error updating car features:", featuresError);
        }
      }
    }

    const { data: carImages } = await supabaseClient
      .from("car_images")
      .select("image_url")
      .eq("car_id", id);

    const { data: carFeatures } = await supabaseClient
      .from("car_features")
      .select("feature_id")
      .eq("car_id", id);

    let currentFeatures: string[] = [];
    if (carFeatures && carFeatures.length > 0) {
      const featureIds = carFeatures.map((cf) => cf.feature_id);
      const { data: featureDetails } = await supabaseClient
        .from("features")
        .select("id")
        .in("id", featureIds);

      currentFeatures = featureDetails?.map((f) => f.id) || [];
    }
    await updateCarDocument(updatedCar);

    return mapCarFromDB({
      ...updatedCar,
      images: carImages?.map((img) => img.image_url) || [],
      features: currentFeatures,
    });
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

    const { data: carFeatures } = await supabaseClient
      .from("car_features")
      .select("feature_id")
      .eq("car_id", car.id);

    let features: string[] = [];
    if (carFeatures && carFeatures.length > 0) {
      const featureIds = carFeatures.map((cf) => cf.feature_id);
      const { data: featureDetails } = await supabaseClient
        .from("features")
        .select("*")
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

```

# src/components/ContactButtons.tsx

```tsx
"use client";

import { Phone, MessageSquare, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { JSX, useState } from "react";
import { ChatBotPopupWrapper } from "@/features/chatbot/components/ChatBotPopupWrapper";

export default function ContactButtons({ estado }: { estado: string }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          estado === "menu"
            ? "flex w-full justify-around mt-8"
            : "fixed md:flex flex-col gap-4 right-6 bottom-6 z-50"
        }`}
      >
        <TooltipProvider delayDuration={0}>
          <div className="w-[46%]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 w-12"
                onClick={toggleChatbot}
                aria-label="Abrir chat de agente virtual"
              >
                <Bot className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Agente Virtual Lebi</p>
            </TooltipContent>
          </Tooltip>
          </div>
          <div
            className={`${
              estado === "menu"
                ? "flex w-[54%] justify-between"
                : "hidden"
            }`}
          >
            <ContactButton
              icon={<Phone className="h-5 w-5" />}
              tooltip="Llamar ahora"
              onClick={() => (window.location.href = "tel:+34600000000")}
            />
            <ContactButton
              icon={<MessageSquare className="h-5 w-5" />}
              tooltip="Contactar por WhatsApp"
              onClick={() => window.open("https://wa.me/34600000000", "_blank")}
            />
          </div>
        </TooltipProvider>
      </div>
      <ChatBotPopupWrapper isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
    </>
  );
}

function ContactButton({
  icon,
  tooltip,
  onClick,
}: {
  icon: JSX.Element;
  tooltip: string;
  onClick: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          className="bg-gray-900 hover:bg-gray-700 text-white rounded-full h-12 w-12"
          onClick={onClick}
          aria-label={tooltip}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

```

# src/components/Footer.tsx

```tsx
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { JSX } from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-items-start">
          <FooterSection title="Concesionario">
            <p className="text-gray-400 mb-4">
              Tu concesionario de confianza para vehículos nuevos y de segunda mano.
            </p>
            <SocialLinks />
          </FooterSection>
          <FooterSection title="Servicios">
            <ul className="space-y-2 flex flex-col">
              <FooterLink href="/tasacion" label="Tasación" />
              <FooterLink href="/financiacion" label="Financiación" />
              <FooterLink href="/garantia" label="Garantía" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </FooterSection>
          <FooterSection title="Legal">
            <ul className="space-y-2 flex flex-col">
              <FooterLink href="/politica-privacidad" label="Política de privacidad" />
              <FooterLink href="/aviso-legal" label="Aviso legal" />
              <FooterLink href="/terminos-condiciones" label="Términos y condiciones" />
              <FooterLink href="/cookies" label="Cookies" />
            </ul>
          </FooterSection>
          <FooterSection title="Contacto">
            <address className="not-italic text-gray-400 flex flex-col space-y-2">
              <p>Avenida de los Coches, 123</p>
              <p>28001 Madrid, España</p>
              <p>
                <a href="tel:+34912345678" className="hover:text-white">
                  +34 91 234 56 78
                </a>
              </p>
              <p>
                <a href="mailto:info@concesionario.com" className="hover:text-white">
                  info@concesionario.com
                </a>
              </p>
            </address>
          </FooterSection>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white">
        {label}
      </Link>
    </li>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialButton href="#" icon={<Facebook />} label="Facebook" />
      <SocialButton href="#" icon={<Instagram />} label="Instagram" />
      <SocialButton href="#" icon={<Twitter />} label="Twitter" />
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) {
  return (
    <a href={href} className="text-gray-400 hover:text-white" aria-label={label}>
      {icon}
    </a>
  );
}

function FooterBottom() {
  return (
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Concesionario Lebauto. Todos los derechos reservados.</p>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <FooterLink href="/privacidad" label="Política de privacidad" />
        <FooterLink href="/cookies" label="Política de cookies" />
        <FooterLink href="/legal" label="Aviso legal" />
      </div>
    </div>
  );
}

```

# src/components/FormMessage.tsx

```tsx
export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="text-foreground border-l-2 border-foreground px-4">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-destructive-foreground border-l-2 border-destructive-foreground px-4">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="text-foreground border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}

```

# src/components/GlobalChatButton.tsx

```tsx
"use client";
import { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChatBotPopupWrapper } from "@/features/chatbot/components/ChatBotPopupWrapper";

export default function GlobalChatButton() {
  const [isChatUIVisible, setIsChatUIVisible] = useState(false);

  const handleToggleChat = () => {
    setIsChatUIVisible((prev) => !prev);
  };

  return (
    <>
      <div className="fixed flex flex-col gap-2 right-6 bottom-6 z-[998]">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 w-14 shadow-lg"
                onClick={handleToggleChat}
                aria-label="Abrir chat de agente virtual"
                aria-expanded={isChatUIVisible}
              >
                <Bot className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Agente Virtual Lebi</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <ChatBotPopupWrapper isOpen={isChatUIVisible} onOpenChange={setIsChatUIVisible} />
    </>
  );
}
```

# src/components/PaginationControls.tsx

```tsx
// src/components/ui/PaginationControls.tsx (Nuevo archivo)
"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}: PaginationControlsProps) {
  if (totalPages <= 1) {
    return null; // No mostrar paginación si solo hay una página o ninguna
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  // Lógica para generar los números de página (ej. 1 ... 4 5 6 ... 10)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Cuántos números de página mostrar como máximo
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= halfPagesToShow + 1) {
        for (let i = 1; i <= maxPagesToShow - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - halfPagesToShow) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - maxPagesToShow + 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - halfPagesToShow + 1; i <= currentPage + halfPagesToShow -1 ; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4 py-4">
      <div className="text-sm text-muted-foreground">
        Mostrando {startItem}-{endItem} de {totalItems} vehículos
      </div>
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          onClick={handleFirst}
          disabled={currentPage === 1}
          aria-label="Primera página"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <Button
              key={index}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => onPageChange(page)}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </Button>
          ) : (
            <span key={index} className="px-2 py-1">
              {page}
            </span>
          )
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Página siguiente"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleLast}
          disabled={currentPage === totalPages}
          aria-label="Última página"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
```

# src/components/ScrollToTopOnMount.tsx

```tsx
"use client";

import { useEffect } from 'react';
import { useUXStore } from '@/lib/uxStore'; 

const SESSION_STORAGE_KEY = 'hasScrolledToTopOnceThisSession'; 

const ScrollToTopOnMount: React.FC = () => {
  const { hasAnimatedHomePageOnce, setHasAnimatedHomePageOnce } = useUXStore();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.performance !== "undefined") {
      const navigationEntries = window.performance.getEntriesByType("navigation");
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming | undefined; 

      const navigationType = navigationEntry?.type;

      const hasVisitedInSession = sessionStorage.getItem(SESSION_STORAGE_KEY);

      if (navigationType === 'navigate' || navigationType === 'reload' || !hasVisitedInSession) {
        if (!hasVisitedInSession) {
            console.log("ScrollToTop: First visit to Home this session or fresh load. Scrolling to top & allowing animations.");
        } else {
            console.log(`ScrollToTop: Fresh load (${navigationType}). Scrolling to top & allowing animations.`);
        }

        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        if (!hasAnimatedHomePageOnce) {
            setHasAnimatedHomePageOnce(false);
        }
      } else { 
        console.log(`ScrollToTop: Navigating back or already visited this session (${navigationType}). Restoring scroll & skipping initial animations.`);
        window.history.scrollRestoration = 'auto';
        setHasAnimatedHomePageOnce(true); 
      }
    }
  }, [setHasAnimatedHomePageOnce]); 

  return null;
};

export default ScrollToTopOnMount;
```

# src/components/SellCarForm.tsx

```tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { useActionState } from "react"
import { submitSellCarForm } from "@/app/actions/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/useToast"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { SellCarFormState } from "@/lib/definitions"

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 30 }, (_, i) => (CURRENT_YEAR - i).toString())
const FUEL_TYPES = ["Gasolina", "Diésel", "Híbrido", "Eléctrico", "GLP", "Otro"]

const initialState: SellCarFormState = {
  success: null,
  message: "",
  errors: {},
  submitting: false,
}

export default function SellCarForm() {
  const { toast } = useToast()
  const [state, formAction] = useActionState(submitSellCarForm, initialState)
  const [selectKey, setSelectKey] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "✔️ Enviado correctamente" : "❌ Error al enviar",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
    if (state?.success) {
      formRef.current?.reset()
      setSelectKey((prev) => prev + 1)
    }
  }, [state, toast])

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6 md:p-8">
        <form key={selectKey} ref={formRef} action={formAction} className="space-y-6" aria-labelledby="sell-car-form-title">
          <div className="space-y-4">
            <h3 id="sell-car-form-title" className="text-lg font-semibold">Datos personales</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" name="name" placeholder="Tu nombre" required />
                {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" name="phone" type="tel" placeholder="123 456 789" required />
              {state.errors?.phone && <p className="text-sm text-red-500">{state.errors.phone[0]}</p>}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Datos del vehículo</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Marca</Label>
                <Input id="brand" name="brand" placeholder="Ej: Audi, BMW..." required />
                {state.errors?.brand && <p className="text-sm text-red-500">{state.errors.brand[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Modelo</Label>
                <Input id="model" name="model" placeholder="Ej: A4, Serie 3..." required />
                {state.errors?.model && <p className="text-sm text-red-500">{state.errors.model[0]}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Año</Label>
                <Select name="year" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona año" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map((year) => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state.errors?.year && <p className="text-sm text-red-500">{state.errors.year[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="kilometers">Kilómetros</Label>
                <Input id="kilometers" name="kilometers" type="number" placeholder="Ej: 120000" required />
                {state.errors?.kilometers && <p className="text-sm text-red-500">{state.errors.kilometers[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuel">Combustible</Label>
                <Select name="fuel" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de combustible" />
                  </SelectTrigger>
                  <SelectContent>
                    {FUEL_TYPES.map((fuel) => (
                      <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state.errors?.fuel && <p className="text-sm text-red-500">{state.errors.fuel[0]}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Comentarios adicionales</Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Cuéntanos más sobre tu vehículo (estado, equipamiento, etc.)"
                rows={4}
              />
              {state.errors?.comments && <p className="text-sm text-red-500">{state.errors.comments[0]}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base" disabled={state.submitting}>
            {state.submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Solicitar valoración gratuita"
            )}
          </Button>

          <p className="text-sm text-center text-gray-500">
            Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

```

# src/components/SubmitButton.tsx

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
}

```

# src/components/ui/accordion.tsx

```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/utils/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }


```

# src/components/ui/alert-dialog.tsx

```tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/utils/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

# src/components/ui/badge.tsx

```tsx

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

# src/components/ui/button.tsx

```tsx
"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

# src/components/ui/card.tsx

```tsx
import * as React from "react"

import { cn } from "@/utils/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# src/components/ui/carousel.tsx

```tsx
"use client";


import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("select", onSelect)
      api.on("reInit", onSelect)

      return () => {
        api.off("select", onSelect)
        api.off("reInit", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    )
  },
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    )
  },
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  },
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  },
)
CarouselNext.displayName = "CarouselNext"

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }


```

# src/components/ui/checkbox.tsx

```tsx
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/utils/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```

# src/components/ui/dialog.tsx

```tsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/utils/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

# src/components/ui/dropdown-menu.tsx

```tsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/utils/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

```

# src/components/ui/form.tsx

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/utils/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

# src/components/ui/input.tsx

```tsx
import * as React from "react"

import { cn } from "@/utils/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

# src/components/ui/label.tsx

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/utils"

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }


```

# src/components/ui/navigation-menu.tsx

```tsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/utils/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

```

# src/components/ui/popover.tsx

```tsx
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/utils/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

```

# src/components/ui/select.tsx

```tsx
"use client";

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/utils/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

# src/components/ui/separator.tsx

```tsx
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/utils/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

```

# src/components/ui/sheet.tsx

```tsx
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "@/utils/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet, SheetClose,
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
}


```

# src/components/ui/sidebar.tsx

```tsx
"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/useMobile"
import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

# src/components/ui/skeleton.tsx

```tsx
import { cn } from "@/utils/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

# src/components/ui/slider.tsx

```tsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/utils/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

```

# src/components/ui/table.tsx

```tsx
import * as React from "react"

import { cn } from "@/utils/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

# src/components/ui/tabs.tsx

```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/utils/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }


```

# src/components/ui/textarea.tsx

```tsx
import * as React from "react"

import { cn } from "@/utils/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }


```

# src/components/ui/toast.tsx

```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/utils/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

# src/components/ui/toaster.tsx

```tsx
"use client"

import { useToast } from "@/hooks/useToast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

# src/components/ui/tooltip.tsx

```tsx
"use client";

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/utils/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

# src/features/car/components/CarContact.tsx

```tsx
"use client";

import { formatPrice } from "@/utils/utils";
import type { Car } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Calendar } from "lucide-react";

interface CarContactProps {
  car: Car;
}

export default function CarContact({ car }: CarContactProps) {
  return (
    <div className="space-y-6" role="complementary" aria-labelledby="car-contact-title">
      <Card>
        <CardContent className="p-6">
          <PriceDetails car={car} />
          <div className="flex gap-2 pt-4">
            <Button className="flex-1">
              <Phone className="mr-2 h-4 w-4" /> Llamar
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </div>
        </CardContent>
      </Card>

      <ContactForm car={car} />
      <AppointmentCard />
    </div>
  );
}

function PriceDetails({ car }: { car: Car }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground">Precio al contado</p>
        <p className="text-3xl font-bold">{formatPrice(car.price)} €</p>
        {car.ivaDeductible && <p className="text-sm text-green-600">IVA deducible incluido</p>}
      </div>
      <div className="pt-4 border-t">
        <p className="text-sm text-muted-foreground">Financiación desde</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-primary">{formatPrice(car?.monthlyPrice || 0)} €</p>
          <p className="text-sm text-muted-foreground">/mes*</p>
        </div>
        <p className="text-sm text-muted-foreground mt-1">*Sin entrada · 120 meses · TAE 11,1%</p>
      </div>
      <div className="pt-4 border-t">
        <p className="text-sm text-muted-foreground">Garantía</p>
        <p className="font-medium">3 años</p>
      </div>
    </div>
  );
}

function ContactForm({ car }: { car: Car }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Solicitar información</h3>
        <form className="space-y-4">
          <InputField id="name" label="Nombre" placeholder="Tu nombre" />
          <InputField id="email" label="Email" type="email" placeholder="tu@email.com" />
          <InputField id="phone" label="Teléfono" type="tel" placeholder="123 456 789" />
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Estoy interesado en este vehículo..."
              defaultValue={`Hola, estoy interesado en el ${car.brand} ${car.model} ${car.variant || ""}. ¿Podrían darme más información?`}
              rows={3}
            />
          </div>
          <Button className="w-full">Enviar</Button>
        </form>
      </CardContent>
    </Card>
  );
}

function InputField({ id, label, type = "text", placeholder }: { id: string; label: string; type?: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

function AppointmentCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Concertar cita</h3>
        <p className="text-sm text-muted-foreground mb-4">Reserva una cita para ver este vehículo en nuestro concesionario.</p>
        <Button variant="outline" className="w-full">
          <Calendar className="mr-2 h-4 w-4" /> Reservar cita
        </Button>
      </CardContent>
    </Card>
  );
}

```

# src/features/car/components/CarFeatures.tsx

```tsx
"use client";

import { Check } from "lucide-react";

interface CarFeaturesProps {
  features: string[] | undefined;
}

export default function CarFeatures({ features }: CarFeaturesProps) {
  return (
    <div className="mb-8" role="region" aria-labelledby="features-title">
      <h2 id="features-title" className="text-xl font-bold mb-4">Equipamiento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {features?.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}

function FeatureItem({ feature }: { feature: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
      <span>{feature}</span>
    </div>
  );
}

```

# src/features/car/components/CarGallery.tsx

```tsx
// src/components/cars/CarGallery.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

interface CarGalleryProps {
  images: string[];
  altPrefix?: string;
}

export default function CarGallery({ images, altPrefix = "Imagen del vehículo" }: CarGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCurrentImageLoading, setIsCurrentImageLoading] = useState(true);
  const [thumbnailLoadingStates, setThumbnailLoadingStates] = useState<Record<number, boolean>>({});
  const [direction, setDirection] = useState(0); // Para la dirección de la animación de slide

  const totalImages = images?.length || 0;

  useEffect(() => {
    if (totalImages > 0 && images[currentImageIndex]) { // Verifica que la imagen exista
      setIsCurrentImageLoading(true);
    }
  }, [currentImageIndex, images, totalImages]);

  useEffect(() => {
    const initialStates: Record<number, boolean> = {};
    if (images) {
      images.forEach((_, index) => { initialStates[index] = true; });
    }
    setThumbnailLoadingStates(initialStates);
  }, [images]);

  const handleImageLoad = () => setIsCurrentImageLoading(false);
  const handleImageError = () => {
    setIsCurrentImageLoading(false);
    if (images && images[currentImageIndex]) {
      console.warn(`Error al cargar imagen principal: ${images[currentImageIndex]}`);
    }
  };

  const handleThumbnailLoad = (index: number) => setThumbnailLoadingStates(prev => ({ ...prev, [index]: false }));
  const handleThumbnailError = (index: number) => {
    setThumbnailLoadingStates(prev => ({ ...prev, [index]: false }));
    if (images && images[index]) {
      console.warn(`Error al cargar miniatura: ${images[index]}`);
    }
  };

  const paginate = (newDirection: number) => {
    if (totalImages === 0) return;
    const newIndex = (currentImageIndex + newDirection + totalImages) % totalImages;
    if (newIndex !== currentImageIndex) {
        setDirection(newDirection); // Establece la dirección para la animación
        setCurrentImageIndex(newIndex);
        // setIsCurrentImageLoading(true); // Ya se maneja en el useEffect de currentImageIndex
    }
  };

  const selectThumbnail = (index: number) => {
    if (index !== currentImageIndex) {
        setDirection(index > currentImageIndex ? 1 : -1);
        setCurrentImageIndex(index);
        // setIsCurrentImageLoading(true); // Ya se maneja en el useEffect de currentImageIndex
    }
  }

  if (!images || totalImages === 0) {
    return (
      <div className="mb-8">
        <Skeleton className="h-[200px] xxs:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  // Variantes de animación para la imagen principal
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98, // Un ligero encogimiento al entrar/salir puede ayudar
    }),
    center: {
      zIndex: 1, // La imagen activa debe estar encima
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (direction: number) => ({
      zIndex: 0, // La imagen que sale debe estar detrás
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="mb-8" role="region" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="sr-only">Galería de imágenes del vehículo</h2>
      
      <div className="relative h-[200px] xxs:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
        <AnimatePresence initial={false} custom={direction} mode="popLayout"> 
        {/* mode="popLayout" puede ayudar con cambios de tamaño si las imágenes son diferentes */}
          <motion.div
            key={currentImageIndex} // Crucial para que AnimatePresence funcione
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full" // Ocupa todo el espacio del contenedor
          >
            {/* Esqueleto para la imagen actual mientras carga */}
            {isCurrentImageLoading && (
              <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
            )}
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${altPrefix} ${currentImageIndex + 1} de ${totalImages}`}
              fill
              className={`object-cover transition-opacity duration-150 ${isCurrentImageLoading ? 'opacity-0' : 'opacity-100'}`}
              priority={currentImageIndex === 0} // Prioridad solo para la primera imagen de la galería
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(max-width: 420px) 100vw, (max-width: 520px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 60vw, 66vw" // ¡AJUSTA ESTO!
            />
          </motion.div>
        </AnimatePresence>

        {/* Controles de Navegación y Contador */}
        {totalImages > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-1 sm:p-2 z-10 pointer-events-none"> {/* Contenedor de botones */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => paginate(-1)} 
                className="bg-black/30 hover:bg-black/50 text-white rounded-full pointer-events-auto w-8 h-8 sm:w-10 sm:h-10" 
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => paginate(1)} 
                className="bg-black/30 hover:bg-black/50 text-white rounded-full pointer-events-auto w-8 h-8 sm:w-10 sm:h-10" 
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-4 h-4 sm:w-5" />
              </Button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-0.5 rounded-full text-xs z-10">
              {currentImageIndex + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {totalImages > 1 && (
        <div className="grid grid-cols-4 xs:grid-cols-6 sm:grid-cols-8 gap-1.5 sm:gap-2 mt-2">
          {images.map((imageSrc, index) => (
            <button
              key={`thumb-${index}`}
              onClick={() => selectThumbnail(index)}
              className={`relative aspect-square rounded-md overflow-hidden bg-muted
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1
                          ${currentImageIndex === index ? "ring-2 ring-primary ring-offset-1" : "hover:opacity-75 transition-opacity"}`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              {thumbnailLoadingStates[index] && (
                <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
              )}
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`Miniatura ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-150 ${thumbnailLoadingStates[index] ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => handleThumbnailLoad(index)}
                onError={() => handleThumbnailError(index)}
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

# src/features/car/components/CarInfo.tsx

```tsx
"use client";

import type { Car } from "@/lib/definitions";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CarInfoProps {
  car: Car;
}

export default function CarInfo({ car }: CarInfoProps) {
  return (
    <div className="mb-8" role="region" aria-labelledby="car-info-title">
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge>{car.condition}</Badge>
          {car.ivaDeductible && <Badge variant="outline">IVA Deducible</Badge>}
        </div>

        <h1 id="car-info-title" className="text-3xl font-bold mb-2">
          {car.brand} {car.model}
        </h1>
        <p className="text-xl text-muted-foreground mb-4">{car.variant}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <InfoItem label="Combustible" value={car.fuel} />
          <InfoItem label="Año" value={car.year.toString()} />
          <InfoItem label="Potencia" value={`${car.power} CV`} />
          <InfoItem label="Kilómetros" value={`${car.mileage.toLocaleString()} km`} />
          <InfoItem label="Transmisión" value={car.transmission || "Desconocida"} />
          <InfoItem label="Color" value={car.color} />
          <InfoItem label="Puertas" value={car.doors?.toString() || "Desconocido"} />
          <InfoItem label="Ubicación" value={car.location || "Desconocida"} />
        </div>
      </div>

      <Tabs defaultValue="descripcion">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="descripcion">Descripción</TabsTrigger>
          <TabsTrigger value="detalles">Detalles técnicos</TabsTrigger>
        </TabsList>
        <TabsContent value="descripcion" className="p-4 bg-muted/30 rounded-md mt-2">
          <p>{car.description}</p>
        </TabsContent>
        <TabsContent value="detalles" className="p-4 bg-muted/30 rounded-md mt-2">
          <TechnicalDetails car={car} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-muted-foreground">{label}:</span>{" "}
      <span className="font-medium">{value}</span>
    </div>
  );
}

function TechnicalDetails({ car }: { car: Car }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold mb-2">Motor</h3>
        <ul className="space-y-1 text-sm">
          <li><InfoItem label="Combustible" value={car.fuel} /></li>
          <li><InfoItem label="Potencia" value={`${car.power} CV`} /></li>
          <li><InfoItem label="Transmisión" value={car.transmission || "Desconocido"} /></li>
          <li><InfoItem label="Consumo combinado" value="5.2 l/100km" /></li>
          <li><InfoItem label="Emisiones CO2" value="118 g/km" /></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Dimensiones</h3>
        <ul className="space-y-1 text-sm">
          <li><InfoItem label="Longitud" value="4.050 mm" /></li>
          <li><InfoItem label="Anchura" value="1.800 mm" /></li>
          <li><InfoItem label="Altura" value="1.550 mm" /></li>
          <li><InfoItem label="Maletero" value="380 litros" /></li>
          <li><InfoItem label="Peso" value="1.165 kg" /></li>
        </ul>
      </div>
    </div>
  );
}

```

# src/features/car/skeleton/CarSkeleton.tsx

```tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function CarCardSkeleton() {
  return (
    <div className="bg-card rounded-lg border shadow-sm animate-pulse">
      <div className="relative">
        <Skeleton className="h-48 w-full rounded-t-lg" />
      </div>
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />

        <div className="grid grid-cols-2 gap-2 mb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-3 w-20 mb-1" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-baseline mb-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
}
export function CarCardSkeletonList() {
  return (
    <div className="flex gap-4 p-4 border rounded-lg shadow-sm animate-pulse">
      <Skeleton className="h-32 w-48 rounded-lg" />
      <div className="flex-1 space-y-4">
        <Skeleton className="h-6 w-1/2 rounded" />
        <Skeleton className="h-4 w-1/3 rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
        <div className="flex gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-16 rounded" />
          ))}
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function CarDetailSkeleton() {
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-8 animate-pulse">
      <div>
        <Skeleton className="h-[400px] md:h-[500px] w-full rounded-lg mb-2" />
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-md" />
          ))}
        </div>
      </div>

      <div>
        <Skeleton className="h-[300px] w-full rounded-lg mb-6" />
        <Skeleton className="h-[400px] w-full rounded-lg mb-6" />
        <Skeleton className="h-[150px] w-full rounded-lg" />
      </div>
    </div>
  );
}

```

# src/features/catalog-cars/components/CarCardGrid.tsx

```tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/utils";
import type { Car } from "@/lib/definitions";

interface CarCardGridProps {
  car: Car;
}

export default function CarCardGrid({ car }: CarCardGridProps) {
  const mainImage = car.images?.[0] || "/placeholder.svg";

  return (
    <Link
      href={`/coches-segunda-mano/${car.slug}`}
      className="block bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow animate-fade-in"
      aria-label={`Ver detalles del ${car.brand} ${car.model}`}
    >
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <Image
            src="/logo.webp"
            width={32}
            height={32}
            alt="Logo empresa"
            className="rounded-full"
          />
        </div>
        <div className="relative h-48">
          <Image
            src={mainImage}
            alt={`Imagen del ${car.brand} ${car.model}`}
            fill
            className="object-cover rounded-t-lg"
            loading="lazy"
          />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
            1/{car.images?.length || 0}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">
            {car.brand} {car.model}
          </h3>
          <Image
            src={`/distintivos/${car.environmentalTag}.svg`}
            width={32}
            height={32}
            alt="Etiqueta medioambiental"
            className="rounded-full"
          />
        </div>

        <p className="text-sm text-muted-foreground mb-4">{car.variant}</p>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <InfoItem label="Combustible" value={car.fuel} />
          <InfoItem label="Año" value={car.year.toString()} />
          <InfoItem label="Potencia" value={`${car.power} CV`} />
          <InfoItem label="Kilómetros" value={formatPrice(car.mileage || 0)} />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">En stock</Badge>
          <Badge variant="secondary">{car.condition}</Badge>
          {car.ivaDeductible && <Badge variant="outline">IVA Deducible</Badge>}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-baseline mb-2">
            <p className="text-xl font-bold text-primary">
              {formatPrice(car.price)} €
            </p>
            <p className="text-sm text-muted-foreground">
              {formatPrice(car.monthlyPrice || 0)} €/mes*
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

```

# src/features/catalog-cars/components/CarCardList.tsx

```tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/utils";
import type { Car } from "@/lib/definitions";

interface CarCardListProps {
  car: Car;
}

export default function CarCardList({ car }: CarCardListProps) {
  const mainImage = car.images?.[0] || "/placeholder.svg";

  return (
    <Link
      href={`/coches-segunda-mano/${car.slug}`}
      className="block bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow animate-fade-in"
      aria-label={`Ver detalles del ${car.brand} ${car.model}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[300px]">
          <div className="absolute top-2 right-2 z-10">
            <Image src="/logo.webp" width={32} height={32} alt="Logo empresa" className="rounded-full" />
          </div>
          <Image
            src={mainImage}
            alt={`Imagen del ${car.brand} ${car.model}`}
            fill
            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            loading="lazy"
          />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
            1/{car.images?.length || 0} 
          </div>
        </div>

        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">{car.brand} {car.model}</h3>
              <p className="text-muted-foreground">{car.variant}</p>
            </div>
            <Image src={`/distintivos/${car.environmentalTag}.svg`} width={32} height={32} alt="Etiqueta medioambiental" className="rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:justify-items-center gap-4 mt-4">
            <InfoItem label="Combustible" value={car.fuel} />
            <InfoItem label="Kilómetros" value={formatPrice(car.mileage || 0)} />
            <InfoItem label="Año" value={car.year.toString()} />
            <InfoItem label="Potencia" value={`${car.power} CV`} />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">En stock</Badge>
            <Badge variant="secondary">{car.condition}</Badge>
            {car.ivaDeductible && <Badge variant="outline">IVA Deducible</Badge>}
          </div>
        </div>

        <div className="p-6 border-t md:border-l md:border-t-0 bg-muted/10 flex flex-col justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Precio financiado</p>
            <p className="text-2xl font-bold text-primary">{formatPrice(car.financePrice || 0)} €</p>
            <p className="text-sm text-muted-foreground">{formatPrice(car.monthlyPrice || 0)} €/mes*</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Precio al contado</p>
            <p className="text-xl font-semibold">{formatPrice(car.price)} €</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
```

# src/features/catalog-cars/components/CarFilters.tsx

```tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { useFilterStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import { usePriceDebounce } from "@/hooks/usePriceDebounce";
import { useYearDebounce } from "@/hooks/useYearDebounce";
import { useKmDebounce } from "@/hooks/useKmDebounce";
import { BrandModelFilter } from "./filters/BrandModelFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { YearFilter } from "./filters/YearFilter";
import { BodyFilter } from "./filters/BodyFilter";
import { MotorFilter } from "./filters/MotorFilter";
import { KmFilter } from "./filters/KmFilter";
import { ColorFilter } from "./filters/ColorFilter";
import { LocationFilter } from "./filters/LocationFilter";


export default function CarFilters({
  isOpen = false,
  toggleMenu,
}: {
  isOpen?: boolean;
  toggleMenu?: () => void;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const {
    filters,
    setFilter,
    removeFilter,
    clearFilters,
    allCars,
    filteredCars,
  } = useFilterStore();

  // Estados para precio, año, km, etc.
  const [minPrice, setMinPrice] = useState<string>(
    filters.minPrice?.toString() || "0"
  );
  const [maxPrice, setMaxPrice] = useState<string>(
    filters.maxPrice?.toString() || "100000"
  );
  const [minYear, setMinYear] = useState<string>(
    filters.minYear?.toString() || "1990"
  );
  const [maxYear, setMaxYear] = useState<string>(
    filters.maxYear?.toString() || currentYear.toString()
  );
  const [minKm, setMinKm] = useState<string>(filters.minKm?.toString() || "0");
  const [maxKm, setMaxKm] = useState<string>(
    filters.maxKm?.toString() || "500000"
  );

  // Estados para marca/modelo
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>(
    {}
  );
  const [selectAllModelsState, setSelectAllModelsState] = useState<
    Record<string, boolean>
  >({});

  // Estados para puertas y plazas
  const [doorFrom, setDoorFrom] = useState<number>(filters.doorFrom || 2);
  const [doorTo, setDoorTo] = useState<number>(filters.doorTo || 5);
  const [seatFrom, setSeatFrom] = useState<number>(filters.seatFrom || 2);
  const [seatTo, setSeatTo] = useState<number>(filters.seatTo || 5);

  const lowerSearch = searchTerm.toLowerCase();

  const uniqueBrands = useMemo(
    () => Array.from(new Set(allCars.map((car) => car.brand))),
    [allCars]
  );
  const modelsByBrand = useMemo(() => {
    const res: Record<string, string[]> = {};
    uniqueBrands.forEach((brand) => {
      res[brand] = Array.from(
        new Set(
          allCars.filter((car) => car.brand === brand).map((car) => car.model)
        )
      );
    });
    return res;
  }, [allCars, uniqueBrands]);

  const filteredBrands = useMemo(() => {
    return uniqueBrands.filter((brand) => {
      const brandMatches = brand.toLowerCase().includes(lowerSearch);
      const modelMatches = modelsByBrand[brand].some((model) =>
        model.toLowerCase().includes(lowerSearch)
      );
      return searchTerm === "" || brandMatches || modelMatches;
    });
  }, [uniqueBrands, lowerSearch, searchTerm, modelsByBrand]);

  const [showAllBrands, setShowAllBrands] = useState<boolean>(false);
  const displayedBrands = useMemo(
    () => (showAllBrands ? filteredBrands : filteredBrands.slice(0, 6)),
    [filteredBrands, showAllBrands]
  );

  const uniqueColors = useMemo(
    () => Array.from(new Set(allCars.map((car) => car.color))),
    [allCars]
  );

  const uniqueLocations = useMemo(
    () =>
      Array.from(
        new Set(
          allCars.filter((car) => car.location).map((car) => car.location!)
        )
      ),
    [allCars]
  );

  const uniqueBodyTypes = [
    { value: "SUV", label: "SUV", image: "/tipo-carroceria/body-4x4-suv.png" },
    {
      value: "Berlina",
      label: "Berlina",
      image: "/tipo-carroceria/body-berlina.png",
    },
    {
      value: "Compacto",
      label: "Compacto",
      image: "/tipo-carroceria/body-compacto.png",
    },
    {
      value: "Cabrio",
      label: "Cabrio",
      image: "/tipo-carroceria/body-cabrio.png",
    },
    {
      value: "Coupe",
      label: "Coupe",
      image: "/tipo-carroceria/body-coupe.png",
    },
    {
      value: "Familiar",
      label: "Familiar",
      image: "/tipo-carroceria/body-familiar.png",
    },
    {
      value: "Monovolumen",
      label: "Monovolumen",
      image: "/tipo-carroceria/body-monovolumen.png",
    },
    {
      value: "Pickup",
      label: "Pick-up",
      image: "/tipo-carroceria/body-pick-up.png",
    },
  ];

  const handleBodyTypeChange = (bodyType: string, checked: boolean) => {
    if (checked) {
      setFilter("bodyType", bodyType);
    } else {
      removeFilter("bodyType", bodyType);
    }
  };

  useEffect(() => {
    const updateUrl = () => {
      const params = new URLSearchParams();
      if (filters.brand && filters.brand.length > 0)
        params.set("brand", filters.brand.join(","));
      if (filters.model && filters.model.length > 0)
        params.set("model", filters.model.join(","));
      if (filters.bodyType && filters.bodyType.length > 0)
        params.set("bodyType", filters.bodyType.join(","));
      if (filters.minPrice !== undefined)
        params.set("minPrice", filters.minPrice.toString());
      if (filters.maxPrice !== undefined)
        params.set("maxPrice", filters.maxPrice.toString());
      if (filters.minYear !== undefined)
        params.set("minYear", filters.minYear.toString());
      if (filters.maxYear !== undefined)
        params.set("maxYear", filters.maxYear.toString());
      if (filters.minKm !== undefined)
        params.set("minKm", filters.minKm.toString());
      if (filters.maxKm !== undefined)
        params.set("maxKm", filters.maxKm.toString());
      if (filters.doorFrom !== undefined)
        params.set("doorFrom", filters.doorFrom.toString());
      if (filters.doorTo !== undefined)
        params.set("doorTo", filters.doorTo.toString());
      if (filters.seatFrom !== undefined)
        params.set("seatFrom", filters.seatFrom.toString());
      if (filters.seatTo !== undefined)
        params.set("seatTo", filters.seatTo.toString());
      if (filters.fuel && filters.fuel.length > 0)
        params.set("fuel", filters.fuel.join(","));
      if (filters.location && filters.location.length > 0)
        params.set("location", filters.location.join(","));
      if (filters.color && filters.color.length > 0)
        params.set("color", filters.color.join(","));
      if (filters.minPower !== undefined)
        params.set("minPower", filters.minPower.toString());
      if (filters.maxPower !== undefined)
        params.set("maxPower", filters.maxPower.toString());
      if (filters.minEngineDisplacement !== undefined)
        params.set(
          "minEngineDisplacement",
          filters.minEngineDisplacement.toString()
        );
      if (filters.maxEngineDisplacement !== undefined)
        params.set(
          "maxEngineDisplacement",
          filters.maxEngineDisplacement.toString()
        );
      if (filters.transmission && filters.transmission.length > 0)
        params.set("transmission", filters.transmission.join(","));
      if (filters.environmentalTag && filters.environmentalTag.length > 0)
        params.set("environmental_tag", filters.environmentalTag.join(","));
      if (filters.drivetrain && filters.drivetrain.length > 0)
        params.set("drivetrain", filters.drivetrain.join(","));
      const newUrl = params.toString()
        ? `/coches-segunda-mano?${params.toString()}`
        : "/coches-segunda-mano";
      router.replace(newUrl, { scroll: false });
    };

    updateUrl();
  }, [filters]);

  useEffect(() => {
    const newState: Record<string, boolean> = {};
    if (filters.brand) {
      filters.brand.forEach((brand) => {
        const modelsForBrand = modelsByBrand[brand] || [];
        const modelsSelected =
          filters.model?.filter((m) => modelsForBrand.includes(m)) || [];
        newState[brand] = modelsSelected.length === 0;
      });
    }
    setSelectAllModelsState(newState);
  }, [filters.brand, filters.model, modelsByBrand]);

  const handleBrandClick = (brand: string) => {
    setExpandedBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };

  const handleSelectAllModels = (brand: string, checked: boolean) => {
    setSelectAllModelsState((prev) => ({ ...prev, [brand]: checked }));
    if (checked) {
      modelsByBrand[brand].forEach((model) => {
        if (filters.model?.includes(model)) removeFilter("model", model);
      });
      if (!filters.brand?.includes(brand)) {
        setFilter("brand", brand);
      }
    } else {
      removeFilter("brand", brand);
      modelsByBrand[brand].forEach((model) => {
        if (filters.model?.includes(model)) removeFilter("model", model);
      });
      setSelectAllModelsState((prev) => ({ ...prev, [brand]: false }));
    }
  };

  const handleModelChange = (
    model: string,
    brand: string,
    checked: boolean
  ) => {
    if (checked) {
      if (filters.brand?.includes(brand)) {
        removeFilter("brand", brand);
      }
      setFilter("model", model);
      setSelectAllModelsState((prev) => ({ ...prev, [brand]: false }));
    } else {
      removeFilter("model", model);
      const modelsLeft =
        filters.model?.filter((m) => modelsByBrand[brand].includes(m)) || [];
      if (modelsLeft.length === 0) {
        setSelectAllModelsState((prev) => ({ ...prev, [brand]: false }));
      }
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) setFilter("color", color);
    else removeFilter("color", color);
  };

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) setFilter("location", location);
    else removeFilter("location", location);
  };

  const handleClearFilters = () => {
    clearFilters();
    setMinPrice("0");
    setMaxPrice("100000");
    setMinYear("1990");
    setMaxYear(new Date().getFullYear().toString());
    setMinKm("0");
    setMaxKm("500000");
    setDoorFrom(2);
    setDoorTo(5);
    setSeatFrom(2);
    setSeatTo(5);
    setSearchTerm("");
    setExpandedBrands({});
    setSelectAllModelsState({});
    router.push("/coches-segunda-mano");
  };

  const handleRemoveFilter = (type: string, value: string) => {
    if (type === "brand") {
      removeFilter("brand", value);
      setSelectAllModelsState((prev) => ({ ...prev, [value]: false }));
      const modelsToRemove = modelsByBrand[value] || [];
      modelsToRemove.forEach((model) => {
        if (filters.model?.includes(model)) removeFilter("model", model);
      });
    } else if (type === "model") {
      removeFilter("model", value);
      const brand = uniqueBrands.find((b) => modelsByBrand[b]?.includes(value));
      if (brand) {
        const remaining =
          filters.model?.filter((m) => modelsByBrand[brand].includes(m)) || [];
        if (remaining.length === 0 && filters.brand?.includes(brand)) {
          removeFilter("brand", brand);
          setSelectAllModelsState((prev) => ({ ...prev, [brand]: false }));
        }
      }
    } else if (type === "color") {
      removeFilter("color", value);
    } else if (type === "fuel") {
      removeFilter("fuel", value);
    } else if (type === "location") {
      removeFilter("location", value);
    } else if (type === "price") {
      removeFilter("minPrice");
      removeFilter("maxPrice");
      setMinPrice("0");
      setMaxPrice("100000");
    } else if (type === "year") {
      removeFilter("minYear");
      removeFilter("maxYear");
      setMinYear("1990");
      setMaxYear(new Date().getFullYear().toString());
    } else if (type === "km") {
      removeFilter("minKm");
      removeFilter("maxKm");
      setMinKm("0");
      setMaxKm("500000");
    } else if (type === "bodyType") {
      removeFilter("bodyType", value);
    } else if (type === "doors") {
      removeFilter("doorFrom");
      removeFilter("doorTo");
      setDoorFrom(2);
      setDoorTo(5);
    } else if (type === "seats") {
      removeFilter("seatFrom");
      removeFilter("seatTo");
      setSeatFrom(2);
      setSeatTo(5);
    } else if (type === "transmission") {
      removeFilter("transmission", value);
    } else if (type === "drivetrain") {
      removeFilter("drivetrain", value);    
    } else if (type === "environmentalTag") {
      removeFilter("environmentalTag", value);
    }else if (type === "power") {
      removeFilter("minPower");
      removeFilter("maxPower");
    }else if (type === "engineDisplacement") {
      removeFilter("minEngineDisplacement");
      removeFilter("maxEngineDisplacement");
    }
  };

  const getActiveFilters = (): { type: string; value: string }[] => {
    const active: { type: string; value: string }[] = [];
    if (filters.model && filters.model.length > 0) {
      filters.model.forEach((model) =>
        active.push({ type: "model", value: model })
      );
    }
    if (filters.brand) {
      filters.brand.forEach((brand) => {
        const modelsForBrand = modelsByBrand[brand] || [];
        const modelsSelected =
          filters.model?.filter((m) => modelsForBrand.includes(m)) || [];
        if (modelsSelected.length === 0)
          active.push({ type: "brand", value: brand });
      });
    }
    if (filters.color) {
      filters.color.forEach((color) =>
        active.push({ type: "color", value: color })
      );
    }
    if (filters.fuel) {
      filters.fuel.forEach((fuel) =>
        active.push({ type: "fuel", value: fuel })
      );
    }
    if (filters.location) {
      filters.location.forEach((location) =>
        active.push({ type: "location", value: location })
      );
    }
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      active.push({
        type: "price",
        value: `Precio: ${filters.minPrice || 0}€ - ${
          filters.maxPrice || 1000000
        }€`,
      });
    }
    if (filters.minYear !== undefined || filters.maxYear !== undefined) {
      active.push({
        type: "year",
        value: `Año: ${filters.minYear || 1990} - ${
          filters.maxYear || new Date().getFullYear()
        }`,
      });
    }
    if (filters.minKm !== undefined || filters.maxKm !== undefined) {
      active.push({
        type: "km",
        value: `Km: ${filters.minKm || 0} - ${filters.maxKm || 500000}`,
      });
    }
    if (filters.bodyType && filters.bodyType.length > 0) {
      filters.bodyType.forEach((bt) =>
        active.push({ type: "bodyType", value: bt })
      );
    }
    if (filters.doorFrom !== undefined || filters.doorTo !== undefined) {
      const doorFromVal = filters.doorFrom ?? 2;
      const doorToVal = filters.doorTo ?? 5;
      active.push({
        type: "doors",
        value: `Puertas: ${doorFromVal} - ${doorToVal}`,
      });
    }
    if (filters.seatFrom !== undefined || filters.seatTo !== undefined) {
      const seatFromVal = filters.seatFrom ?? 2;
      const seatToVal = filters.seatTo ?? 5;
      active.push({
        type: "seats",
        value: `Plazas: ${seatFromVal} - ${seatToVal}`,
      });
    }
    if (filters.transmission && filters.transmission.length > 0) {
      filters.transmission.forEach((transmission) =>
        active.push({ type: "transmission", value: transmission })
      );
    }
    if (filters.environmentalTag && filters.environmentalTag.length > 0) {
      filters.environmentalTag.forEach((tag) =>
        active.push({ type: "environmentalTag", value: tag })
      );
    }
    if (filters.drivetrain && filters.drivetrain.length > 0) {
      filters.drivetrain.forEach((drivetrain) =>
        active.push({ type: "drivetrain", value: drivetrain })
      );
    }
    if (filters.minPower !== undefined || filters.maxPower !== undefined) {
      active.push({
        type: "power",
        value: `Potencia: ${filters.minPower || 0} - ${
          filters.maxPower || 1000
        }`,
      });
    }
    if (filters.minEngineDisplacement !== undefined || filters.maxEngineDisplacement !== undefined) {
      active.push({
        type: "engineDisplacement",
        value: `Capacidad: ${filters.minEngineDisplacement || 0} - ${
          filters.maxEngineDisplacement || 10000
        }`,
      });
    }

    return active;
  };

  const activeFiltersArray = useMemo(
    () => getActiveFilters(),
    [filters, modelsByBrand, uniqueBrands]
  );

  const { debouncedValidateMinPrice, debouncedValidateMaxPrice } =
    usePriceDebounce({
      minPrice,
      maxPrice,
      setMinPrice,
      setMaxPrice,
      setFilter,
      toast,
    });
  const { debouncedValidateMinYear, debouncedValidateMaxYear } =
    useYearDebounce({
      minYear,
      maxYear,
      setMinYear,
      setMaxYear,
      setFilter,
      toast,
    });
  const { debouncedValidateMinKm, debouncedValidateMaxKm } = useKmDebounce({
    minKm,
    maxKm,
    setMinKm,
    setMaxKm,
    setFilter,
    toast,
  });

  const brandModelConfig = {
    filters,
    searchTerm,
    setSearchTerm,
    displayedBrands,
    modelsByBrand,
    expandedBrands,
    handleBrandClick,
    lowerSearch,
    selectAllModelsState,
    handleSelectAllModels,
    handleModelChange,
    filteredBrands,
    showAllBrands,
    setShowAllBrands,
  };

  const PriceFilterConfig = {
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    debouncedValidateMinPrice,
    debouncedValidateMaxPrice,
  };

  const YearFilterConfig = {
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    debouncedValidateMinYear,
    debouncedValidateMaxYear,
    currentYear,
  };

  const KmFilterConfig = {
    minKm,
    setMinKm,
    maxKm,
    setMaxKm,
    debouncedValidateMinKm,
    debouncedValidateMaxKm,
  };

  return (
    <div className="space-y-6 pl-4 pr-[1.8rem] py-2">
        {activeFiltersArray.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Tu búsqueda</h3>
              <Button
                variant="link"
                className="text-sm h-auto p-0"
                onClick={handleClearFilters}
              >
                Eliminar filtros
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeFiltersArray.map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {filter.value}
                  <button
                    onClick={() =>
                      handleRemoveFilter(filter.type, filter.value)
                    }
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}
        <Accordion type="multiple" defaultValue={["marca"]}>
          <BrandModelFilter config={brandModelConfig} />

          <PriceFilter config={PriceFilterConfig} />

          <YearFilter config={YearFilterConfig} />

          <BodyFilter
            uniqueBodyTypes={uniqueBodyTypes}
            filters={filters}
            doorFrom={doorFrom}
            doorTo={doorTo}
            seatFrom={seatFrom}
            seatTo={seatTo}
            setDoorFrom={(value) => {
              setDoorFrom(value);
              setFilter("doorFrom", value);
            }}
            setDoorTo={(value) => {
              setDoorTo(value);
              setFilter("doorTo", value);
            }}
            setSeatFrom={(value) => {
              setSeatFrom(value);
              setFilter("seatFrom", value);
            }}
            setSeatTo={(value) => {
              setSeatTo(value);
              setFilter("seatTo", value);
            }}
            handleBodyTypeChange={handleBodyTypeChange}
          />
          <MotorFilter />

          <KmFilter config={KmFilterConfig} />

          <ColorFilter
            uniqueColors={uniqueColors}
            filters={filters}
            handleColorChange={handleColorChange}
          />

          <LocationFilter
            uniqueLocations={uniqueLocations}
            filters={filters}
            handleLocationChange={handleLocationChange}
          />
        </Accordion>
      </div>
  );
}

```

# src/features/catalog-cars/components/CarList.tsx

```tsx
"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useViewStore, useFilterStore } from "@/lib/store";
import type { Car } from "@/lib/definitions";
import CarCardGrid from "./CarCardGrid";
import CarCardList from "./CarCardList";
import { CarCardSkeleton } from "@/features/car/skeleton/CarSkeleton";

interface CarListProps {
  cars?: Car[];
}

function CarList({ cars: carsProp }: CarListProps) {
  const { view } = useViewStore();
  const { filteredCars, isLoading } = useFilterStore();
  const cars = useMemo(
    () => carsProp ?? filteredCars,
    [carsProp, filteredCars]
  );

  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowSkeleton(true), 300);
      return () => clearTimeout(timer);
    }
    setShowSkeleton(false);
  }, [isLoading]);

  if (showSkeleton) {
    return <LoadingSkeleton />;
  }

  if (cars.length === 0) {
    return <NoResults />;
  }

  return view === "grid" ? (
    <CarGrid cars={cars} />
  ) : (
    <CarListView cars={cars} />
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  );
}

function NoResults() {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium mb-2">No se encontraron vehículos</h3>
      <p className="text-muted-foreground">
        Intenta cambiar los filtros de búsqueda para ver más resultados.
      </p>
    </div>
  );
}

function CarGrid({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
      {cars.map((car) => (
        <CarCardGrid key={car.id} car={car} />
      ))}
    </div>
  );
}

function CarListView({ cars }: { cars: Car[] }) {
  return (
    <div className="space-y-4 px-1">
      {cars.map((car) => (
        <CarCardList key={car.id} car={car} />
      ))}
    </div>
  );
}

export default React.memo(CarList);

```

# src/features/catalog-cars/components/CatalogClient.tsx

```tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useViewStore, useFilterStore } from "@/lib/store";
import type { CatalogClientProps } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, X } from "lucide-react";
import CarList from "./CarList";
import CarFilters from "./CarFilters";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useResponsiveView } from "@/hooks/useResponsiveView";
import { LoadingVehicles } from "./LoadingCars";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CatalogClient({
  allCars,
  initialCars,
  brand,
  model,
  fuel,
  color,
  location,
  maxKm,
  minKm,
  maxPrice,
  minPrice,
  maxYear,
  minYear,
  bodyType,
  doorFrom,
  doorTo,
  seatFrom,
  seatTo,
}: CatalogClientProps) {
  const { view, setView } = useViewStore();
  const {
    filteredCars,
    setFilteredCars,
    setFilter,
    setAllCars,
    clearFilters,
    isLoading,
  } = useFilterStore();
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("recent");
  const [showLoader, setShowLoader] = useState(false);
  const [stickyHeaderTop, setStickyHeaderTop] = useState(0);

  useEffect(() => {
    clearFilters();

    const brandrc = brand?.toString() || "";
    const modelrc = model?.toString() || "";
    const brandArray = brandrc.split(",").filter(Boolean);
    const modelArray = modelrc.split(",").filter(Boolean);
    if (brand) {
      brandArray.forEach((b) => setFilter("brand", b));
    }
    if (model) {
      modelArray.forEach((m) => setFilter("model", m));
    }
    const fuelrc = fuel?.toString() || "";
    const colorrc = color?.toString() || "";
    const locationrc = location?.toString() || "";
    const fuelArray = fuelrc.split(",").filter(Boolean);
    const colorArray = colorrc.split(",").filter(Boolean);
    const locationArray = locationrc.split(",").filter(Boolean);
    if (fuel) {
      fuelArray.forEach((f) => setFilter("fuel", f));
    }
    if (color) {
      colorArray.forEach((c) => setFilter("color", c));
    }
    if (location) {
      locationArray.forEach((l) => setFilter("location", l));
    }
    if (maxKm) {
      setFilter("maxKm", maxKm);
    }
    if (minKm) {
      setFilter("minKm", minKm);
    }
    if (maxPrice) {
      setFilter("maxPrice", maxPrice);
    }
    if (minPrice) {
      setFilter("minPrice", minPrice);
    }
    if (maxYear) {
      setFilter("maxYear", maxYear);
    }
    if (minYear) {
      setFilter("minYear", minYear);
    }
    const bodyTyperc = bodyType?.toString() || "";
    const bodyArray = bodyTyperc.split(",").filter(Boolean);

    if (bodyType) {
      bodyArray.forEach((b) => setFilter("bodyType", b));
    }
    if (doorFrom) {
      setFilter("doorFrom", doorFrom);
    }
    if (doorTo) {
      setFilter("doorTo", doorTo);
    }
    if (seatFrom) {
      setFilter("seatFrom", seatFrom);
    }
    if (seatTo) {
      setFilter("seatTo", seatTo);
    }

    setAllCars(allCars);
    setFilteredCars(initialCars);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => setShowLoader(true), 300);
    } else {
      setShowLoader(false);
    }
    return () => clearTimeout(timeout);
  }, [isLoading]);

  useResponsiveView();

  const sortedCars = useMemo(() => {
    const cars = [...filteredCars];
    switch (sortOrder) {
      case "price-asc":
        return cars.sort((a, b) => a.price - b.price);
      case "price-desc":
        return cars.sort((a, b) => b.price - a.price);
      case "km-asc":
        return cars.sort((a, b) => a.mileage - b.mileage);
      default:
        return cars;
    }
  }, [filteredCars, sortOrder]);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const newIsOpen = !prev;
      if (newIsOpen && isMobile) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      return newIsOpen;
    });
  }, [isMobile]);

  const activeFiltersCount = useFilterStore((state) =>
    state.getActiveFiltersCount()
  );

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const navbarHeight = isMobile ? 50 : 80;
      setStickyHeaderTop(navbarHeight);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("filters-open-no-navbar");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("filters-open-no-navbar");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("filters-open-no-navbar");
    };
  }, [isOpen]);

  return (
    <div
      className={`container mx-auto flex flex-col lg:flex-row min-h-screen pt-4 pb-12 gap-8 md:mt-20 animate-fadeInAfterLoad ${
        isOpen ? "mt-0" : "mt-[50px]"
      }`}
    >
      <aside className="hidden lg:block lg:w-80 lg:min-w-80">
        <div className="sticky top-24 bg-white rounded-lg border shadow-md max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <CarFilters />
        </div>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col h-[100dvh] lg:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Filtros</h2>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <CarFilters />
          </div>
          <div className="p-4 border-t bg-white">
            <Button
              onClick={toggleMenu}
              className="w-full bg-gray-900 text-white h-10"
            >
              Ver resultados ({filteredCars.length})
            </Button>
          </div>
        </div>
      )}

      <section className="flex-1">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Concesionario de coches de segunda mano, ocasión y km 0
          </h1>
        </header>

        <div
          className="sticky bg-background py-4 mb-8 z-20"
          style={{ top: `${stickyHeaderTop}px` }}
        >
          <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
            <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold w-full">
              Se han encontrado {sortedCars.length} vehículo(s)
            </h2>
            <div className="flex items-center gap-4 w-full justify-end">
              <div className="hidden lg:flex gap-2">
                <Button
                  variant={view === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setView("grid")}
                  aria-label="Ver resultados en cuadrícula"
                  title="Vista en cuadrícula"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setView("list")}
                  aria-label="Ver resultados en lista"
                  title="Vista en lista"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMenu}
                aria-label={isOpen ? "Cerrar filtros" : "Abrir filtros"}
                title={isOpen ? "Cerrar filtros" : "Abrir filtros"}
                className="lg:hidden relative"
              >
                <Filter className="h-4 w-4" />
                {activeFiltersCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute top-[-10px] right-[-13px] px-1.5 py-0.5 text-xs min-w-[20px] h-5 flex items-center justify-center"
                    aria-label="Filtros activos"
                    title="Filtros activos"
                  >
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger aria-label="Ordenar vehículos por">
                  <SelectValue placeholder="Ordenar resultados" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="price-asc">
                    Precio: menor a mayor
                  </SelectItem>
                  <SelectItem value="price-desc">
                    Precio: mayor a menor
                  </SelectItem>
                  <SelectItem value="km-asc">
                    Kilómetros: menor a mayor
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          {isLoading && showLoader ? (
            <LoadingVehicles />
          ) : (
            <div className="transition-opacity duration-300 ease-in-out opacity-100">
              <CarList cars={sortedCars} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

```

# src/features/catalog-cars/components/filters/BodyFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FiltersData } from "@/lib/definitions";
import { CarFront } from "lucide-react";

export interface BodyTypeOption {
  value: string;
  label: string;
  image: string;
}

export interface BodyTypeDoorsSeatsFilterProps {
  filters: FiltersData;
  uniqueBodyTypes: BodyTypeOption[];
  doorFrom: number;
  doorTo: number;
  seatFrom: number;
  seatTo: number;
  setDoorFrom: (value: number) => void;
  setDoorTo: (value: number) => void;
  setSeatFrom: (value: number) => void;
  setSeatTo: (value: number) => void;
  handleBodyTypeChange: (bodyType: string, checked: boolean) => void;
}

export function BodyFilter({
  filters,
  uniqueBodyTypes,
  doorFrom,
  doorTo,
  seatFrom,
  seatTo,
  setDoorFrom,
  setDoorTo,
  setSeatFrom,
  setSeatTo,
  handleBodyTypeChange,
}: BodyTypeDoorsSeatsFilterProps) {
  const doorOptions = [2, 3, 4, 5];
  const seatOptions = [2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <AccordionItem value="bodyType">
      <AccordionTrigger className="py-3">
      <div className="flex items-center gap-2">
          <div>
          <CarFront className="h-5 w-5" />
          </div>
          <span>Carrocería</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-6">
          {/* Carrocería */}
          <div>
            <Label className="block mb-2 font-semibold">
              Tipo de Carrocería
            </Label>
            <div className="grid grid-cols-2 gap-4">
              {uniqueBodyTypes.map((body) => (
                <div key={body.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`bodytype-${body.value}`}
                    checked={filters.bodyType?.includes(body.value) || false}
                    onCheckedChange={(checked) =>
                      handleBodyTypeChange(body.value, checked === true)
                    }
                  />
                  <Label htmlFor={`bodytype-${body.value}`} className="flex flex-col items-center gap-2">
                    <Image src={body.image} alt={body.label} width={100} height={56} />
                    <span>{body.label}</span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
          {/* Puertas */}
          <div>
            <Label className="block mb-2 font-semibold">Puertas</Label>
            <div className="grid grid-cols-2 gap-4 p-1">
              <div>
                <Label className="mb-1">Desde</Label>
                <Select value={doorFrom.toString()} onValueChange={(value) => setDoorFrom(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Desde" />
                  </SelectTrigger>
                  <SelectContent>
                    {doorOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1">Hasta</Label>
                <Select value={doorTo.toString()} onValueChange={(value) => setDoorTo(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hasta" />
                  </SelectTrigger>
                  <SelectContent>
                    {doorOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Plazas */}
          <div>
            <Label className="block mb-2 font-semibold">Plazas</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Desde</Label>
                <Select value={seatFrom.toString()} onValueChange={(value) => setSeatFrom(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Desde" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Hasta</Label>
                <Select value={seatTo.toString()} onValueChange={(value) => setSeatTo(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hasta" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/BrandModelFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CarIcon, ChevronDown, ChevronRight, ListTodo, Search, X } from "lucide-react";
import { FiltersData } from "@/lib/definitions";

interface BrandModelFilterProps {
  config: {
    filters: FiltersData;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    displayedBrands: string[];
    modelsByBrand: Record<string, string[]>;
    expandedBrands: Record<string, boolean>;
    handleBrandClick: (brand: string) => void;
    lowerSearch: string;
    selectAllModelsState: Record<string, boolean>;
    handleSelectAllModels: (brand: string, checked: boolean) => void;
    handleModelChange: (model: string, brand: string, checked: boolean) => void;
    filteredBrands: string[];
    showAllBrands: boolean;
    setShowAllBrands: (value: boolean) => void;
  };
}

export function BrandModelFilter({ config }: BrandModelFilterProps) {
  const {
    filters,
    searchTerm,
    setSearchTerm,
    displayedBrands,
    modelsByBrand,
    expandedBrands,
    handleBrandClick,
    lowerSearch,
    selectAllModelsState,
    handleSelectAllModels,
    handleModelChange,
    filteredBrands,
    showAllBrands,
    setShowAllBrands,
  } = config;
  return (
    <AccordionItem value="marca">
      <AccordionTrigger className="py-3">
        <div className="flex items-center gap-2">
          <div>
          <CarIcon className="h-5 w-5" />
          <ListTodo className="h-4 w-4 -mt-1 ml-[2px]" />
          </div>
          <span>Marca y modelo</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="p-3">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar marca o modelo..."
              className="pl-10 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                aria-label="Borrar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="space-y-4 max-h-96 overflow-auto custom-scrollbar">
            {displayedBrands.map((brand) => {
              const autoExpand =
                searchTerm !== "" &&
                modelsByBrand[brand].some((model) =>
                  model.toLowerCase().includes(lowerSearch)
                );
              const isExpanded = autoExpand || expandedBrands[brand] || false;
              return (
                <div key={brand} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleBrandClick(brand)}
                      className="flex items-center space-x-2 font-medium hover:text-primary"
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                      <span>{brand}</span>
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="ml-6 space-y-2 border-l-2 pl-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`all-models-${brand}`}
                          checked={selectAllModelsState[brand] || false}
                          onCheckedChange={(checked) =>
                            handleSelectAllModels(brand, checked === true)
                          }
                        />
                        <Label
                          htmlFor={`all-models-${brand}`}
                          className="font-medium"
                        >
                          Todos los modelos
                        </Label>
                      </div>
                      {modelsByBrand[brand]?.map((model) => (
                        <div
                          key={`${brand}-${model}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`model-${brand}-${model}`}
                            checked={filters.model?.includes(model) || false}
                            onCheckedChange={(checked) =>
                              handleModelChange(model, brand, checked === true)
                            }
                          />
                          <Label htmlFor={`model-${brand}-${model}`}>
                            {model}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredBrands.length > 6 && (
            <Button
              variant="link"
              className="mt-4 w-full text-center"
              onClick={() => setShowAllBrands(!showAllBrands)}
            >
              {showAllBrands ? "Ver menos" : "Ver todas las marcas"}
            </Button>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/ColorFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FiltersData } from "@/lib/definitions";
import { Palette } from "lucide-react";

const colorMap: Record<string, string> = {
  Amarillo: "#FFD700",
  Azul: "#0000FF",
  Beige: "#F5F5DC",
  Blanco: "#FFFFFF",
  Granate: "#800000",
  "Gris / Plata": "#C0C0C0",
  Marrón: "#8B4513",
  Naranja: "#FFA500",
  Negro: "#000000",
  "Rojo": "#FF0000",
  Rosa: "#FFC0CB",
  Verde: "#008000",
  "Violeta / Lila": "#8F00FF",
};

interface ColorFilterProps {
    uniqueColors: string[];
    filters: FiltersData;
    handleColorChange: (color: string, checked: boolean) => void;
}
export function ColorFilter({ uniqueColors, filters, handleColorChange }: ColorFilterProps) {

  return (
    <AccordionItem value="color">
    <AccordionTrigger className="py-3">
      <div className="flex items-center gap-2">
        <Palette className="h-5 w-5" />
        <span>Color</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-2 py-2">
        {uniqueColors.map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <Checkbox
              id={`color-${color}`}
              checked={filters.color?.includes(color) || false}
              onCheckedChange={(checked) =>
                handleColorChange(color, checked === true)
              }
            />
            <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: colorMap[color] ?? "#ccc" }}
              />
            <Label htmlFor={`color-${color}`}>{color}</Label>
          </div>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/KmFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gauge } from "lucide-react";

interface KmFilterProps {
  config: {
    minKm: string;
    setMinKm: (value: string) => void;
    maxKm: string;
    setMaxKm: (value: string) => void;
    debouncedValidateMinKm: (value: string) => void;
    debouncedValidateMaxKm: (value: string) => void;
  };
}
export function KmFilter({ config }: KmFilterProps) {
  const {
    minKm,
    setMinKm,
    maxKm,
    setMaxKm,
    debouncedValidateMinKm,
    debouncedValidateMaxKm,
  } = config;
  return (
    <AccordionItem value="km">
      <AccordionTrigger className="py-3">
        <div className="flex items-center gap-2">
          <Gauge className="h-5 w-5" />
          <span>Kilómetros</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4 p-1">
            <div>
              <Label htmlFor="min-km">Desde</Label>
              <Input
                id="min-km"
                type="number"
                value={minKm}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setMinKm(e.target.value);
                  debouncedValidateMinKm(e.target.value);
                }}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="max-km">Hasta</Label>
              <Input
                id="max-km"
                type="number"
                value={maxKm}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setMaxKm(e.target.value);
                  debouncedValidateMaxKm(e.target.value);
                }}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/LocationFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FiltersData } from "@/lib/definitions";

import { MapPin } from "lucide-react";

interface LocationFilterProps {
    uniqueLocations: string[];
    filters: FiltersData;
    handleLocationChange: (location: string, checked: boolean) => void;
}
export function LocationFilter({ uniqueLocations, filters, handleLocationChange }: LocationFilterProps) {

  return (
    <AccordionItem value="ubicacion" className="mb-4">
    <AccordionTrigger className="py-3">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        <span>Ubicación</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-2 py-2">
        {uniqueLocations.map((location) => (
          <div key={location} className="flex items-center space-x-2">
            <Checkbox
              id={`location-${location}`}
              checked={filters.location?.includes(location) || false}
              onCheckedChange={(checked) =>
                handleLocationChange(location, checked === true)
              }
            />
            <Label htmlFor={`location-${location}`}>{location}</Label>
          </div>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/MotorFilter.tsx

```tsx
"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFilterStore } from "@/lib/store";
import { Wrench } from "lucide-react";

const transmissions = ["Manual", "Automático", "CVT", "DSG / Doble embrague"];
const fuels = [
  "Diésel",
  "Gasolina",
  "Eléctrico",
  "Híbrido",
  "Híbrido enchufable",
  "Gas licuado (GLP)",
  "Gas natural (GNC)",
  "Otros",
];
const envTags = [
  {
    value: "CERO",
    label: "Etiqueta CERO",
    icon: "/distintivos/CERO.svg",
  },
  {
    value: "ECO",
    label: "Etiqueta ECO",
    icon: "/distintivos/ECO.svg",
  },
  {
    value: "C",
    label: "Etiqueta C",
    icon: "/distintivos/C.svg",
  },
  {
    value: "B",
    label: "Etiqueta B",
    icon: "/distintivos/B.svg",
  },
];

const drivetrains = ["4x4", "Delantera", "Trasera"];

const powerOptions = [
  { cv: 50, kw: 37 },
  { cv: 60, kw: 44 },
  { cv: 70, kw: 51 },
  { cv: 80, kw: 59 },
  { cv: 90, kw: 66 },
  { cv: 100, kw: 74 },
  { cv: 110, kw: 81 },
  { cv: 120, kw: 88 },
  { cv: 130, kw: 96 },
  { cv: 140, kw: 104 },
  { cv: 150, kw: 112 },
  { cv: 160, kw: 120 },
  { cv: 170, kw: 128 },
  { cv: 180, kw: 136 },
  { cv: 190, kw: 144 },
  { cv: 200, kw: 152 },
  { cv: 250, kw: 192 },
  { cv: 300, kw: 232 },
  { cv: 350, kw: 272 },
  { cv: 400, kw: 312 },
  { cv: 500, kw: 392, last: true },
];
const displacementOptions = [
  { cc: 1000 },
  { cc: 1200 },
  { cc: 1400 },
  { cc: 1600 },
  { cc: 1800 },
  { cc: 1900 },
  { cc: 2000 },
  { cc: 2200 },
  { cc: 2400 },
  { cc: 2600 },
  { cc: 3000 },
  { cc: 3500 },
  { cc: 4000 },
  { cc: 4500 },
  { cc: 5000 },
  { cc: 5500 },
  { cc: 6000 },
  { cc: 6500 },
  { cc: 7000, last: true },
];

export function MotorFilter() {
  const { filters, setFilter, removeFilter, applyFilters } = useFilterStore();

  const handleCheckboxChange = (
    key: "transmission" | "fuel" | "environmentalTag" | "drivetrain",
    value: string,
    checked: boolean
  ) => {
    if (checked) {
      setFilter(key, value);
    } else {
      removeFilter(key, value);
    }
    applyFilters();
  };

  const isChecked = (
    key: "transmission" | "fuel" | "environmentalTag" | "drivetrain",
    value: string
  ) => {
    return filters[key]?.includes(value) ?? false;
  };

  const handleRangeSelect = (
    key:
      | "minPower"
      | "maxPower"
      | "minEngineDisplacement"
      | "maxEngineDisplacement",
    value: string
  ) => {
    if (value === "none") {
      removeFilter(key);
    } else {
      setFilter(key, Number(value));
    }
    applyFilters();
  };

  const formatCC = (cc: number) => cc.toLocaleString("es");

  return (
    <AccordionItem value="motor">
      <AccordionTrigger className="py-3">
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          <span>Motor</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="space-y-4 mt-4">
        {/* Cambio */}
        <div>
          <h4 className="font-semibold mb-2">Cambio</h4>
          {transmissions.map((t) => (
            <div key={t} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`trans-${t}`}
                checked={isChecked("transmission", t)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("transmission", t, checked === true)
                }
              />
              <Label htmlFor={`trans-${t}`}>{t}</Label>
            </div>
          ))}
        </div>

        {/* Combustible */}
        <div>
          <h4 className="font-semibold mb-2">Combustible</h4>
          {fuels.map((f) => (
            <div key={f} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`fuel-${f}`}
                checked={isChecked("fuel", f)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("fuel", f, checked === true)
                }
              />
              <Label htmlFor={`fuel-${f}`}>{f}</Label>
            </div>
          ))}
        </div>

        {/* Etiqueta medioambiental */}
        <div>
          <h4 className="font-semibold mb-2">Etiqueta medioambiental</h4>
          {envTags.map((tag) => (
            <div key={tag.value} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`env-${tag.value}`}
                checked={isChecked("environmentalTag", tag.value)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(
                    "environmentalTag",
                    tag.value,
                    checked === true
                  )
                }
              />
              <img src={tag.icon} alt={tag.label} className="w-6 h-6" />
              <Label htmlFor={`env-${tag.value}`}>{tag.label}</Label>
            </div>
          ))}
        </div>

        {/* Tracción */}
        <div>
          <h4 className="font-semibold mb-2">Tracción</h4>
          {drivetrains.map((drive) => (
            <div key={drive} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`drive-${drive}`}
                checked={isChecked("drivetrain", drive)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("drivetrain", drive, checked === true)
                }
              />
              <Label htmlFor={`drive-${drive}`}>{drive}</Label>
            </div>
          ))}
        </div>

        {/* Potencia */}
        <div>
          <h4 className="font-semibold mb-2">Potencia (CV)</h4>
          <div className="flex gap-2">
            <Select
              onValueChange={(val) => handleRangeSelect("minPower", val)}
              value={filters.minPower ? String(filters.minPower) : "none"}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Desde" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Desde</SelectItem>
                {powerOptions.map((opt) => (
                  <SelectItem key={opt.cv} value={String(opt.cv)}>
                    {opt.last
                      ? `${opt.cv} cv (${opt.kw} kW) o más`
                      : `${opt.cv} cv (${opt.kw} kW)`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(val) => handleRangeSelect("maxPower", val)}
              value={filters.maxPower ? String(filters.maxPower) : "none"}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Hasta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Hasta</SelectItem>
                {powerOptions.map((opt) => (
                  <SelectItem key={opt.cv} value={String(opt.cv)}>
                    {opt.last
                      ? `${opt.cv} cv (${opt.kw} kW) o más`
                      : `${opt.cv} cv (${opt.kw} kW)`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cilindrada */}
        <div>
          <h4 className="font-semibold mb-2">Cilindrada (cc)</h4>
          <div className="flex gap-2">
            <Select
              onValueChange={(val) =>
                handleRangeSelect("minEngineDisplacement", val)
              }
              value={
                filters.minEngineDisplacement
                  ? String(filters.minEngineDisplacement)
                  : "none"
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Desde" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Desde</SelectItem>
                {displacementOptions.map((opt) => (
                  <SelectItem key={opt.cc} value={String(opt.cc)}>
                    {opt.last
                      ? `${formatCC(opt.cc)} cc o más`
                      : `${formatCC(opt.cc)} cc`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(val) =>
                handleRangeSelect("maxEngineDisplacement", val)
              }
              value={
                filters.maxEngineDisplacement
                  ? String(filters.maxEngineDisplacement)
                  : "none"
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Hasta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Hasta</SelectItem>
                {displacementOptions.map((opt) => (
                  <SelectItem key={opt.cc} value={String(opt.cc)}>
                    {opt.last
                      ? `${formatCC(opt.cc)} cc o más`
                      : `${formatCC(opt.cc)} cc`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/PriceFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

interface PriceFilterProps {
  config: {
    minPrice: string;
    setMinPrice: (value: string) => void;
    maxPrice: string;
    setMaxPrice: (value: string) => void;
    debouncedValidateMinPrice: (value: string) => void;
    debouncedValidateMaxPrice: (value: string) => void;
  };
}
export function PriceFilter( { config }: PriceFilterProps) {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice, debouncedValidateMinPrice, debouncedValidateMaxPrice } = config;
  return (
    <AccordionItem value="precio">
      <AccordionTrigger className="py-3">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          <span>Precio</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4 p-1">
            <div>
              <Label htmlFor="min-price">Mínimo</Label>
              <Input
                id="min-price"
                type="number"
                value={minPrice}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  debouncedValidateMinPrice(e.target.value);
                }}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="max-price">Máximo</Label>
              <Input
                id="max-price"
                type="number"
                value={maxPrice}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  debouncedValidateMaxPrice(e.target.value);
                }}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/filters/YearFilter.tsx

```tsx
"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar1 } from "lucide-react";
interface YearFilterProps {
  config: {
    minYear: string;
    setMinYear: (value: string) => void;
    maxYear: string;
    setMaxYear: (value: string) => void;
    debouncedValidateMinYear: (value: string) => void;
    debouncedValidateMaxYear: (value: string) => void;
    currentYear: number;
  };
}
export function YearFilter({ config }: YearFilterProps) {
  const {
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    debouncedValidateMinYear,
    debouncedValidateMaxYear,
    currentYear,
  } = config;
  return (
    <AccordionItem value="año">
      <AccordionTrigger className="py-3">
        <div className="flex items-center gap-2">
          <Calendar1 className="h-5 w-5" />
          <span>Año</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4 p-1">
            <div>
              <Label htmlFor="min-year">Desde</Label>
              <Input
                id="min-year"
                type="number"
                max={currentYear}
                value={minYear}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setMinYear(e.target.value);
                  debouncedValidateMinYear(e.target.value);
                }}
              />
            </div>
            <div>
              <Label htmlFor="max-year">Hasta</Label>
              <Input
                id="max-year"
                type="number"
                value={maxYear}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setMaxYear(e.target.value);
                  debouncedValidateMaxYear(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

```

# src/features/catalog-cars/components/LoadingCars.tsx

```tsx
export function LoadingVehicles() {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <svg
          fill="#0f172a"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
        >
          <rect x="1" y="1" width="7.33" height="7.33">
            <animate
              id="spinner_oJFS"
              begin="0;spinner_5T1J.end+0.2s"
              attributeName="x"
              dur="0.6s"
              values="1;4;1"
            />
            <animate
              begin="0;spinner_5T1J.end+0.2s"
              attributeName="y"
              dur="0.6s"
              values="1;4;1"
            />
            <animate
              begin="0;spinner_5T1J.end+0.2s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="0;spinner_5T1J.end+0.2s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="8.33" y="1" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="x"
              dur="0.6s"
              values="8.33;11.33;8.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="y"
              dur="0.6s"
              values="1;4;1"
            />
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="1" y="8.33" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="x"
              dur="0.6s"
              values="1;4;1"
            />
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="y"
              dur="0.6s"
              values="8.33;11.33;8.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.1s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="15.66" y="1" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="x"
              dur="0.6s"
              values="15.66;18.66;15.66"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="y"
              dur="0.6s"
              values="1;4;1"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="8.33" y="8.33" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="x"
              dur="0.6s"
              values="8.33;11.33;8.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="y"
              dur="0.6s"
              values="8.33;11.33;8.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="1" y="15.66" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="x"
              dur="0.6s"
              values="1;4;1"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="y"
              dur="0.6s"
              values="15.66;18.66;15.66"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.2s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="15.66" y="8.33" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="x"
              dur="0.6s"
              values="15.66;18.66;15.66"
            />
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="y"
              dur="0.6s"
              values="8.33;11.33;8.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="8.33" y="15.66" width="7.33" height="7.33">
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="x"
              dur="0.6s"
              values="8.33;11.33;8.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="y"
              dur="0.6s"
              values="15.66;18.66;15.66"
            />
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.3s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
          <rect x="15.66" y="15.66" width="7.33" height="7.33">
            <animate
              id="spinner_5T1J"
              begin="spinner_oJFS.begin+0.4s"
              attributeName="x"
              dur="0.6s"
              values="15.66;18.66;15.66"
            />
            <animate
              begin="spinner_oJFS.begin+0.4s"
              attributeName="y"
              dur="0.6s"
              values="15.66;18.66;15.66"
            />
            <animate
              begin="spinner_oJFS.begin+0.4s"
              attributeName="width"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
            <animate
              begin="spinner_oJFS.begin+0.4s"
              attributeName="height"
              dur="0.6s"
              values="7.33;1.33;7.33"
            />
          </rect>
        </svg>
        <span className="text-lg font-medium">Cargando vehículos...</span>
      </div>
    );
  }
  
```

# src/features/catalog-cars/components/ViewToggle.tsx

```tsx
"use client";

import { Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useViewStore } from "@/lib/store"

export default function ViewToggle() {
  const { view, setView } = useViewStore()

  return (
    <div className="flex gap-2">
      <Button
        variant={view === "grid" ? "default" : "outline"}
        size="icon"
        onClick={() => setView("grid")}
        aria-label="Vista en cuadrícula"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={view === "list" ? "default" : "outline"}
        size="icon"
        onClick={() => setView("list")}
        aria-label="Vista en lista"
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  )
}


```

# src/features/catalog-cars/skeleton/CarFiltersSkeleton.tsx

```tsx
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarFiltersSkeleton() {
  return (
    <div className="space-y-6 p-6 overflow-hidden">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-32 rounded" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
      <Accordion type="multiple" defaultValue={["marca", "precio"]}>
        <AccordionItem value="marca">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-3 space-y-4">
              <Skeleton className="h-10 w-full rounded" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full rounded" />
              ))}
              <Skeleton className="h-8 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="precio">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="año">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="km">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

```

# src/features/catalog-cars/skeleton/CatalogPageSkeleton.tsx

```tsx
"use client";

import { useViewStore } from "@/lib/store";
import { Skeleton } from "@/components/ui/skeleton";
import { useResponsiveView } from "@/hooks/useResponsiveView";
import CarFiltersSkeleton from "./CarFiltersSkeleton";
import { CarCardSkeleton, CarCardSkeletonList } from "@/features/car/skeleton/CarSkeleton";

export default function CatalogPageSkeleton() {
  const { view } = useViewStore();
  useResponsiveView(); 

  return (
    <div className="container mx-auto flex flex-col lg:flex-row min-h-screen py-12 gap-8 mt-16">
      <aside className="hidden lg:block lg:w-80 lg:min-w-80">
        <div className="sticky top-24 bg-white rounded-lg shadow-md max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <CarFiltersSkeleton />
        </div>
      </aside>

      <section className="flex-1">
        <header className="mb-8">
          <Skeleton className="h-8 w-1/2 rounded mb-4" />
          <Skeleton className="h-4 w-3/4 rounded mb-2" />
          <Skeleton className="h-4 w-2/3 rounded" />
        </header>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <CarCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <CarCardSkeletonList key={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

```

# src/features/chatbot/components/ChatBot.tsx

```tsx
"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Send, UserCircle2, ArrowLeft, BotMessageSquare } from "lucide-react";
import { useRouter } from 'next/navigation';
import {
  chatFlow,
  type UserData,
  type ChatButtonOption,
} from "@/lib/chatFlow";
import { useChatStore } from '@/lib/chatStore';
import { useFilterStore as useGlobalFilterStore } from '@/lib/store';
import type { FiltersData, ArrayFilterKey, NumberFilterKey } from '@/lib/definitions';
import { ChatMessageInStore } from "@/lib/chatFlowTypes";


export default function ChatBotInternal() {
  const router = useRouter();
  const {
    messages,
    currentStepId,
    userData,
    history,
    errorMessage,
    isChatInitialized,
    addMessageToStore,
    setCurrentStepIdInStore,
    setUserDataInStore,
    pushHistoryInStore,
    popHistoryFromStore,
    setHistoryInStore,
    setErrorMessageInStore,
    setMessagesDirectlyInStore,
    clearButtonsFromBotMessagesInStore,
    setIsChatInitializedInStore,
  } = useChatStore();

  const globalSetFilter = useGlobalFilterStore((state) => state.setFilter);
  const globalClearFilters = useGlobalFilterStore(
    (state) => state.clearFilters
  );

  const [userInput, setUserInput] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addMessage = useCallback((sender: "user" | "bot", text: string, buttons?: ChatButtonOption[]) => {
    if (sender === 'bot' && buttons && buttons.length > 0) {
        clearButtonsFromBotMessagesInStore();
    }
    addMessageToStore(sender, text, buttons);
  }, [addMessageToStore, clearButtonsFromBotMessagesInStore]);

  const processStep = useCallback(
    (stepId: string, currentData: UserData) => {
      const step = chatFlow[stepId];
      if (!step) {
        console.error(`Error: No se encontró el paso con ID "${stepId}"`);
        addMessage("bot", "Lo siento, ha ocurrido un error interno. Volviendo al inicio.");
        setCurrentStepIdInStore("start");
        setHistoryInStore(["start"]);
        setTimeout(() => processStep("start", {}), 0);
        return;
      }

      const botMessageText = typeof step.message === "function" ? step.message(currentData) : step.message;
      let stepOptions = typeof step.options === "function" ? step.options(currentData) : step.options;
      
      const prevIdFunc = step.previousStepId;
      const prevId = typeof prevIdFunc === 'function' ? prevIdFunc(currentData) : prevIdFunc;

      if (!stepOptions && prevId && step.id !== 'start' && !step.isUserInput && step.id !== 'endChat') {
          if (prevId) { 
              stepOptions = [{label: "Atrás", nextStepId: prevId, value: `internal_back_to_${prevId}`}];
          }
      }

      addMessage("bot", botMessageText, stepOptions);

      if (step.isUserInput && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      
      const navigateToPath = typeof step.navigateTo === 'function' ? step.navigateTo(currentData) : step.navigateTo;
      const redirectPathValue = typeof step.redirectPath === 'function' ? step.redirectPath(currentData) : step.redirectPath;

      if (navigateToPath) {
        if (step.action) { step.action("", currentData); }

        if (navigateToPath.includes("?")) {
          const searchParamsString = navigateToPath.split("?")[1];
          const params = new URLSearchParams(searchParamsString);
          
          globalClearFilters(); 

          params.forEach((value, key) => {
            const filterKey = key as keyof FiltersData;
            const numericKeys: (keyof FiltersData)[] = ["maxPrice", "minPrice", "maxYear", "minYear", "maxKm", "minKm", "doorFrom", "doorTo", "seatFrom", "seatTo", "minPower", "maxPower", "minEngineDisplacement", "maxEngineDisplacement"];
            const arrayKeys: (keyof FiltersData)[] = ["brand", "model", "fuel", "location", "color", "bodyType", "transmission", "environmentalTag", "drivetrain"];

            if (numericKeys.includes(filterKey) && !isNaN(Number(value))) {
              globalSetFilter(filterKey as NumberFilterKey, Number(value)); 
            } else if (arrayKeys.includes(filterKey)) {
              value.split(',').forEach(part => {
                globalSetFilter(filterKey as ArrayFilterKey, part.trim());
              });
            } else {
              if(!numericKeys.includes(filterKey) && !arrayKeys.includes(filterKey)){
                 console.warn(`Clave de filtro no manejada explícitamente o tipo inesperado: ${key} con valor ${value}`);
              } else if (!numericKeys.includes(filterKey) && isNaN(Number(value))) {
                console.warn(`Valor no numérico para clave numérica esperada: ${key} con valor ${value}`);
              }
            }
          });
        } else {
           if (navigateToPath === '/coches-segunda-mano') {
              globalClearFilters();
           }
        }
        router.push(navigateToPath);

      } else if (redirectPathValue) {
         if (step.action) { step.action("", currentData); }
        if (step.openInNewTab !== false) { 
          setTimeout(() => {
            if (typeof window !== "undefined") { window.open(redirectPathValue, '_blank'); }
          }, 1000);
        } else {
          setTimeout(() => router.push(redirectPathValue), 1000);
        }
      } else if (step.action && step.endFlow) { 
        step.action("", currentData);
      }
    },
    [addMessage, router, setCurrentStepIdInStore, setHistoryInStore, globalSetFilter, globalClearFilters]
  );

  useEffect(() => {
    if (!isChatInitialized) {
      processStep("start", {});
      setIsChatInitializedInStore(true);
    }
  }, [isChatInitialized, setIsChatInitializedInStore, processStep]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserResponse = async (value: string, isButtonClick = false) => {
    const currentStep = chatFlow[currentStepId];
    if (!currentStep) return;

    let responseTextForChat: string = value;
    let nextStepIdToGo: string | undefined;
    let accumulatedUserDataChanges: Partial<UserData> = {};

    if (isButtonClick) {
      const stepOptions = typeof currentStep.options === 'function' ? currentStep.options(userData) : currentStep.options;
      const selectedOption = stepOptions?.find( opt => opt.value === value || opt.label === value ); 
      
      if (selectedOption) {
        responseTextForChat = selectedOption.label;
        nextStepIdToGo = selectedOption.nextStepId;
        if (currentStepId === "start" && selectedOption.value) {
          accumulatedUserDataChanges.initialOption = selectedOption.value;
        }
        if (currentStep.action && !currentStep.isUserInput && selectedOption.value) {
          const dataFromAction = await currentStep.action( selectedOption.value, userData );
          accumulatedUserDataChanges = { ...accumulatedUserDataChanges, ...dataFromAction, };
        }
      } else {
        console.warn("Opción de botón no encontrada para el valor:", value);
        responseTextForChat = value || "Acción no reconocida";
      }
    } else {
      responseTextForChat = value;
      if (currentStep.isUserInput) {
        if (currentStep.validation) {
          const error = currentStep.validation(value, userData);
          if (error) {
            setErrorMessageInStore(error);
            inputRef.current?.focus();
            return;
          }
        }
        setErrorMessageInStore(null);
        if (currentStep.action) {
          const dataFromAction = await currentStep.action(value, userData);
          accumulatedUserDataChanges = { ...accumulatedUserDataChanges, ...dataFromAction, };
        }
        nextStepIdToGo = currentStep.nextStepIdAfterInput;
      }
    }

    addMessage("user", responseTextForChat);
    if (Object.keys(accumulatedUserDataChanges).length > 0) {
      setUserDataInStore(accumulatedUserDataChanges);
    }
    setUserInput("");

    if (nextStepIdToGo) {
      setCurrentStepIdInStore(nextStepIdToGo);
      pushHistoryInStore(nextStepIdToGo);
      processStep(nextStepIdToGo, { ...userData, ...accumulatedUserDataChanges, });
    }
  };

  const handleOptionClick = (option: ChatButtonOption) => {
    handleUserResponse(option.value || option.label, true);
  };

  const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const currentStep = chatFlow[currentStepId];
    if (currentStep?.isUserInput) {
      handleUserResponse(userInput.trim(), false);
    }
  };

  const handleGoBack = () => {
    const targetPreviousStepId = popHistoryFromStore();
    if (!targetPreviousStepId) return;

    const messagesUpdater = ( prevMessages: ChatMessageInStore[] ): ChatMessageInStore[] => {
      if (prevMessages.length === 0) return [];
      let cutOffIndex = prevMessages.length;
      const lastMessage = prevMessages[prevMessages.length - 1];

      if ( lastMessage?.sender === "user" && prevMessages.length > 1 && prevMessages[prevMessages.length - 2]?.sender === "bot" ) {
        cutOffIndex -= 2;
      } else if (lastMessage?.sender === "bot") {
        cutOffIndex -= 1;
      }

      const newMessages = prevMessages.slice(0, Math.max(0, cutOffIndex));
      if ( targetPreviousStepId === "start" &&
        ((newMessages.length === 0 && prevMessages.length > 0) ||
          (newMessages.length === 1 && newMessages[0]?.text.startsWith("¡Hola! Soy Lebi"))) &&
        prevMessages[0]?.text.startsWith("¡Hola! Soy Lebi")
      ) {
        return [prevMessages[0]];
      }
      return newMessages;
    };

    setMessagesDirectlyInStore(messagesUpdater);

    setCurrentStepIdInStore(targetPreviousStepId);
    setTimeout(() => processStep(targetPreviousStepId, userData), 0);
  };

  const currentStepDef = chatFlow[currentStepId];
  const canGoBack = currentStepDef?.previousStepId && history.length > 1;

  return (
    <>
      <CardContent
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 scroll-smooth bg-white dark:bg-gray-900"
      >
        {messages.map((m: ChatMessageInStore) => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.sender === "bot" && (
              <BotMessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            )}
            <div
              className={`max-w-[85%] p-3 rounded-xl shadow-sm break-words ${
                m.sender === "user"
                  ? "bg-slate-600 text-white rounded-br-none"
                  : "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100 rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {m.text}
              </p>
              {m.sender === "bot" && m.buttons && m.buttons.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.buttons.map((button, btnIdx) => ( 
                    <Button
                      key={`${button.value || button.label}-${btnIdx}`}
                      variant="default"
                      size="sm"
                      className="h-auto py-2 px-3 text-sm text-center bg-[#708BA0] hover:bg-[#5c7081] text-white border-0 
                                  flex-grow basis-[calc(50%-0.25rem)]"
                      onClick={() => handleOptionClick(button)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          handleOptionClick(button);
                      }}
                      aria-label={button.label}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            {m.sender === "user" && (
              <UserCircle2 className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 flex-shrink-0 w-full flex flex-col items-start">
        {errorMessage && (
          <p className="text-red-500 text-xs mb-2 w-full text-left">
            {errorMessage}
          </p>
        )}
        {currentStepDef?.isUserInput ? (
          <form
            onSubmit={handleSubmitInput}
            className="flex w-full items-center space-x-2"
          >
            {canGoBack && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={handleGoBack}
                aria-label="Atrás"
                className="flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <Input
              ref={inputRef}
              type={currentStepDef.inputType || "text"}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={
                currentStepDef.inputPlaceholder || "Escribe tu mensaje..."
              }
              className="flex-1 h-10 text-[16px] sm:text-sm min-w-0"
              aria-label="Escribe tu respuesta"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!userInput.trim()}
              aria-label="Enviar respuesta"
              className="flex-shrink-0 bg-[#708BA0] hover:bg-[#5c7081]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          canGoBack && (
            <div className="w-full flex">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoBack}
                aria-label="Atrás"
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Atrás
              </Button>
            </div>
          )
        )}
      </CardFooter>
    </>
  );
}
```

# src/features/chatbot/components/ChatBotPopupWrapper.tsx

```tsx
"use client";
import React, { useEffect, useState } from "react"; 
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Bot as BotIcon, X as XIcon, ChevronsDownUp } from "lucide-react";
import ChatBotInternal from "./ChatBot";
import { useChatStore } from "@/lib/chatStore";
import { chatFlow } from "@/lib/chatFlow";

interface ChatBotPopupWrapperProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ChatBotPopupWrapper({ isOpen, onOpenChange }: ChatBotPopupWrapperProps) {
  const currentStepId = useChatStore((state) => state.currentStepId);
  
  const [isCompactMode, setIsCompactMode] = useState(false); 
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPosition = body.style.position; 
    const originalWidth = body.style.width; 

    if (isOpen) {
      body.style.overflow = 'hidden';
      if (!isCompactMode || window.innerWidth >= 640 ) { 
        body.style.position = 'fixed';
        body.style.width = '100%';
      }
    } else {
      body.style.overflow = originalOverflow;
      body.style.position = originalPosition;
      body.style.width = originalWidth;
      setIsCompactMode(false); 
      setHasNavigated(false); 
    }
    return () => {
      body.style.overflow = originalOverflow;
      body.style.position = originalPosition;
      body.style.width = originalWidth;
    };
  }, [isOpen, isCompactMode]);


  useEffect(() => {
    if (isOpen && chatFlow && chatFlow[currentStepId]?.navigateTo && !hasNavigated) {
        if (window.innerWidth < 640) { 
             setIsCompactMode(true);
        }
        setHasNavigated(true); 
    }
    if (currentStepId === 'start' && hasNavigated) {
        setIsCompactMode(false);
        setHasNavigated(false);
    }
  }, [currentStepId, isOpen, hasNavigated]);


  if (!isOpen) {
    return null;
  }

  const popupHeightClass = isCompactMode 
    ? "h-[60dvh] sm:h-[calc(100dvh-8rem)]" 
    : "h-[100dvh] sm:h-[calc(100dvh-8rem)]";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[999]" 
        onClick={() => {
            onOpenChange(false);
        }}
        aria-hidden="true"
      ></div>

      <div
        className={`fixed inset-x-0 bottom-0 
                   w-full ${popupHeightClass}
                   bg-card shadow-2xl 
                   flex flex-col 
                   sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[400px] sm:max-h-[650px] sm:rounded-xl 
                   z-[1000] overflow-hidden transition-all duration-300 ease-out`} 
      >
        <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <BotIcon className="text-primary h-5 w-5" /> Agente Virtual Lebi
          </CardTitle>
          <div className="flex items-center gap-1">
            {isCompactMode && window.innerWidth < 640 && (
                 <Button variant="ghost" size="icon" onClick={() => setIsCompactMode(false)} aria-label="Expandir chat" className="h-8 w-8 sm:h-9 sm:w-9">
                    <ChevronsDownUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300 rotate-180" />
                </Button>
            )}
             {!isCompactMode && hasNavigated && window.innerWidth < 640 && ( 
                <Button variant="ghost" size="icon" onClick={() => setIsCompactMode(true)} aria-label="Minimizar chat" className="h-8 w-8 sm:h-9 sm:w-9">
                    <ChevronsDownUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Cerrar chat" className="h-8 w-8 sm:h-9 sm:w-9">
              <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
        </CardHeader>
        <ChatBotInternal /> 
      </div>
    </>
  );
}
```

# src/features/contact/components/ContactForm.tsx

```tsx
"use client"

import { useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/useToast"
import { Card, CardContent } from "@/components/ui/card"
import { ContactFormState } from "@/lib/definitions"
import { submitContactForm } from "@/app/actions/actions"

const initialState: ContactFormState = {
  success: null,
  message: "",
  errors: {},
  submitting: false,
}

export default function ContactForm() {
  const { toast } = useToast()
  const [state, formAction] = useActionState(submitContactForm, initialState)

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "✔️ Formulario enviado" : "❌ Error al enviar",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state, toast])

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6 md:p-8">
        <form
          action={formAction}
          className="space-y-6"
          aria-labelledby="contact-form-title"
        >
          <h3 id="contact-form-title" className="text-lg font-semibold">
            Formulario de contacto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup id="name" label="Nombre" required />
            <InputGroup id="surnames" label="Apellidos" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup id="email" label="Email" type="email" required />
            <InputGroup id="phone" label="Teléfono" type="tel" />
          </div>
          <TextareaGroup id="message" label="Mensaje" required />
          <Button type="submit" className="w-full h-12 text-base" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function InputGroup({ id, label, type = "text", required = false }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={`Introduce tu ${label.toLowerCase()}`}
        required={required}
      />
    </div>
  )
}

function TextareaGroup({ id, label, required = false }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        name={id}
        placeholder={`Escribe tu ${label.toLowerCase()} aquí...`}
        rows={6}
        required={required}
      />
    </div>
  )
}

```

# src/features/contact/components/FAQ.tsx

```tsx
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqItems = [
  {
    question: "¿Cuál es el horario de apertura del concesionario?",
    answer: "Nuestro concesionario está abierto de lunes a viernes de 9:00 a 20:00 horas, los sábados de 10:00 a 14:00 horas. Los domingos permanecemos cerrados.",
  },
  {
    question: "¿Necesito cita previa para ver un vehículo?",
    answer: "No es obligatorio, pero te recomendamos solicitar cita previa para garantizar una atención personalizada y que el vehículo que te interesa esté disponible para su visualización. Puedes solicitar cita a través de nuestro formulario de contacto o llamando por teléfono.",
  },
  {
    question: "¿Ofrecéis financiación para la compra de vehículos?",
    answer: "Sí, ofrecemos diversas opciones de financiación adaptadas a tus necesidades. Trabajamos con varias entidades financieras para ofrecerte las mejores condiciones. Nuestros asesores te informarán detalladamente sobre todas las opciones disponibles.",
  },
  {
    question: "¿Cuánto tiempo de garantía tienen los vehículos de segunda mano?",
    answer: "Todos nuestros vehículos de segunda mano incluyen una garantía mínima de 12 meses, ampliable a 24 meses. La garantía cubre las piezas y mano de obra en caso de avería mecánica o eléctrica.",
  },
  {
    question: "¿Realizáis tasación de vehículos para compra o cambio?",
    answer: "Sí, ofrecemos un servicio gratuito de tasación de tu vehículo actual. Puedes traerlo a nuestras instalaciones o utilizar nuestro formulario de tasación online para obtener una valoración aproximada. El valor de tasación puede aplicarse como parte del pago de tu nuevo vehículo.",
  },
  {
    question: "¿Puedo probar el vehículo antes de comprarlo?",
    answer: "Por supuesto, animamos a todos nuestros clientes a realizar una prueba de conducción del vehículo que les interesa. Solo necesitarás presentar tu carnet de conducir válido y concertar una cita con nuestro equipo de ventas.",
  },
  {
    question: "¿Ofrecéis servicio post-venta y mantenimiento?",
    answer: "Sí, contamos con un taller propio donde realizamos todo tipo de mantenimientos y reparaciones. Nuestros técnicos están especializados en todas las marcas que comercializamos y utilizamos recambios originales o de calidad equivalente.",
  },
];

export default function Faq() {
  return (
    <Card className="shadow-sm border" role="region" aria-labelledby="faq-title">
      <h2 id="faq-title" className="sr-only">Preguntas Frecuentes</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <FaqItem key={index} index={index} question={item.question} answer={item.answer} />
        ))}
      </Accordion>
    </Card>
  );
}

function FaqItem({ index, question, answer }: { index: number; question: string; answer: string }) {
  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className="text-left px-6 py-4">{question}</AccordionTrigger>
      <AccordionContent className="px-6 pb-4">{answer}</AccordionContent>
    </AccordionItem>
  );
}
```

# src/features/contact/components/Map.tsx

```tsx
export default function Map() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        title="Ubicación del concesionario"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333.5164720776302!2d-6.03187583994248!3d37.31974455381533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126d2ca25916d7%3A0x88d6b95ede3fa002!2sTalleres%20Antonio%20Casado!5e0!3m2!1ses!2ses!4v1741708735939!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

```

# src/features/dashboard/AuthButton.tsx

```tsx
'use client';

import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthButton() {
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user && user.email) {
        setUserEmail(user.email);
      }
    });
  }, [supabase]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="p-4 border-t flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-muted-foreground">{userEmail || "Usuario"}</p>
          </div>
        </div>
      </div>
      <Button variant="outline" className="w-full justify-start mt-2" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </Button>
    </div>
  );
}

```

# src/features/dashboard/DashboardHeader.tsx

```tsx
import type React from "react"
import { cn } from "@/utils/utils"

interface DashboardHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
}

export function DashboardHeader({ title, description, action }: DashboardHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between", {
        "mb-2": !description,
      })}
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}


```

# src/features/dashboard/features/FeatureFormDialog.tsx

```tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FeatureFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (newFeature: { name: string }) => void;
}

export function FeatureFormDialog({
  open,
  onOpenChange,
  onSave,
}: FeatureFormDialogProps) {
  const [featureName, setFeatureName] = useState("");

  const handleSave = () => {
    if (featureName.trim() === "") return;
    onSave({ name: featureName.trim() });
    setFeatureName("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Añadir Característica</DialogTitle>
          <DialogDescription>
            Ingresa el nombre de la nueva característica.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Label htmlFor="feature-name">Nombre</Label>
          <Input
            id="feature-name"
            value={featureName}
            onChange={(e) => setFeatureName(e.target.value)}
            placeholder="Ej: Climatizador"
          />
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

```

# src/features/dashboard/features/FeatureTable.tsx

```tsx
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Edit,
  Trash2,
  Search,
  ChevronDown,
  ChevronUp,
  Save,
  X,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Feature } from "@/lib/definitions";

interface FeaturesTableProps {
  features: Feature[];
  onEdit: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
}

export function FeaturesTable({
  features,
  onEdit,
  onDelete,
}: FeaturesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof Feature | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editFeatureId, setEditFeatureId] = useState<string | null>(null);
  const [editFeatureName, setEditFeatureName] = useState("");

  const handleSort = (field: keyof Feature) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredFeatures = features.filter((feature) => {
    const term = searchTerm.toLowerCase();
    return feature.name.toLowerCase().includes(term);
  });

  const sortedFeatures = [...filteredFeatures].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  const handleEditClick = (feature: Feature) => {
    setEditFeatureId(feature.id);
    setEditFeatureName(feature.name);
  };

  const handleCancelEdit = () => {
    setEditFeatureId(null);
    setEditFeatureName("");
  };

  const handleSaveEdit = (featureId: string) => {
    onEdit(featureId, editFeatureName);
    setEditFeatureId(null);
    setEditFeatureName("");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar características..."
            className="pl-8 h-[2.2rem]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center">
                  Nombre de la característica
                  {sortField === "name" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="w-[120px]">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedFeatures.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="h-24 text-center">
                  No se encontraron características.
                </TableCell>
              </TableRow>
            ) : (
              sortedFeatures.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell className="font-medium">
                    {editFeatureId === feature.id ? (
                      <Input
                        value={editFeatureName}
                        onChange={(e) => setEditFeatureName(e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <Input
                        value={feature.name || ""}
                        onChange={() => {}}
                        disabled
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {editFeatureId === feature.id ? (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleSaveEdit(feature.id)}
                          >
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleCancelEdit}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditClick(feature)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteClick(feature.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. La característica será eliminada
              permanentemente de la base de datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

```

# src/features/dashboard/home/RecentVehicles.tsx

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/utils/utils"
import Link from "next/link"

const recentVehicles = [
  {
    id: "1",
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 85000,
    status: "Disponible",
    addedAt: "2023-12-15",
  },
  {
    id: "2",
    brand: "Mercedes",
    model: "Clase C",
    year: 2022,
    price: 65000,
    status: "Vendido",
    addedAt: "2023-11-28",
  },
  {
    id: "3",
    brand: "Audi",
    model: "Q7",
    year: 2023,
    price: 78000,
    status: "Reservado",
    addedAt: "2023-12-10",
  },
  {
    id: "4",
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 55000,
    status: "Disponible",
    addedAt: "2023-12-05",
  },
  {
    id: "5",
    brand: "Porsche",
    model: "911",
    year: 2022,
    price: 120000,
    status: "Vendido",
    addedAt: "2023-11-20",
  },
]

export function RecentVehicles() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehículos Recientes</CardTitle>
        <CardDescription>Los últimos vehículos añadidos al inventario</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentVehicles.map((vehicle) => (
            <div key={vehicle.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <Link href={`/vehiculos/${vehicle.id}`} className="font-medium hover:underline">
                  {vehicle.brand} {vehicle.model} ({vehicle.year})
                </Link>
                <div className="text-sm text-muted-foreground">
                  Añadido el {new Date(vehicle.addedAt).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-medium">{formatCurrency(vehicle.price)}</div>
                </div>
                <Badge
                  variant={
                    vehicle.status === "Disponible"
                      ? "default"
                      : vehicle.status === "Vendido"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {vehicle.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


```

# src/features/dashboard/home/SalesChart.tsx

```tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Ene", ventas: 12 },
  { month: "Feb", ventas: 18 },
  { month: "Mar", ventas: 15 },
  { month: "Abr", ventas: 22 },
  { month: "May", ventas: 28 },
  { month: "Jun", ventas: 24 },
  { month: "Jul", ventas: 30 },
  { month: "Ago", ventas: 26 },
  { month: "Sep", ventas: 32 },
  { month: "Oct", ventas: 24 },
  { month: "Nov", ventas: 20 },
  { month: "Dic", ventas: 28 },
];

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas Mensuales</CardTitle>
        <CardDescription>
          Número de vehículos vendidos por mes durante el último año
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`${value} vehículos`, "Ventas"]}
              labelFormatter={(label) => `Mes: ${label}`}
            />
            <Bar
              dataKey="ventas"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

```

# src/features/dashboard/home/StatsCards.tsx

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Vehículos</CardTitle>
          <Car className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <p className="text-xs text-muted-foreground">
            +5 desde el último mes
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Ventas Mensuales
          </CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">
            +12% respecto al mes anterior
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">€345,897</div>
          <p className="text-xs text-muted-foreground">
            +8.2% respecto al mes anterior
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Valor Inventario
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">€1,423,500</div>
          <p className="text-xs text-muted-foreground">
            +2.5% desde el último mes
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

```

# src/features/dashboard/home/VehicleDistributionChart.tsx

```tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "SUV", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Berlina", value: 30, color: "hsl(var(--chart-2))" },
  { name: "Cabrio", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Coupe", value: 5, color: "hsl(var(--chart-4))" },
  { name: "Otros", value: 5, color: "hsl(var(--chart-5))" },
];

export function VehicleDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribución por Tipo</CardTitle>
        <CardDescription>
          Distribución de vehículos por categoría
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value} vehículos`, "Cantidad"]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

```

# src/features/dashboard/Sidebar.tsx

```tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/utils/utils"
import { LayoutDashboard, Car, Menu, X, ListTodo } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import AuthButton from "./AuthButton"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Vehículos",
    href: "/dashboard/vehiculos",
    icon: Car,
  },
  {
    title: "Características",
    href: "/dashboard/caracteristicas",
    icon: ListTodo,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-full bg-background md:hidden flex items-center justify-between p-4 border-b">
        <div className="font-bold text-xl">Lebauto</div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-30 bg-background transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 md:h-screen md:border-r",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-16 md:pt-0">
          <div className="p-6 border-b hidden md:block">
            <h2 className="font-bold text-2xl">Lebauto</h2>
          </div>

          <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </div>
            <AuthButton />
        </div>
      </div>
    </>
  )
}


```

# src/features/dashboard/vehicles/FeaturesManagerDialog.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Search } from "lucide-react";
import { fetchFeatures, createFeature } from "@/app/supabase/supabase";
import { Car, Feature } from "@/lib/definitions";
import { useToast } from "@/hooks/useToast";

interface FeaturesManagerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicle: Car;
  onSave: (features: string[]) => void;
}

export function FeaturesManagerDialog({
  open,
  onOpenChange,
  vehicle,
  onSave,
}: FeaturesManagerDialogProps) {
  const [allFeatures, setAllFeatures] = useState<Feature[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newFeatureName, setNewFeatureName] = useState("");
  const [isAddingFeature, setIsAddingFeature] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      const loadFeatures = async () => {
        setIsLoading(true);
        try {
          const features = await fetchFeatures();
          setAllFeatures(features);
          setSelectedFeatures(vehicle.features || []);
        } catch (error) {
          console.error("Error loading features:", error);
          toast({
            title: "Error",
            description:
              "No se pudieron cargar las características. Inténtalo de nuevo.",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      };

      loadFeatures();
    }
  }, [open, vehicle, toast]);

  const filteredFeatures = allFeatures.filter((feature) =>
    feature.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureId)) {
        return prev.filter((id) => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const handleAddNewFeature = async () => {
    if (!newFeatureName.trim()) return;

    try {
      const newFeature = await createFeature({
        name: newFeatureName.trim(),
      });

      if (newFeature) {
        setAllFeatures((prev) => [...prev, newFeature]);
        setSelectedFeatures((prev) => [...prev, newFeature.id]);
        setNewFeatureName("");
        setIsAddingFeature(false);
        toast({
          title: "Característica añadida",
          description: "La característica ha sido añadida correctamente.",
        });
      } else {
        toast({
          title: "Error",
          description:
            "No se pudo añadir la característica. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error adding feature:", error);
      toast({
        title: "Error",
        description:
          "Ocurrió un error al añadir la característica. Verifica los permisos en Supabase.",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    onSave(selectedFeatures);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gestionar características</DialogTitle>
          <DialogDescription>
            Selecciona las características del vehículo {vehicle.brand}{" "}
            {vehicle.model}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar características..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={() => setIsAddingFeature(true)} variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Nueva característica
            </Button>
          </div>

          {isAddingFeature && (
            <div className="border p-4 rounded-md space-y-4">
              <h3 className="font-medium">Añadir nueva característica</h3>
              <div className="space-y-2">
                <Label htmlFor="new-feature-name">Nombre</Label>
                <Input
                  id="new-feature-name"
                  value={newFeatureName}
                  onChange={(e) => setNewFeatureName(e.target.value)}
                  placeholder="Ej: Climatizador bizona"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsAddingFeature(false)}
                >
                  Cancelar
                </Button>
                <Button onClick={handleAddNewFeature}>Añadir</Button>
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-8">
              <p>Cargando características...</p>
            </div>
          ) : filteredFeatures.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed rounded-lg">
              <h3 className="mt-2 text-sm font-semibold">
                No se encontraron características
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Intenta con otra búsqueda o añade una nueva característica
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Características</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {filteredFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`feature-${feature.id}`}
                        checked={selectedFeatures.includes(feature.id)}
                        onCheckedChange={() => handleFeatureToggle(feature.id)}
                      />
                      <label
                        htmlFor={`feature-${feature.id}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {feature.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 p-4 bg-muted rounded-md">
            <h3 className="font-medium mb-2">
              Características seleccionadas: {selectedFeatures.length}
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedFeatures.map((featureId) => {
                const feature = allFeatures.find((f) => f.id === featureId);
                return feature ? (
                  <div
                    key={featureId}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                  >
                    {feature.name}
                  </div>
                ) : null;
              })}
              {selectedFeatures.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No hay características seleccionadas
                </p>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button onClick={handleSave}>Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

```

# src/features/dashboard/vehicles/ImageManagerDialog.tsx

```tsx
"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Trash2, Upload, X } from "lucide-react";
import Image from "next/image";
import { uploadImage, deleteImage } from "@/app/supabase/supabase";
import { useToast } from "@/hooks/useToast";

interface Car {
  id: string;
  brand: string;
  model: string;
  images?: string[];
}

interface ImageManagerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicle: Car;
  onSave: (images: string[]) => void;
}

export function ImageManagerDialog({
  open,
  onOpenChange,
  vehicle,
  onSave,
}: ImageManagerDialogProps) {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (open && vehicle) {
      setImages(vehicle.images || []);
      setSelectedImages(new Set());
    }
  }, [open, vehicle]);

  const handleImageSelect = (imageUrl: string) => {
    const newSelected = new Set(selectedImages);
    if (newSelected.has(imageUrl)) {
      newSelected.delete(imageUrl);
    } else {
      newSelected.add(imageUrl);
    }
    setSelectedImages(newSelected);
  };

  const handleDeleteSelected = async () => {
    if (selectedImages.size === 0) return;

    const imagesToDelete = Array.from(selectedImages);
    const remainingImages = images.filter((img) => !selectedImages.has(img));

    setImages(remainingImages);
    setSelectedImages(new Set());

    for (const imageUrl of imagesToDelete) {
      try {
        await deleteImage(imageUrl);
      } catch (error) {
        console.error("Error deleting image:", error);
        toast({
          title: "Error al eliminar imagen",
          description:
            "No se pudo eliminar la imagen correctamente. Verifica los permisos de almacenamiento.",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    const newImages: string[] = [...images];
    const totalFiles = files.length;
    let processedFiles = 0;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < files.length; i++) {
      try {
        const file = files[i];
        if (!vehicle.id) {
          console.error("Vehicle ID is undefined");
          errorCount++;
          continue;
        }

        const imageUrl = await uploadImage(file, `cars/${vehicle.id}`);

        if (imageUrl) {
          newImages.push(imageUrl);
          successCount++;
        } else {
          errorCount++;
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        errorCount++;
      } finally {
        processedFiles++;
        setUploadProgress(Math.round((processedFiles / totalFiles) * 100));
      }
    }

    setImages(newImages);
    setIsUploading(false);
    e.target.value = "";

    if (successCount > 0) {
      toast({
        title: `${successCount} imágenes subidas`,
        description:
          errorCount > 0
            ? `No se pudieron subir ${errorCount} imágenes.`
            : "Todas las imágenes se subieron correctamente.",
      });
    } else if (errorCount > 0) {
      toast({
        title: "Error al subir imágenes",
        description:
          "No se ha podido subir ninguna imagen. Verifica los permisos en Supabase o contacta al administrador.",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    onSave([...images]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gestionar imágenes</DialogTitle>
          <DialogDescription>
            Añade, elimina o reordena las imágenes del vehículo{" "}
            {vehicle.brand || ""} {vehicle.model || ""}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <Label htmlFor="image-upload">Añadir imágenes</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="max-w-sm"
                />
                {selectedImages.size > 0 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleDeleteSelected}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar seleccionadas ({selectedImages.size})
                  </Button>
                )}
              </div>
            </div>
          </div>

          {isUploading && (
            <div className="w-full bg-secondary rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-sm text-muted-foreground mt-1">
                Subiendo imágenes: {uploadProgress}%
              </p>
            </div>
          )}

          {images.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed rounded-lg">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-2 text-sm font-semibold">No hay imágenes</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sube imágenes para mostrar este vehículo
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`relative group border rounded-md overflow-hidden aspect-square ${
                    selectedImages.has(imageUrl) ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleImageSelect(imageUrl)}
                >
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`Imagen ${index + 1} de ${vehicle.brand || ""} ${
                      vehicle.model || ""
                    }`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {selectedImages.has(imageUrl) ? (
                      <X className="h-8 w-8 text-white" />
                    ) : (
                      <div className="h-8 w-8 border-2 border-white rounded-md" />
                    )}
                  </div>
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      Principal
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button onClick={handleSave}>Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

```

# src/features/dashboard/vehicles/VehicleFormDialog.tsx

```tsx
"use client";

import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from "@/lib/definitions";

const vehicleSchema = z.object({
  id: z.string().optional(),
  brand: z.string().min(1, "La marca es obligatoria"),
  model: z.string().min(1, "El modelo es obligatorio"),
  variant: z.string().optional(),
  condition: z.string().min(1, "El estado es obligatorio"),
  price: z.coerce.number().positive("El precio debe ser mayor a 0"),
  location: z.string().optional(),
  year: z.coerce
    .number()
    .int()
    .min(1900, "El año debe ser mayor a 1900")
    .max(new Date().getFullYear() + 1),
  mileage: z.coerce
    .number()
    .nonnegative("El kilometraje no puede ser negativo"),
  body_type: z.string().optional(),
  fuel: z.string().min(1, "El tipo de combustible es obligatorio"),
  transmission: z.string().optional(),
  environmental_tag: z.string().optional(),
  drivetrain: z.string().optional(),
  power: z.coerce.number().optional(),
  engine_displacement: z.coerce.number().optional(),
  color: z.string().min(1, "El color es obligatorio"),
  doors: z.coerce
    .number()
    .int()
    .min(1, "El número de puertas debe ser al menos 2"),
  seats: z.coerce
    .number()
    .int()
    .min(1, "El número de asientos debe ser al menos 2"),
  electric_range: z.coerce.number().optional(),
  battery_capacity: z.coerce.number().optional(),
  charging_time: z.coerce.number().optional(),
  fast_charge: z.boolean().optional(),
  charging_port: z.string().optional(),
  iva_deductible: z.boolean().optional(),
  monthly_price: z.coerce.number().optional(),
  finance_price: z.coerce.number().optional(),
  description: z.string().optional(),
  images: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
});

type VehicleFormValues = z.infer<typeof vehicleSchema>;

interface VehicleFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicle: Car | null;
  onSave: (vehicle: Car) => void;
}

export function VehicleFormDialog({
  open,
  onOpenChange,
  vehicle,
  onSave,
}: VehicleFormDialogProps) {
  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      brand: "",
      model: "",
      variant: "",
      condition: "Seminuevo",
      price: 0,
      location: "",
      year: new Date().getFullYear(),
      mileage: 0,
      body_type: "",
      fuel: "",
      transmission: "",
      environmental_tag: "",
      drivetrain: "",
      power: 0,
      engine_displacement: 0,
      color: "",
      doors: 5,
      seats: 5,
      electric_range: 0,
      battery_capacity: 0,
      charging_time: 0,
      fast_charge: false,
      charging_port: "",
      iva_deductible: false,
      monthly_price: 0,
      finance_price: 0,
      description: "",
      images: [],
      features: [],
    },
  });

  useEffect(() => {
    if (vehicle) {
      form.reset({
        id: vehicle.id,
        brand: vehicle.brand || "",
        model: vehicle.model || "",
        variant: vehicle.variant || "",
        condition: vehicle.condition || "Nuevo",
        price: vehicle.price || 0,
        location: vehicle.location || "",
        year: vehicle.year || new Date().getFullYear(),
        mileage: vehicle.mileage || 0,
        body_type: vehicle.bodyType || "",
        fuel: vehicle.fuel || "",
        transmission: vehicle.transmission || "",
        environmental_tag: vehicle.environmentalTag || "",
        drivetrain: vehicle.drivetrain || "",
        power: vehicle.power || 0,
        engine_displacement: vehicle.engineDisplacement || 0,
        color: vehicle.color || "",
        doors: vehicle.doors || 5,
        seats: vehicle.seats || 5,
        electric_range: vehicle.electricRange || 0,
        battery_capacity: vehicle.batteryCapacity || 0,
        charging_time: vehicle.chargingTime || 0,
        fast_charge: vehicle.fastCharge || false,
        charging_port: vehicle.chargingPort || "",
        iva_deductible: vehicle.ivaDeductible || false,
        monthly_price: vehicle.monthlyPrice || 0,
        finance_price: vehicle.financePrice || 0,
        description: vehicle.description || "",
        images: vehicle.images || [],
        features: vehicle.features || [],
      });
    } else {
      form.reset({
        brand: "",
        model: "",
        variant: "",
        condition: "Nuevo",
        price: 0,
        location: "",
        year: new Date().getFullYear(),
        mileage: 0,
        body_type: "",
        fuel: "",
        transmission: "",
        environmental_tag: "",
        drivetrain: "",
        power: 0,
        engine_displacement: 0,
        color: "",
        doors: 5,
        seats: 5,
        electric_range: 0,
        battery_capacity: 0,
        charging_time: 0,
        fast_charge: false,
        charging_port: "",
        iva_deductible: false,
        monthly_price: 0,
        finance_price: 0,
        description: "",
        images: [],
        features: [],
      });
    }
  }, [open, vehicle, form]);

  const onSubmit = (data: VehicleFormValues) => {
    onSave({
      id: data.id || crypto.randomUUID(),
      brand: data.brand,
      model: data.model,
      variant: data.variant,
      condition: data.condition,
      price: data.price,
      location: data.location,
      year: data.year,
      mileage: data.mileage,
      bodyType: data.body_type || "",
      fuel: data.fuel,
      transmission: data.transmission || "",
      environmentalTag: data.environmental_tag || "",
      drivetrain: data.drivetrain,
      power: data.power,
      engineDisplacement: data.engine_displacement,
      color: data.color,
      doors: data.doors,
      seats: data.seats,
      electricRange: data.electric_range,
      batteryCapacity: data.battery_capacity,
      chargingTime: data.charging_time,
      fastCharge: data.fast_charge,
      chargingPort: data.charging_port,
      ivaDeductible: data.iva_deductible,
      monthlyPrice: data.monthly_price,
      financePrice: data.finance_price,
      description: data.description,
      images: data.images,
      features: data.features,
    });
  };

  const showElectricFields =
    form.watch("fuel") === "Eléctrico" ||
    form.watch("fuel") === "Híbrido enchufable";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {vehicle ? "Editar Vehículo" : "Añadir Vehículo"}
          </DialogTitle>
          <DialogDescription>
            {vehicle
              ? "Modifica los detalles del vehículo y guarda los cambios."
              : "Completa los detalles del nuevo vehículo para añadirlo al inventario."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Técnico</TabsTrigger>
                <TabsTrigger value="pricing">Precios</TabsTrigger>
                <TabsTrigger value="description">Descripción</TabsTrigger>
              </TabsList>

              {/* Pestaña de información general */}
              <TabsContent value="general" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Marca</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: BMW" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Modelo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: X5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="variant"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Variante</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: xDrive40i" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un estado" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Seminuevo">Seminuevo</SelectItem>
                            <SelectItem value="Ocasión">Ocasión</SelectItem>
                            <SelectItem value="KM0">KM0</SelectItem>
                            <SelectItem value="Vendido">Vendido</SelectItem>
                            <SelectItem value="Reservado">Reservado</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Año</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mileage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kilometraje</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un color" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Amarillo">Amarillo</SelectItem>
                            <SelectItem value="Azul">Azul</SelectItem>
                            <SelectItem value="Beige">Beige</SelectItem>
                            <SelectItem value="Blanco">Blanco</SelectItem>
                            <SelectItem value="Gris / Plata">
                              Gris / Plata
                            </SelectItem>
                            <SelectItem value="Marrón">Marrón</SelectItem>
                            <SelectItem value="Naranja">Naranja</SelectItem>
                            <SelectItem value="Negro">Negro</SelectItem>
                            <SelectItem value="Rojo">Rojo</SelectItem>
                            <SelectItem value="Rosa">Rosa</SelectItem>
                            <SelectItem value="Verde">Verde</SelectItem>
                            <SelectItem value="Violeta / Lila">
                              Violeta / Lila
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="doors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Puertas</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          value={String(field.value)}
                          defaultValue={String(field.value)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el número de puertas" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="seats"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plazas</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          value={String(field.value)}
                          defaultValue={String(field.value)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el número de plazas" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ubicación</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Madrid" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="body_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de carrocería</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="SUV">SUV</SelectItem>
                            <SelectItem value="Berlina">Berlina</SelectItem>
                            <SelectItem value="Compacto">Compacto</SelectItem>
                            <SelectItem value="Cabrio">Cabrio</SelectItem>
                            <SelectItem value="Coupe">Coupé</SelectItem>
                            <SelectItem value="Familiar">Familiar</SelectItem>
                            <SelectItem value="Monovolumen">
                              Monovolumen
                            </SelectItem>
                            <SelectItem value="Pickup">Pickup</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="environmental_tag"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Etiqueta medioambiental</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una etiqueta" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">Sin etiqueta</SelectItem>
                            <SelectItem value="B">B</SelectItem>
                            <SelectItem value="C">C</SelectItem>
                            <SelectItem value="ECO">ECO</SelectItem>
                            <SelectItem value="CERO">CERO</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              {/* Pestaña de información técnica */}
              <TabsContent value="technical" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="fuel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Combustible</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Diésel">Diésel</SelectItem>
                            <SelectItem value="Gasolina">Gasolina</SelectItem>
                            <SelectItem value="Eléctrico">Eléctrico</SelectItem>
                            <SelectItem value="Híbrido">Híbrido</SelectItem>
                            <SelectItem value="Híbrido enchufable">
                              Híbrido enchufable
                            </SelectItem>
                            <SelectItem value="Gas licuado (GLP)">
                              Gas licuado (GLP)
                            </SelectItem>
                            <SelectItem value="Gas natural (GNC)">
                              Gas natural (GNC)
                            </SelectItem>
                            <SelectItem value="Otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="transmission"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transmisión</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Manual">Manual</SelectItem>
                            <SelectItem value="Automático">
                              Automático
                            </SelectItem>
                            <SelectItem value="CVT">CVT</SelectItem>
                            <SelectItem value="DSG / Doble embrague">
                              DSG / Doble embrague
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="drivetrain"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tracción</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Delantera">Delantera</SelectItem>
                            <SelectItem value="Trasera">Trasera</SelectItem>
                            <SelectItem value="4x4">4x4</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="power"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Potencia (CV)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="engine_displacement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cilindrada (cc)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {showElectricFields && (
                  <div className="border p-4 rounded-md space-y-4">
                    <h3 className="font-medium">
                      Información específica para vehículos eléctricos/híbridos
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="electric_range"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Autonomía eléctrica (km)</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="battery_capacity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Capacidad de batería (kWh)</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="charging_time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tiempo de carga (horas)</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="charging_port"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de conector</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona un tipo" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Tipo 1">Tipo 1</SelectItem>
                                <SelectItem value="Tipo 2">Tipo 2</SelectItem>
                                <SelectItem value="CCS">CCS</SelectItem>
                                <SelectItem value="CHAdeMO">CHAdeMO</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="fast_charge"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Carga rápida</FormLabel>
                            <FormDescription>
                              El vehículo dispone de capacidad de carga rápida
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </TabsContent>

              {/* Pestaña de precios */}
              <TabsContent value="pricing" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Precio (€)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="finance_price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Precio financiado (€)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="monthly_price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuota mensual (€)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="iva_deductible"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>IVA deducible</FormLabel>
                        <FormDescription>
                          El IVA de este vehículo es deducible para empresas
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </TabsContent>

              {/* Pestaña de descripción */}
              <TabsContent value="description" className="space-y-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe el vehículo con detalle..."
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Guardar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

```

# src/features/dashboard/vehicles/VehiclesTable.tsx

```tsx
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Trash2,
  Search,
  ChevronDown,
  ChevronUp,
  Image,
  ListChecks,
} from "lucide-react";
import { formatCurrency } from "@/utils/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Car } from "@/lib/definitions";

interface VehiclesTableProps {
  vehicles: Car[];
  onEdit: (vehicle: Car) => void;
  onDelete: (id: string) => void;
  onManageImages: (vehicle: Car) => void;
  onManageFeatures: (vehicle: Car) => void;
}

export function VehiclesTable({
  vehicles,
  onEdit,
  onDelete,
  onManageImages,
  onManageFeatures,
}: VehiclesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof Car | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleSort = (field: keyof Car) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const term = searchTerm.toLowerCase();
    return (
      (vehicle.brand && vehicle.brand.toLowerCase().includes(term)) ||
      (vehicle.model && vehicle.model.toLowerCase().includes(term)) ||
      (vehicle.year && vehicle.year.toString().includes(term)) ||
      (vehicle.condition && vehicle.condition.toLowerCase().includes(term)) ||
      (vehicle.location && vehicle.location.toLowerCase().includes(term))
    );
  });

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    if (!sortField) return 0;

    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar vehículos..."
            className="pl-8 h-[2.2rem]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("brand")}
              >
                <div className="flex items-center">
                  Marca
                  {sortField === "brand" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("model")}
              >
                <div className="flex items-center">
                  Modelo
                  {sortField === "model" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("year")}
              >
                <div className="flex items-center">
                  Año
                  {sortField === "year" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => handleSort("price")}
              >
                <div className="flex items-center justify-end">
                  Precio
                  {sortField === "price" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("condition")}
              >
                <div className="flex items-center">
                  Estado
                  {sortField === "condition" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="w-[120px]">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedVehicles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No se encontraron vehículos.
                </TableCell>
              </TableRow>
            ) : (
              sortedVehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">
                    {vehicle.brand || ""}
                  </TableCell>
                  <TableCell>
                    {vehicle.model || ""} {vehicle.variant || ""}
                  </TableCell>
                  <TableCell>{vehicle.year || ""}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(vehicle.price || 0)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        vehicle.condition === "Nuevo"
                          ? "default"
                          : vehicle.condition === "Vendido"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {vehicle.condition || "Desconocido"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit(vehicle)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onManageImages(vehicle)}
                        >
                          <Image className="mr-2 h-4 w-4" />
                          Gestionar imágenes
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onManageFeatures(vehicle)}
                        >
                          <ListChecks className="mr-2 h-4 w-4" />
                          Gestionar características
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteClick(vehicle.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El vehículo será eliminado
              permanentemente de la base de datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

```

# src/features/header/components/Nvbar.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 
import Image from "next/image";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { AnimatePresence } from "framer-motion";
import CurvedNavPanel from "../curved-mobile-menu/components/CurvedNavPanel";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isHome = pathname === "/";

  const navbarClasses = `fixed top-0 w-screen z-30 transition-all duration-300 ${
    menuOpen ? "hidden" : 
    isHome
      ? scrolled
        ? "bg-white shadow-md transition-shadow text-black"
        : "bg-transparent text-white"
      : scrolled
      ? "bg-white shadow-md transition-shadow text-black"
      : "bg-white text-black"
  }`;

  return (
    <>
      <nav id="main-navbar" className={navbarClasses}>
        <div
          className={`container mx-auto flex items-center h-[50px] md:h-20 ${
            menuOpen
              ? "justify-between"
              : scrolled
              ? "justify-between"
              : "justify-end"
          }`}
        >
          <Link
            href="/"
            className={`text-2xl font-bold ${
              menuOpen ? "block" : scrolled ? "block" : "hidden"
            }`}
          >
            <Image
              src="/logo.webp"
              alt="Logo Lebauto"
              width={80}
              height={80}
              priority
              className="w-[50px] h-auto md:w-[70px]"
            />
          </Link>

          <div className="hidden md:flex items-center gap-x-4 lg:gap-x-6 text-sm">
            <ViewTransitionsLink href="/" className="hover:opacity-70 py-2">
              Inicio
            </ViewTransitionsLink>
            <ViewTransitionsLink
              href="/coches-segunda-mano"
              className={`py-2 hover:opacity-70 border-b-2 ${
                pathname.startsWith("/coches-segunda-mano")
                  ? `${
                      isHome && !scrolled && !menuOpen
                        ? "border-white"
                        : "border-primary"
                    } font-semibold`
                  : "border-transparent"
              }`}
            >
              Coches de ocasión
            </ViewTransitionsLink>
            <ViewTransitionsLink
              href="/gestion-de-venta"
              className={`py-2 hover:opacity-70 border-b-2 ${
                pathname === "/gestion-de-venta"
                  ? `${
                      isHome && !scrolled && !menuOpen
                        ? "border-white"
                        : "border-primary"
                    } font-semibold`
                  : "border-transparent"
              }`}
            >
              Gestión de venta
            </ViewTransitionsLink>
            <ViewTransitionsLink
              href="/contacto"
              className={`py-2 hover:opacity-70 border-b-2 ${
                pathname === "/contacto"
                  ? `${
                      isHome && !scrolled && !menuOpen
                        ? "border-white"
                        : "border-primary"
                    } font-semibold`
                  : "border-transparent"
              }`}
            >
              Contacto
            </ViewTransitionsLink>
          </div>

          <button
            className={`md:hidden flex items-center justify-center p-2 z-50 rounded-md
                        ${
                          isHome && !scrolled && !menuOpen
                            ? "hover:bg-white/10"
                            : "hover:bg-gray-200"
                        } 
                        ${
                          menuOpen ? "fixed right-4 top-2.5" : ""
                        }transition-colors`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {menuOpen && <CurvedNavPanel closeMenu={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

```

# src/features/header/curved-mobile-menu/animations/anim.ts

```ts
export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
};

export const slide = {
    initial: {x: 80},
    enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i}}),
    exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i}})
};

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
};
```

# src/features/header/curved-mobile-menu/components/Curve.tsx

```tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface PathDimensions {
  initialPath: string;
  targetPath: string;
}

export default function Curve() {
  const [pathDimensions, setPathDimensions] = useState<PathDimensions>({
    initialPath: '',
    targetPath: '',
  });

  useEffect(() => {
    const updatePaths = () => {
      const vh = window.innerHeight;
      setPathDimensions({
        initialPath: `M100 0 L200 0 L200 ${vh} L100 ${vh} Q-100 ${vh / 2} 100 0`,
        targetPath: `M100 0 L200 0 L200 ${vh} L100 ${vh} Q100 ${vh / 2} 100 0`,
      });
    };
    updatePaths();
  }, []);

  const curveVariants: Variants = {
    initial: {
      d: pathDimensions.initialPath,
    },
    enter: {
      d: pathDimensions.targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: pathDimensions.initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  if (!pathDimensions.initialPath) {
    return null;
  }

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-white stroke-none">
      <motion.path variants={curveVariants} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
}
```

# src/features/header/curved-mobile-menu/components/CurvedNavPanel.tsx

```tsx
"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Curve from "./Curve";
import Image from "next/image";
import { X } from "lucide-react";
import NavLink from "./NavLink";
import ContactButtons from "@/components/ContactButtons";
import { menuSlide } from "../animations/anim";

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Coches de ocasión",
    href: "/coches-segunda-mano",
  },
  {
    title: "Gestión de venta",
    href: "/gestion-de-venta",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

interface CurvedNavPanelProps {
  closeMenu: () => void;
}

export default function CurvedNavPanel({ closeMenu }: CurvedNavPanelProps) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide as Variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-dvh max500:w-full bg-white fixed right-0 top-0 text-white z-[99]"
    >
      <div className="box-border h-full px-10 pt-[30px] pb-16 flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col px-3 text-[30px] sm:text-[38px] gap-2.5 sm:gap-3"
        >
          <div className="flex items-center justify-between text-black">
            <Image
              src="/logo.webp"
              alt="Logo Lebauto"
              width={80}
              height={80}
              priority
              className="w-[50px] h-auto md:w-[70px]"
            />
            <button
              className=" flex items-center justify-center p-2 z-50 rounded-md"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="text-gray-400 border-b border-gray-600 uppercase text-[11px] mt-8 mb-2 sm:mb-4">
            <p>Navegación</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                closeMenu={closeMenu}
              />
            );
          })}
        </div>
        <ContactButtons estado="menu" />
      </div>
      <Curve />
    </motion.div>
  );
}

```

# src/features/header/curved-mobile-menu/components/NavLink.tsx

```tsx
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { motion, Variants } from 'framer-motion';
import { scale, slide } from "../animations/anim";

interface NavItemData {
  title: string;
  href: string;
  index: number;
}

interface NavLinkProps {
  data: NavItemData;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  closeMenu: () => void;
}

export default function NavLink({ data, isActive, setSelectedIndicator, closeMenu }: NavLinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide as Variants} 
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale as Variants} 
        animate={isActive ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-black rounded-full absolute -left-[20px] sm:-left-[30px]"
      />
      <ViewTransitionsLink href={href} onClick={closeMenu} className="text-black hover:text-gray-500 transition-colors w-full">
        {title}
      </ViewTransitionsLink>
    </motion.div>
  );
}
```

# src/features/home/components/BrandGrid.tsx

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/hooks/useMediaQuery"; 

const brandsData = [ 
  { name: "Tesla", logo: "/logos-coches/tesla-logo.png" },
  { name: "Volkswagen", logo: "/logos-coches/vw-logo.png" },
  { name: "BMW", logo: "/logos-coches/bmw-logo.png" },
  { name: "Audi", logo: "/logos-coches/audi-logo.png" },
  { name: "Jaguar", logo: "/logos-coches/jaguar-logo.png" },
  { name: "Porsche", logo: "/logos-coches/porsche-logo.png" },
  { name: "Renault", logo: "/logos-coches/renault-logo.png" },
  { name: "Peugeot", logo: "/logos-coches/peugeot-logo.png" },
  { name: "Mercedes Benz", logo: "/logos-coches/mercedes-logo.png" },
  { name: "Ford", logo: "/logos-coches/ford-logo.png" },
  { name: "Land Rover", logo: "/logos-coches/land-rover-logo.png" },
  { name: "Toyota", logo: "/logos-coches/toyota-logo.png" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};


export default function BrandGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useMediaQuery("(max-width: 767px)"); 

  const brandsToShow = isMobile ? brandsData.slice(0, 6) : brandsData;

  return (
    <motion.section
      className="py-20"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto flex flex-col items-center gap-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center"
          variants={titleVariants}
        >
          Encuentra tu marca favorita
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 xl:p-4"
          role="region"
          aria-labelledby="brand-grid-title"
        >
          <h2 id="brand-grid-title" className="sr-only">
            Marcas de coches disponibles
          </h2>
          {brandsToShow.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={cardItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} 
            >
              <BrandCard brand={brand} hidden={!isMobile && index >= 6} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Link
            href="/coches-segunda-mano"
            className="bg-black text-white font-semibold px-8 py-3 text-base md:text-lg rounded-lg hover:bg-gray-300 transition-colors hover:text-black w-max"
          >
            Ver todas las marcas
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

function BrandCard({
  brand,
  hidden, 
}: {
  brand: { name: string; logo: string };
  hidden: boolean;
}) {
  return (
    <Link
      href={`/coches-segunda-mano?brand=${brand.name}`}
      className={`bg-gray-300 rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-md hover:border-gray-600 hover:border-4 border-4 border-transparent transition-shadow 
      ${hidden ? "hidden" : "flex"} md:flex`} 
      aria-label={`Explorar coches de la marca ${brand.name}`}
    >
      <div className="w-20 h-14 xl:w-24 xl:h-16 relative">
        <Image
          src={brand.logo || "/placeholder.svg"}
          alt={`Logo de ${brand.name}`}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <span className="font-medium">{brand.name}</span>
    </Link>
  );
}
```

# src/features/home/components/CategoriesSection.tsx

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section
      className="py-20"
      role="region"
      aria-labelledby="categories-title"
    >
      <div className="container mx-auto">
        <h2
          id="categories-title"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Nuestras Categorías
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <div className="flex justify-end gap-2">
            <CarouselPrevious className="relative left-0 top-0" />
            <CarouselNext className="relative left-0 top-0" />
          </div>
          <CarouselContent className="-ml-4 py-8">
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link href="/coches-segunda-mano">
                <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors h-32">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Eléctricos
                  </h3>
                  <Image
                    src="/seccion-categorias/electrico-img.png"
                    width={120}
                    height={120}
                    alt="Muestra catálogo de vehículos eléctricos"
                    className="absolute left-[4px] bottom-[-25px]"
                  />
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link
                href="/coches-segunda-mano"
                aria-label="Ver coches de la categoría Ocasión"
              >
                <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors h-32">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Ocasión
                  </h3>
                  <Image
                    src="/seccion-categorias/ocasion-img.png"
                    width={130}
                    height={120}
                    alt="Muestra catálogo de vehículos de ocasión"
                    className="absolute left-[-10px] bottom-[-25px]"
                    priority
                  />
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link
                href="/coches-segunda-mano"
                aria-label="Ver coches de la categoría Km0"
              >
                <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors h-32">
                  <h3 className="text-xl font-semibold mb-2 text-white">Km0</h3>
                  <Image
                    src="/seccion-categorias/km0-img.png"
                    width={140}
                    height={120}
                    alt="Muestra catálogo de vehículos Km0"
                    className="absolute left-[-10px] bottom-[-30px]"
                    priority
                  />
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link
                href="/coches-segunda-mano"
                aria-label="Ver coches de la categoría Furgonetas"
              >
                <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors h-32">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Furgonetas
                  </h3>
                  <Image
                    src="/seccion-categorias/furgoneta-img.png"
                    width={120}
                    height={120}
                    alt="Muestra catálogo de furgonetas"
                    className="absolute left-0 bottom-[-25px]"
                    priority
                  />
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link
                href="/coches-segunda-mano"
                aria-label="Ver coches de la categoría Caravanas"
              >
                <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors h-32">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Caravanas
                  </h3>
                  <Image
                    src="/seccion-categorias/caravana-img.png"
                    width={120}
                    height={120}
                    alt="Muestra catálogo de Caravanas"
                    className="absolute left-[10px] bottom-[-25px]"
                    priority
                  />
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link
                href="/coches-segunda-mano"
                aria-label="Ver coches de la categoría Cargadores"
              >
                <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors h-32">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Cargadores
                  </h3>
                  <Image
                    src="/seccion-categorias/cargador-img.png"
                    width={70}
                    height={60}
                    alt="Muestra catálogo de cargadores eléctricos"
                    className="absolute left-0 bottom-[-25px]"
                    priority
                  />
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

```

# src/features/home/components/ChargersAdvisorBanner.tsx

```tsx
"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";

const bannerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ChargersAdvisorBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <motion.section
      className="container mx-auto"
      ref={ref}
      variants={bannerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:px-12 w-full">
            <motion.div className="flex items-center gap-4 mb-4" variants={childVariants}>
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <motion.h3 className="text-2xl md:text-3xl font-bold" variants={childVariants}>
                Asesoramiento personalizado en soluciones de carga
              </motion.h3>
            </motion.div>
            <motion.p className="text-gray-600 mb-6" variants={childVariants}>
              Nuestros expertos te ayudarán a encontrar la solución de carga
              perfecta para tu vehículo eléctrico, adaptada a tus necesidades
              específicas.
            </motion.p>
            <motion.div variants={childVariants}>
              <Button className="group" asChild>
                <Link href="/contacto">
                  Solicitar asesoramiento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
```

# src/features/home/components/DudasAdvisorBanner.tsx

```tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const bannerContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DudasAdvisorBanner() {
  return (
    <section className="container mx-auto display flex items-center justify-center">
      <motion.div
        className="bg-[#e63946] rounded-xl overflow-hidden shadow-lg w-[400px] md:w-[990px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        variants={bannerContentVariants}
      >
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center justify-center w-full z-[1] px-4 py-8 md:pl-4 md:py-0 md:pr-0 lg:pl-12">
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4"
              variants={childVariants}
            >
              ¿Dudas entre tantos coches?
            </motion.h3>
            <motion.div variants={childVariants}>
              <Button
                className="bg-white text-[#193f58] hover:bg-blue-50"
                size="lg"
                asChild
              >
                <Link href="/renting">Te llamamos</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div className="w-full h-36 md:h-48" variants={childVariants}> 
            <div className="absolute bottom-0 left-0 w-full flex justify-end">
              <Image
                src="/dudas-rojo.png"
                alt="Renting de vehículos"
                width={400}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
```

# src/features/home/components/ElectricShargersSection.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Home, Building2, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Charger } from "@/lib/definitions";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const chargers: Charger[] = [
  {
    id: "1",
    name: "Cargador Doméstico Básico",
    power: "7.4 kW",
    type: "Tipo 2",
    price: 899,
    installationPrice: 350,
    features: [
      "Instalación en garaje privado",
      "Carga completa en 6-8 horas",
      "Compatible con todos los vehículos eléctricos",
      "Gestión inteligente de carga",
    ],
    image: "/cargadores/cargador2.png",
    category: "home",
  },
  {
    id: "2",
    name: "Cargador Doméstico Avanzado",
    power: "11 kW",
    type: "Tipo 2",
    price: 1299,
    installationPrice: 450,
    features: [
      "Instalación en garaje privado",
      "Carga completa en 4-6 horas",
      "Compatible con todos los vehículos eléctricos",
      "Gestión inteligente de carga",
      "Conectividad WiFi y control por app",
    ],
    image: "/cargadores/cargador3.png",
    category: "home",
  },
  {
    id: "3",
    name: "Cargador Comunitario",
    power: "22 kW",
    type: "Tipo 2",
    price: 1899,
    installationPrice: 750,
    features: [
      "Instalación en garajes comunitarios",
      "Carga completa en 2-4 horas",
      "Compatible con todos los vehículos eléctricos",
      "Sistema de identificación de usuarios",
      "Gestión de pagos y facturación",
    ],
    image: "/cargadores/cargador1.png",
    category: "community",
  },
  {
    id: "4",
    name: "Cargador Rápido Comercial",
    power: "50 kW",
    type: "CCS / CHAdeMO",
    price: 24999,
    installationPrice: 3500,
    features: [
      "Instalación en negocios y comercios",
      "Carga del 10% al 80% en 30 minutos",
      "Compatible con la mayoría de vehículos eléctricos",
      "Sistema de pago integrado",
      "Monitorización remota y mantenimiento",
    ],
    image: "/cargadores/cargador4.png",
    category: "business",
  },
];

const sectionContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chargerCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ElectricChargersSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <motion.section
      className="py-20"
      ref={ref}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="container mx-auto">
        <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={headerVariants}>
          <Badge className="mb-4" variant="outline">
            <Zap className="h-3 w-3 mr-1" /> Soluciones de carga
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cargadores para vehículos eléctricos</h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones de carga completas para tu vehículo eléctrico, desde la instalación hasta el mantenimiento.
          </p>
        </motion.div>

        {isDesktop ? (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chargers.map((charger) => (
              <motion.div key={charger.id} variants={chargerCardVariants}>
                <ChargerCard charger={charger} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="relative overflow-hidden">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                containScroll: false,
              }}
            >
              <CarouselContent>
                {chargers.map((charger) => (
                  <CarouselItem key={charger.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                    <motion.div variants={chargerCardVariants}> 
                      <ChargerCard charger={charger} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex left-2 z-10" />
              <CarouselNext className="hidden md:flex right-2 z-10" />
            </Carousel>
          </div>
        )}
      </div>
    </motion.section>
  );
}

function ChargerCard({ charger }: { charger: Charger }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={charger.image || "/placeholder.svg"}
          alt={charger.name}
          fill
          className="object-contain p-4"
        />
        {charger.category === "home" && (
          <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Home className="h-3 w-3 mr-1" /> Doméstico
          </div>
        )}
        {charger.category === "community" && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Building2 className="h-3 w-3 mr-1" /> Comunitario
          </div>
        )}
        {charger.category === "business" && (
          <div className="absolute top-2 left-2 bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Building2 className="h-3 w-3 mr-1" /> Comercial
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">{charger.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{charger.power}</span>
            <span>•</span>
            <span>{charger.type}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-6 flex-grow">
          {charger.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Precio</p>
              <p className="text-[#e63946] text-xl font-bold">{charger.price.toLocaleString()} €</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Instalación desde</p>
              <p className="text-lg font-semibold">{charger.installationPrice} €</p>
            </div>
          </div>
          <Button className="w-full" variant="outline" asChild>
            <Link href={`/cargadores/${charger.id}`}>Más información</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

# src/features/home/components/ElectricVehiclesSection.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchElectricVehicles } from "@/app/supabase/supabase";
import type { Car } from "@/lib/definitions";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CarCardGrid from "@/features/catalog-cars/components/CarCardGrid";
import { CarCardSkeleton } from "@/features/car/skeleton/CarSkeleton";
import { motion } from "framer-motion";
import { useCarouselStore } from "@/lib/carouselStore";

const sectionContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const carCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const CAROUSEL_ID = "electricVehiclesCarousel"; 

interface ElectricVehiclesSectionProps {
  shouldAnimateEntry?: boolean;
}

export default function ElectricVehiclesSection({shouldAnimateEntry = true}: ElectricVehiclesSectionProps) {
  const [electricVehicles, setElectricVehicles] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const initialAnimState = shouldAnimateEntry ? "hidden" : "visible";

  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const { setActiveSlide, getActiveSlide } = useCarouselStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadElectricVehicles = async () => {
      setIsLoading(true);
      try {
        const vehicles = await fetchElectricVehicles(4);
        setElectricVehicles(vehicles);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadElectricVehicles();
  }, []);

  useEffect(() => {
    if (!carouselApi || !mounted) {
      return;
    }

    const savedIndex = getActiveSlide(CAROUSEL_ID);
    if (typeof savedIndex === 'number' && savedIndex >= 0 && savedIndex < electricVehicles.length) {
      console.log(`[${CAROUSEL_ID}] Restaurando al índice:`, savedIndex);
      carouselApi.scrollTo(savedIndex, true); 
    }

    const handleSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      console.log(`[${CAROUSEL_ID}] Diapositiva seleccionada:`, selectedIndex);
      setActiveSlide(CAROUSEL_ID, selectedIndex);
    };

    carouselApi.on("select", handleSelect);
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi, mounted, getActiveSlide, setActiveSlide, electricVehicles.length]);


  if (!mounted) {
    return null;
  }

  const viewportSettings = {
    once: true,
    amount: isMobile ? 0.05 : 0.1
  };

  return (
    <motion.section
      className="py-20"
      id="electric-vehicles-section"
      variants={sectionContainerVariants}
      initial={initialAnimState}
      whileInView="visible"
      viewport={viewportSettings}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <motion.div variants={headerItemVariants}>
            <h2 className="text-3xl font-bold">¿Buscas un vehículo eléctrico?</h2>
            <p className="text-muted-foreground mt-2">
              Descubre nuestra selección de vehículos 100% eléctricos
            </p>
          </motion.div>
          <motion.div variants={headerItemVariants}>
            <Button variant="outline" className="group" asChild>
              <Link href="/coches-segunda-mano?fuel=Eléctrico">
                Ver todos los vehículos eléctricos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {isLoading ? (
          isDesktop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <CarCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true, 
                  containScroll: false,
                }}
              >
                <CarouselContent>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CarouselItem key={i} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                      <CarCardSkeleton />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex left-2 z-10 " />
                <CarouselNext className="hidden md:flex right-2 z-10" />
              </Carousel>
            </div>
          )
        ) : (
          <>
            {isDesktop && (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {electricVehicles.map((vehicle) => (
                  <motion.div
                    key={vehicle.id}
                    variants={carCardVariants}
                  >
                    <CarCardGrid car={vehicle} />
                  </motion.div>
                ))}
              </motion.div>
            )}
            {!isDesktop && electricVehicles.length > 0 && ( 
              <div className="relative overflow-hidden">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true, 
                    containScroll: false,
                  }}
                  setApi={setCarouselApi} 
                >
                  <CarouselContent>
                    {electricVehicles.map((vehicle) => (
                      <CarouselItem key={vehicle.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                        <motion.div variants={carCardVariants}>
                          <CarCardGrid car={vehicle} />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex left-2 z-10 " />
                  <CarouselNext className="hidden md:flex right-2 z-10" />
                </Carousel>
              </div>
            )}
          </>
        )}
      </div>
    </motion.section>
  );
}
```

# src/features/home/components/HeroSection.tsx

```tsx
"use client";

import { ebGaramond, montserrat } from "@/utils/fonts";
import { Battery, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react"; 

const btnLink = [
  {
    href: "/coches-segunda-mano",
    label: "Comprar",
    ariaLabel: "Ver catálogo de coches de segunda mano",
  },
  {
    href: "/gestion-de-venta",
    label: "Vender",
    ariaLabel: "Vender tu coche",
  },
  {
    href: "/renting",
    label: "Renting",
    ariaLabel: "Ver opciones de renting",
  },
];

const cardsData = [
  {
    title: "Carga inteligente",
    description: "Soluciones de carga para tu hogar o negocio",
    icon: <Zap className="size-4 md:size-8 text-white" />,
  },
  {
    title: "Autonomía extendida",
    description: "Vehículos con hasta 600km de autonomía",
    icon: <Battery className="size-4 md:size-8 text-white" />,
  },
  {
    title: "Garantía completa",
    description: "Todos nuestros vehículos con garantía extendida",
    icon: <ShieldCheck className="size-4 md:size-8 text-white" />,
  },
];

const textRevealVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' }, 
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: 'easeOut' } } 
};

const buttonContainerVariants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 1.5 
    }
  }
};

const individualButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const cardVariants = {
  initial: { opacity: 0, x: -50 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 1 + index * 0.2 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative h-svh flex overflow-hidden" role="banner">
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/imgHome-mobile2.png"
            type="image/png"
          />
          <source
            media="(min-width: 1980px) and (max-width: 3440px)"
            srcSet="/imgHome-ultrawide2.png"
            type="image/png"
          />
          <img
            src="/imgHome2.png"
            alt="Luxury Car"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-black/50" />
      </div>

      <div className="relative flex flex-col justify-between z-10 container mx-auto px-0 pb-0 pt-16 md:px-8 md:pb-12 md:pt-24 flex-1">
        <div className="max-w-2xl flex flex-col items-center gap-6 mt-2 md:mt-20 short:mt-4 ">
          <div className="flex flex-col items-center gap-1">
            <motion.h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-white overflow-hidden`}
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              style={{ whiteSpace: 'nowrap' }}
            >
              LEBAUTO
            </motion.h1>
            <motion.p
              className={`${ebGaramond.className} italic max-md:font-semibold text-2xl md:text-3xl lg:text-5xl text-gray-200 overflow-hidden`}
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...textRevealVariants.visible.transition }}
              style={{ whiteSpace: 'nowrap' }}
            >
              La referencia en coches eléctricos
            </motion.p>
          </div>
          <motion.div
            className="flex items-center gap-2"
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {btnLink.map((btn, index) => (
              <motion.div key={index} variants={individualButtonVariants}>
                <Link
                  href={btn.href}
                  className="bg-white text-black font-semibold px-4 py-2 text-base md:text-lg rounded-[0.5rem] hover:opacity-80 w-[100px] text-center"
                  aria-label={btn.ariaLabel}
                >
                  {btn.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 md:gap-6 mt-8 max-w-5xl mx-auto pb-6 px-4 md:p-0">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="md:bg-black/40 backdrop-blur-sm p-2 md:p-6 rounded-xl flex items-center gap-4 text-white"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              <div className="bg-white/10 p-3 rounded-full">{card.icon}</div>
              <div>
                <h3 className="font-bold text-sm md:text-lg mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

# src/features/home/components/HomePageSections.tsx

```tsx
"use client";

import { useUXStore } from "@/lib/uxStore";

import ElectricVehiclesSection from "@/features/home/components/ElectricVehiclesSection";
import SellYourCarSection from "@/features/home/components/SellYourCarSection";
import RentingBanner from "@/features/home/components/RentingBanner";
import ElectricChargersSection from "@/features/home/components/ElectricShargersSection";
import ChargersAdvisorBanner from "@/features/home/components/ChargersAdvisorBanner";
import BrandGrid from "@/features/home/components/BrandGrid";
import DudasAdvisorBanner from "@/features/home/components/DudasAdvisorBanner";
import TestimonialsSection from "@/features/home/components/TestimonialsSection";
import LocationsSection from "@/features/home/components/LocationsSection";
import HeroSection from "./HeroSection";

export default function HomePageSections() {
  const { hasAnimatedHomePageOnce } = useUXStore();
  const shouldAnimate = !hasAnimatedHomePageOnce;

  return (
    <>
      <HeroSection />
      <ElectricVehiclesSection shouldAnimateEntry={shouldAnimate} />
      <SellYourCarSection />
      <RentingBanner />
      <ElectricChargersSection />
      <ChargersAdvisorBanner />
      <BrandGrid />
      <DudasAdvisorBanner />
      <TestimonialsSection />
      <LocationsSection />
    </>
  );
}

```

# src/features/home/components/LocationsSection.tsx

```tsx
"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery"; 


type Location = {
  id: number
  city: string
  phone: string
  address: string
  addressLine2: string
  hours: string[]
  hoursWeekend: string[]
}

const locations: Location[] = [
  {
    id: 1,
    city: "Madrid",
    phone: "+34 919 49 48 25",
    address: "Calle Límite 16",
    addressLine2: "Torrejón de Ardoz",
    hours: ["Lunes a viernes de 9:00 a 20:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00 y 16:00 a 20:00"],
  },
  {
    id: 2,
    city: "Barcelona",
    phone: "+34 932 71 33 33",
    address: "Calle Binéfar número 21-25",
    addressLine2: "Barcelona",
    hours: ["Lunes a viernes de 9:00 a 21:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00 y 16:00 a 21:00"],
  },
  {
    id: 3,
    city: "Valencia",
    phone: "+34 963 22 44 55",
    address: "Avenida del Puerto 45",
    addressLine2: "Valencia",
    hours: ["Lunes a viernes de 9:00 a 20:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00"],
  },
  {
    id: 4,
    city: "Sevilla",
    phone: "+34 954 33 22 11",
    address: "Calle Luis Montoto 102",
    addressLine2: "Sevilla",
    hours: ["Lunes a viernes de 9:30 a 20:30"],
    hoursWeekend: ["Sábados de 10:00 a 14:00"],
  },
  {
    id: 5,
    city: "Bilbao",
    phone: "+34 944 27 88 99",
    address: "Gran Vía Don Diego López de Haro 33",
    addressLine2: "Bilbao",
    hours: ["Lunes a viernes de 9:00 a 20:00"],
    hoursWeekend: ["Sábados de 10:00 a 14:00"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardItemVariants = { 
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function LocationsSection() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const viewportSettings = {
    once: true,
    amount: isMobile ? 0.05 : 0.1
  };

  return (
    <motion.section
      className="pb-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings} 
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          variants={titleVariants}
        >
          Encuentra tu centro Lebauto
        </motion.h2>
          <div className="relative overflow-hidden flex justify-center items-center">
            <Carousel
              className="w-full md:max-w-[88%] lg:max-w-[91%] static"
              opts={{
                align: "start",
                loop: true,
                containScroll: false,
              }}
            >
              <CarouselContent>
                {locations.map((location) => (
                  <CarouselItem key={location.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                    <motion.div variants={cardItemVariants}> 
                      <LocationCard location={location} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex left-2 z-10" />
              <CarouselNext className="hidden md:flex right-2 z-10" />
            </Carousel>
          </div>
      </div>
    </motion.section>
  )
}

function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4">{location.city}</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-gray-500 font-medium mb-1">Teléfono comercial</p>
              <p>{location.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-gray-500 font-medium mb-1">Ver ubicación</p>
              <p>{location.address}</p>
              <p>{location.addressLine2}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-gray-500 font-medium mb-1">Horario</p>
              {location.hours.map((hour, i) => (
                <p key={i}>{hour}</p>
              ))}
              {location.hoursWeekend.map((hour, i) => (
                <p key={i}>{hour}</p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

# src/features/home/components/RentingBanner.tsx

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const sectionContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren", 
      staggerChildren: 0.15, 
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function RentingBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <motion.section
      className="sm:pt-16 container mx-auto flex items-center justify-center"
      ref={ref}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="bg-gradient-to-r from-[#708ba0] to-[#193f58] rounded-xl overflow-hidden shadow-lg w-[400px] md:w-[1440px]">
        <div className="relative flex flex-col md:flex-row items-center">
          <motion.div className="p-8 lg:pr-16 md:px-12 md:w-1/2 lg:w-2/3" variants={contentVariants}>
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-4" variants={contentVariants}>
              ¡Renting a tu medida sin entrada inicial!
            </motion.h3>
            <motion.p className="text-blue-100 mb-6" variants={contentVariants}>
              Disfruta de tu vehículo con todo incluido: seguro, mantenimiento,
              asistencia y mucho más por una cuota mensual fija.
            </motion.p>
            <motion.div variants={contentVariants}>
              <Button
                className="bg-white text-[#193f58] hover:bg-blue-50"
                size="lg"
                asChild
              >
                <Link href="/renting">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 text-[#193f58]" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <div className="md:w-1/2 lg:w-1/3 w-full h-64 md:h-auto">
            <div className="absolute bottom-0 left-0 w-full flex justify-end">
              <Image
                src="/imagen-renting.png"
                alt="Renting de vehículos"
                width={400}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
```

# src/features/home/components/RentingInfoSection.tsx

```tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, FileCheck, ShieldCheck, Car, Wrench } from "lucide-react"

export default function RentingInfoSection() {
  const benefits = [
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Flexibilidad total",
      description: "Elige el plazo que mejor se adapte a tus necesidades, desde 24 hasta 60 meses.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
      title: "Cuota mensual fija",
      description: "Sin sorpresas ni gastos inesperados. Paga lo mismo cada mes durante todo el contrato.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-500" />,
      title: "Todo incluido",
      description: "Seguro a todo riesgo, mantenimiento, asistencia en carretera y gestión de multas.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-500" />,
      title: "Sin entrada inicial",
      description: "Comienza a disfrutar de tu vehículo sin necesidad de grandes desembolsos iniciales.",
    },
    {
      icon: <Car className="h-10 w-10 text-blue-500" />,
      title: "Vehículo siempre nuevo",
      description: "Al finalizar el contrato, puedes renovarlo y estrenar un nuevo vehículo.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-500" />,
      title: "Mantenimiento incluido",
      description: "Olvídate de las revisiones y reparaciones, nosotros nos encargamos de todo.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Renting de vehículos para particulares y empresas</h2>
          <p className="text-lg text-muted-foreground">
            Disfruta de la libertad de conducir sin preocupaciones. Nuestro servicio de renting incluye todo lo que
            necesitas en una cuota mensual fija.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <Link href="/renting">
              Descubre nuestras ofertas de renting
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


```

# src/features/home/components/SavingsCalculator.tsx

```tsx
"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Fuel, Wrench, Euro } from "lucide-react"

export default function SavingsCalculator() {
  const [kmPerYear, setKmPerYear] = useState(15000)
  const [fuelConsumption, setFuelConsumption] = useState(7)
  const [fuelPrice, setFuelPrice] = useState(1.8)
  const [electricityPrice, setElectricityPrice] = useState(0.15)
  const [electricConsumption, setElectricConsumption] = useState(18)
  const [yearsOfUse, setYearsOfUse] = useState(5)

  const [fuelCost, setFuelCost] = useState(0)
  const [electricityCost, setElectricityCost] = useState(0)
  const [maintenanceSavings, setMaintenanceSavings] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)

  useEffect(() => {
    // Cálculo del coste de combustible (litros por km * precio por litro * km por año * años)
    const fuelCostCalc = (fuelConsumption / 100) * fuelPrice * kmPerYear * yearsOfUse
    setFuelCost(fuelCostCalc)

    // Cálculo del coste de electricidad (kWh por km * precio por kWh * km por año * años)
    const electricityCostCalc = (electricConsumption / 100) * electricityPrice * kmPerYear * yearsOfUse
    setElectricityCost(electricityCostCalc)

    // Estimación de ahorro en mantenimiento (aproximadamente 50% menos)
    const maintenanceCost = kmPerYear * yearsOfUse * 0.03 // 3 céntimos por km para vehículo combustión
    const electricMaintenanceCost = maintenanceCost * 0.5 // 50% menos para eléctrico
    setMaintenanceSavings(maintenanceCost - electricMaintenanceCost)

    // Cálculo del ahorro total
    setTotalSavings(fuelCostCalc - electricityCostCalc + (maintenanceCost - electricMaintenanceCost))
  }, [kmPerYear, fuelConsumption, fuelPrice, electricityPrice, electricConsumption, yearsOfUse])

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Calculadora de ahorro</h2>
            <p className="text-lg text-muted-foreground">
              Descubre cuánto puedes ahorrar al cambiar a un vehículo eléctrico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label htmlFor="km-per-year">Kilómetros anuales: {kmPerYear.toLocaleString()}</Label>
                </div>
                <Slider
                  id="km-per-year"
                  min={5000}
                  max={50000}
                  step={1000}
                  value={[kmPerYear]}
                  onValueChange={(value) => setKmPerYear(value[0])}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label htmlFor="years-of-use">Años de uso: {yearsOfUse}</Label>
                </div>
                <Slider
                  id="years-of-use"
                  min={1}
                  max={10}
                  step={1}
                  value={[yearsOfUse]}
                  onValueChange={(value) => setYearsOfUse(value[0])}
                />
              </div>

              <Tabs defaultValue="combustion" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="combustion">Vehículo combustión</TabsTrigger>
                  <TabsTrigger value="electric">Vehículo eléctrico</TabsTrigger>
                </TabsList>
                <TabsContent value="combustion" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="fuel-consumption">Consumo (l/100km)</Label>
                    <Input
                      id="fuel-consumption"
                      type="number"
                      min={3}
                      max={20}
                      step={0.1}
                      value={fuelConsumption}
                      onChange={(e) => setFuelConsumption(Number.parseFloat(e.target.value) || 7)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fuel-price">Precio combustible (€/l)</Label>
                    <Input
                      id="fuel-price"
                      type="number"
                      min={0.5}
                      max={3}
                      step={0.01}
                      value={fuelPrice}
                      onChange={(e) => setFuelPrice(Number.parseFloat(e.target.value) || 1.8)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="electric" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="electric-consumption">Consumo (kWh/100km)</Label>
                    <Input
                      id="electric-consumption"
                      type="number"
                      min={10}
                      max={30}
                      step={0.1}
                      value={electricConsumption}
                      onChange={(e) => setElectricConsumption(Number.parseFloat(e.target.value) || 18)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="electricity-price">Precio electricidad (€/kWh)</Label>
                    <Input
                      id="electricity-price"
                      type="number"
                      min={0.05}
                      max={0.5}
                      step={0.01}
                      value={electricityPrice}
                      onChange={(e) => setElectricityPrice(Number.parseFloat(e.target.value) || 0.15)}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">Tu ahorro estimado</h3>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-amber-100 p-2 rounded-full">
                          <Fuel className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium">Ahorro en combustible</p>
                          <p className="text-sm text-muted-foreground">En {yearsOfUse} años</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-green-600">
                        {Math.round(fuelCost - electricityCost).toLocaleString()} €
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Wrench className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Ahorro en mantenimiento</p>
                          <p className="text-sm text-muted-foreground">En {yearsOfUse} años</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-green-600">
                        {Math.round(maintenanceSavings).toLocaleString()} €
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Euro className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Ahorro total</p>
                          <p className="text-sm text-muted-foreground">En {yearsOfUse} años</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-green-600">{Math.round(totalSavings).toLocaleString()} €</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <p className="text-center text-sm text-muted-foreground mb-4">
                      Estos cálculos son estimaciones basadas en los datos proporcionados. El ahorro real puede variar.
                    </p>
                    <Button className="w-full" asChild>
                      <Link href="/contacto">Solicitar asesoramiento personalizado</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


```

# src/features/home/components/SearchSection.tsx

```tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { fetchCars } from "@/app/supabase/supabase";

export default function SearchSection() {
  const router = useRouter();
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedModel, setSelectedModel] = useState("all");

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, []);

  const uniqueBrands = useMemo(
    () => Array.from(new Set(cars.map((car) => car.brand))),
    [cars]
  );

  const filteredModels = useMemo(
    () =>
      selectedBrand && selectedBrand !== "all"
        ? Array.from(
            new Set(
              cars.filter((car) => car.brand === selectedBrand).map((car) => car.model)
            )
          )
        : [],
    [selectedBrand, cars]
  );

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (selectedBrand && selectedBrand !== "all") query.set("brand", selectedBrand);
    if (selectedModel && selectedModel !== "all") query.set("model", selectedModel);
    router.push(`/coches-segunda-mano?${query.toString()}`);
  };

  return (
    <section className="relative z-10 -mt-24 sm:-mt-16 pb-8" role="search">
      <div className="container mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full" aria-label="Seleccionar marca">
                <SelectValue placeholder={loading ? "Cargando marcas..." : "Selecciona marca"} />
              </SelectTrigger>
              <SelectContent>
                {loading ? (
                  <SelectItem value="none" disabled>
                    Cargando marcas...
                  </SelectItem>
                ) : (
                  <>
                    <SelectItem value="all">Todas las marcas</SelectItem>
                    {uniqueBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedModel}>
              <SelectTrigger className="w-full" aria-label="Seleccionar modelo">
                <SelectValue placeholder={loading ? "Cargando modelos..." : "Selecciona modelo"} />
              </SelectTrigger>
              <SelectContent>
                {loading ? (
                  <SelectItem value="none" disabled>
                    Cargando modelos...
                  </SelectItem>
                ) : (
                  <>
                    {filteredModels.length > 0 ? (
                      filteredModels.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="all" disabled>
                        No hay modelos
                      </SelectItem>
                    )}
                  </>
                )}
              </SelectContent>
            </Select>

            <Button
              onClick={handleSearch}
              className="w-full bg-gray-900 hover:bg-gray-700 text-white px-8 text-lg"
              aria-label="Buscar coches"
            >
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

```

# src/features/home/components/SellYourCarSection.tsx

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const benefits = [
  "Valoración gratuita de tu vehículo",
  "Gestión completa de la documentación",
  "Pago inmediato y seguro",
  "Sin complicaciones ni intermediarios",
  "Nos encargamos de todo el proceso",
];

const sectionOverallVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
  }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }, 
};

const listContainerVariants = {
  hidden: {}, 
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
};

const infoCardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } },
};

export default function SellYourCarSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const mobileTopPadding = "pt-20";
  const viewportAmountGeneral = 0.15;
  const buttonViewportAmount = isDesktop ? 0.4 : 0.2;

  return (
    <motion.section
      className="pb-20 sm:pt-20 initially-hidden"
      role="region"
      aria-labelledby="sell-your-car-title"
      variants={sectionOverallVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-x-12 pt gap-y-8 md:gap-y-12 items-center">
        <div className={`order-2 md:order-1 ${!isDesktop ? mobileTopPadding : ""}`}>
          <motion.h2
            id="sell-your-car-title"
            className="text-3xl md:text-4xl font-bold mb-6" 
            variants={titleVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            Gestionamos la venta de tu coche
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-8"
            variants={descriptionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            ¿Quieres vender tu coche sin complicaciones? Nosotros nos encargamos de todo el proceso, desde la
            valoración hasta la gestión de la documentación, para que tú solo tengas que preocuparte de recibir el dinero.
          </motion.p>

          <motion.ul
            className="space-y-3 mb-8"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            {benefits.map((benefit) => (
              <motion.li key={benefit} className="flex items-center gap-3" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: buttonViewportAmount }}
          >
            <Button asChild size="lg" className="group" aria-label="Ir a la página de gestión de venta">
              <Link href="/gestion-de-venta">
                Vender mi coche
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center">
          <motion.div
            className="relative w-full max-w-xs md:max-w-lg h-[250px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmountGeneral }}
          >
            <Image
              src="/seccion-gestion-coche.webp"
              alt="Imagen de la gestión de venta de coches"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-[5.5rem] md:-bottom-6 -right-2 md:left-auto md:right-6 bg-primary text-white p-4 rounded-lg shadow-lg text-center w-48 md:w-auto"
            variants={infoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} 
          >
            <p className="text-xl font-bold">¡Valoración gratuita!</p>
            <p>Sin compromiso</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
```

# src/features/home/components/SubsidiesSection.tsx

```tsx
import { FileCheck, FileText, FileSpreadsheet, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SubsidiesSection() {
  const subsidies = [
    {
      icon: FileCheck,
      title: "Plan MOVES III",
      description: "Hasta 7.000€ para particulares y 9.000€ para empresas en la compra de vehículos eléctricos.",
      color: "bg-blue-50 text-blue-700",
      iconColor: "text-blue-600",
    },
    {
      icon: FileText,
      title: "Ayudas locales",
      description: "Bonificaciones en el impuesto de circulación y estacionamiento gratuito en zonas reguladas.",
      color: "bg-green-50 text-green-700",
      iconColor: "text-green-600",
    },
    {
      icon: FileSpreadsheet,
      title: "Deducciones fiscales",
      description:
        "Hasta un 15% de deducción en el IRPF para autónomos y empresas por la compra de vehículos eléctricos.",
      color: "bg-purple-50 text-purple-700",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ayudas y subvenciones</h2>
          <p className="text-lg text-muted-foreground">
            Te ayudamos a aprovechar todas las ayudas disponibles para la compra de tu vehículo eléctrico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {subsidies.map((subsidy, index) => (
            <div key={index} className={`p-8 rounded-lg ${subsidy.color} border`}>
              <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 bg-white`}>
                <subsidy.icon className={`h-6 w-6 ${subsidy.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{subsidy.title}</h3>
              <p>{subsidy.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">¿Necesitas ayuda con la tramitación?</h3>
          <p className="text-muted-foreground mb-6 text-center">
            Nuestro equipo de expertos te guiará en todo el proceso de solicitud de ayudas y subvenciones, asegurándonos
            de que obtengas el máximo beneficio posible.
          </p>
          <div className="flex justify-center">
            <Button className="group" asChild>
              <Link href="/contacto">
                Más información sobre ayudas
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


```

# src/features/home/components/TestimonialsSection.tsx

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    position: "Empresaria",
    quote:
      "El servicio de LEBAUTO ha sido excepcional. Me asesoraron perfectamente y encontré el Tesla Model 3 que buscaba a un precio inmejorable.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Ingeniero",
    quote:
      "Gracias a LEBAUTO, el proceso de cambiar a un vehículo eléctrico fue mucho más sencillo de lo que esperaba. Su asesoramiento con los cargadores fue clave.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Sánchez",
    position: "Médico",
    quote:
      "Increíble experiencia con LEBAUTO. No solo me ayudaron a encontrar mi coche ideal, sino que también me asesoraron sobre las ayudas disponibles.",
    avatar: "https://randomuser.me/api/portraits/women/64.jpg",
    rating: 4,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const carouselContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const { ref: inViewTriggerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (sectionRef.current) {
      (inViewTriggerRef as React.RefCallback<HTMLDivElement>)(sectionRef.current);
    }
  }, [inViewTriggerRef]);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  return (
    <motion.section
      className="py-20"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl mx-auto w-full font-bold text-center mb-4"
          variants={titleVariants}
        >
          Las opiniones de nuestros clientes
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto relative"
          variants={carouselContainerVariants}
        >
          <div
            ref={testimonialRef}
            className="relative overflow-hidden min-h-[480px] sm:min-h-[370px] md:min-h-[270px] lg:min-h-[240px]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out p-2 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white p-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-lebauto-accent"
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <p className="text-lg italic mb-4 text-gray-400">{`"${testimonial.quote}"`}</p>
                      <div className="flex items-center justify-center md:justify-start mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="font-bold text-lebauto-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-lebauto-gray">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-lebauto-accent scale-125 bg-[#FFC107]"
                    : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
```

# src/features/home/components/WhyElectricSection.tsx

```tsx
import { Battery, Leaf, Wallet, Wrench, ShieldCheck, Zap } from "lucide-react"

export default function WhyElectricSection() {
  const benefits = [
    {
      icon: Battery,
      title: "Mayor autonomía",
      description: "Los vehículos eléctricos modernos ofrecen autonomías de hasta 600 km con una sola carga.",
    },
    {
      icon: Leaf,
      title: "0 emisiones",
      description: "Contribuye al medio ambiente con un vehículo que no emite gases contaminantes.",
    },
    {
      icon: Wallet,
      title: "Ahorro económico",
      description: "Reduce hasta un 70% los costes de combustible y mantenimiento frente a vehículos convencionales.",
    },
    {
      icon: Wrench,
      title: "Menos mantenimiento",
      description: "Olvídate de cambios de aceite y reduce las visitas al taller con un motor más simple y duradero.",
    },
    {
      icon: ShieldCheck,
      title: "Mayor seguridad",
      description: "Los vehículos eléctricos suelen obtener las mejores calificaciones en pruebas de seguridad.",
    },
    {
      icon: Zap,
      title: "Mejor rendimiento",
      description: "Disfruta de una aceleración instantánea y una conducción más suave y silenciosa.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir un vehículo eléctrico?</h2>
          <p className="text-lg text-white/80">
            Descubre todas las ventajas que te ofrece la movilidad eléctrica y por qué cada vez más conductores dan el
            paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors"
            >
              <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


```

# src/hooks/useKmDebounce.ts

```ts
import { FilterKey } from "@/lib/definitions";
import { useDebouncedCallback } from "use-debounce";

interface useKmDebounceParams {
    minKm: string;
    maxKm: string;
    setMinKm: (val: string) => void;
    setMaxKm: (val: string) => void;
    setFilter: (key: FilterKey, value: string | number) => void;
    toast: any;
}

export function useKmDebounce({ minKm, maxKm, setMinKm, setMaxKm, setFilter, toast }: useKmDebounceParams) {

  const debouncedValidateMaxKm = useDebouncedCallback((value: string) => {
    const numValue = Number(value);
    if (Number(minKm) && numValue < Number(minKm)) {
      toast({
        title: "Error",
        description:
          "Los kilómetros máximos no pueden ser menores que los kilómetros mínimos.",
        variant: "destructive",
      });
      setFilter("maxKm", Number(minKm));
      setMaxKm(minKm);
    } else {
      setFilter("maxKm", numValue || 500000);
    }
  }, 500);

  const debouncedValidateMinKm = useDebouncedCallback((value: string) => {
    const numValue = Number(value);
    if (Number(maxKm) && numValue > Number(maxKm)) {
      toast({
        title: "Error",
        description:
          "Los kilómetros mínimos no pueden ser mayores que los kilómetros máximos.",
        variant: "destructive",
      });
      setFilter("minKm", Number(maxKm));
      setMinKm(maxKm);
    } else {
      setFilter("minKm", numValue || 0);
    }
  }, 500);

  return { debouncedValidateMaxKm, debouncedValidateMinKm };
}

```

# src/hooks/useMediaQuery.ts

```ts
"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}


```

# src/hooks/useMobile.tsx

```tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

# src/hooks/usePriceDebounce.ts

```ts
import { FilterKey } from "@/lib/definitions";
import { useDebouncedCallback } from "use-debounce";

interface UsePriceDebounceParams {
  minPrice: string;
  maxPrice: string;
  setMinPrice: (val: string) => void;
  setMaxPrice: (val: string) => void;
  setFilter: (key: FilterKey, value: string | number) => void;
  toast: any; 
}

export function usePriceDebounce({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  setFilter,
  toast,
}: UsePriceDebounceParams) {

  const debouncedValidateMinPrice = useDebouncedCallback((value: string) => {
    const numValue = Number(value);
    if (Number(maxPrice) && numValue > Number(maxPrice)) {
      toast({
        title: "Error",
        description: "El precio mínimo no puede ser mayor que el precio máximo.",
        variant: "destructive",
      });
      setFilter("minPrice", Number(maxPrice));
      setMinPrice(maxPrice);
    } else {
      setFilter("minPrice", numValue || 0);
    }
  }, 500);

  const debouncedValidateMaxPrice = useDebouncedCallback((value: string) => {
    const numValue = Number(value);
    if (Number(minPrice) && numValue < Number(minPrice)) {
      toast({
        title: "Error",
        description: "El precio máximo no puede ser menor que el precio mínimo.",
        variant: "destructive",
      });
      setFilter("maxPrice", Number(minPrice));
      setMaxPrice(minPrice);
    } else {
      setFilter("maxPrice", numValue || 1000000);
    }
  }, 500);

  return { debouncedValidateMinPrice, debouncedValidateMaxPrice };
}

```

# src/hooks/useResponsiveView.ts

```ts
import { useCallback, useEffect } from "react";
import { useViewStore } from "@/lib/store";

export function useResponsiveView() {
  const { setView } = useViewStore();

  const updateView = useCallback((e?: MediaQueryListEvent) => {
    setView(
      e
        ? e.matches
          ? "list"
          : "grid"
        : window.innerWidth >= 1024
        ? "list"
        : "grid"
    );
  }, [setView]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    updateView();
    mediaQuery.addEventListener("change", updateView);
    return () => mediaQuery.removeEventListener("change", updateView);
  }, [updateView]);
}

```

# src/hooks/useToast.ts

```ts
"use client"

import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

```

# src/hooks/useYearDebounce.ts

```ts
import { FilterKey } from "@/lib/definitions";
import { useDebouncedCallback } from "use-debounce";

interface YearDebounceProps {
        minYear: string;
        maxYear: string;
        setMinYear: (val: string) => void;
        setMaxYear: (val: string) => void;
        setFilter: (key: FilterKey, value: string | number) => void;
        toast: any;
        
}

export function useYearDebounce({ minYear, maxYear, setMinYear, setMaxYear, setFilter, toast }: YearDebounceProps) {

    const debouncedValidateMaxYear = useDebouncedCallback((value: string) => {
        const numValue = Number(value);
        if (Number(minYear) && numValue < Number(minYear)) {
          toast({
            title: "Error",
            description: "El año máximo no puede ser menor que el año mínimo.",
            variant: "destructive",
          });
          setFilter("maxYear", Number(minYear));
          setMaxYear(minYear);
        } else {
          setFilter("maxYear", numValue || new Date().getFullYear());
        }
      }, 500);
    
      const debouncedValidateMinYear = useDebouncedCallback((value: string) => {
        const numValue = Number(value);
        if (Number(maxYear) && numValue > Number(maxYear)) {
          toast({
            title: "Error",
            description: "El año mínimo no puede ser mayor que el año máximo.",
            variant: "destructive",
          });
          setFilter("minYear", Number(maxYear));
          setMinYear(maxYear);
        } else {
          setFilter("minYear", numValue || 1990);
        }
      }, 500);
    
      return { debouncedValidateMaxYear, debouncedValidateMinYear };
}
```

# src/lib/carouselStore.ts

```ts
import { create } from 'zustand';

interface CarouselState {
  activeSlideIndexes: Record<string, number>;
  setActiveSlide: (carouselId: string, index: number) => void;
  getActiveSlide: (carouselId: string) => number | undefined;
}

export const useCarouselStore = create<CarouselState>((set, get) => ({
  activeSlideIndexes: {},
  setActiveSlide: (carouselId, index) =>
    set((state) => ({
      activeSlideIndexes: {
        ...state.activeSlideIndexes,
        [carouselId]: index,
      },
    })),
  getActiveSlide: (carouselId) => get().activeSlideIndexes[carouselId],
}));
```

# src/lib/chat-flows/buyCarFlow.ts

```ts
import type { ChatStep } from '../chatFlowTypes';

const parseBuyCarQueryToFilters = (query: string, existingFiltersString?: string): string => {
  const lowerQuery = query.toLowerCase();
  const currentParams = new URLSearchParams(existingFiltersString?.startsWith("?") ? existingFiltersString.substring(1) : existingFiltersString || "");
  const filtersFromParams: Record<string, string | string[]> = {};
  currentParams.forEach((value,key) => { filtersFromParams[key] = value; }); 

  const newFilters: Record<string, string> = {}; 
  
  const fuelKeywords: Record<string, string> = { "electrico": "Eléctrico", "eléctrico": "Eléctrico", "diesel": "Diésel", "diésel": "Diésel", "gasolina": "Gasolina" };
  for (const keyword in fuelKeywords) { if (lowerQuery.includes(keyword)) newFilters.fuel = fuelKeywords[keyword]; }

  const bodyTypeKeywords: Record<string, string> = { "suv": "SUV", "berlina": "Berlina", "compacto": "Compacto" };
  for (const keyword in bodyTypeKeywords) { if (lowerQuery.includes(keyword)) newFilters.bodyType = bodyTypeKeywords[keyword]; }
  
  const colorKeywords: Record<string, string> = { "rojo": "Rojo", "negro": "Negro", "blanco": "Blanco", "azul": "Azul", "gris": "Gris / Plata"};
  for (const keyword in colorKeywords) { if (lowerQuery.includes(keyword)) newFilters.color = colorKeywords[keyword]; }

  const priceMatch = lowerQuery.match(/(?:menos de|hasta|presupuesto)\s*(\d+)/i);
  if (priceMatch && priceMatch[1]) newFilters.maxPrice = priceMatch[1];
  
  const knownBrands = ["audi", "bmw", "mercedes", "tesla", "seat", "peugeot", "renault"];
  for (const brand of knownBrands) { if (lowerQuery.includes(brand)) { newFilters.brand = brand.charAt(0).toUpperCase() + brand.slice(1); break; } }
  
  const combinedFilters = { ...filtersFromParams, ...newFilters };

  let queryString = "";
  for (const key in combinedFilters) {
    const value = combinedFilters[key];
    queryString += `${key}=${encodeURIComponent(String(value))}&`;
  }
  return queryString.endsWith('&') ? queryString.slice(0, -1) : queryString;
};

export const buyCarFlowSteps: Record<string, ChatStep> = {
  buyCar_start: {
    id: 'buyCar_start',
    message: '¡Genial que quieras comprar un coche! ¿Tienes algún modelo o tipo en mente, o prefieres que te ayude a encontrar uno?',
    options: [
      { label: 'Tengo una idea', nextStepId: 'buyCar_askPreferences', value: 'buy_have_idea'},
      { label: 'Ayúdame a elegir', nextStepId: 'recommend_start', value: 'buy_need_help_choosing'},
      { label: 'Ver coches eléctricos', nextStepId: 'showElectricCarsCatalog', value: 'buy_see_electric'},
      { label: 'Ver todo el catálogo', nextStepId: 'showAllCarsCatalog', value: 'buy_see_all'},
      { label: 'Volver', nextStepId: 'start', value: 'back_to_main_from_buy'}
    ],
    previousStepId: 'start'
  },
  buyCar_askPreferences: {
    id: 'buyCar_askPreferences',
    message: 'Perfecto. Dime qué características buscas (ej: marca, tipo, presupuesto, color, combustible...).',
    isUserInput: true,
    inputPlaceholder: 'Ej: SUV negro diésel hasta 25000€',
    action: async (input, userData) => {
        const parsedQueryString = parseBuyCarQueryToFilters(input); 
        return { 
            userSearchQuery: input,
            parsedFiltersForCatalog: parsedQueryString
        };
    },
    nextStepIdAfterInput: 'buyCar_showFilteredCatalog',
    previousStepId: 'buyCar_start'
  },
  buyCar_showFilteredCatalog: {
    id: 'buyCar_showFilteredCatalog',
    message: (userData) => 
        `Entendido. Buscando coches con características similares a: "${userData.userSearchQuery || 'tus preferencias'}". Te mostraré lo que encuentre.`,
    navigateTo: (userData) => 
        `/coches-segunda-mano${userData.parsedFiltersForCatalog ? `?${userData.parsedFiltersForCatalog}` : ''}`,
    options: [
        {label: 'Refinar búsqueda', nextStepId: 'buyCar_refineSearch', value: 'refine_search'},
        {label: 'Ayuda para elegir (guiado)', nextStepId: 'recommend_start', value: 'go_to_recommendation_flow'},
        {label: 'Volver a opciones de compra', nextStepId: 'buyCar_start', value: 'back_to_buy_options'}
    ],
    previousStepId: 'buyCar_askPreferences'
  },
  buyCar_refineSearch: {
    id: 'buyCar_refineSearch',
    message: (userData) => `De acuerdo. Búsqueda actual: "${userData.userSearchQuery || 'ninguna'}". ¿Qué quieres cambiar o añadir?`,
    isUserInput: true, inputPlaceholder: 'Ej: añadir "automático"',
    action: async (input, userData) => {
        const newParsedQueryString = parseBuyCarQueryToFilters(input, userData.parsedFiltersForCatalog);
        return { 
            userSearchQuery: `${userData.userSearchQuery || ''}; refinado con: ${input}`,
            parsedFiltersForCatalog: newParsedQueryString 
        };
    },
    nextStepIdAfterInput: 'buyCar_showFilteredCatalog',
    previousStepId: 'buyCar_showFilteredCatalog' 
  },
  askName_buyCar: {
    id: 'askName_buyCar', message: 'Si quieres que un asesor te ayude personalmente, ¿cuál es tu nombre?',
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre completo',
    action: async (input, userData) => ({ name: input, initialOption: userData.initialOption || 'comprar_coche' }),
    nextStepIdAfterInput: 'askEmail_buyCar',
    previousStepId: 'buyCar_start',
  },
  askEmail_buyCar: { 
    id: 'askEmail_buyCar', message: (userData) => `Gracias ${userData.name || ''}. ¿Y tu email?`,
    isUserInput: true, inputType: 'email', inputPlaceholder: 'tu@email.com',
    validation: (input) => (!/^\S+@\S+\.\S+$/.test(input) ? 'Email inválido.' : null),
    action: async (input) => ({ email: input }),
    nextStepIdAfterInput: 'askPhone_buyCar',
    previousStepId: 'askName_buyCar',
  },
  askPhone_buyCar: {
    id: 'askPhone_buyCar', message: (userData) => `Perfecto ${userData.name || ''}. ¿Tu teléfono?`,
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34...',
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null),
    action: async (input) => ({ phone: input }),
    nextStepIdAfterInput: 'thankYou_buyCar',
    previousStepId: 'askEmail_buyCar',
  },
  thankYou_buyCar: {
    id: 'thankYou_buyCar', message: (userData) => `¡Gracias ${userData.name || ''}! Un asesor te contactará sobre tu interés en comprar un coche.`,
    options: [ { label: 'Tengo otra duda', nextStepId: 'start' }, { label: 'Finalizar chat', nextStepId: 'endChat' } ],
    endFlow: true, previousStepId: 'askPhone_buyCar',
    action: async (input, userData) => { console.log("Lead Compra Coche (contacto):", userData); return {}; }
  },
};
```

# src/lib/chat-flows/generalSteps.ts

```ts
import type { ChatStep, ChatButtonOption } from '../chatFlowTypes';

export const initialChatOptionsBase: ChatButtonOption[] = [
  { label: 'Comprar un coche', nextStepId: 'buyCar_start', value: 'comprar_coche' },
  { label: 'Vender mi coche', nextStepId: 'sellCar_askName', value: 'vender_coche' },
  { label: 'Renting', nextStepId: 'renting_askName', value: 'renting' },
  { label: 'Soporte al cliente', nextStepId: 'support_entry', value: 'soporte' },
];

export const generalFlowSteps: Record<string, ChatStep> = {
  start: {
    id: 'start',
    message: '¡Hola! Soy Lebi, tu asistente virtual de Lebauto. ¿Cómo te podemos ayudar?',
    options: initialChatOptionsBase,
  },
  endChat: {
    id: 'endChat',
    message: '¡Gracias por chatear con Lebi! Que tengas un buen día.',
    options: [ { label: 'Iniciar nueva consulta', nextStepId: 'start', value: 'restart_chat' } ],
  },
  redirectToTasacion: {
    id: 'redirectToTasacion', 
    message: 'Un momento, te estoy redirigiendo a nuestra página de tasación de vehículos...', 
    redirectPath: '/gestion-de-venta', 
    openInNewTab: true,
    options: [ 
        { label: 'Tengo otra duda', nextStepId: 'start', value: 'other_doubt_after_redirect_tasacion' },
        { label: 'Finalizar chat', nextStepId: 'endChat', value: 'end_after_redirect_tasacion' },
    ],
    previousStepId: 'sellCar_thankYou',
    action: async () => { console.log("Redir. tasación solicitada"); return {}; }
  },
  redirectToRentingPage: {
    id: 'redirectToRentingPage', 
    message: 'Perfecto, te llevaré a nuestras ofertas de renting...', 
    redirectPath: '/renting', 
    openInNewTab: true,      
    options: [ 
        { label: 'Tengo otra duda', nextStepId: 'start', value: 'other_doubt_after_redirect_renting' },
        { label: 'Finalizar chat', nextStepId: 'endChat', value: 'end_after_redirect_renting' },
    ],
    previousStepId: 'renting_thankYou', 
    action: async () => { console.log("Redir. renting solicitada"); return {}; }
  },
  showElectricCarsCatalog: {
    id: 'showElectricCarsCatalog', 
    message: '¡Claro! Te mostraré nuestros coches eléctricos.', 
    navigateTo: '/coches-segunda-mano?fuel=Eléctrico',
    options: [ 
        {label: '¿Qué características tienen?', nextStepId: 'askAboutElectricFeatures'}, 
        {label: 'Volver', nextStepId: 'buyCar_start'} 
    ],
    previousStepId: 'buyCar_start' 
  },
  showAllCarsCatalog: { 
    id: 'showAllCarsCatalog', 
    message: 'Perfecto, aquí tienes nuestro catálogo completo.', 
    navigateTo: '/coches-segunda-mano',
    options: [ 
        {label: '¿Buscas algo específico?', nextStepId: 'buyCar_askPreferences'},
        {label: 'Volver', nextStepId: 'buyCar_start'} 
    ],
    previousStepId: 'buyCar_start'
  },
   error_unknown_prev_for_askname: { 
    id: 'error_unknown_prev_for_askname',
    message: "Error: No se pudo determinar el paso anterior. Volviendo al inicio.",
    options: [{label: "Ok", nextStepId: "start"}]
  }
};
```

# src/lib/chat-flows/recommendationFlow.ts

```ts
import type { ChatStep, UserData } from '../chatFlowTypes';

export const recommendationFlowSteps: Record<string, ChatStep> = {
    recommend_start: {
        id: 'recommend_start', 
        message: '¡Claro! Para recomendarte un coche, dime ¿qué tipo de coche buscas?',
        options: [ 
            {label: 'SUV', nextStepId: 'recommend_askBudget', value: 'suv_type_reco'},
            {label: 'Berlina', nextStepId: 'recommend_askBudget', value: 'berlina_type_reco'},
            {label: 'Compacto', nextStepId: 'recommend_askBudget', value: 'compacto_type_reco'},
            {label: 'Eléctrico (cualquier tipo)', nextStepId: 'recommend_askBudget_electric', value: 'electric_any_type_reco'},
            {label: 'No estoy seguro', nextStepId: 'recommend_askUsage', value: 'unsure_type_reco'},
            {label: 'Volver', nextStepId: 'buyCar_start', value: 'back_to_buy_from_reco_start'}
        ],
        action: async (input) => { 
            if(input === 'suv_type_reco') return {preferredBodyType: 'SUV'};
            if(input === 'berlina_type_reco') return {preferredBodyType: 'Berlina'};
            if(input === 'compacto_type_reco') return {preferredBodyType: 'Compacto'};
            if(input === 'electric_any_type_reco') return {preferredFuel: 'Eléctrico'};
            return {};
        },
        previousStepId: 'buyCar_start',
    },
    recommend_askBudget: {
        id: 'recommend_askBudget', 
        message: (ud: UserData) => `Entendido${ud.preferredBodyType ? `, buscas un ${ud.preferredBodyType}` : ''}${ud.preferredFuel ? `, y que sea ${ud.preferredFuel}` : ''}. ¿Cuál es tu presupuesto aproximado?`,
        isUserInput: true, inputType: 'text', inputPlaceholder: 'Ej: 20000',
        action: async (input) => {
            const budget = parseInt(input.replace(/\D/g, ''), 10); 
            return {budgetMax: isNaN(budget) ? undefined : budget};
        },
        nextStepIdAfterInput: 'recommend_generateLink', 
        previousStepId: 'recommend_start'
    },
    recommend_askBudget_electric: {
        id: 'recommend_askBudget_electric', 
        message: "Perfecto, un eléctrico. ¿Cuál es tu presupuesto aproximado?",
        isUserInput: true, inputType: 'text', inputPlaceholder: 'Ej: hasta 30000€',
        action: async (input) => {
            const budget = parseInt(input.replace(/\D/g, ''), 10);
            return { budgetMax: isNaN(budget) ? undefined : budget, preferredFuel: 'Eléctrico' };
        },
        nextStepIdAfterInput: 'recommend_generateLink',
        previousStepId: 'recommend_start'
    },
    recommend_askUsage: { 
        id: 'recommend_askUsage', 
        message: "No hay problema. Cuéntame, ¿para qué usarás el coche principalmente? (ej. ciudad, viajes largos, familia...)",
        isUserInput: true, inputPlaceholder: 'Principalmente para...',
        action: async (input, userData) => ({ ...userData, userSearchQuery: (userData.userSearchQuery || "") + ` Uso: ${input}` }), 
        nextStepIdAfterInput: 'recommend_askBudget', 
        previousStepId: 'recommend_start'
    },
    recommend_generateLink: {
        id: 'recommend_generateLink', 
        message: (ud: UserData) => {
            let filters = "";
            if(ud.preferredBodyType) filters += `bodyType=${ud.preferredBodyType}&`;
            if(ud.preferredFuel) filters += `fuel=${ud.preferredFuel}&`;
            if(ud.budgetMax) filters += `maxPrice=${ud.budgetMax}&`;
            filters = filters.endsWith('&') ? filters.slice(0, -1) : filters;
            (ud as UserData).parsedFiltersForCatalog = filters; // Actualizar para navigateTo
            return `De acuerdo. Basado en tus preferencias, te mostraré algunos coches que podrían interesarte.`;
        },
        navigateTo: (ud: UserData) => `/coches-segunda-mano${ud.parsedFiltersForCatalog ? `?${ud.parsedFiltersForCatalog}` : ''}`,
        options: [
            {label: 'Nueva recomendación', nextStepId: 'recommend_start', value: 'reco_search_again'},
            {label: 'Menú principal', nextStepId: 'start', value: 'reco_main_menu'}
        ],
        previousStepId: (ud: UserData) => ud.preferredFuel === 'Eléctrico' && !ud.preferredBodyType ? 'recommend_askBudget_electric' : 'recommend_askBudget',
    },
    askAboutElectricFeatures: {
        id: 'askAboutElectricFeatures', 
        message: 'Nuestros eléctricos tienen gran autonomía y carga rápida. ¿Algún modelo del catálogo te interesa?',
        isUserInput: true, inputPlaceholder: 'Ej: Tesla Model 3...',
        action: async (input) => ({ userQuestion: input }),
        nextStepIdAfterInput: 'provideSpecificModelInfo', 
        previousStepId: 'showElectricCarsCatalog'
    },
    provideSpecificModelInfo: {
        id: 'provideSpecificModelInfo', 
        message: (userData) => `Entendido. Buscando información sobre "${userData.userQuestion || 'ese modelo'}". (Actualmente, esta es una simulación. Aquí iría la lógica para buscar en la BBDD o FAQs avanzadas sobre ${userData.userQuestion})`,
        options: [ {label: 'Gracias', nextStepId: 'start'}, {label: 'Buscar otro', nextStepId: 'askAboutElectricFeatures'} ],
        previousStepId: 'askAboutElectricFeatures'
    },
};
```

# src/lib/chat-flows/rentingFlow.ts

```ts
import type { ChatStep } from '../chatFlowTypes';
export const rentingFlowSteps: Record<string, ChatStep> = {
    renting_askName: { 
        id: 'renting_askName', message: 'Interesado en renting, ¡genial! Para empezar, ¿tu nombre?',
        isUserInput: true, inputType: 'text',
        action: async (input) => ({ name: input, initialOption: 'Renting' }),
        nextStepIdAfterInput: 'askPhoneForRenting', 
        previousStepId: 'start'
    },
    askPhoneForRenting: {
        id: 'askPhoneForRenting', message: (userData) => `Gracias ${userData.name || ''}. ¿A qué teléfono te llamamos para el renting?`,
        isUserInput: true, inputType: 'tel',
        validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null),
        action: async (input) => ({ phone: input }),
        nextStepIdAfterInput: 'thankYouLeadGeneral',
        previousStepId: 'renting_askName',
    },
};
```

# src/lib/chat-flows/sellCarFlow.ts

```ts
import type { ChatStep, UserData } from '../chatFlowTypes';

export const sellCarFlowSteps: Record<string, ChatStep> = {
  sellCar_askName: {
    id: 'sellCar_askName',
    message: '¡Perfecto! Para tasar tu coche, primero dime tu nombre.',
    isUserInput: true,
    inputType: 'text',
    inputPlaceholder: 'Escribe tu nombre...',
    action: async (input) => ({ name: input, initialOption: 'Vender Coche' }),
    nextStepIdAfterInput: 'sellCar_thankYou',
    previousStepId: 'start',
  },
  sellCar_thankYou: {
    id: 'sellCar_thankYou',
    message: (userData) => `Gracias ${userData.name || ''}. ¿Prefieres ir a la tasación online o que te llamemos para gestionarlo?`,
    options: [
      { label: 'Ir a tasación online', nextStepId: 'redirectToTasacion', value: 'go_to_valuation' }, 
      { label: 'Prefiero que me llaméis', nextStepId: 'askPhoneForSell', value: 'request_call_sell' },
      { label: 'Tengo otra duda', nextStepId: 'start' },
    ],
    previousStepId: 'sellCar_askName',
  },
  askPhoneForSell: {
    id: 'askPhoneForSell',
    message: (userData) => `Entendido ${userData.name || ''}. ¿A qué teléfono te llamamos para la tasación?`,
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ...',
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null),
    action: async (input) => ({ phone: input }),
    nextStepIdAfterInput: 'thankYouLeadGeneral_sell', 
    previousStepId: 'sellCar_thankYou',
  },
  thankYouLeadGeneral_sell: { 
    id: 'thankYouLeadGeneral_sell',
    message: (userData) => `¡Gracias ${userData.name || ''}! Un asesor se pondrá en contacto contigo sobre la venta de tu coche.`,
    options: [ { label: 'Tengo otra duda', nextStepId: 'start' }, { label: 'Finalizar chat', nextStepId: 'endChat' } ],
    endFlow: true, previousStepId: 'askPhoneForSell',
    action: async (input, userData) => { console.log("Lead Venta Coche (contacto):", userData); return {}; }
  },
};
```

# src/lib/chat-flows/supportFlow.ts

```ts
import type { ChatStep, UserData, ChatButtonOption } from '../chatFlowTypes';

const faqData: Array<{ keywords: string[], answer: string }> = [
  { keywords: ["horario", "abierto", "abre", "cierra", "hora"], answer: "Nuestro horario de atención es de Lunes a Viernes de 9:00 a 20:00 y Sábados de 10:00 a 14:00." },
  { keywords: ["financiacion", "financiar", "pagar plazos", "cuotas"], answer: "Sí, ofrecemos diversas opciones de financiación adaptadas a tus necesidades. Uno de nuestros asesores puede darte más detalles. ¿Te gustaría que te llamemos para hablar sobre ello?" },
  { keywords: ["garantia", "cubre"], answer: "Todos nuestros coches de segunda mano incluyen una garantía mínima legal de 12 meses. Puedes consultar con tu asesor las opciones de ampliación de garantía disponibles." },
  { keywords: ["tasacion", "valorar coche", "tasar mi coche", "vender"], answer: "Claro, puedes solicitar una tasación gratuita y sin compromiso de tu vehículo a través de nuestra sección 'Vender mi coche' en la web, o visitándonos." },
  { keywords: ["cita", "ver coche", "probar"], answer: "Te recomendamos solicitar cita previa para asegurar una atención personalizada y que el vehículo esté disponible. Puedes hacerlo por teléfono o a través del formulario de contacto en nuestra web." },
  { keywords: ["documentacion necesaria", "papeles", "requisitos"], answer: "Para comprar un coche, generalmente necesitarás tu DNI/NIE y justificante de domicilio. Para financiar, se te pedirán documentos adicionales. Un asesor te guiará en el proceso." },
  { keywords: ["electrico", "carga", "autonomia"], answer: "Los coches eléctricos tienen muchas ventajas, como menores costes de mantenimiento y cero emisiones. La autonomía varía por modelo. Ofrecemos asesoramiento en puntos de carga. ¿Te interesa algún modelo en particular?" }
];

const findFAQAnswer = (question: string): string | null => {
  const lowerQuestion = question.toLowerCase().trim();
  if (!lowerQuestion) return null;
  for (const faq of faqData) {
    if (faq.keywords.some(keyword => lowerQuestion.includes(keyword.toLowerCase()))) {
      return faq.answer;
    }
  }
  return null;
};

export { faqData, findFAQAnswer }; 

export const supportFlowSteps: Record<string, ChatStep> = {
  support_entry: { 
    id: 'support_entry', 
    message: 'Entendido, necesitas soporte. ¿Cómo prefieres que te ayudemos?', 
    options: [ 
      { label: 'Quiero que me llaméis', nextStepId: 'support_askCallbackName', value: 'callback_support' }, 
      { label: 'Tengo una pregunta', nextStepId: 'support_askQuestion', value: 'ask_support_question' }, 
      { label: 'Volver al inicio', nextStepId: 'start', value: 'back_to_start_from_support' }, 
    ], 
    previousStepId: 'start' 
  },
  support_askCallbackName: { 
    id: 'support_askCallbackName', 
    message: 'De acuerdo. Para poder llamarte, ¿me indicas tu nombre?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe tu nombre...', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_askCallbackPhone', 
    previousStepId: 'support_entry' 
  },
  support_askCallbackPhone: { 
    id: 'support_askCallbackPhone', 
    message: (userData) => `Gracias ${userData.name || ''}. ¿A qué número de teléfono podemos contactarte para ayudarte con tu consulta de soporte?`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 6XX XXX XXX', 
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Por favor, introduce un teléfono válido.' : null), 
    action: async (input) => ({ phone: input }), 
    nextStepIdAfterInput: 'support_callbackThankYou', 
    previousStepId: 'support_askCallbackName' 
  },
  support_callbackThankYou: { 
    id: 'support_callbackThankYou', 
    message: (userData) => `¡Entendido ${userData.name || ''}! Hemos registrado tu solicitud con el teléfono ${userData.phone || ''}. Un miembro de nuestro equipo de soporte te llamará lo antes posible.`, 
    options: [ 
      { label: 'Hacer otra consulta', nextStepId: 'start', value: 'other_doubt_after_support_cb' }, 
      { label: 'Finalizar chat', nextStepId: 'endChat', value: 'end_after_support_cb' }, 
    ], 
    endFlow: true, 
    previousStepId: 'support_askCallbackPhone', 
    action: async (input, userData) => { console.log("LEAD SOPORTE (Callback):", { ...userData, type: "Soporte - Llamada solicitada" }); return {}; } 
  },
  support_askQuestion: { 
    id: 'support_askQuestion', 
    message: 'Claro, escribe tu pregunta. Intentaré responderla.',
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Escribe tu duda aquí...',
    action: async (input) => ({ faqAnswer: findFAQAnswer(input), userQuestion: input }), 
    nextStepIdAfterInput: 'support_showAnswerOrContactOptions', 
    previousStepId: 'support_entry',
  },
  support_showAnswerOrContactOptions: { 
    id: 'support_showAnswerOrContactOptions', 
    message: (userData: UserData) => (userData.faqAnswer ? `Sobre tu pregunta "${userData.userQuestion || ''}":\n\n${userData.faqAnswer}\n\n¿Esta información te ha sido útil?` : `Lo siento, no tengo información para tu pregunta: "${userData.userQuestion || ''}".\n¿Cómo prefieres que te ayudemos con esto?`), 
    options: (userData: UserData): ChatButtonOption[] => (userData.faqAnswer ? 
      [ { label: 'Sí, ¡gracias!', nextStepId: 'support_anotherQuestion_or_end', value: 'faq_util' }, { label: 'No me sirvió', nextStepId: 'support_offerContactNoAnswer', value: 'faq_not_useful_contact' }, { label: 'Otra pregunta', nextStepId: 'support_askQuestion', value: 'ask_another_faq' }, { label: 'Volver', nextStepId: 'start', value: 'back_to_start_after_faq' }, ] : 
      [ { label: 'Contactar por Email', nextStepId: 'support_collectEmail_name', value: 'contact_via_email' }, { label: 'Solicitar una llamada', nextStepId: 'support_collectCallback_name_noFaq', value: 'request_call_no_faq' }, { label: 'Otra pregunta', nextStepId: 'support_askQuestion', value: 'try_another_faq_no_answer' }, { label: 'Volver', nextStepId: 'start', value: 'back_to_start_no_answer' }, ]
    ), 
    previousStepId: 'support_askQuestion' 
  },
  support_offerContactNoAnswer: { 
    id: 'support_offerContactNoAnswer', 
    message: 'Entendido. ¿Cómo prefieres que te ayudemos con tu consulta original?', 
    options: [ 
      { label: 'Contactar por Email', nextStepId: 'support_collectEmail_name', value: 'contact_via_email_after_failed_faq' }, 
      { label: 'Solicitar una llamada', nextStepId: 'support_collectCallback_name_noFaq', value: 'request_call_after_failed_faq' }, 
      { label: 'Volver al inicio', nextStepId: 'start', value: 'back_to_start_after_failed_faq' }, 
    ], 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectEmail_name: { 
    id: 'support_collectEmail_name', 
    message: 'Para contactarte por email, ¿tu nombre y apellidos?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre y Apellidos', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_collectEmail_email', 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectEmail_email: { 
    id: 'support_collectEmail_email', 
    message: (userData) => `Gracias ${userData.name || ''}. Ahora, ¿tu email?`, 
    isUserInput: true, inputType: 'email', inputPlaceholder: 'tu@email.com', 
    validation: (input) => (!/^\S+@\S+\.\S+$/.test(input) ? 'Email inválido.' : null), 
    action: async (input) => ({ email: input }), 
    nextStepIdAfterInput: 'support_collectEmail_phone', 
    previousStepId: 'support_collectEmail_name' 
  },
  support_collectEmail_phone: { 
    id: 'support_collectEmail_phone', 
    message: (userData) => `Perfecto. Si quieres, déjanos un teléfono (Opcional).`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ... (Opcional)', 
    validation: (input) => (input.trim() && !/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null), 
    action: async (input) => (input.trim() ? { phone: input } : {}), 
    nextStepIdAfterInput: 'support_emailLeadThankYou', 
    previousStepId: 'support_collectEmail_email' 
  },
  support_emailLeadThankYou: { 
    id: 'support_emailLeadThankYou', 
    message: (userData) => `¡Gracias ${userData.name || ''}! Te responderemos a ${userData.email} sobre "${userData.userQuestion || 'tu consulta'}" pronto.`, 
    options: [{ label: 'Otra consulta', nextStepId: 'start' }, { label: 'Finalizar', nextStepId: 'endChat' }], 
    endFlow: true, 
    previousStepId: 'support_collectEmail_phone', 
    action: async (input, userData) => { console.log("LEAD SOPORTE (Email):", userData); return {}; } 
  },
  support_collectCallback_name_noFaq: { 
    id: 'support_collectCallback_name_noFaq', 
    message: 'Entendido, te llamaremos. ¿Tu nombre y apellidos?', 
    isUserInput: true, inputType: 'text', inputPlaceholder: 'Nombre y Apellidos', 
    action: async (input) => ({ name: input }), 
    nextStepIdAfterInput: 'support_collectCallback_phone_noFaq', 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
  support_collectCallback_phone_noFaq: { 
    id: 'support_collectCallback_phone_noFaq', 
    message: (userData) => `Gracias ${userData.name || ''}. ¿A qué teléfono te llamamos sobre "${userData.userQuestion || 'tu consulta'}"?`, 
    isUserInput: true, inputType: 'tel', inputPlaceholder: '+34 ...', 
    validation: (input) => (!/^\+?[0-9\s-]{7,15}$/.test(input) ? 'Teléfono inválido.' : null), 
    action: async (input) => ({ phone: input }), 
    nextStepIdAfterInput: 'support_callbackThankYou_noFaq', 
    previousStepId: 'support_collectCallback_name_noFaq' 
  },
  support_callbackThankYou_noFaq: { 
    id: 'support_callbackThankYou_noFaq', 
    message: (userData) => `¡Entendido ${userData.name || ''}! Te llamaremos al ${userData.phone || ''}.`, 
    options: [{ label: 'Otra consulta', nextStepId: 'start' }, { label: 'Finalizar', nextStepId: 'endChat' }], 
    endFlow: true, 
    previousStepId: 'support_collectCallback_phone_noFaq', 
    action: async (input, userData) => { console.log("LEAD SOPORTE (Callback sin FAQ):", userData); return {}; } 
  },
  support_anotherQuestion_or_end: { 
    id: 'support_anotherQuestion_or_end', 
    message: '¡Estupendo! ¿Tienes alguna otra duda de soporte o puedo ayudarte con algo más general?', 
    options: [ 
      { label: 'Otra pregunta de soporte', nextStepId: 'support_askQuestion', value: 'another_support_q' }, 
      { label: 'Necesito ayuda con otra cosa', nextStepId: 'start', value: 'other_general_help' }, 
      { label: 'No, gracias (Finalizar)', nextStepId: 'endChat', value: 'end_after_support_helpful' }, 
    ], 
    previousStepId: 'support_showAnswerOrContactOptions' 
  },
};
```

# src/lib/chatFlow.ts

```ts
import type { ChatStep, UserData, ChatButtonOption } from './chatFlowTypes';
import { generalFlowSteps, initialChatOptionsBase } from './chat-flows/generalSteps';
import { buyCarFlowSteps } from './chat-flows/buyCarFlow';
import { sellCarFlowSteps } from './chat-flows/sellCarFlow';
import { rentingFlowSteps } from './chat-flows/rentingFlow';
import { supportFlowSteps, faqData as supportFaqData, findFAQAnswer as supportFindFAQAnswer } from './chat-flows/supportFlow';
import { recommendationFlowSteps } from './chat-flows/recommendationFlow';

export type { UserData, ChatButtonOption, ChatStep };
export { initialChatOptionsBase, supportFaqData, supportFindFAQAnswer }; 

export const chatFlow: Record<string, ChatStep> = {
  ...generalFlowSteps,
  ...buyCarFlowSteps,
  ...sellCarFlowSteps,
  ...rentingFlowSteps,
  ...supportFlowSteps,
  ...recommendationFlowSteps,
};
```

# src/lib/chatFlowTypes.ts

```ts
export interface UserData {
  name?: string;
  email?: string;
  phone?: string;
  initialOption?: string; 
  faqAnswer?: string | null;
  userQuestion?: string; 
  preferredBodyType?: string;
  budgetMax?: number;
  preferredFuel?: string;
  parsedFiltersForCatalog?: string; 
  userSearchQuery?: string; 
}

export interface ChatButtonOption {
  label: string;
  nextStepId: string; 
  value?: string; 
}

export interface ChatStep {
  id: string;
  message: string | ((userData: UserData) => string);
  isUserInput?: boolean;
  inputType?: 'text' | 'email' | 'tel';
  inputPlaceholder?: string;
  validation?: (input: string, userData: UserData) => string | null;
  action?: (input: string, userData: UserData) => Promise<Partial<UserData>> | Partial<UserData>;
  options?: ChatButtonOption[] | ((userData: UserData) => ChatButtonOption[]);
  nextStepIdAfterInput?: string; 
  endFlow?: boolean;
  previousStepId?: string | ((userData: UserData) => string);
  redirectPath?: string | ((userData: UserData) => string);
  openInNewTab?: boolean;   
  navigateTo?: string | ((userData: UserData) => string);  
}

export interface ChatMessageInStore {
  id: string;
  sender: "user" | "bot";
  text: string;
  buttons?: ChatButtonOption[];
  isTyping?: boolean;
}

export interface ChatState {
  messages: ChatMessageInStore[];
  currentStepId: string;
  userData: UserData;
  history: string[];
  errorMessage: string | null;
  isChatInitialized: boolean;
  addMessageToStore: (sender: "user" | "bot", text: string, buttons?: ChatButtonOption[]) => void;
  setCurrentStepIdInStore: (stepId: string) => void;
  setUserDataInStore: (data: Partial<UserData> | ((prev: UserData) => Partial<UserData>)) => void;
  pushHistoryInStore: (stepId: string) => void;
  popHistoryFromStore: () => string | undefined;
  setHistoryInStore: (newHistory: string[]) => void;
  setErrorMessageInStore: (message: string | null) => void;
  resetChatInStore: () => void;
  clearButtonsFromBotMessagesInStore: () => void;
  setMessagesDirectlyInStore: (messagesUpdater: ChatMessageInStore[] | ((prevMessages: ChatMessageInStore[]) => ChatMessageInStore[])) => void;
  setIsChatInitializedInStore: (isInitialized: boolean) => void;
}
```

# src/lib/chatStore.ts

```ts
import { create } from 'zustand';
import { ChatState } from './chatFlowTypes';

const initialChatStoreState: Omit<ChatState, 
  'addMessageToStore' | 
  'setCurrentStepIdInStore' | 
  'setUserDataInStore' | 
  'pushHistoryInStore' |
  'popHistoryFromStore' |
  'setHistoryInStore' |
  'setErrorMessageInStore' |
  'resetChatInStore' |
  'clearButtonsFromBotMessagesInStore' |
  'setMessagesDirectlyInStore' |
  'setIsChatInitializedInStore'
> = {
  messages: [],
  currentStepId: 'start',
  userData: {},
  history: ['start'],
  errorMessage: null,
  isChatInitialized: false,
};

export const useChatStore = create<ChatState>((set, get) => ({
  ...initialChatStoreState,

  addMessageToStore: (sender, text, buttons) => set(state => {
    const id = crypto.randomUUID();
    let prevMessagesCleaned = state.messages;
    if (sender === 'bot' && buttons && buttons.length > 0) {
        prevMessagesCleaned = state.messages.map(msg => 
            (msg.sender === 'bot' && msg.buttons) ? { ...msg, buttons: undefined } : msg
        );
    }
    return { messages: [...prevMessagesCleaned, { id, sender, text, buttons, isTyping: false }] };
  }),

  setCurrentStepIdInStore: (stepId) => set({ currentStepId: stepId }),

  setUserDataInStore: (data) => set(state => ({
    userData: typeof data === 'function' ? { ...state.userData, ...data(state.userData) } : { ...state.userData, ...data }
  })),

  pushHistoryInStore: (stepId) => set(state => ({ history: [...state.history, stepId] })),

  popHistoryFromStore: () => {
    let previousStepId: string | undefined;
    set(state => {
        if (state.history.length <= 1) {
            previousStepId = state.history[0] || 'start'; 
            return { history: state.history };
        }
        const newHistory = [...state.history];
        newHistory.pop(); 
        previousStepId = newHistory[newHistory.length - 1];
        return { history: newHistory };
    });
    return previousStepId;
  },

  setHistoryInStore: (newHistory) => set({ history: newHistory}),
  setErrorMessageInStore: (message) => set({ errorMessage: message }),
  setIsChatInitializedInStore: (isInitialized) => set({ isChatInitialized: isInitialized }),
  clearButtonsFromBotMessagesInStore: () => set(state => ({
    messages: state.messages.map(msg => 
        (msg.sender === 'bot' && msg.buttons) ? { ...msg, buttons: undefined } : msg
    )
  })),
  setMessagesDirectlyInStore: (messagesUpdater) => set(state => ({
    messages: typeof messagesUpdater === 'function' ? messagesUpdater(state.messages) : messagesUpdater
  })),
  resetChatInStore: () => {
    set(initialChatStoreState);
    set({ isChatInitialized: false });
  },
}));
```

# src/lib/definitions.ts

```ts
export interface Car {
  id: string;
  brand: string;
  model: string;
  variant?: string;
  condition: string;
  price: number;
  location?: string; 
  year: number;
  mileage: number; 
  bodyType: string;
  fuel: string; 
  transmission: string; 
  environmentalTag: string;
  drivetrain?: string;
  power?: number;
  engineDisplacement?: number; 
  color: string;
  doors: number;
  seats: number;
  electricRange?: number; 
  batteryCapacity?: number; 
  chargingTime?: number; 
  fastCharge?: boolean; 
  chargingPort?: string;
  images: string[]; 
  ivaDeductible?: boolean; 
  monthlyPrice?: number; 
  financePrice?: number;
  features?: string[]; 
  description?: string; 
  slug?: string;
}


export interface CatalogClientProps extends FiltersData {
  allCars: Car[]
  initialCars: Car[]
}

export interface FilterState {
  brand?: string[];
  model?: string[];
  fuel?: string[];
  location?: string[];
  color?: string[];
  bodyType?: string[]; 
  doorFrom?: number;   
  doorTo?: number;     
  seatFrom?: number;   
  seatTo?: number;     
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  minKm?: number;
  maxKm?: number;
}

export interface CarImage {
  id: string
  car_id: string
  image_url: string
  created_at?: string
}

export interface Feature {
  id: string
  name: string
}

export interface CarFeature {
  car_id: string
  feature_id: string
}
export interface FiltersData {
  brand?: string[];
  model?: string[];
  fuel?: string[];
  location?: string[];
  color?: string[];
  bodyType?: string[]; 
  transmission?: string[];
  environmentalTag?: string[];
  drivetrain?: string[];
  minPower?: number;
  maxPower?: number;
  minEngineDisplacement?: number;
  maxEngineDisplacement?: number;
  doorFrom?: number;    
  doorTo?: number;      
  seatFrom?: number;    
  seatTo?: number;     
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  minKm?: number;
  maxKm?: number;
}

// Claves que son array de string
export type ArrayFilterKey = "brand" | "model" | "fuel" | "location" | "color" | "bodyType" | "transmission" | "environmentalTag" | "drivetrain";

// Claves que son numéricas
export type NumberFilterKey = "minPrice" | "maxPrice" | "minYear" | "maxYear" | "minKm" | "maxKm" | "doorFrom" | "doorTo" | "seatFrom" | "seatTo" | "minPower" | "maxPower" | "minEngineDisplacement" | "maxEngineDisplacement";

// Union de todas las claves
export type FilterKey = ArrayFilterKey | NumberFilterKey;

export interface FilterStateStore {
  filters: FiltersData;
  filteredCars: Car[];
  allCars: Car[];
  isLoading: boolean;
  getActiveFiltersCount: () => number;
  // setFilter recibe la clave y el valor (string o number)
  setFilter: (key: FilterKey, value: string | number) => void;
  // removeFilter: clave y valor string (en caso de arrays). Si es numérico, se ignora el value.
  removeFilter: (key: FilterKey, value?: string) => void;
  clearFilters: () => void;
  setFilteredCars: (cars: Car[]) => void;
  setAllCars: (cars: Car[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  applyFilters: () => void;
}

export type SellCarFormState = {
  success: boolean | null
  message: string
  errors: {
    email?: string[]
    name?: string[]
    phone?: string[]
    brand?: string[]
    model?: string[]
    year?: string[]
    kilometers?: string[]
    fuel?: string[]
    comments?: string[]
  }
  submitting: boolean
}

export type ContactFormState = {
  success: boolean | null
  message: string
  errors: {
    name?: string[]
    surnames?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
  }
  submitting: boolean
}

export type Charger = {
  id: string;
  name: string;
  power: string;
  type: string;
  price: number;
  installationPrice: number;
  features: string[];
  image: string;
  category: "home" | "community" | "business";
};


```

# src/lib/store.ts

```ts
"use client";

import { create } from "zustand";
import type { Car, FiltersData, FilterStateStore } from "./definitions";

type ViewType = "list" | "grid";

interface ViewState {
  view: ViewType;
  setView: (view: ViewType) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  view: "list",
  setView: (view) => set({ view }),
}));

export const useFilterStore = create<FilterStateStore>((set, get) => ({
  filters: {},
  filteredCars: [],
  allCars: [],
  isLoading: false,

  setFilter: (key: keyof FiltersData, value) => {
    set((state) => {
      const newFilters = { ...state.filters };

      if (
        key === "brand" ||
        key === "model" ||
        key === "fuel" ||
        key === "location" ||
        key === "color" ||
        key === "bodyType" ||
        key === "transmission" ||
        key === "environmentalTag" ||
        key === "drivetrain"
      ) {
        if (!newFilters[key]) {
          newFilters[key] = [];
        }
        const arr = newFilters[key] as string[];
        if (!arr.includes(value as string)) {
          arr.push(value as string);
        }
      } else {
        newFilters[key] = value as number;
      }

      return { filters: newFilters, isLoading: true };
    });

    setTimeout(() => get().applyFilters(), 0);
  },

  removeFilter: (key, value) => {
    set((state) => {
      const newFilters = { ...state.filters };

      if (
        key === "brand" ||
        key === "model" ||
        key === "fuel" ||
        key === "location" ||
        key === "color" ||
        key === "bodyType" ||
        key === "transmission" ||
        key === "environmentalTag" ||
        key === "drivetrain"
      ) {
        if (value !== undefined) {
          const arr = newFilters[key] as string[];
          newFilters[key] = arr.filter((v) => v !== value);
          if ((newFilters[key] as string[]).length === 0) {
            delete newFilters[key];
          }
        } else {
          delete newFilters[key];
        }
      } else {
        delete newFilters[key];
      }

      return { filters: newFilters, isLoading: true };
    });

    setTimeout(() => get().applyFilters(), 0);
  },

  clearFilters: () => {
    set({
      filters: {},
      isLoading: true,
    });

    setTimeout(() => {
      const { allCars } = get();
      set({
        filteredCars: [...allCars],
        isLoading: false,
      });
    }, 0);
  },

  setFilteredCars: (cars) => {
    set({ filteredCars: cars, isLoading: false });
  },

  setAllCars: (cars) => {
    set({ allCars: cars, filteredCars: cars });
  },

  setIsLoading: (isLoading) => {
    set({ isLoading });
  },

  applyFilters: () => {
    const { allCars, filters } = get();
    set({ isLoading: true });

    setTimeout(() => {
      try {
        if (Object.keys(filters).length === 0) {
          set({ filteredCars: [...allCars], isLoading: false });
          return;
        }

        let filtered = [...allCars];
        if ((filters.brand && filters.brand.length > 0) || 
            (filters.model && filters.model.length > 0)) {
          let brandFiltered: Car[] = [];
          if (filters.brand && filters.brand.length > 0) {
            const brandSet = new Set(filters.brand);
            brandFiltered = filtered.filter((car) => brandSet.has(car.brand));
          }
  
          let modelFiltered: Car[] = [];
          if (filters.model && filters.model.length > 0) {
            const modelSet = new Set(filters.model);
            modelFiltered = filtered.filter((car) => modelSet.has(car.model));
          }
  
          const unionSet = new Set([...brandFiltered, ...modelFiltered]);
          filtered = [...unionSet];
        }
        if (filters.bodyType && filters.bodyType.length > 0) {
          const bodyTypeSet = new Set(filters.bodyType);
          filtered = filtered.filter((car) => bodyTypeSet.has(car.bodyType));
        }
        if (filters.fuel && filters.fuel.length > 0) {
          const fuelSet = new Set(filters.fuel);
          filtered = filtered.filter((car) => fuelSet.has(car.fuel));
        }
        if (filters.location && filters.location.length > 0) {
          const locSet = new Set(filters.location);
          filtered = filtered.filter((car) => car.location && locSet.has(car.location));
        }
        if (filters.color && filters.color.length > 0) {
          const colorSet = new Set(filters.color);
          filtered = filtered.filter((car) => colorSet.has(car.color));
        }
        if (filters.minPrice !== undefined) {
          filtered = filtered.filter((car) => car.price >= filters.minPrice!);
        }
        if (filters.maxPrice !== undefined) {
          filtered = filtered.filter((car) => car.price <= filters.maxPrice!);
        }
        if (filters.minYear !== undefined) {
          filtered = filtered.filter((car) => car.year >= filters.minYear!);
        }
        if (filters.maxYear !== undefined) {
          filtered = filtered.filter((car) => car.year <= filters.maxYear!);
        }
        if (filters.minKm !== undefined) {
          filtered = filtered.filter((car) => car.mileage >= filters.minKm!);
        }
        if (filters.maxKm !== undefined) {
          filtered = filtered.filter((car) => car.mileage <= filters.maxKm!);
        }
        if (filters.doorFrom !== undefined) {
          filtered = filtered.filter((car) => car.doors >= filters.doorFrom!);
        }
        if (filters.doorTo !== undefined) {
          filtered = filtered.filter((car) => car.doors <= filters.doorTo!);
        }
        if (filters.seatFrom !== undefined) {
          filtered = filtered.filter((car) => (car as any).seats >= filters.seatFrom!);
        }
        if (filters.seatTo !== undefined) {
          filtered = filtered.filter((car) => (car as any).seats <= filters.seatTo!);
        }
        if (filters.transmission && filters.transmission.length > 0) {
          const transSet = new Set(filters.transmission);
          filtered = filtered.filter((car) => transSet.has(car.transmission));
        }
        if (filters.environmentalTag && filters.environmentalTag.length > 0) {
          const envSet = new Set(filters.environmentalTag);
          filtered = filtered.filter((car) => envSet.has(car.environmentalTag));
        }
        if (filters.drivetrain && filters.drivetrain.length > 0) {
          const driveSet = new Set(filters.drivetrain);
          filtered = filtered.filter((car) => driveSet.has(car.drivetrain || ""));
        }
      if (filters.minPower !== undefined) {
        filtered = filtered.filter((car) => car.power ?? 0 >= filters.minPower!);
      }
      if (filters.maxPower !== undefined) {
        filtered = filtered.filter((car) => car.power ?? 0 <= filters.maxPower!);
      }
      if (filters.minEngineDisplacement !== undefined) {
        filtered = filtered.filter(
          (car) => car.engineDisplacement ?? 0 >= filters.minEngineDisplacement!
        );
      }
      if (filters.maxEngineDisplacement !== undefined) {
        filtered = filtered.filter(
          (car) => car.engineDisplacement ?? 0 <= filters.maxEngineDisplacement!
        );
      }
        set({ filteredCars: filtered, isLoading: false });
      } catch (error) {
        console.error("Error applying filters:", error);
        set({ filteredCars: [...allCars], isLoading: false });
      }
    }, 0);
  },

  getActiveFiltersCount: () => {
    const { filters } = get();
    let count = 0;
    for (const key in filters) {
      const typedKey = key as keyof FiltersData;
      const value = filters[typedKey];
      if (Array.isArray(value)) {
        count += value.length;
      } else if (value !== undefined && value !== null) {
        count += 1;
      }
    }
    return count;
  },
}));

```

# src/lib/supabase/client.ts

```ts
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

```

# src/lib/supabase/fetchFilteredCars.ts

```ts
import type { Car } from "@/lib/definitions";
import { supabaseClient } from "../../app/supabase/supabase";

export async function fetchFilteredCars(searchParams: any): Promise<Car[]> {
  let query = supabaseClient.from("cars").select("*");

  if (typeof searchParams.brand === "string") {
    const brands = searchParams.brand.split(",").map((v: string) => v.trim());
    query = query.in("brand", brands);
  }
  if (typeof searchParams.model === "string") {
    const models = searchParams.model.split(",").map((v: string) => v.trim());
    query = query.in("model", models);
  }
  if (typeof searchParams.fuel === "string") {
    const fuels = searchParams.fuel.split(",").map((v: string) => v.trim());
    query = query.in("fuel", fuels);
  }
  if (typeof searchParams.color === "string") {
    const colors = searchParams.color.split(",").map((v: string) => v.trim());
    query = query.in("color", colors);
  }
  if (typeof searchParams.location === "string") {
    const locations = searchParams.location.split(",").map((v: string) => v.trim());
    query = query.in("location", locations);
  }
  if (typeof searchParams.bodyType === "string") {
    const bodyTypes = searchParams.bodyType.split(",").map((v: string) => v.trim());
    query = query.in("body_type", bodyTypes);
  }
  if (typeof searchParams.minPrice === "string") {
    query = query.gte("price", Number(searchParams.minPrice));
  }
  if (typeof searchParams.maxPrice === "string") {
    query = query.lte("price", Number(searchParams.maxPrice));
  }
  if (typeof searchParams.minYear === "string") {
    query = query.gte("year", Number(searchParams.minYear));
  }
  if (typeof searchParams.maxYear === "string") {
    query = query.lte("year", Number(searchParams.maxYear));
  }
  if (typeof searchParams.minKm === "string") {
    query = query.gte("mileage", Number(searchParams.minKm));
  }
  if (typeof searchParams.maxKm === "string") {
    query = query.lte("mileage", Number(searchParams.maxKm));
  }
  if (typeof searchParams.doorFrom === "string") {
    query = query.gte("doors", Number(searchParams.doorFrom));
  }
  if (typeof searchParams.doorTo === "string") {
    query = query.lte("doors", Number(searchParams.doorTo));
  }
  if (typeof searchParams.seatFrom === "string") {
    query = query.gte("seats", Number(searchParams.seatFrom));
  }
  if (typeof searchParams.seatTo === "string") {
    query = query.lte("seats", Number(searchParams.seatTo));
  }

  const { data: cars, error } = await query;
  if (error) {
    console.error("Error fetching filtered cars:", error);
    return [];
  }
  return cars || [];
}

```

# src/lib/supabase/middleware.ts

```ts
// src/lib/supabase/middleware.ts
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => {
          return request.cookies.getAll();
        },
        setAll: (cookiesToSet: Array<{ name: string; value: string; options: CookieOptions }>) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user }, error: authError } = await supabase.auth.getUser();

  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isAuthRoute = request.nextUrl.pathname.startsWith("/sign-in") ||
                      request.nextUrl.pathname.startsWith("/sign-up") ||
                      request.nextUrl.pathname.startsWith("/forgot-password");

  if (!user && isDashboardRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return response;
}
```

# src/lib/supabase/server.ts

```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              const { expires, maxAge, ...sessionOptions } = options || {};
              cookieStore.set(name, value, sessionOptions);
            });
          } catch (error) {
            console.error(error);
          }
        },
      },
    }
  );
};

```

# src/lib/uxStore.ts

```ts
import { create } from 'zustand';

interface UXState {
  hasAnimatedHomePageOnce: boolean;
  setHasAnimatedHomePageOnce: (animated: boolean) => void;
}

export const useUXStore = create<UXState>((set) => ({
  hasAnimatedHomePageOnce: false,
  setHasAnimatedHomePageOnce: (animated) => set({ hasAnimatedHomePageOnce: animated }),
}));
```

# src/lib/validations.ts

```ts
import { z } from "zod"

export const sellCarSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  brand: z.string().min(1),
  model: z.string().min(1),
  year: z.string().min(4),
  kilometers: z.string().min(1),
  fuel: z.string().min(1),
  comments: z.string().optional(),
})

export type SellCarFormData = z.infer<typeof sellCarSchema>

export const contactFormSchema = z.object({
  name: z.string().min(2),
  surnames: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
})
```

# src/middleware.ts

```ts
import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

```

# src/styles/global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
}

body.filters-open-no-navbar nav {
  display: none !important;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;

    --chart-1: 12 76% 61%;

    --chart-2: 173 58% 39%;

    --chart-3: 197 37% 24%;

    --chart-4: 43 74% 66%;

    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;

    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #d1d5db #ffffff;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-gray-300 rounded-full;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    @apply bg-white;
  }

  .custom-scrollbar::-webkit-scrollbar-button {
    display: none;
  }

  .initially-hidden {
    opacity: 0;
  }
}

.bg-grid-white {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

.bg-grid-dark {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
}
```

# src/utils/carDocuments.ts

```ts
"use server";

import type { Car } from '@/lib/definitions';
import { getHFEmbedding } from './getHFEmbedding';
import { createClient } from '@/lib/supabase/server'; 

function formatCarDocument(car: Car): string {
  const parts = [
    `Vehículo: ${car.brand} ${car.model}${car.variant ? ` ${car.variant}` : ''}, Año: ${car.year}.`,
    `Condición: ${car.condition}${car.condition !== 'Vendido' && car.condition !== 'Reservado' ? ', disponible en stock.' : '.'}`, // Añadido "disponible en stock"
    `Precio: ${car.price.toLocaleString('es-ES')}€.`,
    `Ubicación: ${car.location || 'No especificada'}. Kilometraje: ${car.mileage.toLocaleString('es-ES')} km.`,
    `Carrocería: ${car.bodyType || 'No especificada'}. Combustible: ${car.fuel}. Transmisión: ${car.transmission || 'No especificada'}.`,
    `Etiqueta ambiental: ${car.environmentalTag || 'No especificada'}. Color: ${car.color}.`,
    `Puertas: ${car.doors || 'N/A'}. Asientos: ${car.seats || 'N/A'}.`,
    car.power ? `Potencia: ${car.power} CV.` : '',
    car.engineDisplacement ? `Cilindrada: ${car.engineDisplacement} cc.` : '',
    car.electricRange ? `Autonomía eléctrica: ${car.electricRange} km.` : '',
    car.batteryCapacity ? `Capacidad batería: ${car.batteryCapacity} kWh.` : '',
    car.ivaDeductible ? 'IVA Deducible.' : '',
    car.description ? `Descripción: ${car.description.substring(0, 250)}...` : '',
    car.features && car.features.length > 0 ? `Características: ${car.features.slice(0, 7).join(', ')}.` : '',
  ];
  return parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}


export async function updateCarDocument(car: Car): Promise<{ success: boolean; message: string }> {
  const supabase = await createClient(); 
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    console.error("[updateCarDocument] No hay usuario autenticado para realizar la operación en 'documentos'.");
    return { success: false, message: "Usuario no autenticado para actualizar documentos." };
  }
  console.log(`[updateCarDocument] Operando en 'documentos' como usuario: ${user.email}`);

  if (!car.id) {
    console.error("[updateCarDocument] Falta el ID del vehículo.");
    return { success: false, message: "El ID del vehículo es necesario." };
  }
  const content = formatCarDocument(car);
  
  try {
    const embedding = await getHFEmbedding(content);
    
    const documentToUpsert = {
      car_id: car.id,
      content,
      embedding,
      file_name: car.slug || `car-${car.id}`, 
      metadata: { lastUpdated: new Date().toISOString() } 
    };
    
    const { error, data } = await supabase 
      .from('documentos')
      .upsert(documentToUpsert, { onConflict: 'car_id' })
      .select()
      .single();

    if (error) {
      console.error(`Error al hacer upsert en 'documentos' para car_id ${car.id}:`, error);
      return { success: false, message: `Error al actualizar el documento: ${error.message}` };
    }
    
    console.log(`[updateCarDocument] Documento para ${car.id} actualizado/insertado exitosamente:`, data);
    return { success: true, message: 'Documento del vehículo actualizado para el chatbot.' };

  } catch (err: any) { 
    console.error(`[updateCarDocument] Excepción al procesar car_id ${car.id}:`, err);
    return { success: false, message: `Excepción al actualizar documento: ${err.message}` };
  }
}
```

# src/utils/chatbot.ts

```ts
import { supabaseClient } from "@/app/supabase/supabase";
import { getHFEmbedding } from "./getHFEmbedding";

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
const LLM_MODEL = "deepseek/deepseek-chat-v3-0324:free";

interface DocumentRow {
  id: number;
  car_id: string;
  file_name: string | null;
  content: string;
  similarity: number;
}

async function* processOpenRouterStream(
  readableStream: ReadableStream<Uint8Array>
): AsyncGenerator<string, void, undefined> {
  const reader = readableStream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let stillStreaming = true;
  // console.log("[processOpenRouterStream] Iniciando procesamiento de stream...");
  try {
    while (stillStreaming) {
      const { done, value } = await reader.read();
      if (done) {
        stillStreaming = false;
        if (buffer.trim().startsWith("data: ")) {
          const dataContent = buffer.trim().substring(6);
          if (dataContent && dataContent !== "[DONE]") {
            try {
              const json = JSON.parse(dataContent);
              if (
                json.choices &&
                json.choices[0].delta &&
                json.choices[0].delta.content
              ) {
                yield json.choices[0].delta.content;
              } else if (json.choices && json.choices[0].finish_reason) {
                console.log(
                  "[processOpenRouterStream] Razón de finalización del LLM:",
                  json.choices[0].finish_reason
                );
                stillStreaming = false;
              }
            } catch (e) {
              /* Ignorar error de parseo en el último chunk incompleto */
            }
          }
        }
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      let eolIndex;
      while ((eolIndex = buffer.indexOf("\n\n")) >= 0) {
        const line = buffer.substring(0, eolIndex).trim();
        buffer = buffer.substring(eolIndex + 2);
        if (line.startsWith("data: ")) {
          const dataContent = line.substring(6).trim();
          if (dataContent === "[DONE]") {
            stillStreaming = false;
            break;
          }
          if (dataContent) {
            try {
              const json = JSON.parse(dataContent);
              if (
                json.choices &&
                json.choices[0].delta &&
                json.choices[0].delta.content
              ) {
                yield json.choices[0].delta.content;
              } else if (json.choices && json.choices[0].finish_reason) {
                stillStreaming = false;
              }
            } catch (e) {
              /* Chunk puede no ser JSON completo, se acumulará */
            }
          }
        }
      }
      if (!stillStreaming) break;
    }
  } catch (error) {
    console.error("[processOpenRouterStream] Error leyendo del stream:", error);
  } finally {
    reader.releaseLock();
  }
}

export async function getAssistantStream(
  question: string
): Promise<ReadableStream<Uint8Array>> {
  // console.time("[PERF] getAssistantStream TOTAL");
  if (!OPENROUTER_KEY) {
    // console.timeEnd("[PERF] getAssistantStream TOTAL");
    throw new Error("OPENROUTER_API_KEY no definida.");
  }

  // console.log(`[getAssistantStream] Procesando pregunta: "${question}"`);

  // console.time("[PERF] Paso 1: getHFEmbedding");
  const queryEmbedding = await getHFEmbedding(question);
  // console.timeEnd("[PERF] Paso 1: getHFEmbedding");

  // console.time("[PERF] Paso 2: Supabase RPC match_documentos");
  const { data: docsRaw, error: rpcError } = await supabaseClient.rpc(
    "match_documentos",
    {
      p_query_embedding: queryEmbedding,
      p_match_threshold: -0.4,
      p_match_count: 3,
    }
  );
  // console.timeEnd("[PERF] Paso 2: Supabase RPC match_documentos");

  if (rpcError) {
    console.error(
      "Error DETALLADO en RPC match_documentos:",
      JSON.stringify(rpcError, null, 2)
    );
    // console.timeEnd("[PERF] getAssistantStream TOTAL");
    throw new Error(
      "Problema al buscar información en la base de datos (código RPC)."
    );
  }

  const docs = (docsRaw ?? []) as DocumentRow[];
  let context = "";
  let numDocsInContext = 0;

  if (docs.length > 0) {
    // console.log("Documentos recuperados para el contexto del LLM:", docs.map(d => ({ id: d.id, sim: d.similarity, content: d.content.substring(0,30)+"..." })));
    context = docs.map((d) => `- ${d.content.trim()}`).join("\n\n");
    numDocsInContext = docs.length;
  } else {
    console.log(
      "Ningún documento relevante encontrado para el contexto del LLM con el umbral actual."
    );
  }

  let totalElectricCarsInDB: number | null = null;
  const lowerQuestion = question.toLowerCase();
  if (
    lowerQuestion.includes("eléctrico") ||
    lowerQuestion.includes("electricos")
  ) {
    // console.time("[PERF] Supabase COUNT Query (Eléctricos)");
    const { count, error: countError } = await supabaseClient
      .from("cars")
      .select("*", { count: "exact", head: true })
      .eq("fuel", "Eléctrico");
    // console.timeEnd("[PERF] Supabase COUNT Query (Eléctricos)");
    if (countError) {
      console.error(
        "Error obteniendo conteo total de coches eléctricos:",
        countError
      );
    } else {
      totalElectricCarsInDB = count;
      // console.log(`[Chatbot] Conteo total real de coches eléctricos: ${totalElectricCarsInDB}`);
    }
  }

  const systemPrompt = `
Eres 'Lebi', un asistente virtual amigable y experto del concesionario de coches Lebauto.
Tu misión es ayudar a los usuarios con sus consultas sobre vehículos y servicios, basándote ÚNICAMENTE en la información de contexto proporcionada.
Usa formato Markdown para las negritas (ej. **Tesla Model 3**) y para listas si es natural.

Cuando te pregunten por vehículos disponibles (ej. "coches eléctricos", "Tesla"):
1. Revisa el contexto proporcionado. Si hay vehículos, lista un MÁXIMO de 2 o 3 ejemplos, no excedas los 600tokens
2. Para cada ejemplo listado, incluye SOLO: **Marca Modelo (Año)**, Precio (ej. 45.990€), y Kilometraje (ej. 12.000 km).
3. Si se te proporciona información sobre el "CONTEO TOTAL REAL DE COCHES" (verás una nota así en el mensaje del usuario), úsala para decir algo como: "Actualmente, disponemos de [CONTEO TOTAL REAL] coches eléctricos en nuestro inventario." Si no se proporciona ese conteo, y el contexto sí tiene documentos, puedes decir: "He encontrado estos ${numDocsInContext} ejemplos que podrían interesarte:".
4. Después de la lista (o si no hay ejemplos en el contexto pero sí un conteo total), pregunta al usuario cómo quiere proceder. Por ejemplo: "¿Te gustaría más información detallada sobre alguno de estos modelos? También puedo buscar por otra marca, rango de precios, o contarte sobre nuestras opciones de financiación."

Si el usuario pregunta por UN coche específico (ej. "detalles del Audi A4") y lo encuentras en el contexto:
- Proporciona una descripción un poco más detallada usando los datos del contexto: Marca, Modelo, Año, Precio, Kilometraje, Combustible, Color, y alguna característica destacada si está presente.
- Pregunta: "¿Quieres saber más sobre su equipamiento completo, opciones de financiación, o quizás concertar una prueba?"

Si la información solicitada NO se encuentra en el contexto, o el contexto está vacío y no hay un conteo total relevante:
- Responde amablemente: "No tengo información específica sobre eso en mis datos actuales. ¿Podrías reformular tu pregunta o te gustaría que te ayude con algo más general sobre nuestro stock o los servicios que ofrecemos?".

Sé siempre cortés. No inventes información.
Al final de cada respuesta útil, invita a continuar la conversación.
  `.trim();

  let userMessageContextPrefix = "";
  if (
    totalElectricCarsInDB !== null &&
    (lowerQuestion.includes("eléctrico") ||
      lowerQuestion.includes("electricos"))
  ) {
    userMessageContextPrefix = `NOTA PARA EL ASISTENTE: Hay un CONTEO TOTAL REAL DE COCHES de ${totalElectricCarsInDB} coches eléctricos. El siguiente contexto solo muestra algunos ejemplos si se encontraron.\n\n`;
  }

  const userMessage = `
${userMessageContextPrefix}
${
  context
    ? `Contexto Relevante (ejemplos destacados):\n${context}\n\n`
    : "No se encontró contexto específico relevante para esta pregunta en nuestros documentos.\n\n"
}
Pregunta del Usuario: ${question}
`.trim();

  const messagesToLLM = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage },
  ];

  // console.time("[PERF] Paso 3: LLM API Call (OpenRouter)");
  const llmResponse = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_KEY}`,
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Lebauto Chatbot",
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        messages: messagesToLLM,
        stream: true,
        temperature: 0.2,
        max_tokens: 600,
      }),
    }
  );
  // console.timeEnd("[PERF] Paso 3: LLM API Call (OpenRouter)");

  if (!llmResponse.ok || !llmResponse.body) {
    const errorBody = await llmResponse.text();
    console.error(
      `Error de OpenRouter API (${llmResponse.status}):`,
      errorBody
    );
    // console.timeEnd("[PERF] getAssistantStream TOTAL");
    throw new Error(`Error del LLM al iniciar stream: ${llmResponse.status}`);
  }

  const customTextStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of processOpenRouterStream(llmResponse.body!)) {
        controller.enqueue(new TextEncoder().encode(chunk));
      }
      controller.close();
    },
  });

  // console.timeEnd("[PERF] getAssistantStream TOTAL");
  return customTextStream;
}

```

# src/utils/fonts.ts

```ts
import { Inter, EB_Garamond, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const ebGaramond = EB_Garamond({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  });

export const montserrat = Montserrat({
    weight: ['400','700','800', '900'],
    subsets: ['latin'],
  });

```

# src/utils/getHFEmbedding.ts

```ts
import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;
if (!HF_TOKEN) {
  console.error("HUGGINGFACE_API_KEY no está definida.");
  throw new Error("HUGGINGFACE_API_KEY no está definida.");
}

const hf = new InferenceClient(HF_TOKEN);

async function attemptFeatureExtraction(text: string, attempt: number): Promise<any> {
  // console.log(`[getHFEmbedding] Intento #${attempt} para: "${text.substring(0,50)}..."`);
  return hf.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: text,
  });
}

export async function getHFEmbedding(text: string): Promise<number[]> {
  console.time(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`); 
  const MAX_RETRIES = 2; 
  let lastError: any = null;

  for (let i = 1; i <= MAX_RETRIES; i++) {
    try {
      console.time(`[PERF] HF API Call (Intento ${i})`);
      const result = await attemptFeatureExtraction(text, i);
      console.timeEnd(`[PERF] HF API Call (Intento ${i})`);
      
      if (Array.isArray(result)) {
        if (result.length > 0 && Array.isArray(result[0]) && typeof result[0][0] === 'number') {
          console.timeEnd(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`);
          return result[0] as number[];
        }
        if (typeof result[0] === 'number') {
          console.timeEnd(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`);
          return result as number[];
        }
      }
      lastError = new Error("Formato de embedding inesperado: " + JSON.stringify(result).substring(0,100));

    } catch (error: any) {
      console.timeEnd(`[PERF] HF API Call (Intento ${i})`); 
      lastError = error;
      console.warn(`[getHFEmbedding] Intento #${i} fallido: ${error.message}`);
      if (i < MAX_RETRIES) {
        const delay = Math.pow(2, i-1) * 500; 
        // console.log(`[getHFEmbedding] Reintentando en ${delay / 1000}s...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error(`[getHFEmbedding] Todos los ${MAX_RETRIES} intentos fallaron. Último error:`, lastError?.message);
  console.timeEnd(`[PERF] getHFEmbedding total para "${text.substring(0, 20)}..."`); 
  throw new Error(`Error de Hugging Face tras ${MAX_RETRIES} intentos: ${lastError?.message || 'Desconocido'}`);
}
```

# src/utils/mappers.ts

```ts
import { Car } from "@/lib/definitions";

// Función para convertir de camelCase a snake_case (para enviar a la BD)
export function mapCarToDB(car: Partial<Car>): any {
    return {
      id: car.id,
      brand: car.brand,
      model: car.model,
      variant: car.variant,
      condition: car.condition,
      price: car.price,
      location: car.location,
      year: car.year,
      mileage: car.mileage,
      body_type: car.bodyType,
      fuel: car.fuel,
      transmission: car.transmission,
      environmental_tag: car.environmentalTag,
      drivetrain: car.drivetrain,
      power: car.power,
      engine_displacement: car.engineDisplacement,
      color: car.color,
      doors: car.doors,
      seats: car.seats,
      electric_range: car.electricRange,
      battery_capacity: car.batteryCapacity,
      charging_time: car.chargingTime,
      fast_charge: car.fastCharge,
      charging_port: car.chargingPort,
      iva_deductible: car.ivaDeductible,
      monthly_price: car.monthlyPrice,
      finance_price: car.financePrice,
      description: car.description,
      slug: car.slug,
      // Las imágenes y características se manejan en tablas separadas.
    };
  }
  
  // Función para convertir de snake_case (datos de BD) a camelCase (tu interfaz)
  export function mapCarFromDB(car: any): Car {
    return {
      id: car.id,
      brand: car.brand,
      model: car.model,
      variant: car.variant,
      condition: car.condition,
      price: car.price,
      location: car.location,
      year: car.year,
      mileage: car.mileage,
      bodyType: car.body_type,
      fuel: car.fuel,
      transmission: car.transmission,
      environmentalTag: car.environmental_tag,
      drivetrain: car.drivetrain,
      power: car.power,
      engineDisplacement: car.engine_displacement,
      color: car.color,
      doors: car.doors,
      seats: car.seats,
      electricRange: car.electric_range,
      batteryCapacity: car.battery_capacity,
      chargingTime: car.charging_time,
      fastCharge: car.fast_charge,
      chargingPort: car.charging_port,
      ivaDeductible: car.iva_deductible,
      monthlyPrice: car.monthly_price,
      financePrice: car.finance_price,
      description: car.description,
      images: car.images, // Se rellenará en los métodos que consulten la tabla de imágenes.
      features: car.features, // Se rellenará en los métodos que consulten la tabla de características.
      slug: car.slug,
    };
  }
  
```

# src/utils/slug.ts

```ts
import slugify from "slugify";

export function generateVehicleSlug(vehicle: {
  brand: string;
  model: string;
  mileage: number;
  year: number;
  id: string;
}): string {
  const { brand, model, mileage, year, id } = vehicle;
  const baseSlug = slugify(`${brand} ${model} con ${mileage}km ${year}`, {
    lower: true,
    strict: true,
  });
  const uniquePart = id.slice(0, 8);
  return `${baseSlug}-${uniquePart}`;
}

```

# src/utils/utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES").format(price)
}

export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xxs: "420px",
      xs: "520px",
      sm: "640px", // Tailwind default
      md: "768px", // Tailwind default
      lg: "1024px", // Tailwind default
      xl: "1280px", // Tailwind default
      "2xl": "1536px", // Tailwind default
      max500: { max: "500px" },
      short: { raw: "(max-height: 900px)" },
    },
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          "50": "#FAFAFA",
          "100": "#F4F4F5",
          "200": "#E5E7EB",
          "300": "#D1D5DB",
          "400": "#9CA3AF",
          "500": "#6B7280",
          "600": "#4B5563",
          "700": "#374151",
          "800": "#1F2937",
          "900": "#111827",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideIn: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.3s ease-out",
      "accordion-up": "accordion-up 0.3s ease-out",
      fadeIn: "fadeIn 0.5s ease-in-out",
      slideIn: "slideIn 0.5s ease-in-out",
      shimmer: "shimmer 2s infinite",
      bounce: "bounce 1s infinite",
      fadeInAfterLoad: "fadeIn 0.5s ease-out forwards",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
  ],
  "exclude": ["node_modules"]
}

```

