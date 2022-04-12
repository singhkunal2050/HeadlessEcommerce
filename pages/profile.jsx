import React from "react";
import Container from "../components/Container";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { CgLogOut } from "react-icons/cg"
import { useRouter } from "next/router";

function Profile() {
  const { user ,setUser} = useContext(UserContext);
  const router = useRouter()

  const logout = () =>{
    setUser(sessionStorage.user=null)
    router.push('/shop')
  }

  return (
    <Container>
      <section className="min-h-screen font-montserrat">
        <h4 className="text-4xl text-darknight font-extrabold text-center p-6 ">
          Profile
        </h4>

        {user!=null ? (
          <div className="text-center">
            <p className=""> Logged In! {JSON.parse(user)?.id}</p>
            <button className=" mt-8 py-2 px-3 flex items-center gap-2 mx-auto bg-darknight text-white" onClick={logout}>
              Logout <CgLogOut/>
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="">Not Logged In</p>
          </div>
        )}
      </section>
    </Container>
  );
}

export default Profile;
