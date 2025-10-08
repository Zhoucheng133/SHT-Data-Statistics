export interface DataItem{
  timestamp: string,
  temperature: number,
  humidity: number
}

export interface RecentT{
  date: string,
  maxTemperature: number
  minTemperature: number
}

export interface RecentH{
  date: string,
  maxHumidity: number
  minHumidity: number
}