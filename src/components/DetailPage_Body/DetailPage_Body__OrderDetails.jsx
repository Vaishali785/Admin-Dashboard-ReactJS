
function DetailPage_Body__OrderDetails({ orderItems }) {

    return (
        <div className=' border-[1px] p-8 rounded-3xl shadow-[0px_4px_10px_1px_#33333326] h-fit'>
            <div className="heading text-[#5D6679] font-medium text-sm uppercase py-8">Order Details</div>
            <div className="table w-full">
                <div className="table-header grid md:grid-cols-[50px_1.7fr_0.5fr_1.2fr_0.7fr] min-[750px]:grid-cols-[50px_1.7fr_0.5fr_1.2fr] lg:grid-cols-[50px_1.7fr_0.7fr_0.5fr_1.2fr_0.7fr]  max-[750px]:grid-cols-[50px_1.7fr_0.5fr_1.2fr] w-full gap-4">
                    <div className='id text-[#377DFF] font-bold text-xs uppercase p-5 max-[750px]:p-0 max-[750px]:self-center max-[750px]:text-center'>ID</div>
                    <div className='drink_name text-[#377DFF] font-bold text-xs uppercase p-5'>Drink Name</div>
                    <div className='drink_custom text-[#377DFF] font-bold text-xs uppercase p-5 lg:block hidden'>Customization</div>
                    <div className='drink_amount text-[#377DFF] font-bold text-xs uppercase p-5'>Amount</div>
                    <div className='drink_status text-[#377DFF] font-bold text-xs uppercase p-5'>Drink Status</div>
                    <div className='drink_action text-[#377DFF] font-bold text-xs uppercase p-5 md:block hidden'>Action</div>
                </div>

                {
                    orderItems?.map(item => (
                        <div className="table-rows  grid md:grid-cols-[50px_1.7fr_0.5fr_1.2fr_0.7fr] min-[750px]:grid-cols-[50px_1.7fr_0.5fr_1.2fr] lg:grid-cols-[50px_1.7fr_0.7fr_0.5fr_1.2fr_0.7fr] max-[750px]:grid-cols-[50px_1.7fr_0.5fr_1.2fr] w-full gap-4 items-center" key={item.id}>
                            <div className='id text-[#333333] font-normal text-sm max-[750px]:p-0 p-5'>{item?.id}</div>
                            <div className='drink_name text-[#333333] font-normal text-sm p-5 flex items-center gap-2'>
                                <img src={item?.drink_img} alt={item?.drink_name} className='w-10 h-10 rounded-[50%] aspect-square object-cover max-[750px]:hidden block' />
                                <span>
                                    {item?.drink_name}
                                </span>
                            </div>
                            <div className='drink_custom text-[#333333] font-normal text-sm p-5 lg:block hidden'>{item?.customization}</div>
                            <div className='drink_amount text-[#333333] font-normal text-sm p-5'>{item?.amount}</div>
                            <div className={`drink_status  ${item?.drink_status.split(" ").join("_")}`}>{item?.drink_status}</div>
                            <button className={`drink_action font-normal text-sm  h-fit rounded-lg w-fit px-5 py-3 text-white md:block hidden ${item.action == "refunded" ? "bg-[#377DFF]" : 'bg-[#B0B0B0]'}`} disabled={item?.action}>Refund</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailPage_Body__OrderDetails