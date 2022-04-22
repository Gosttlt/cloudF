import IModelQuote from 'models/modelQuote'
import axios from 'axios'

const QuotesStoreService = {
  async getQuotes(): Promise<IModelQuote> {
    const response = await axios.get(
      'https://poloniex.com/public?command=returnTicker',
    )
    return response.data
  },
}

export default QuotesStoreService
