export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  href: string;
}

export interface EquipmentItem {
  name: string;
  href: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  alt: string;
  client?: string;
  location?: string;
  category?: string;
  industryLabel?: string;
  image?: string;
  equipment?: string[];
  challenge?: string;
  solution?: string;
  year?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  badge?: string;
  stars: number;
  timeAgo: string;
  text: string;
  featured?: boolean;
  positiveAspects?: string[];
  services?: string;
  ownerResponse?: {
    timeAgo: string;
    text: string;
  };
}

export interface BusinessSchedule {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  summary: string;
  emergency: string;
}

export interface GoogleRatingInfo {
  stars: number;
  reviewsCount: number;
  mapsUrl: string;
  writeReviewUrl: string;
  placeId: string;
}
