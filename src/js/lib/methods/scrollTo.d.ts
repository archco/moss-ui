
export as namespace ScrollTo;

export type DestType = number|[number, number]|string|HTMLElement;

export interface ScrollToOptions {
  duration?: number;
  easing?: string;
  callback?: () => void;
  base?: string|HTMLElement;
}

export default function scrollTo(dest: DestType, options: ScrollToOptions): Promise<void>;
