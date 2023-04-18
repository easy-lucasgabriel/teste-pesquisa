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
};

export interface GamesData {
    count: number;
    results: Array<{ 
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
     }>;
  }