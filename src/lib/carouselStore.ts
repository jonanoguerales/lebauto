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