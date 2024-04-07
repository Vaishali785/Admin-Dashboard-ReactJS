import { useEffect, useState } from "react";
import ORDER_DETAILS from "../../../../data/MOCK_DATA_latest"
import useFilterContext from "../../../../hooks/useFilterContext"
import ListTable__Row from "./ListTable__Row"
import ORDER_ITEMS from "../../../../data/ORDER_ITEMS";

function ListTable__Rows({ sort }) {
    const filters = useFilterContext();
    const [items, setItems] = useState([...ORDER_DETAILS]);
    let filteredData = items.filter(item => {
        const [month, day, year] = item.date.split('/');
        const formattedDateToCheck = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;

        if (filters.machines.length > 0 && !filters.machines.includes(item.machine_name)) {
            return false;
        }
        if (filters.status.length > 0 && !filters.status.includes(item.status)) {
            return false;
        }
        if (filters.startDate) {
            if (!(new Date(filters.startDate) <= new Date(formattedDateToCheck))) {
                return false;
            }
        }
        if (filters.endDate) {
            if (!(new Date(formattedDateToCheck) <= new Date(filters.endDate))) {
                return false;
            }
        }
        return true;
    });

    const calculateTotal = (items) => {
        const orderItems = ORDER_ITEMS.filter(item => items.includes(item.id))
        const totalAmount = orderItems?.reduce((total, current) => total + parseInt(current.amount), 0)
        return totalAmount;
    }

    return (
        <div className=''>

            {filteredData.length == 0 && (
                <div className="text-center">No Data Found!</div>
            )}
            {filteredData?.map((data, index) => {
                const totalAmount = calculateTotal(data?.order_items);
                return <ListTable__Row data={data} index={index + 1} key={data.machine_name} totalAmount={totalAmount} />
            })}


        </div>
    )
}

export default ListTable__Rows