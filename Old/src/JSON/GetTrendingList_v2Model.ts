export interface GetTrendingList_v2Output {
    Status: string
    Message: string
    Data: Data
  }
  
  export interface Data {
    micromarketdetails: Micromarketdetail[]
    propertydetails: any
  }
  
  export interface Micromarketdetail {
    SortOrder: number
    City: string
    CityId: number
    ShortName: string
    MicroMarket: string
    MicroMarketURL: string
    MicroMarketId: number
    AverageRent: number
    AgreedBidValue: number
    Trend: number
    BiddingCount: number
    BiddingTrend: number
    AvgRatePerSqft: number
    CatA_AvgRatePerSqft: number
    CatB_AvgRatePerSqft: number
    AvgPrimePrice: number
    AvgLitePrice: number
  } 