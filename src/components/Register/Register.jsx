import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Lottie from 'lottie-react';
import animation from '../../assets/progerss.json';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(name, photo, email, password, confirm);
        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
            return
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase')
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add atleast special characters')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                navigate('/')
                form.reset()
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (
        <div className='grid lg:grid-cols-2 shadow-2xl lg:p-16 bg-[#ffe5ea]'>
            <div className='w-full flex justify-center items-center bg-white'>
                <Lottie animationData={animation} loop={true} />
            </div>
            <div className='lg:border bg-white p-6 w-full lg:p-14 rounded'>
                <h2 className='text-3xl mb-4 font-bold text-center uppercase'>Register</h2>
                <form onSubmit={handleRegister} className="form-control">
                    <input type="text" name='name' placeholder="Enter your name" className="input rounded-none bg-gray-100 w-full" required />
                    <input type="text" name='photo' placeholder="Enter your photo url" className="input rounded-none bg-gray-100 w-full my-6" required />
                    <input type="text" name='email' placeholder="Enter your email" className="input rounded-none bg-gray-100 w-full" required />
                    <input type="password" name='password' placeholder="Password" className="input w-full rounded-none bg-gray-100 my-6" required />
                    <input type="password" name='confirm' placeholder="Confirrm password" className="input w-full rounded-none bg-gray-100" required />
                    <p className='text-red-600 my-6'>{error}</p>
                    <input type="submit" value='Sign Up' className="input bg-red-200 text-xl font-bold w-full" />
                    <p className='mt-2 text-center'>Already have an account?<Link className='text-red-300 underline' to='/login'> Login</Link></p>
                </form>
                <div className='divider'>OR</div>
                <div className='text-center space-y-4'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='text-pink-500 mr-4 text-xl' /> Continue With Google</button><br />
                    <button className="btn btn-outline"><FaFacebook className='text-sky-600 hover:bg-[#FF69B4] mr-4 text-xl' /> Continue With Facebook</button><br />
                    <button className="btn btn-outline"><FaTwitter className='text-sky-500 hover:bg-[#FF69B4] mr-4 text-xl' /> Continue With Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default Register;