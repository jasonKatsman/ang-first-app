export type Volume = {
  value: number;
  unit: string;
}

export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: {
    mash_temp: {
      temp: Volume;
      duration: any
    }[];
    fermentation: {
      temp: Volume;
    }
    twist: any;
  };
  ingredients: {
    malt: {
      name: string;
      amount: Volume;
    }[];
    hops: {
      name: string;
      amount: Volume;
    }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
