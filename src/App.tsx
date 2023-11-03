import { Route, Routes } from 'react-router-dom';
import './globals.css';
import SigninForm from './auth/forms/SigninForm';
import { Home } from './root/pages';
import SignupForm from './auth/forms/SignupForm';
import RootLayout from './root/RootLayout';
import AuthLayout from './auth/AuthLayout';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            { /* public route */}
            <Route element={<AuthLayout />}>
                <Route path='/sign-in' element={<SigninForm />} />
                <Route path='/sign-up' element={<SignupForm />} />
            </Route>

            { /*private route*/}
            <Route element={<RootLayout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
        <Toaster />
    </main>
)}

export default App