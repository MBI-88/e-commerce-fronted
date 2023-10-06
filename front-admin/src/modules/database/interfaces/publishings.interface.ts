export type Publishing = {
  publishing_id: number;
  user_id: number;
  category: string;
  subcategory: string;
  brand: string;
  product_name: string;
  image: string | "Empty";
  stock: number;
  weight: number;
  price: number;
  description: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  Publishings: null;
  Trolley: null;
};

export default interface Publishings {
  publishings: Array<Publishing>;
}
