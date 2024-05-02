import { useState } from 'react';
import line from '../images/line.svg';
import icons from '../../../assets/icons/icons.svg';
import scss from './BoardList.module.scss';
import CustomModal from '../../CustomModal/CustomModal.jsx';
import CustomInput from '../../CustomInput/CustomInput.jsx';

const BoardList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <h2 className={scss.boardsTitle}>My boards</h2>
            <img src={line} alt="line" />
            <div className={scss.boardsContainer}>
                <p className={scss.createText}>Create New Board</p>
                <button className={scss.buttonWrapper} onClick={openModal}>
                    <div className={scss.plus}>
                        <svg className={scss.plusIcon}>
                            <use href={`${icons}#icon-plus`}></use>
                        </svg>
                    </div>
                </button>
                <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
                    <CustomInput />
                </CustomModal>
            </div>
            <img src={line} alt="line" />
        </div>
    );
};

export default BoardList;
