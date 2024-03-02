import { whyChooseUs } from '../../../constants';
import path_picture from '../../../assets/why-choose-us/path.jpg';
import './WhyChooseUs.scss';

export const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="why-choose-us-headings">
        <h2 className='subheading'>Brilliant reasons</h2>
        <h1 className='heading'>Why Choose Us</h1>
      </div>
      <div 
        className="why-choose-us-map"
        // style={{backgroundImage: `url(${path_picture})`}}
      >
        {
          whyChooseUs.map(({id, img}) => {
            return (
              <div
                key={id}
                className='why-choose-us-map-item' 
              >
                <img src={img} alt="Destination Icon" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}