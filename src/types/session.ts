import { ReactComponentElement } from "react";

export type Session = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageURL: string;
  color: string;
  booking: boolean;
  bookingLink?: string
}
