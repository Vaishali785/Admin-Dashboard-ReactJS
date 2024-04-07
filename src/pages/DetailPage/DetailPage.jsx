import React from 'react'
import Sidebar from '../../Layouts/Sidebar'
import DetailPage_Header from './sections/DetailPage_Header'
import DetailPage_SubHeader from './sections/DetailPage_SubHeader'
import DetailPage_Body from './sections/DetailPage_Body'

function DetailPage() {

    return (
        <div className='bg-[#fdfdfd] min-[850px]:flex min-[850px]:gap-10 w-screen'>
            <Sidebar />
            <div className="body  min-[850px]:mx-4 min-[850px]:ml-20 w-full">
                <DetailPage_Header />
                <DetailPage_SubHeader />
                <DetailPage_Body />
            </div>
        </div>
    )
}

export default DetailPage