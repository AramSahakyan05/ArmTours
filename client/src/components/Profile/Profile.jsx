import { Banner } from '../UIContainer/Banner/Banner';
import { Container } from '../UIContainer/Container';
import user_image from '../../assets/user.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import './Profile.scss';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const {name, email, phone} = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  return (
    <div className='profile'>
      <Banner />
      <Container>
        <div 
          className="logout" 
          onClick={() => {
            navigate('/armtours/login');
            localStorage.remove('user');
          }}
        >
          <span>Logout</span>
          <span><CiLogout /></span>
        </div>
        <div className="profile-top">
          <img src={user_image} alt="" />
          <div className="info">
            <h2 className="name">{name && name}</h2>
          </div>
        </div>
        <div className="contact">
          <div className="phone">
            <FaPhoneAlt />
            +37477777777
          </div>
          <div className="mail">
            <FaEnvelope />
            {email && email}
          </div>
        </div>
      </Container>
    </div>
  )
}