import { Suspense, useEffect, useState } from 'react'; 
import { useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify'; 

import { useTranslation } from 'react-i18next'; 

import { ScrollTop } from './components/UIContainer/ScrollTop/ScrollTop';
import { AppRoutes } from './router/AppRoutes';

export const App = () => {
  
  const { t, i18n } = useTranslation();
  const location = useLocation();
  let [locationChanged, setLocationChanged] = useState(false);

  useEffect(() => {
    console.log(`Route changed to ${location.pathname}`);
    setLocationChanged(true);

    const id = setTimeout(() => {
      setLocationChanged(false);
    }, 3000);

    return () => {
      clearTimeout(id);
    }
  }, [location]);
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      {locationChanged && <ScrollTop />}
    </div>
  );
}

export const WrappedApp = () => {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
