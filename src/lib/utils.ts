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
  window.open(
    "https://wa.me/5511933231296?text=Ol%C3%A1%2C%20Janine!%20Gostaria%20de%20conversar%20sobre%20a%20consulta%20online.%20Pode%20me%20passar%20as%20informa%C3%A7%C3%B5es%3F",
    "_blank"
  );
};

export const handleContactFullbanerOnline = (): void => {
  window.gtag_report_online_conversion?.();
  window.open(
    "https://wa.me/5511933231296?text=Ol%C3%A1%2C%20Janine!%20Gostaria%20de%20conversar%20sobre%20a%20consulta%20online.%20Pode%20me%20passar%20as%20informa%C3%A7%C3%B5es%3F",
    "_blank"
  );
};

export const handleContactFullbannerPresencial = (): void => {
  window.gtag_report_presencial_conversion?.();
  window.open(
    "https://wa.me/5511933231296?text=Ol%C3%A1%2C%20Janine!%20Gostaria%20de%20conversar%20sobre%20a%20consulta%20online.%20Pode%20me%20passar%20as%20informa%C3%A7%C3%B5es%3F",
    "_blank"
  );
};
