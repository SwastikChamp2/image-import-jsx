import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Loader from '../components/Loader/Loader';

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/signin'); // Redirect if user is not authenticated
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [navigate]);

    if (isLoading) return <Loader />;
    return children;
};

export default ProtectedRoute;
