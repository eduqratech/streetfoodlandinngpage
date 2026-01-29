
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface FoodItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: string;
  tag: string;
  description: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  distance: string;
  rating: number;
  cuisines: string[];
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  text: string;
  itemReferenced: string;
}

// Added missing interface for FlipCard component
export interface EstateProject {
  title: string;
  image: string;
  location: string;
  description: string;
  address: string;
  sqft: string;
}