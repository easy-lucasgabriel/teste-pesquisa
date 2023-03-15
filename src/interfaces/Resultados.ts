
export interface Return {
  Key: string;
  QrCode: string;
  Status: string;
  Message: string;
  Description: string;
  IdTransaction: number;
}

export interface Sending {
  brand: string;
  value: number;
  holder: string;
  nascDate: string;
  username: string;
  cardNumber: string;
  securityCode: string;
  PaymentMethod: string;
  expirationDate: string;
  identification: string;
}

export interface DataContent {
  return: Return;
  sending: Sending;
}

export interface RootObject {
  id: number;
  created_date: string;
  modified_date: string;
  value: number;
  external_id: string;
  transaction_id?: any;
  type_data: string;
  type_transaction: string;
  status: string;
  data_content: DataContent;
  user: number;
}
