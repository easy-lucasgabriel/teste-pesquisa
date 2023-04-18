export interface ResultadoFinancas {
  id: number;
  created_date: string;
  modified_date: string;
  value: number;
  external_id?: string;
  transaction_id?: string;
  type_data: string;
  type_transaction: string;
  status: string;
  data_content?: Pagamento;
  user: number;
}

export interface Pagamento {
  qrcode: string;
  status: string;
  payer_name?: any;
  qrcode_text: string;
  end_to_end_id?: any;
  payer_cpf_cnpj?: any;
  end_to_end_refund_id?: any;
}

export interface Data {
  count: number;
  results: Array<{ 
    id: number;
    created_date: string;
    modified_date: string;
    value: number;
    external_id?: string;
    transaction_id?: string;
    type_data: string;
    type_transaction: string;
    status: string;
    data_content?: Pagamento;
    user: number; }>;
}