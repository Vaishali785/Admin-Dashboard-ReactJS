import ORDER_ITEMS from '../../data/ORDER_ITEMS';

function DetailPage_Body__BasicInfo({ order }) {
    const getTotalAmount = () => {
        const orderItems = ORDER_ITEMS.filter(item => order?.order_items?.includes(item.id))
        const totalAmount = orderItems?.reduce((total, current) => total + parseInt(current.amount), 0)
        return totalAmount;
    }

    return (
        <div className='border-[1px] p-8 rounded-3xl shadow-[0px_4px_10px_1px_#33333326] flex flex-col gap-4'>
            <div className="header flex flex-row justify-between items-center px-2">
                <div className="order_id text-[#377DFF] text-base font-bold">{order?.order_id}</div>
                <div className={`order_status border-[1px]  py-[5px] px-3 rounded-[32px] ${order?.status.split(" ").join("_")} uppercase`}>{order?.status}</div>
            </div>

            <div className="basic_info flex flex-col gap-4 my-4">
                <h2 className="basic_info_heading text-[#868E96] text-sm font-medium uppercase tracking-[.25px]">Basic Info</h2>
                <div className="basic_info_content xl:grid xl:grid-cols-2 flex gap-3 ">
                    <div className="datetime flex-1 flex flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Date and Time</span>
                        <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>{order?.date}; {order?.time}</span>
                    </div>

                    <div className="machine flex-1 flex flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Machine</span>
                        <div className='w-full '>
                            <span className='text-sm font-medium text-[#333333] leading-[21px] '>Aahaar Stall {order?.machine_name}</span>
                            <span className='text-sm font-medium text-[#878787] leading-[21px] '>&nbsp;(WH1{order?.machine_name})</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="summary  flex flex-col gap-4 my-4">
                <h2 className="summary_heading text-[#868E96] text-sm font-medium uppercase tracking-[.25px]">Order Summary</h2>
                <div className="summary_content xl:grid xl:grid-cols-2 flex gap-3 ">
                    <div className="payment_id flex flex-1 flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Payment ID</span>
                        <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>{order?.payment_id}</span>
                    </div>

                    <div className="total flex flex-1 flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Total Amount</span>
                        <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>&#8377; {getTotalAmount()}</span>
                    </div>

                </div>
            </div>

            <div className="customer_info  flex flex-col gap-4 my-4 ">
                <div className="customer_info_heading text-[#868E96] text-sm font-medium uppercase tracking-[.25px]">Customer Information</div>

                <div className="customer_info_content grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-3">
                    <div className="name flex-1 flex flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Name</span>
                        <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>{order?.customer_name}</span>
                    </div>

                    <div className="contact flex-1 flex flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Contact Number</span>
                        <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>{order?.customer_contact}</span>
                    </div>

                    <div className="email flex flex-1 flex-col gap-2">
                        <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Email</span>
                        <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>{order?.customer_email}</span>
                    </div>

                </div>
            </div>


            <div className="refund_info  flex flex-col gap-4 my-4">
                <div className="refund_info_heading text-[#868E96] text-sm font-medium uppercase tracking-[.25px]"></div>

                <div className="trans_id flex flex-col gap-2 flex-wrap">
                    <span className='text-xs font-normal text-[#868E96] leading-[18px] inline-block'>Refund Transaction ID</span>
                    <span className='text-sm font-medium text-[#333333] leading-[21px] inline-block'>{order?.payment_id}</span>
                </div>
            </div>
        </div>
    )
}

export default DetailPage_Body__BasicInfo