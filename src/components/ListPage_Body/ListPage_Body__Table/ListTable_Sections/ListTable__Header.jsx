import caret from '../../../../assets/caret-up.svg'

function ListTable__Header({ setSort }) {
    return (
        <div className="grid xl:grid-cols-[50px,repeat(6,minmax(0,1fr)),1.5fr] max-[850px]:grid-cols-[50px,repeat(3,minmax(0,1fr)),1.2fr] grid-cols-[50px,repeat(4,minmax(0,1fr)),1.5fr] gap-2 justify-center items-start w-full bg-[#fcfcfc] ">
            <div className='py-5 '>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] ">S. NO.</span>
            </div>
            <div className='flex gap-2 justify-start items-center py-5 px-3'>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline-block">Date</span>
                <span className="text text-sm font-medium text-[#377DFF] self-start">
                    <img src={caret} alt="" />
                    <img src={caret} alt="" className='rotate-180' />
                </span>
            </div>
            <div className='flex gap-2 justify-start items-center py-5 px-3' onClick={() => setSort("order_id")}>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline-block max-[850px]:w-min">Order ID</span>
                <span className="text text-sm font-medium text-[#377DFF] self-start">
                    <img src={caret} alt="" />
                    <img src={caret} alt="" className='rotate-180' />
                </span>
            </div>
            <div className='justify-center py-5 px-3 xl:flex hidden'>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline-block">Machine Name</span>
            </div>
            <div className='flex  py-5 px-3'>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline-block">Customer Name</span>
            </div>
            <div className=' justify-center py-5 px-3 xl:flex hidden'>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline-block">Contact Number</span>
            </div>
            <div className='flex gap-2 justify-start items-center py-5 px-3  max-[850px]:hidden'>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline max-[850px]:w-min">Total Amount</span>
                <span className="text text-sm font-medium text-[#377DFF] self-start">
                    <img src={caret} alt="" />
                    <img src={caret} alt="" className='rotate-180' />
                </span>
            </div>
            <div className='flex justify-start py-5 px-3  max-[850px]:justify-self-center'>
                <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] inline-block ">Status</span>
            </div>
        </div>
    )
}

export default ListTable__Header