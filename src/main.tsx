import { BrowserRouter } from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'
import App from './App'
import AuthProvider from './context/AuthContext';
import { QueryProvider } from './lib/react-query/QueryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <QueryProvider>
      <AuthProvider>
         <App />
      </AuthProvider>
      </QueryProvider>
   </BrowserRouter>
);