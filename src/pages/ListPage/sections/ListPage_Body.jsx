import ListPage_Body__Total from "../../../components/ListPage_Body/ListPage_Body__Total"
import ListPage_Body__Filter from "../../../components/ListPage_Body/ListPage_Body__Filter"
import ListPage_Body__Table from "../../../components/ListPage_Body/ListPage_Body__Table/ListPage_Body__Table"

const ListPage_Body = () => {
    return (
        <div className="xl:grid xl:grid-cols-[1fr_320px] flex flex-col gap-4">
            <ListPage_Body__Total />
            <ListPage_Body__Filter />
            <ListPage_Body__Table />
        </div>
    )
}

export default ListPage_Body