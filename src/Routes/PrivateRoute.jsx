import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center items-center my-16'>
            <div className="radial-progress text-current p-4" style={{ "--value": 100 }}>Loading...</div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace ></Navigate>

};

export default PrivateRoute;