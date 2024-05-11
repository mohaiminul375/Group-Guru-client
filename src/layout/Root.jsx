
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const Root = () => {
    return (
        <div className='font-Zilla-Slab'>
            <Navbar></Navbar>
            <div className='md:max-w-6xl mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;