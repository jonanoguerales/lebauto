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
          <main className="flex-1" role="main">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
