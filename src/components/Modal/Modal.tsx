import React, {MouseEvent, ReactNode} from 'react'
import classes from './Modal.module.scss'
import ReactDOM from 'react-dom'
import {useEffect} from 'react'
import {useRef} from 'react'
import {observer} from 'mobx-react-lite'

type Props = {
  children: ReactNode
  isOpen: boolean
  closeHandler: () => void
}

const Modal: React.FC<Props> = observer(({children, isOpen, closeHandler}) => {
  const $el: HTMLElement = document.createElement('div')
  const ref = useRef(null)

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== ref.current) {
      closeHandler()
    }
  }

  useEffect(() => {
    document.body?.append($el)
    return () => {
      document.body?.removeChild($el)
    }
  }, [$el])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={classes.wrapper} onClick={onClose}>
            <div ref={ref} className={classes.content}>
              {children}
            </div>
          </div>,
          $el,
        )}
    </>
  )
})

export default Modal
