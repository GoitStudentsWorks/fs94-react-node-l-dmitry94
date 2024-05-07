import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const CustomForm = ({
    initialValues,
    validationSchema,
    operation,
    buttonText,
    children,
}) => {
    const dispatch = useDispatch();

    const onSubmit = async values => {
        dispatch(operation(values));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {children(formik)}

            <ToastContainer />
            <SubmitButton buttonText={buttonText} />
        </form>
    );
};

export default CustomForm;
