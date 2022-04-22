import {action, computed, makeObservable, observable} from 'mobx'
import IModelQuotes from 'models/modelQuote'
import createData from 'routes/Quotes/assets'
import QuotesStoreService from './Quotes.service'

class QuotesStore {
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      quotesData: observable,
      currentQuoteId: observable,
      quotes: computed,
      rows: computed,
      currentQuote: computed,
      setLoading: action,
      setCurrentQuoteId: action,
      fetchQuotes: action,
    })
  }
  isLoading = false

  currentQuoteId = 0

  quotesData: IModelQuotes = {}

  get quotes() {
    return this.quotesData
  }
  get quoteId() {
    return this.currentQuoteId
  }

  get rows() {
    return Object.keys(this.quotes).map(key => {
      const currentQuote = this.quotes[key]
      return createData(
        currentQuote.id,
        key,
        currentQuote.last,
        currentQuote.highestBid,
        currentQuote.percentChange,
      )
    })
  }

  get currentQuote() {
    return this.rows.find(row => row.id === this.quoteId)
  }

  get quoteA() {
    return this.rows.slice(0, -Math.floor(this.rows.length / 2))
  }
  get quoteB() {
    return this.rows.slice(Math.floor(this.rows.length / 2))
  }

  setCurrentQuoteId = (id: number) => {
    this.currentQuoteId = id
  }

  setLoading = (value: boolean) => {
    this.isLoading = value
  }

  fetchQuotes = async (): Promise<void> => {
    const res = await QuotesStoreService.getQuotes()
    this.quotesData = res
  }
}

export default new QuotesStore()
