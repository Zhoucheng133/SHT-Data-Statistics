export interface DataItem{
  timestamp: string,
  temperature: number,
  humidity: number
}

export interface RecentT{
  date: string,
  max_temp: number
  min_temp: number
}

export interface RecentH{
  date: string,
  max_humidity: number
  min_humidity: number
}