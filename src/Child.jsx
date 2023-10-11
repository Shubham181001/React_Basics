import { forwardRef, useImperativeHandle, useState } from "react"

const Child = (props, ref) => {

    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, () => {
        openModal: (value) => setOpenModal(value), 
    })

    if(!openModal) return null;

  return (
    <div>
        <p>This is a modal</p>
        <button onClick={() => setOpenModal()}></button>
    </div>
  )
}

export default forwardRef(Child)