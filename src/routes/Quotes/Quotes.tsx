import Container from 'components/common/Container'
import Loader from 'components/common/Loader'
import Modal from 'components/Modal'
import Table from 'components/Table'
import Tabs, {TabsPanel, TabsPanels} from 'components/Tabs'
import {observer} from 'mobx-react-lite'
import React, {useMemo, useRef, useState} from 'react'
import {useCallback} from 'react'
import {useEffect} from 'react'
import QuotesStore from 'stores/QuotesStore'
import {columnsData, tabsObj} from './assets'

import classes from './Quotes.module.scss'

const Quotes: React.FC = observer(() => {
  const [tabValue, setTabValue] = useState<string | number>('А')
  const {
    setLoading,
    fetchQuotes,
    setCurrentQuoteId,
    rows,
    currentQuote,
    quoteA,
    quoteB,
  } = QuotesStore

  const [isOpenModal, openModalHandler] = useState(false)

  const intervalId = useRef<NodeJS.Timeout>()
  const firstLoad = useRef(true)
  useEffect(() => {
    if (firstLoad.current) {
      fetchQuotes()
      firstLoad.current = false
    }
    if (!isOpenModal) {
      intervalId.current = setInterval(fetchQuotes, 3000)
    } else {
      clearInterval(intervalId.current as NodeJS.Timeout)
    }
    return () => {
      clearInterval(intervalId.current as NodeJS.Timeout)
    }
  }, [isOpenModal, setLoading, fetchQuotes])

  const modalHandler = useCallback(
    (id: number) => {
      openModalHandler(true)
      setCurrentQuoteId(id)
    },
    [setCurrentQuoteId],
  )

  return (
    <Container>
      <Modal isOpen={isOpenModal} closeHandler={() => openModalHandler(false)}>
        <ModalQuote quote={currentQuote} />
      </Modal>
      <Tabs onChange={setTabValue} tabs={tabsObj} tabValue={tabValue} />
      <div className={classes.wrapper}>
        {!rows.length ? (
          <Loader />
        ) : (
          <TabsPanels value={tabValue}>
            <TabsPanel value='А'>
              <Table
                columns={columnsData}
                rows={quoteA}
                rowsHandler={modalHandler}
                header={`Котировки < ${tabValue} >`}
              />
            </TabsPanel>
            <TabsPanel value='Б'>
              <Table
                columns={columnsData}
                rows={quoteB}
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

type PropsModal = {
  quote: any
}
const ModalQuote: React.FC<PropsModal> = ({quote}) => {
  return (
    <div>
      <div>id: {quote.id}</div>
      <div>name: {quote.name}</div>
      <div>last: {quote.last}</div>
      <div>highestBid: {quote.highestBid}</div>
      <div>percentChange: {quote.percentChange}</div>
    </div>
  )
}
