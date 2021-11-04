import useModal from "../customHooks/useModal"

const styles = {
  wrapper: {
    position: 'relative',
    height: '200px',
    border: '1px solid black',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    background: 'lightgray',
    border: '1px solid black',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}

function Modal() {
  const [isModal, showModal, modalRef, closeRef] = useModal(doSthOnceModalOpens)

  function doSthOnceModalOpens() {
    console.log('Congratulations! The modal has been opened successfully!')
  }

  return (
    <div>
      <h2 ref={modalRef}>useModal</h2>
      <div style={styles.wrapper}>
        <button onClick={showModal}>Open Modal</button>
        {isModal && (
          <div style={styles.modal} ref={modalRef}>
            <span>Hello, I am Modal :)</span>
            <button ref={closeRef} style={styles.close}>x</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
