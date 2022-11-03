import React from "react";

const Modal = ({ children, open, setClosed }) => {
    return (
        <div className={`${open ? 'Modal' : 'Modal-hidden'}`} onClick={setClosed}>
            <div onClick={(e) => e.stopPropagation()} className={`${open ? 'Modal-container' : 'Modal-container-hidden'}`}>
                {children}
            </div>
        </div>
    );
}

export default Modal;