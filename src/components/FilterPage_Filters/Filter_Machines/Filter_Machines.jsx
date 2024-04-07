import React from 'react'
import Filter_Machines__Header from './Filter_Machines__Header'
import SearchFull from '../../UI/SearchFull'
import Filter_Machines__Selected from './Filter_Machines__Selected'
import Filter_Machine_Table from './Filter_Machine_Table'

function Filter_Machines() {
    return (
        <div className='border-[1px] rounded-3xl p-8'>
            <Filter_Machines__Header />
            <Filter_Machines__Selected />
            <SearchFull showSearchIcon={true} />
            <Filter_Machine_Table />
        </div>
    )
}

export default Filter_Machines