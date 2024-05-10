import CustomInput from '../CustomInput/CustomInput';
import CustomForm from '../CustomForm/CustomForm';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import ColorSelector from '../ColorSelector/ColorSelector';
import MyDatePicker from '../ScreensPage/MainDashboard/CardDatePicker/CardDatePicker'; // Шлях до вашого компонента MyDatePicker
import * as yup from 'yup';

import scss from '../Popups/NeedHelpsPopup/NeedHelpsPopup.module.scss';

const AddCard = () => {
    const initialValues = {
        title: '',
        description: '',
        labelColor: '',
        startDate: new Date(),
    };

    const validationSchema = yup.object().shape({
        title: yup
            .string()
            .label('Invalid title')
            .required('Title is required'),
        description: yup.string().required('Description is required'),
        labelColor: yup.string(),
        startDate: yup.date(),
    });

    return (
        <CustomForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            buttonText={'Add'}
        >
            {formik => (
                <div className={scss.inputContainer}>
                    <div>
                        <CustomInput
                            type="title"
                            name="title"
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // className={scss.emailInput}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div>{formik.errors.title}</div>
                        )}
                    </div>
                    <div className={scss.textareaBlock}>
                        <CustomTextarea
                            name="description"
                            placeholder={'Description'}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.description &&
                            formik.touched.description && (
                                <div>{formik.errors.description}</div>
                            )}
                    </div>
                    <ColorSelector
                        title={'Label Color'}
                        onChange={color =>
                            formik.setFieldValue('labelColor', color)
                        }
                    />
                    <div className={scss.datePickerBlock}>
                        <MyDatePicker
                            title={'Deadline'}
                            selected={formik.values.startDate}
                            onChange={date =>
                                formik.setFieldValue('startDate', date)
                            }
                        />
                    </div>
                </div>
            )}
        </CustomForm>
    );
};

export default AddCard;
