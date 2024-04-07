import React from 'react'
import Filter_Machines from '../../../components/FilterPage_Filters/Filter_Machines/Filter_Machines'
import Filter_Status from '../../../components/FilterPage_Filters/Filter_Status/Filter_Status'
import Filter_Date from '../../../components/FilterPage_Filters/Filter_Date/Filter_Date'

const FilterPage_Filter = () => {
    return (
        <div>
            <Filter_Machines />
            <Filter_Status />
            <Filter_Date />
        </div>
    )
}
export default FilterPage_Filter