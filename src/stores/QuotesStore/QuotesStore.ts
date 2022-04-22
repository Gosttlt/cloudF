import {action, computed, makeObservable, observable} from 'mobx'
import IModelQuotes from 'models/modelQuote'
import QuotesStoreService from './Quotes.service'

class QuotesStore {
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      quotesData: observable,
      currentQuoteId: observable,
      quotes: computed,
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
