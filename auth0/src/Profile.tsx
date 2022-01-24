import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Props{

}

const Profile = (props:Props) => {
  const { user , isAuthenticated , isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
     { isAuthenticated && (
        <div>
            <img src={JSON.stringify(user?.picture)} alt={JSON.stringify(user?.name)} />
            <h2>{JSON.stringify(user?.name)}</h2>
            <p>{JSON.stringify(user?.email)}</p>
            {/* {JSON.stringify(user)} */}
        </div> 
    )}
    </>
  );
};

export default Profile;