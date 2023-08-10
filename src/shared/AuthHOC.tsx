import React, { ComponentType, FC } from 'react';
import { Navigate } from 'react-router-dom';

interface WithAuthProps {
  // Define any props that your wrapped component accepts
}

const authHOC = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>
) => {
  const AuthHOC: FC<P> = (props) => {
    // Perform your authentication check here
    const isAuthenticated = localStorage.getItem("admin_token");
    
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/auth" />;
    }
  };

  return AuthHOC;
};

export default authHOC;