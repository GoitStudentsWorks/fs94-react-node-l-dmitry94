import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { signup } from '../../../redux/auth/auth-operations';
import Container from '../../Container';
import CustomInput from '../../CustomInput/CustomInput';

import CustomForm from '../../CustomForm/CustomForm';
import { selectToken } from '../../../redux/auth/auth-selectors';
import css from './RegisterForm.module.scss';
import icons from '../../../assets/icons/icons.svg';

import * as yup from 'yup';

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required('Name is required'),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),

        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // const handleSubmit = async (values, { setSubmitting }) => {
    //     try {
    //         const response = await signup(values);
    //         const token = response.data.token;
    //         localStorage.setItem('token', token);
    //         navigate('/home');
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setSubmitting(false);
    //     }
    // };

    return (
        <section className={css.register_page}>
            <Container>
                <div className={css.form}>
                    <div>
                        <ul className={css.auth_nav}>
                            <li>
                                <NavLink
                                    className={css.classNavLink}
                                    to="/auth/register"
                                >
                                    Registration
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={css.classNavLink}
                                    to="/auth/login"
                                >
                                    Log In
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CustomForm
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        operation={signup}
                        // onSubmit={handleSubmit}
                        buttonText="Register Now"
                    >
                        {formik => (
                            <div className={css.auth_form}>
                                <div>
                                    <CustomInput
                                        name="username"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        placeholder="Enter your name"
                                    />
                                    {formik.errors.username &&
                                        formik.touched.username && (
                                            <div>{formik.errors.username}</div>
                                        )}
                                </div>

                                <div>
                                    <CustomInput
                                        name="email"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        placeholder="Enter your email"
                                    />
                                    {formik.errors.email &&
                                        formik.touched.email && (
                                            <div>{formik.errors.email}</div>
                                        )}
                                </div>

                                <div>
                                    <div className={css.inputWrapper}>
                                        <CustomInput
                                            name="password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            className={css.eye}
                                            onClick={passwordVisibility}
                                        >
                                            <svg className={css.eyeIcon}>
                                                <use
                                                    href={`${icons}#icon-eye`}
                                                ></use>
                                            </svg>
                                        </button>
                                    </div>

                                    {formik.errors.password &&
                                        formik.touched.password && (
                                            <div>{formik.errors.password}</div>
                                        )}
                                </div>
                            </div>
                        )}
                    </CustomForm>
                </div>
            </Container>
        </section>
    );
};

export default RegistrationForm;
