import {Container} from '../UIContainer/Container';
import './Plan.scss';

export const Plan = () => {
  return (
    <section className='plan__section'>
      <Container>
        <div className="plan__section__heading">
          <h5>PRICING</h5>
          <h1>Choose Your Plan</h1>
        </div>
        <div className="plans">
            {/* Free */}
          <div className="free">
            <h3>FREE</h3>
            <p className='explore'>Explore basic touring activities in Armenia</p>
            <p className='plan-price'>
              $ <span>0</span>
            </p>
            <ul className='description'>
              <li>Access to a limited number of touring activities</li>
              <li>Basic information about each activity</li>
              <li>No advanced features</li>
            </ul>
            <a href="#" className="order-button">
              Continue with Free
            </a>
          </div>
          {/* Basic */}
          <div className="basic free">
          <h3>BASIC</h3>
            <p className='explore'>Unlock more touring activities and features</p>
            <p className='plan-price'>
              $ <span>15</span> / month
            </p>
            <ul className='description basic-description'>
              <li>All features of FREE plan</li>
              <li>Access to a wider range of touring activities</li>
              <li>Detailed information about each activity</li>
              <li>Ability to save favorite activities</li>
              <li>Basic customer support</li>
            </ul>
            <a href="#" className="order-button basic-order-button">
              Try the Basic plan
            </a>
          </div>
          {/* Pro */}
          <div className="pro free">
          <h3>PRO</h3>
            <p className='explore'>Get the ultimate touring experience in Armenia</p>
            <p className='plan-price'>
              $ <span>30</span> / month
            </p>
            <ul className='description pro-description'>
              <li>All features of BASIC plan</li>
              <li>Access to all touring activities available</li>
              <li>Detailed information with photos and reviews <br /> for each activity</li>
              <li>Ability to create custom itineraries</li>
              <li>Priority customer support</li>
            </ul>
            <a href="#" className="order-button basic-order-button pro-order-button">
              Try the PRO plan
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}