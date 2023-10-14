import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { authReducer } from '../../redux/auth/slice';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
import {
  StyledSection,
  StyledForm,
  StyledLink,
} from '../LoginForm/LoginForm.styled';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be at least 6 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async values => {
    try {
      const response = await dispatch(registerThunk(values));

      if (response.status === 201) {
        dispatch(authReducer.actions.login(response.data));
        return <Navigate to="/" />;
      } else if (response.status === 400) {
        console.error('Validation error:', response.data);
      } else if (response.status === 409) {
        console.error(
          'Error: User with such email already exists:',
          response.data
        );
      } else {
        console.error(
          'Unknown error during registration. Status:',
          response.status
        );
      }
    } catch (error) {
      console.error('Registration was unsuccessful:', error);
    }
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label={
            <>
              <EmailOutlinedIcon /> Email
            </>
          }
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label={
            <>
              <LockIcon /> Password
            </>
          }
          type="password"
          value={formik.values.password}
          onChange={e => {
            formik.handleChange(e);
            setPassword(e.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label={
            <>
              <LockIcon /> Confirm password
            </>
          }
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <PasswordStrengthBar password={password} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register
        </Button>
      </StyledForm>
      <StyledLink to="/login">Log in</StyledLink>
    </StyledSection>
  );
};

export default RegistrationForm;
