
const PrivateRoute = ({ children }) => {
  // логіка isLogin
  const isLoginMuck = true;
  if (isLoginMuck) {
    return children;
  }
};

export default PrivateRoute;
