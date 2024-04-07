import React from 'react'
import SearchFull from '../../../components/UI/SearchFull'
import useFilterContext from '../../../hooks/useFilterContext';

function FilterPage_Header() {
    const { showFiltersModal } = useFilterContext();
    return (
        <>
            <div className='page-title flex flex-row items-center '>
                <h2 className='text-xl flex-1 font-bold uppercase text-[#333333] text-center'>Filter</h2>
                <span className='cursor-pointer' onClick={() => showFiltersModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#D92D20]">
                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </span>
            </div>
            <div className='search my-10'>
                <SearchFull showSearchIcon={false} moreRounded={true} />
            </div>
        </>
    )
}

export default FilterPage_Header