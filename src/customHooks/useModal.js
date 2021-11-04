import { useState, useEffect, useRef } from "react"

function useModal(closeByClickingOutside = true) {
  const [isModalShown, setModalShown] = useState(false)
  const modalRef = useRef()
  const closeRef = useRef()

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

    window.addEventListener('click', closeModal, true)

    return () => {
      window.removeEventListener('click', closeModal, true)
    }
  }, [])

  // by default - a modal is closed by clicking outside it
  // to prevent that - pass false as an argument, i.e. useModal(false). In this case, a modal can be closed only by clicking on closeRef element
  // modalRef supposed to be assigned to a modal (modal is not closed by clicking on itself)
  // closeRef (optional) supposed to be assigned to an element by clicking on which a modal has to be closed
  // return [isModalShown, openModal, modalRef, closeRef]
  return [isModalShown, setModalShown.bind({}, true), modalRef, closeRef]
}

export default useModal
