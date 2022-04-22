import React from 'react'

import classes from './Table.module.scss'

type ColumnsType = {
  title: string
  key: string
  dataKey: string
}

type Props = {
  columns: ColumnsType[]
  rows: {[key: string]: string | number | JSX.Element}[]
  header?: string
  rowsHandler: (id: number) => void
}
const Table: React.FC<Props> = ({columns, rows, header, rowsHandler}) => {
  return (
    <>
      {header && <div className={classes.header}>{header}</div>}

      <div className={classes.table}>
        <div className={classes.table_header}>
          {columns.map(column => (
            <div key={column.key} className={classes.cell}>
              {column.title}
            </div>
          ))}
        </div>
        {rows.map((el: any, i: any) => {
          return (
            <div
              className={classes.row}
              key={el.id}
              onClick={() => rowsHandler(el.id)}
            >
              {columns.map(column => (
                <div key={column.key} className={classes.cell}>
                  {rows[i][column.dataKey]}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Table
