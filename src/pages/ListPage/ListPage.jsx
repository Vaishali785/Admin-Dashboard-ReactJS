
import Modal from '../../components/UI/Modal';
import useFilterContext from '../../hooks/useFilterContext';
import Sidebar from '../../Layouts/Sidebar';
import FilterPage from '../FilterPage/FilterPage';
import ListPage_Body from './sections/ListPage_Body';
import ListPage_Header from './sections/ListPage_Header';
import ListPage_SubHeader from './sections/ListPage_SubHeader';

function ListPage() {
    const { filtersModalOpen } = useFilterContext();

    return (
        <>
            {!filtersModalOpen &&
                <div className='bg-[#fdfdfd] flex gap-10'>
                    <Sidebar />
                    <div className="body flex-1 mx-4 min-[850px]:ml-[6rem]">
                        <ListPage_Header />
                        <ListPage_SubHeader />
                        <ListPage_Body />
                    </div>
                </div>
            }
            {
                filtersModalOpen &&
                <Modal>
                    <FilterPage />
                </Modal>
            }
        </>

    )
}

export default ListPage