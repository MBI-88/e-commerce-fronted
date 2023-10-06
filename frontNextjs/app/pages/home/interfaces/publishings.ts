export interface PopularsCat {
  id: number;
  publishing_id: number;
  category: string;
  subcategory: string;
  count: number;
  start_date: string;
  end_date: string;
  created_at: string;
  Publishings: Publishings;
}

export interface Publishings {
  publishing_id: number;
  user_id: number;
  category: string;
  subcategory: string;
  created_at: string;
  updated_at: string;
  product_name: string;
  description: string;
  price: number;
  stock: number;
  os: string;
  ram: number;
  store: number;
  screen: number;
  brand: string;
  in_offer: number;
  resolution: string;
  gpu: string;
  micro: string;
  long: number;
  width: number;
  height: number;
  weight: number;
  Comments?: any;
  Views?: any;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  Owner: Owner;
}

export interface Owner {
  user_id: number;
  username: string;
  password: string;
  email: string;
  tel: string;
  address: string;
  image: string;
  role: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  Publishings?: any;
  Trolley?: any;
}