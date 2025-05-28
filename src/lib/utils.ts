import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare global {
  interface Window {
    gtag_report_conversion?: () => void;
    gtag_report_online_conversion?: () => void;
    gtag_report_presencial_conversion?: () => void;
  }
}

export const handleContact = (): void => {
  window.gtag_report_conversion?.();
  window.open("https://wa.me/5511933231296", "_blank");
};

export const handleContactFullbanerOnline = (): void => {
  window.gtag_report_online_conversion?.();
  window.open("https://wa.me/5511933231296", "_blank");
};

export const handleContactFullbannerPresencial = (): void => {
  window.gtag_report_presencial_conversion?.();
  window.open("https://wa.me/5511933231296", "_blank");
};
