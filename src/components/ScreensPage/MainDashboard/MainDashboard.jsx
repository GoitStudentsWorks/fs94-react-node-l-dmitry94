import SubmitButton from '../../SubmitButton';
import Cart from '../Cart/Cart';
import NameColumn from '../NameColumn/NameColumn';
import AddCard from '../../AddCard/AddCard';
import { useEffect, useState } from 'react';
import CustomModal from '../../CustomModal/CustomModal';
import scss from './MainDashboard.module.scss';
import AddColumn from '../../Popups/Column/AddColumn/AddColumn';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumnItems } from '../../../redux/tasks/tasks-selectors';
import { fetchColumns } from '../../../redux/tasks/tasks-operations/tasks-columns-operations';

const MainDashboard = ({ board }) => {
    const column = useSelector(selectColumnItems);
    const [columnById, setColumnById] = useState('');
    const dispatch = useDispatch();

    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);

    const [columnModalIsOpen, setColumnModalIsOpen] = useState(false);

    useEffect(() => {
        if (board) {
            dispatch(fetchColumns(board._id));
        }
    }, [board, dispatch]);

    const columnModalOpen = () => {
        setColumnModalIsOpen(true);
    };

    const columnModalClose = () => {
        setColumnModalIsOpen(false);
    };

    const cardOpenModal = id => {
        setCardModalIsOpen(true);
        setColumnById(id);
    };

    const cardCloseModal = () => {
        setCardModalIsOpen(false);
    };

    const columns = column.map(({ column_name, _id }) => (
        <div key={_id} className={scss.column}>
            <NameColumn nameColumn={column_name} />
            <Cart boardId={board?._id} columnId={_id} />

            <div className={scss.btn}>
                <SubmitButton
                    onClick={() => cardOpenModal(_id)}
                    buttonText={'Add another cart'}
                />
            </div>
        </div>
    ));

    return (
        <>
            {column && (
                <div className={scss.head}>
                    {columns}
                    <SubmitButton
                        onClick={columnModalOpen}
                        buttonText={'Add another column'}
                    />
                    <CustomModal
                        isOpen={columnModalIsOpen}
                        onClose={columnModalClose}
                        title={'Add column'}
                    >
                        <AddColumn id={board?._id} />
                    </CustomModal>
                </div>
            )}

            <CustomModal
                isOpen={cardModalIsOpen}
                onClose={cardCloseModal}
                title={'Add card'}
            >
                <AddCard boardId={board?._id} columnId={columnById} />
            </CustomModal>
        </>
    );
};

export default MainDashboard;
