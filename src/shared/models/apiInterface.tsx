export interface ClientInformation {
    dob: string; 
    name: string; 
    gender: string;
    maritalStatus: string; 
    employmentStatus: string; 
}

export interface Financials {
    debt: number; 
    income: number; 
    savings: number;
    cashflow: number;
    expenses: number; 
    networth: number; 
    investment: number; 
}

export interface Insurances {
    lifeInsurance: number;
    personalAccident: number; 
}

export interface Goals {
    travel: number; 
    emergencyFund: number; 
}

export interface ApiClient {
    id: string; 
    key: string; 
    goals: Goals; 
    image: string; 
    financials: Financials; 
    insurances: Insurances; 
    clientInformation: ClientInformation; 
}

export type ApiClientResponse = ApiClient[];