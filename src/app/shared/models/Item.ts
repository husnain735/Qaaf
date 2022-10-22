import { ItemPicture } from './itempicture';

export class Item {
  ItemId: number;
  Title: string;
  Price: number;
  DiscountedPrice: number;
  CreatedBy: string;
  CreatedDate: string;
  ModifiedBy: string;
  ModifiedDate: string;
  IsDeleted: boolean;
  ProductCode: string;
  Quantity: number;
  ItemDescription: string;
  Disclaimer: string;
  ColorCode: string;
  StitchTypeId: number;
  IsSold: boolean;
  GenderTypeId: number;
  NumberOfPiece: number;
  IsSale: Boolean = false;
  AddressLink: string;
  ItemPicture: Array<ItemPicture>;
  SalePercentage: number;
  DescriptionChartImage: string;
}
