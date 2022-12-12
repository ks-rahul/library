import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthentication = () => {
  const { authenticated, id } = useSelector((state) => ({
    authenticated: state?.auth?.isLoggedIn,
    id: state?.auth?.loggedInUser?.id,
  }));

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(authenticated);
  const [userID, setuserID] = useState(id);

  useEffect(() => {
    setIsUserAuthenticated(authenticated);
    setuserID(id);
  }, [authenticated, id]);

  return { isUserAuthenticated, userID };
};

export default useAuthentication;
