import useFilterContext from "../../hooks/useFilterContext"

function ListPage_Body__Filter() {
    const filters = useFilterContext();
    return (
        <div className="flex flex-col row-span-2  w-full bg-[#fcfcfc] p-8 rounded-xl shadow-[0px_4px_10px_1px_#33333326] max-[750px]:p-4">
            <h2 className="heading font-bold text-base tracking-wider text-[#5D6679] text-center">FILTERS</h2>
            <div className="flex justify-between my-8 max-[750px]:my-4">
                <div className="border-[#ADB5BD] border-[1px] text-[#5D6679] p-4 rounded-lg cursor-pointer" onClick={() => filters.showFiltersModal(true)}>Select Filters</div>
                <div className="text-[#5D6679] p-4 rounded-lg underline cursor-pointer" onClick={() => filters.clearAll()}>Clear All</div>
            </div>

            <div className="filters">
                {filters.startDate && (
                    <div className="filter-status inline-flex flex-wrap gap-2 items-center my-2">
                        <span className="text-xs text-[#5D6679] font-medium leading-5 pl-[2px]">Date From:</span>

                        <div className="px-3 py-2 border-[#F1F1F1] inline-flex border-[1px] rounded-[80px] gap-2 items-center">
                            <span className="text-[#5D6679] text-xs font-normal">{filters.startDate}</span>
                            <span onClick={() => filters.setStartDate()}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#CACACA]">
                                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                </svg>
                            </span>
                        </div>

                    </div>
                )}
                {filters.endDate && (
                    <div className="filter-status inline-flex flex-wrap gap-2 items-center my-2">
                        <span className="text-xs text-[#5D6679] font-medium leading-5 pl-[2px]">Date To:</span>

                        <div className="px-3 py-2 border-[#F1F1F1] inline-flex border-[1px] rounded-[80px] gap-2 items-center">
                            <span className="text-[#5D6679] text-xs font-normal">{filters.endDate}</span>
                            <span onClick={() => filters.setEndDate()}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#CACACA]">
                                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                </svg>
                            </span>
                        </div>

                    </div>
                )}

                {filters.status.length > 0 && (
                    <div className="filter-status inline-flex flex-wrap gap-2 items-center my-2">
                        <span className="text-xs text-[#5D6679] font-medium leading-5 pl-[2px]">Status:</span>
                        {filters.status.map(status => (
                            <div className="px-3 py-2 border-[#F1F1F1] inline-flex border-[1px] rounded-[80px] gap-2 items-center" key={status}>
                                <span className="text-[#5D6679] text-xs font-normal">{status}</span>
                                <span onClick={() => filters.selectedStatus(status)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#CACACA]">
                                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {filters.machines.length > 0 && (
                    <div className="filter-status inline-flex flex-wrap gap-2 items-center my-2">
                        <span className="text-xs text-[#5D6679] font-medium leading-5 pl-[2px]">Machines:</span>
                        {filters.machines.map(machine => (
                            <div className="px-3 py-[6px] border-[#F1F1F1] inline-flex border-[1px] rounded-[80px] gap-2 items-center" key={machine}>
                                <span className="text-[#5D6679] text-xs font-normal">Aahaar Stall {machine}</span>
                                <span onClick={() => filters.toggleMachines(machine)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#CACACA]">
                                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}

export default ListPage_Body__Filter