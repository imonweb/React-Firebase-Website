import React from 'react'
import ReactDOM  from 'react-dom'
import './Modal.css'

const Modal = ({children}) => {
// const Modal = ({children, handleClose}) => {
  return  ReactDOM.createPortal((
    <div className='modal-backdrop'>
      <div className="modal">
        {children}
        {/* <button onClick={handleClose}>close</button> */}
      </div>
    </div>
  ), document.body)
}

export default Modal