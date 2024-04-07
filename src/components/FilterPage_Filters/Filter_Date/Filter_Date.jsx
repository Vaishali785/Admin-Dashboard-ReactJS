import React, { useState } from 'react'
import useFilterContext from '../../../hooks/useFilterContext'

function Filter_Date() {
    const { setStartDate, setEndDate, startDate, endDate, clearDates } = useFilterContext();
    const [error, setError] = useState();
    const handleEndDate = (date) => {
        if (startDate) {
            if (date > startDate) {
                setError('')
                setEndDate(date);
            } else {
                setError("End date should be greater than start date.")
            }
        } else {
            setError('')
            setEndDate(date);
        }

    }
    return (
        <div className='my-8'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-sm font-medium text-[#333333]'>Date Range</h2>
                <div className='underline text-xs font-medium text-[#5D6679] cursor-pointer' onClick={() => clearDates()}>Clear All</div>
            </div>
            <div className='date-table border-[1px] w-full border-[#CED4DA] justify-center  rounded-2xl flex flex-row flex-wrap'>
                <div className={`flex p-4 w-full gap-4 rounded-lg  ${true ? "border-[#333333]" : "border-[#ced4da]"}`} >
                    <div className="start-date flex-col flex flex-1 gap-2">
                        <label htmlFor='fromDate' className='text-xs font-medium text-[#333333]'>From:</label>
                        <input
                            type="date"
                            name="fromDate"
                            id="fromDate"
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate}
                            className='border-[1px] rounded-lg py-[10px] px-5 font-normal  text-xs text-[#333333]'
                            min="2021-01-01" max={((new Date(Date.now() - 864e5)).toISOString().split("T"))[0]} />
                    </div>
                    <div className="end-date flex-col flex flex-1 gap-2">
                        <label htmlFor='toDate' className='text-xs font-medium text-[#333333]'>To:</label>
                        <input
                            type="date"
                            name="toDate"
                            id="toDate"
                            value={endDate}
                            onChange={(e) => handleEndDate(e.target.value)}
                            className='border-[1px] rounded-lg py-[10px] px-5 font-normal  text-xs text-[#333333]'
                            max={(new Date(Date.now()).toISOString().split("T"))[0]} />

                    </div>
                </div>

                {error && <div className="error text-sm text-center bg-red-500 text-white w-full p-2 rounded-lg m-4">{error}</div>}
            </div>
        </div>

    )
}

export default Filter_Date