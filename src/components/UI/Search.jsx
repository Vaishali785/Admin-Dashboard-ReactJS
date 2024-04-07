
function Search(props) {
    return (
        <div className="search-input relative">
            {!props.noSearchIcon &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1/2 -translate-y-2/4 left-3 text-[#ced4da] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            }
            <input type="text" name="" id="" className={`border-[#ced4da] border-2 py-[10px] pr-[17px] pl-[37px] rounded-[8px] ${props.fullWidth ? "w-full" : ''}`} placeholder="Search" />
        </div>
    )
}

export default Search