import { Header } from '../Header/Header';
import { Banner } from '../UIContainer/Banner/Banner';
import { OrderForm } from '../OrderForm/OrderForm';

import './Tour.scss';

export const Tour = () => {
  return (
    <div className="tour">
      <Header />
      <Banner title={'TOURS'} />
      <OrderForm />
    </div>
  )
}