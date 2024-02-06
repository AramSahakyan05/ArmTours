import { useState } from 'react';
import { Formik } from 'formik';
import {Container} from '../../UIContainer/Container'; 
import tatev_video from '../../../assets/tatev.mp4';
import './SignUp.scss';

export const SignUp = () => {
  const [hide, setHide] = useState(true);
  return (
    <section className="signup__section">
      <Container>
        <div className='background-video'>
          <video autoPlay muted loop>
            <source src={tatev_video} type='video/mp4'/>
          </video>
        </div>
        <Formik
         initialValues={{ email: '', password: '', confirmed_password: '',}}
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
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
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
            <h1>SignUp</h1>
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
            <div>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type={hide ? 'password' : 'text'}
                name="confirmed_password"
                id="confirm-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmed_password}
              />
            </div>
            <span style={{color:'red'}}>{errors.password && touched.password && errors.password}</span>
            <div className="form-bottom">
              <div className='check-password'>
                <input type="checkbox" id="check_password" onClick={() => {
                  setHide(!hide);
                }}/>
                <label htmlFor="check_password">Show password</label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
         </form>
       )}
       </Formik>
      </Container>
    </section>
  )
}