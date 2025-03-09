import { Anime } from "./anime";

export interface RespuestaAnime {
    pagination: {
      last_visible_page: number;
      has_next_page: boolean;
      current_page: number;
      items: {
        count: number;
        total: number;
        per_page: number;
      };
    },

    data: Anime[];
  }