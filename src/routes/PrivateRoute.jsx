import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // логіка isLogin
  const isLoginMuck = true;
  if (isLoginMuck) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
