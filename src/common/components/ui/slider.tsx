"use client"

import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { Slider as SliderPrimitive } from "radix-ui"

// Personalizaciones (T-01c):
// - `thumbProps`: props del thumb (el elemento con role="slider"). Un `<label htmlFor>` apunta al Root, que no
//   es el control enfocable, así que el nombre accesible se da aquí con `aria-labelledby` o `aria-label`.
// - Área táctil de 44 × 44 px en el thumb (pseudo-elemento `after:`) sin cambiar su tamaño visual.
// - Pista de 8 px y thumb de 20 px con borde `primary`, como en el estilo «default» anterior.
type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> & {
  thumbProps?: React.ComponentProps<typeof SliderPrimitive.Thumb>
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbProps,
  ...props
}: SliderProps) {
  const values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
        />
      </SliderPrimitive.Track>
      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          {...thumbProps}
          className="relative block size-5 shrink-0 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors after:absolute after:-inset-3.5 after:content-[''] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
