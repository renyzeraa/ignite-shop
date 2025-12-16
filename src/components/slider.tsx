'use client'

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface SliderProps {
    children: React.ReactNode;
}

export function Slider({ children }: SliderProps) {
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 48,
        },
    })

    return (
        <main ref={ref} className="keen-slider flex w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-164">
            {children}
        </main>
    )
}