export interface Pokemon {
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    cries: {
      latest: string;
      legacy: string;
    };
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    height: number;
    held_items: any[]; // Can be more specific depending on your requirements
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    past_abilities: any[]; // Can be more specific
    past_types: any[]; // Can be more specific
    species: {
      name: string;
      url: string;
    };
    sprites: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
      other: {
        dream_world: {
          front_default: string;
          front_female: string | null;
        };
        home: {
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
        official_artwork: {
          front_default: string;
          front_shiny: string;
        };
        showdown: {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
      };
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  }
  