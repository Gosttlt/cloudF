import Container from 'components/common/Container'
import Loader from 'components/common/Loader'
import Modal from 'components/Modal'
import Table from 'components/Table'
import Tabs, {TabsPanel, TabsPanels} from 'components/Tabs'
import {observer} from 'mobx-react-lite'
import React, {useMemo, useState} from 'react'
import {useCallback} from 'react'
import {useEffect} from 'react'
import QuotesStore from 'stores/QuotesStore'
import createData, {columnsData, tabsObj} from './assets'

import classes from './Quotes.module.scss'

const Quotes: React.FC = observer(() => {
  const [tabValue, setTabValue] = useState<string | number>('А')
  const {
    quotes,
    setLoading,
    isLoading,
    fetchQuotes,
    setCurrentQuoteId,
    quoteId,
  } = QuotesStore
  const [isOpenModal, openModalHandler] = useState(false)

  let intervalId: any

  useEffect(() => {
    setLoading(true)
    fetchQuotes()
    setLoading(false)
    intervalId = setInterval(fetchQuotes, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [setLoading, fetchQuotes, isOpenModal])

  const rows = useMemo(
    () =>
      Object.keys(quotes).map(key => {
        const currentQuote = quotes[key]
        return createData(
          currentQuote.id,
          key,
          currentQuote.last,
          currentQuote.highestBid,
          <div
            style={
              Number(currentQuote.percentChange) < 0
                ? {color: 'red'}
                : {color: '#2bab96'}
            }
          >
            {currentQuote.percentChange + ' %'}
          </div>,
        )
      }),
    [quotes],
  )
  const middle = useMemo(() => Math.floor(rows.length / 2), [rows])
  const aData = useMemo(() => rows.slice(0, -middle), [rows, middle])
  const bData = useMemo(() => rows.slice(middle), [rows, middle])

  const modalHandler = useCallback((id: number) => {
    openModalHandler(true)
    setCurrentQuoteId(id)
    clearInterval(intervalId)
  }, [])
  const modalCloseHandler = useCallback(() => {
    openModalHandler(false)
    intervalId = setInterval(fetchQuotes, 5000)
  }, [])

  return (
    <Container>
      <Modal
        openHandler={openModalHandler}
        isOpen={isOpenModal}
        closeHandler={modalCloseHandler}
      >
        {quoteId}
      </Modal>
      <Tabs onChange={setTabValue} tabs={tabsObj} tabValue={tabValue} />
      <div className={classes.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <TabsPanels value={tabValue}>
            <TabsPanel value='А'>
              <Table
                columns={columnsData}
                rows={aData}
                rowsHandler={modalHandler}
                header={`Котировки < ${tabValue} >`}
              />
            </TabsPanel>
            <TabsPanel value='Б'>
              <Table
                columns={columnsData}
                rows={bData}
                header={`Котировки < ${tabValue} >`}
                rowsHandler={modalHandler}
              />
            </TabsPanel>
          </TabsPanels>
        )}
      </div>
    </Container>
  )
})

export default Quotes
