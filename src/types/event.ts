export interface Event {
  id: string;
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  bookingWindowEnd: string;
  description: string;
  hotelChain: {
    name: string;
    logo: string;
    brandGuidelines: string;
  };
  bannerImages: string[];
}