import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom'

const ModalMessage = forwardRef( function ModalMessage(props, ref){
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
           open(){
               dialog.current.showModal()
           }
        }
    })

    return(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <p className="text-xl font-bold text-stone-500 my-4">Please enter valid values.</p>
            <form ref={dialog} method="dialog" className="mt-4 text-right" >
                <button>Close</button>
            </form>
        </dialog>
    )
}
)

export default ModalMessage