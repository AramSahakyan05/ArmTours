import { AppRoutes } from './router/AppRoutes';
import { ToastContainer } from 'react-toastify'; 
import { Suspense } from 'react'; 
import { useTranslation } from 'react-i18next'; 

export const App = () => {
  
  const { t, i18n } = useTranslation();

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
