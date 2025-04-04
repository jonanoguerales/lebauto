"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  rating: number
  comment: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alberto G.",
    rating: 5,
    comment:
      "Muy buena experiencia! Ha salido todo bien en cuanto a plazos de entrega acordado (dijeron 15 días y la he recibido en una semana), estado de la moto, revisiones hechas (he podido comprobar cambio de aceite y filtro del aire, niveles, presión y estado de los neumáticos. Recomendable 100%",
    avatar: "/avatars/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Ana C.",
    rating: 4,
    comment:
      "Me he comprado una Kawasaki y estoy muy contenta. El trato ha sido excelente por parte de Ricard, la moto impecable, la documentación muy fina y sin ningún defecto. Sin duda recomendaría este sitio 100% por el trato y el equipo. Saludos",
    avatar: "/avatars/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Carlos M.",
    rating: 5,
    comment:
      "Desde el primer momento todo ha ido perfecto. La comunicación durante todo el proceso ha sido excelente y el vehículo está en perfectas condiciones tal como me indicaron. Muy satisfecho con la compra.",
    avatar: "/avatars/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Laura P.",
    rating: 5,
    comment:
      "Proceso de compra muy sencillo y transparente. El coche está como nuevo y el servicio post-venta es excelente. Recomendaría Lebauto a cualquiera que busque un vehículo de calidad.",
    avatar: "/avatars/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Miguel S.",
    rating: 4,
    comment:
      "Muy contento con mi compra. El equipo de Lebauto me asesoró perfectamente y encontré justo lo que buscaba. El coche está en perfectas condiciones y el proceso fue muy rápido.",
    avatar: "/avatars/avatar-5.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Las opiniones de nuestros clientes</h2>

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
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-[48%] lg:basis-[32%] sm:basis-[65%] basis-[85%]">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 z-10" />
            <CarouselNext className="right-2 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{testimonial.name}</h3>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600">{testimonial.comment}</p>
      </CardContent>
    </Card>
  )
}

