import { useTranslation } from 'react-i18next';

import { Formik } from 'formik';

import { SlLocationPin } from "react-icons/sl";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import './Footer.scss';

export const Footer = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <footer>
      {/* Footer Inner part */}
      <div className='footer-inner'>
        {/* Footer Logo, Address and Map Part */}
        <div className="logo-address-map">
          <div className="logo">
            <h1>ARMTOURS</h1>
          </div>
          {/* Address and Map */}
          <div className="address-map">
            <div className="location-icon">
              <SlLocationPin />
            </div>
            <div className="address-map-right">
              <div className="address">
                <span>Komitas Ave.</span>    
                <span>Yerevan, Armenia</span>
              </div>
              <a href="#" className="map">
                View Map
                <HiOutlineArrowLongRight />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Services, Explore and Updates */}
        <div className="services-explore-updates">
          {/* Services */}
          <div className='services'>
            <h2 className='services-heading'>Our Services</h2>
            <ul className="services-list">
              <li>Booking</li>
              <li>Rent Car</li>
              <li>Hostel World</li>
              <li>Trivago</li>
              <li>TripAdvisor</li>
            </ul>
          </div>
          {/* Explore */}
          <div className='explore'>
            <h2 className='services-heading'>Explore</h2>
            <ul className="services-list">
              <li>Modrid Tour</li>
              <li>Stockholm City</li>
              <li>Roma City</li>
              <li>Shonghai City</li>
              <li>Tokyo</li>
            </ul>
          </div>
          {/* Updates */}
          <div className='updates'>
          <h2 className='services-heading'>Get Updates & More</h2>
            <div className="subscribe">
              <p>Subscribe to the free newsletter and stay<br /> up to date</p>
              {/* Fields for subscribtion  */}
              <div className="subscribtion-fields">
              <Formik
                initialValues={{ email: ''}}
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
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Your email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    <p className='requirement'>{errors.email && touched.email && errors.email}</p>
                    <button type="button" disabled={isSubmitting}>
                      Subscribe
                      <HiOutlineArrowLongRight /> 
                    </button>
                  </form>
                )}  
              </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
          <div className="copyright">
          © 2023 ARMTOURS, All Rights Reserved
          </div>
          <div className="footer-bottom-list">
            <ul>
              <li>Privacy</li>
              <li>Policy</li>
              <li>About Us</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

