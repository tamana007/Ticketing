import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  // const { user, isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div>
      {!isAuth ? (
        <Navigate to="/" state={{ from: location }} replace />
      ) : (
        //once user is activated this will get triggered in setAvatar.jsx
        <Outlet />
      )}
    </div>
  );
}

export default ProtectedRoute;
