export const tabsObj = [
  {id: 'А', name: 'Котировки А'},
  {id: 'Б', name: 'Котировки Б'},
]
export const columnsData = [
  {
    title: 'name',
    key: '1',
    dataKey: 'name',
  },
  {
    title: 'last',
    key: '2',
    dataKey: 'last',
  },
  {
    title: 'Highest Bid',
    key: '3',
    dataKey: 'highestBid',
  },
  {
    title: 'percent change',
    key: '4',
    dataKey: 'percentChange',
  },
]
type CreateDataType = (
  id: number,
  name: string,
  last: string,
  highestBid: string,
  percentChange: string,
) => {[key: string]: string | number}

const createData: CreateDataType = (
  id,
  name,
  last,
  highestBid,
  percentChange,
) => ({
  id,
  name,
  last,
  highestBid,
  percentChange,
})

export default createData
