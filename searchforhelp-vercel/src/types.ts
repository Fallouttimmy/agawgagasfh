export interface Category {
  id: string;
  name: string;
  nameNl: string;
  description: string;
  descriptionNl: string;
  icon: string;
  slug: string;
}

export interface Helpline {
  id: string;
  name: string;
  description: string;
  descriptionNl: string;
  phone?: string;
  website?: string;
  categoryId: string;
  hours?: string;
  hoursNl?: string;
  languages?: string[];
  isEmergency?: boolean;
  isFeatured?: boolean;
}
