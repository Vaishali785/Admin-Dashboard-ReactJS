
function ListPage_Body__Total() {
    return (
        <div className="flex flex-row justify-between w-full bg-[#fcfcfc] p-8 rounded-xl shadow-[0px_4px_10px_1px_#33333326] max-[750px]:hidden">
            <div className="flex gap-2 items-center">
                <span className="text text-sm font-medium">Machines:</span>
                <span className="value text-[12px] font-normal text-[#333]">6</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text text-sm font-medium">Orders:</span>
                <span className="value text-[12px] font-normal text-[#333]">15</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text text-sm font-medium">Customers:</span>
                <span className="value text-[12px] font-normal text-[#333]">10</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text text-sm font-medium">Drinks:</span>
                <span className="value text-[12px] font-normal text-[#333]">10</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text text-sm font-medium">Total Amount:</span>
                <span className="value text-[12px] font-normal text-[#333]">&#8377;1000</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text text-sm font-medium">Refunds Initiated:</span>
                <span className="value text-[12px] font-normal text-[#333]">5</span>
            </div>
        </div>
    )
}

export default ListPage_Body__Total