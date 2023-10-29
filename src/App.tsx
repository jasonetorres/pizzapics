import { Route, Routes } from 'react-router-dom';
import './globals.css';
import SigninForm from './auth/forms/SigninForm';
import { Home } from './root/pages';
import SignupForm from './auth/forms/SignupForm';
import RootLayout from './root/RootLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            { /* public route */}
            <Route path='/sign-in' element={<SigninForm />} />
            <Route path='/sign-up' element={<SignupForm />} />

            { /*private route*/}
            <Route element={<RootLayout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>

    </main>
)}

export default App