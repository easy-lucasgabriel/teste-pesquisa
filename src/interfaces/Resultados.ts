
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

export interface BetTypes {
  id: number
  lines_bet: any[]
  winnings_bet: any[]
  user_id: number
  created_date: string
  modified_date: string
  hash1: string
  hash2: string
  hash3: string
  pgtoSource: number
  reg_number: string
  bet_date: string
  bet_number: string[]
  bet_status: string
  bet_lottery: string[]
  total_value: number
  winning_value: any
  username: string
  phoneNumber: string
  ipAddress: string
  localization: string
  isPromoter: boolean
  user: number
}

export interface Loterias {
  id: number;
  name: string;
  lottery_type: string;
}

export interface RangeValues {
  minValue: number;
  maxValue: number;
}



