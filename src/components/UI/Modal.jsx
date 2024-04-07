
function Modal({ children }) {
    return (
        <div>
            <div className='bg-shadow fixed w-screen h-screen bg-[#121212CC]'></div>
            <div className='modal absolute top-12 left-1/2 -translate-x-1/2  w-[60%] min-h-4/5 py-10 px-12 bg-white rounded-[40px] max-[1021px]:w-4/5  max-[700px]:w-[90%] max-[700px]:p-6 ' >
                {children}
            </div>
        </div>
    )
}

export default Modal