// Informazioni del sito
export const TITLE: string = "NextCatflix";
export const VERSIONE: string = "0.3";

// Impostazioni API
export const LOADINGCARD: number = 50;
export const APIURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Screen Breakpoint
export const MOBILEBREAKPOINT: string = "767px";
export const TABLETBREAKPOINT: string = "960px"; // standard tablet
export const NARROWDESKTOPBREAKPOINT: string = "1280px"; // desktop piccolo o finestra ristretta
export const DESKTOPBREAKPOINT: string = "1440px"; // desktop normale
export const FULLHDBREAKPOINT: string = "1920px"; // schermo intero su 1080p

// Screen Padding
export const DESKTOP_PADDING: string = "0 50px";

// Dettagli film
export const MAXDETAILS: number = 200;

export type MovieType = {
  id_tmdb: string;
  title: string;
  overview?: string;
  adult?: boolean;

  poster_path: string;
  backdrop_path?: string;

  vote_average?: number;
  popularity?: number;
  runtime?: number;
  release_date?: string;

  genres?: string[];
  media_path?: string;
};