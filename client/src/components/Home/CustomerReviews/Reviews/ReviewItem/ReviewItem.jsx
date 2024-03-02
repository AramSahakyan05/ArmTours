import star from '../../../../../assets/customer-reviews/reviews/star.png';
// Quote Images
import large_left_quote from '../../../../../assets/customer-reviews/reviews/large-left-quote.png';
import large_right_quote from '../../../../../assets/customer-reviews/reviews/large-right-quote.png';
import left_quote from '../../../../../assets/customer-reviews/reviews/left-quote.png';

import './ReviewItem.scss';

export const ReviewItem = ({text, img, name, rate, location}) => {

  const rateCount = rate => {
    const stars = [];
    const starImg = <img src={star} alt="Rate" />;
    for(let i = 0; i < rate; i++) {
      stars.push({
        id: i,
        img: starImg
      });
    }
    return stars;
  }

return (
    <div className='reviews-item'>
      {/* Left Quote */}
      <div className="left-quote">
        <img src={large_left_quote} alt="" />
      </div>
      {/* Review Item Inner Part */}
      <div className="reviews-item-inner">
        <p>{text}</p>
        <div className="customer-info">
          <div className="customer">
            <span className="quote">
              <img src={left_quote} alt="" />
            </span>
            <img src={img} alt="Customer Image" className="customer-logo" />
            <div>
              <p className='customer-rate'>
                {
                  rateCount(rate).map(({id, img}) => {
                    return <span key={id}>{img}</span> 
                  })
                }
              </p>
              <p className='customer-name'>{name}</p>
              <p className='customer-location'>{location}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Quote */}
      <div className="right-quote">
        <img src={large_right_quote} alt="" />
      </div>
    </div>
  )
}

