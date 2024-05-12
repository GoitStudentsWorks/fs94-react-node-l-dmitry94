import Modal from 'react-modal';
import icons from '../../../assets/icons/icons.svg';
import scss from './FilterModal.module.scss';
import { useState } from 'react';

const FilterModal = ({ isOpen, onClose, onFilterChange }) => {
    // const [, setSelectedColor] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');
    // const handleColorChange = event => {
    //     setSelectedColor(event.target.value);
    // };

    // const handleReset = () => {
    //     setSelectedColor('');
    // };

    const handlePriorityChange = priority => {
        setSelectedPriority(priority);
        onFilterChange(priority);
    };

    const handleReset = () => {
        setSelectedPriority('');
        onFilterChange('');
    };

    console.log(selectedPriority);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
            overlayClassName={'modal__overlay'}
            className={'modal__content'}
            closeTimeoutMS={300}
            ariaHideApp={false}
        >
            <button className="close" onClick={onClose}>
                <svg className="close__icon">
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>

            <h3 className={scss.title}>Filters</h3>
            <div className={scss.subtitle}>
                <h4 className={scss.label}>Label color</h4>
                <button onClick={handleReset} className={scss.show}>
                    Show all
                </button>
            </div>

            <div className={scss.buttonsContainer}>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="rgba(255, 255, 255, 0.3)"
                        // onChange={handleColorChange}
                        onChange={() =>
                            handlePriorityChange('rgba(255, 255, 255, 0.3)')
                        }
                        checked={
                            selectedPriority === 'rgba(255, 255, 255, 0.3)'
                        }
                    />
                    <span
                        className={scss.radioBtn}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    ></span>
                    <span className={scss.radioLabel}> Without priority</span>
                </label>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="#8FA1D0"
                        // onChange={handleColorChange}
                        onChange={() => handlePriorityChange('#8FA1D0')}
                        checked={selectedPriority === '#8FA1D0'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#8FA1D0' }}
                    ></span>
                    <span className={scss.radioLabel}>Low</span>
                </label>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="#E09CB5"
                        // onChange={handleColorChange}
                        onChange={() => handlePriorityChange('#E09CB5')}
                        checked={selectedPriority === '#E09CB5'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#E09CB5' }}
                    ></span>
                    <span className={scss.radioLabel}>Medium</span>
                </label>
                <label className={scss.radioText}>
                    <input
                        type="radio"
                        name="color"
                        value="#BEDBB0"
                        // onChange={handleColorChange}
                        onChange={() => handlePriorityChange('#BEDBB0')}
                        checked={selectedPriority === '#BEDBB0'}
                    />
                    <span
                        className={scss.radioBtn}
                        style={{ backgroundColor: '#BEDBB0' }}
                    ></span>
                    <span className={scss.radioLabel}>High</span>
                </label>
            </div>
        </Modal>
    );
};

export default FilterModal;
