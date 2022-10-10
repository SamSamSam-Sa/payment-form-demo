export interface ICardDate {
  moth: string;
  year: string;
}
export interface ICreditCardsProps {
  value: string;
  leaveFieldCallback?: (index: number) => void;
  focus: boolean;
  tabIndex: number;
}

export interface ICardContext {
  cardData?: ICreditCard;
  setCardData: (value: any) => void;
}

export interface ICreditCard {
  cardNumber: string;
  cvc: string;
  cvclenght: number;
  date: ICardDate;
}

export type ICardProviderProps = {
  children: React.ReactNode;
};
