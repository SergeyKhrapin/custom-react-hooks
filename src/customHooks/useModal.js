import { useState, useEffect, useRef } from "react"

function useModal(callback, closeByClickingOutside = true) {
  const [isModalShown, setModalShown] = useState(false)
  const modalRef = useRef()
  const closeRef = useRef()
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    function closeModal(e) {
      if (closeByClickingOutside) {
        if (modalRef.current !== e.target && !(modalRef.current?.contains(e.target)) || closeRef.current === e.target) {
          setModalShown(false)
        }
      } else {
        if (closeRef.current === e.target) {
          setModalShown(false)
        }
      }
    }

    window.addEventListener('click', closeModal)

    return () => {
      window.removeEventListener('click', closeModal)
    }
  }, [closeByClickingOutside])

  function openModal(e) {
    e.stopPropagation()
    setModalShown(isModalShownPrev => {
      !isModalShownPrev && typeof callbackRef.current === 'function' && callbackRef.current()
      return true
    })
  }

  // by default - a modal is closed by clicking outside it
  // to prevent that - pass false as an argument, i.e. useModal(false). In this case, a modal can be closed only by clicking on closeRef element
  // modalRef supposed to be assigned to a modal (modal is not closed by clicking on itself)
  // closeRef (optional) supposed to be assigned to an element by clicking on which a modal has to be closed
  // return [isModalShown, openModal, modalRef, closeRef]
  return [isModalShown, openModal, modalRef, closeRef]
}

console.log('master - commit 2');

export default useModal
