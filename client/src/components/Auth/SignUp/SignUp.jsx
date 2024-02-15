import { useState } from 'react';
import { Formik } from 'formik';
import armenia from '../../../assets/armenia.mp4'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './SignUp.scss';

export const SignUp = () => {
  const [hide, setHide] = useState(true);
  const [role, setRole] = useState('user');
  const navigate = useNavigate();
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <section className="signup__section">
        <div className='background-video'>
          <video autoPlay muted loop>
            <source src={armenia} type='video/mp4'/>
          </video>
        </div>
        <Formik
         initialValues={{ name: '', email: '', password: '', confirmPassword: ''}}
         validate={values => {
           const errors = {};
           if (!values.email) {
             errors.email = 'Required';
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = 'Invalid email address';
           }
           return errors;
         }}
         onSubmit={async (values, { setSubmitting }) => {
          try {
            console.log(values.role);
            const resp = await axios.post('http://localhost:8000/armtours/signup', {
              name: values.name,
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword,
              role: role
            });
            localStorage.setItem(`user`, JSON.stringify(values));
            if(resp.data.success) {
              notifySuccess('You signed up successfully');
              navigate(resp.data.route);
            } else {
              notifyError(resp.data.message);
            }
          } catch (error) {
            notifyError('Error during signup. Please try again.');
            console.error('Error:', error);
          }
          setSubmitting(false);
        }}
        >  
         {({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting,
         }) => (
           <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <span style={{color:'red'}}>{errors.email && touched.email && errors.email}</span>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type={hide ? 'password' : 'text'}
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type={hide ? 'password' : 'text'}
                name="confirmPassword"
                id="confirm-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </div>
            <div className='role'>
              <div>
                <label htmlFor="">Role</label>
              </div>
                <div className="user">
                  <label htmlFor="user">User</label>
                  <input 
                    type="radio" 
                    name="user" 
                    id="user" 
                    onClick={() => {
                      setRole('user');
                    }}
                  />
                </div>
                <div className="agency">
                  <label htmlFor="agency">Tour Agency</label>
                  <input 
                    type="radio" 
                    name="user" 
                    id="agency" 
                    onClick={() => {
                      setRole('agency');
                    }}
                  />
                </div>
            </div>
            <span style={{color:'red'}}>{errors.password && touched.password && errors.password}</span>
            <div className="form-bottom">
              <div className='check'>
                <div className="check-col">
                  <input type="checkbox" id="check_password" onClick={() => {
                    setHide(!hide);
                  }}/>
                  <label htmlFor="check_password">Show password</label>
                </div>
                <span>Already have an account ? <a href="/armtours/login">Login</a></span>
              </div>
            </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
         </form>
       )}
       </Formik>
    </section>
  )
}