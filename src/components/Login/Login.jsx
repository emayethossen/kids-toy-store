import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        setError('')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='lg:border lg:w-1/2 mx-auto lg:p-14 p-6 lg:my-10 rounded'>
            <h2 className='text-3xl mb-4 font-bold text-center uppercase'>Login</h2>
            <form onSubmit={handleLogin} className="form-control">
                <input type="text" name='email' placeholder="Enter your email" className="input rounded bg-gray-100 w-full" required />
                <input type="password" name='password' placeholder="Enter your password" className="input w-full rounded bg-gray-100 mt-6" required />
                <p className='text-red-600 pl-2'>{error}</p>
                <p className='text-red-300 my-2'><Link to='/register'>Forget Password?</Link></p>
                <input type="submit" value='Login' className="input bg-red-200 font-semibold w-full" />
                <p className='mt-2 text-center'>Don&apos;t have an account?<Link className='text-red-300 underline' to='/register'> Sign Up</Link></p>
            </form>
            <div className='lg:my-6 my-3 w-4/5 mx-auto flex items-center justify-between'>
                <div className='w-2/5 h-0 border border-red-500'></div>
                <div>or</div>
                <div className='w-2/5 h-0 border border-red-500'></div>
            </div>
            <div className='text-center space-y-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='text-pink-500 mr-4 text-xl' /> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;