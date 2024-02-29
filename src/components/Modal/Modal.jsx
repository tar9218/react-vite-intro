import {createPortal} from "react-dom";
import './Modal.css';
import {useRef, useEffect} from "react";

function Modal({children, open}) {
    const dialog = useRef();

    useEffect(() => {
        if(open){
            dialog.current.showModal();
        }else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialog}>{children}</dialog>,
        document.getElementById('modal')
    );
}

export default Modal;
