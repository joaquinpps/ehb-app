export interface RoomType {
  id: string;
  name: string;
  image: string;
  price: number;
  occupancy: string;
  mealPlan: string;
}

export interface BookingDate {
  startDate: string;
  endDate: string;
}

export interface AdditionalService {
  id: string;
  name: string;
  image: string;
  price: number;
  capacity: number;
  configuration?: string;
  timeSlot?: string;
}

export interface BookingItem {
  id: string;
  type: 'room' | 'service';
  quantity: number;
  dates?: BookingDate;
  item: RoomType | AdditionalService;
}

export interface BookingSummary {
  items: BookingItem[];
  totalAmount: number;
}