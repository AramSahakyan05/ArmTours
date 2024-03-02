import { Timer } from './Timer/Timer';
import { Reviews } from './Reviews/Reviews';

import yerevan_image from '../../../assets/customer-reviews/yerevan.png';

import './CustomerReviews.scss';

export const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <div className="hurry-up">
        <div className='hurry-up-image-block'>
          <img src={yerevan_image} alt="Yerevan Image" />
        </div>
        <Timer />
      </div>
      <Reviews />
    </div>
  )
}