import React from 'react'

const Modal = ({
  title,
  modalContent,
  closeHandler
}) => {

  return (
    <>
      <div id="overlay" className="overlay black hide"></div>
      <div id="alert-box" className="alert-box hide">
        {modalContent &&
            <>
                {title && <div className="modal-header">{title}</div>}
                <div className="modal-content">{modalContent}</div>
            </>}
      </div>
    </>
  )
}

export default Modal