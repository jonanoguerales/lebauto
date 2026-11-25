import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/utils/utils"

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  /**
   * Props del thumb (el elemento con role="slider"). Un `<label htmlFor>` apunta al Root, que no es
   * el control enfocable, así que el nombre accesible se da aquí con `aria-labelledby` o `aria-label`.
   */
  thumbProps?: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, thumbProps, ...props }, ref) => (
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
    {/* after: amplía el área táctil del thumb a 44 × 44 px (16 px de caja interior + 2 × 14 px) sin cambiar su tamaño visual. */}
    <SliderPrimitive.Thumb
      {...thumbProps}
      className="relative block h-5 w-5 rounded-full after:absolute after:-inset-3.5 after:content-[''] border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderPrimitive.Root>
  ),
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
