import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo1.jpg'
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-red-100 lg:w-5/6 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to='/' >Home</ActiveLink></li>
                            <li><ActiveLink to='/blog' >Blog</ActiveLink></li>
                            <li><ActiveLink to='/all-toys' >All Toys</ActiveLink></li>
                            {
                                user ? <>
                                    <li><ActiveLink to='/my-toys' >My Toys</ActiveLink></li>
                                    <li><ActiveLink to='/add-toys' >Add Toys</ActiveLink></li>
                                </> : <>
                                    <li><ActiveLink to='/about' >About</ActiveLink></li>
                                    <li><ActiveLink to='/contact' >Contact</ActiveLink></li>
                                </>
                            }
                        </ul>
                    </div>
                    <Link to='/'><img className='w-full h-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><ActiveLink to='/' >Home</ActiveLink></li>
                        <li><ActiveLink to='/blog' >Blog</ActiveLink></li>
                        <li><ActiveLink to='/all-toys' >All Toys</ActiveLink></li>
                        {
                            user ? <>
                                <li><ActiveLink to='/my-toys' >My Toys</ActiveLink></li>
                                <li><ActiveLink to='/add-toys' >Add Toys</ActiveLink></li>
                            </> : <>
                                <li><ActiveLink to='/about' >About</ActiveLink></li>
                                <li><ActiveLink to='/contact' >Contact</ActiveLink></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex justify-center items-center'>
                        {user &&
                            <div>
                                {user.photoURL ? <button title={user.displayName} className='mr-2'>
                                    <img className='rounded-full h-12 w-12' src={user.photoURL} alt="" />
                                </button> :
                                    <button title={user.displayName} className='mr-2 text-4xl'>
                                        <FaUserCircle className='text-sky-400' />
                                    </button>}
                            </div>

                        }
                        {user ?
                            <button className='btn bg-sky-500 text-white border-none' onClick={handleLogOut}>Logout</button> :
                            <Link className='btn btn-error text-white border-none' to='/login' >Login</Link>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;