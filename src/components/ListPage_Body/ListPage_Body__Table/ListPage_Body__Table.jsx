import React, { useState } from 'react'
import ListTable__Rows from './ListTable_Sections/ListTable__Rows'
import ListTable__Header from './ListTable_Sections/ListTable__Header'

function ListPage_Body__Table() {
    const [sort, setSort] = useState("");
    return (
        <div className='flex flex-col justify-between w-full bg-[#fcfcfc] p-8 rounded-xl shadow-[0px_4px_10px_1px_#33333326]'>
            <ListTable__Header setSort={setSort} />
            <ListTable__Rows sort={sort} />
        </div>
    )
}

export default ListPage_Body__Table