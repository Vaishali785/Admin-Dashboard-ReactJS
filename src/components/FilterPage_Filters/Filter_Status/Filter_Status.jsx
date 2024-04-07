import React from 'react';
import success from '../../../assets/status_icons/success.svg';
import pending from '../../../assets/status_icons/pending.svg';
import sent from '../../../assets/status_icons/sent.svg';
import failure from '../../../assets/status_icons/failure.svg';
import refund_initiated from '../../../assets/status_icons/refund_initiated.svg';
import refund_completed from '../../../assets/status_icons/refund_completed.svg';
import useFilterContext from '../../../hooks/useFilterContext';

function Filter_Status() {
    const { status, selectedStatus, clearAllStatus } = useFilterContext();
    const handleStatusSelect = (status) => {
        selectedStatus(status.toLowerCase());
    }
    return (
        <div className='my-8'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-sm font-medium text-[#333333]'>Status</h2>
                <div className='underline text-xs font-medium text-[#5D6679] cursor-pointer' onClick={() => clearAllStatus()}>Clear All</div>
            </div>
            <div className='flex gap-10 flex-wrap'>
                <div className={`border-[1px] inline-block p-4 rounded-lg w-[114px]  ${status.includes("success") ? "border-[#333333]" : "border-[#ced4da]"}`} onClick={() => handleStatusSelect("success")}>
                    <img src={success} alt="" className='mb-2' />
                    <span className='text-[#333333] font-medium text-sm'>Successful</span>
                </div>

                <div className={`border-[1px] inline-block p-4 rounded-lg w-[114px] ${status.includes("pending") ? "border-[#333333]" : "border-[#ced4da]"}`} onClick={() => handleStatusSelect("pending")}>
                    <img src={pending} alt="" className='mb-2' />
                    <span className='text-[#333333] font-medium text-sm'>Pending</span>
                </div>

                <div className={`border-[1px] inline-block p-4 rounded-lg w-[114px] ${status.includes("sent") ? "border-[#333333]" : "border-[#ced4da]"}`} onClick={() => handleStatusSelect("sent")}>
                    <img src={sent} alt="" className='mb-2' />
                    <span className='text-[#333333] font-medium text-sm'>Sent</span>
                </div>

                <div className={`border-[1px] inline-block p-4 rounded-lg w-[114px] ${status.includes("failure") ? "border-[#333333]" : "border-[#ced4da]"}`} onClick={() => handleStatusSelect("failure")}>
                    <img src={failure} alt="" className='mb-2' />
                    <span className='text-[#333333] font-medium text-sm'>Failure</span>
                </div>

                <div className={`border-[1px] inline-block p-4 rounded-lg w-[114px] ${status.includes("refund initiated") ? "border-[#333333]" : "border-[#ced4da]"}`} onClick={() => handleStatusSelect("refund initiated")}>
                    <img src={refund_initiated} alt="" className='mb-2' />
                    <span className='text-[#333333] font-medium text-sm'>Refund Initiated</span>
                </div>

                <div className={`border-[1px] inline-block p-4 rounded-lg w-[114px] ${status.includes("refund completed") ? "border-[#333333]" : "border-[#ced4da]"}`} onClick={() => handleStatusSelect("refund completed")}>
                    <img src={refund_completed} alt="" className='mb-2' />
                    <span className='text-[#333333] font-medium text-sm'>Refund Completed</span>
                </div>
            </div>
        </div>
    )
}

export default Filter_Status