
import { FoodItem, Restaurant, Review } from './types';

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'f1',
    name: 'Saffron Infused Tacos',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    price: '$24.00',
    tag: 'Signature',
    description: 'Hand-pressed blue corn tortillas with 24h marinated brisket and saffron creme.'
  },
  {
    id: 'f2',
    name: 'Truffle Glazed Bao',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    price: '$18.00',
    tag: 'Bestseller',
    description: 'Cloud-like buns filled with wild mushroom duxelles and shaved black truffle.'
  },
  {
    id: 'f3',
    name: 'Chili Oil Charcoal Ramen',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    price: '$28.00',
    tag: 'Spicy',
    description: 'Hand-pulled charcoal noodles in a rich, 48-hour bone broth with house chili oil.'
  },
  {
    id: 'f4',
    name: 'Gold Leaf Baklava',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    price: '$32.00',
    tag: 'Limited',
    description: 'Layers of gossamer pastry, crushed pistachios, and 24k edible gold flakes.'
  },
  {
    id: 'f5',
    name: 'Smoked Wagyu Slider',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    price: '$22.00',
    tag: 'Signature',
    description: 'Aged Wagyu beef, smoked provolone, and caramelized onion jam on brioche.'
  },
  {
    id: 'f6',
    name: 'Burnt Burrata Flatbread',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    price: '$19.00',
    tag: 'Craft',
    description: 'Fire-kissed flatbread with creamy burrata and basil-infused oil.'
  },
  {
    id: 'f7',
    name: 'Lobster Street Rolls',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    price: '$34.00',
    tag: 'Bestseller',
    description: 'Fresh Atlantic lobster, brown butter hollandaise, and chive dust.'
  },
  {
    id: 'f8',
    name: 'Ahi Tuna Poke Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    price: '$26.00',
    tag: 'Fresh',
    description: 'Grade A tuna, avocado mousse, and toasted sesame crunch.'
  }
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'Embers Kitchen',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    distance: '1.2 km',
    rating: 4.9,
    cuisines: ['Modern Grill', 'Artisanal']
  },
  {
    id: 'r2',
    name: 'The Noodle Lab',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
    distance: '2.4 km',
    rating: 4.7,
    cuisines: ['Asian Fusion', 'Street']
  },
  {
    id: 'r3',
    name: 'Velvet & Smoke',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    distance: '0.5 km',
    rating: 4.8,
    cuisines: ['Speakeasy', 'Global']
  },
  {
    id: 'r4',
    name: 'Petal & Pastry',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=800',
    distance: '3.1 km',
    rating: 5.0,
    cuisines: ['French', 'Dessert']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev1',
    userName: 'Alexander Vance',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'The Saffron Tacos are a revelation. Street food has finally found its throne.',
    itemReferenced: 'Saffron Infused Tacos'
  },
  {
    id: 'rev2',
    userName: 'Elena Rossi',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 4,
    text: 'A truly cinematic experience from ordering to the first bite. The Truffle Bao is a must.',
    itemReferenced: 'Truffle Glazed Bao'
  },
  {
    id: 'rev3',
    userName: 'Marcus Thorne',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Finally, a platform that respects the craft of street vendors. The Wagyu Slider is life-changing.',
    itemReferenced: 'Smoked Wagyu Slider'
  }
];

// Added missing constant for HorizontalSection component
export const PILLARS = [
  {
    title: "Heritage",
    subtitle: "Honoring generations of street recipes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Innovation",
    subtitle: "Modernizing traditional flavors",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Craft",
    subtitle: "Meticulous preparation in every bite",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Community",
    subtitle: "Supporting local street masters",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2400"
  }
];