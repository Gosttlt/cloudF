import React, {memo, MouseEvent, ReactNode} from 'react'
import classes from './Modal.module.scss'
import ReactDOM from 'react-dom'
import {useEffect} from 'react'
import {useRef} from 'react'

type Props = {
  children: ReactNode
  openHandler: (value: boolean) => void
  isOpen: boolean
  closeHandler: () => void
}

const Modal: React.FC<Props> = memo(
  ({children, openHandler, isOpen, closeHandler}) => {
    const $el: HTMLElement = document.createElement('div')
    const ref = useRef(null)
    const onScroll = (e: any) => {
      e.preventDefault()
    }

    const onClose = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target !== ref.current) {
        window.removeEventListener('scroll', onScroll)
        document.body.style.overflow = 'auto'

        openHandler(false)
      }
    }
    const onOpen = () => {
      openHandler(true)
      document.body.style.overflow = 'hidden'
      window.addEventListener('scroll', onScroll)
    }
    useEffect(() => {
      document.body?.append($el)

      return () => {
        document.body?.removeChild($el)
      }
    }, [$el])

    return (
      <>
        <button onClick={onOpen}>123</button>
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
  },
)

export default Modal
