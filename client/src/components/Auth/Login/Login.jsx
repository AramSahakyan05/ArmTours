import { useState } from 'react';
import { Formik } from 'formik';
import {Container} from '../../UIContainer/Container'; 
import tatev_video from '../../../assets/tatev.mp4';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Login.scss';

export const Login = () => {
  const [hide, setHide] = useState(true);
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
    <section className="login__section">
      <Container>
        <div className='background-video'>
          <video autoPlay muted loop>
            <source src={tatev_video} type='video/mp4'/>
          </video>
        </div>
        <Formik
         initialValues={{ email: '', password: '', confirmpassword: '',}}
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
            const resp = await axios.post('http://localhost:8000/armtours/login', {
              email: values.email,
              password: values.password
            });
            if(resp.data.success) {
              notifySuccess('You signed up successfully');
              navigate(resp.data.route);
            } else {
              notifyError(resp.data.message);
            }
          } catch (error) {
            notifyError("Something went wrong, try again");
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
            <h1>Login</h1>
            <div>
              <label htmlFor="">Email</label>
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
            <span style={{color:'red'}}>{errors.password && touched.password && errors.password}</span>
            <div className="form-bottom">
              <div className='check'>
                <div className="check-col">
                  <input type="checkbox" id="check_password" onClick={() => {
                    setHide(!hide);
                  }}/>
                  <label htmlFor="check_password">Show password</label>
                </div>
                <span>Don't have an account ? <a href="/armtours/signup">SignUp</a></span>
              </div>
            </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
         </form>
       )}
       </Formik>
      </Container>
    </section>
  )
}