import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
interface Props{

}

const LogoutButton = (props:Props) => {
  const { logout ,isAuthenticated } = useAuth0();

  return (
    <>
   { isAuthenticated && ( 
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    )}
    </>
  );
};

export default LogoutButton;