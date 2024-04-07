import { useParams } from "react-router-dom";
import DetailPage_Body__BasicInfo from "../../../components/DetailPage_Body/DetailPage_Body__BasicInfo"
import DetailPage_Body__OrderDetails from "../../../components/DetailPage_Body/DetailPage_Body__OrderDetails"
import ORDER_ITEMS from "../../../data/ORDER_ITEMS";
import { useEffect, useState } from "react";
import ORDER_DETAILS from "../../../data/MOCK_DATA_latest";

const DetailPage_Body = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState();
    const [orderItems, setOrderItems] = useState();
    useEffect(() => {
        const filteredOrderData = ORDER_DETAILS.filter(order => order?.order_id == orderId.toUpperCase());
        setOrder(filteredOrderData[0]);

        const filteredItems = ORDER_ITEMS.filter(item => filteredOrderData[0]?.order_items.includes(item.id))
        setOrderItems(filteredItems);
    }, [orderId])
    return (
        <div className="flex gap-8 mx-6 flex-col xl:flex-row">
            <DetailPage_Body__BasicInfo order={order} />
            <DetailPage_Body__OrderDetails orderItems={orderItems} />
        </div>
    )
}

export default DetailPage_Body