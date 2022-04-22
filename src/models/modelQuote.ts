export interface IModelQuote {
  id: number
  last: string
  lowestAsk: string
  highestBid: string
  percentChange: string
  baseVolume: string
  quoteVolume: string
  isFrozen: string
  postOnly: string
  marginTradingEnabled: string
  high24hr: string
  low24hr: string
}
interface IModelQuotes {
  [key: string]: IModelQuote
}
export default IModelQuotes
