import { Address } from "./address.model";

export interface Customer {
  name: string;
  surname: string;
  cellNumber: string;
  id: string;
  postalAddress: Address;
  physicalAddress: Address;
  comments?: string;
}

export interface CustomerDetails {
  name: string;
  surname: string;
  cellNumber: string;
}
