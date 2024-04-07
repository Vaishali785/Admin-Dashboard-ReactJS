
import React from 'react'
import { Link } from 'react-router-dom'

const ListTable__Row = (props) => {
    return (
        <Link to={"/" + props?.data?.order_id} className='grid xl:grid-cols-[50px,repeat(6,minmax(0,1fr)),1.5fr] max-[850px]:grid-cols-[50px,repeat(4,minmax(0,1fr))] grid-cols-[50px,repeat(4,minmax(0,1fr)),1.5fr]  gap-2 justify-center items-start w-full bg-[#fcfcfc] '>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] s_no">{props?.index}.</div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] date-time flex flex-col gap-2">
                <span className="date">{props?.data?.date || '-'}</span>
                <span className="time xl:block hidden">{props?.data?.time || '-'}</span>
            </div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] order_id">{props?.data?.order_id || '-'}</div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] machine xl:block hidden">{props?.data?.machine_name || '-'}</div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] customer ">{props?.data?.customer_name || '-'}</div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] contact xl:block hidden">{props?.data?.customer_contact || '-'}</div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] total  max-[850px]:hidden">&#8377;{props?.totalAmount}</div>
            <div className=" text-[#333333] py-5 px-3 text-sm leading-[1.38rem] status  max-[850px]:justify-self-center">
                <span className={`${props?.data?.status.split(" ").join("_")}  max-[850px]:inline-block`}>
                    {props?.data?.status || '-'}
                </span>
            </div>
        </Link>
    )
}

export default ListTable__Row