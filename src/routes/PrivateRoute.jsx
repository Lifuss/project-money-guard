// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  // const isLoggin = useSelector(selectIsLoggedIn);

  if (true) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
