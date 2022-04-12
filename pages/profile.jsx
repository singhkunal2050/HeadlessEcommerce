import React from "react";
import Container from "../components/Container";
import { UserContext } from "../context/userContext";
import { useContext, useState, useEffect } from "react";
import { CgLogOut } from "react-icons/cg";
import { useRouter } from "next/router";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const logout = () => {
    setUser((sessionStorage.user = null));
    router.push("/");
  };

  useEffect(() => {
    const getUsersData = async () => {
      let headersList = {
        Authorization: `Bearer ${JSON.parse(sessionStorage.user)?.token}`,
        "Content-Type": "application/json",
      };
      let users = await fetch("/api/registerUser", {
        method: "GET",
        headers: headersList,
      });
      users = await users.json();
      setUsers(users);
    };

    getUsersData();
  }, [users]);

  return (
    <Container>
      <section className="min-h-screen font-montserrat">
        <h4 className="text-4xl text-darknight font-extrabold text-center p-6 ">
          Profile
        </h4>

        {JSON.parse(user) != null ? (
          <div className="text-center">
            <p className=""> Logged In! {JSON.parse(user)?.id}</p>
            <button
              className=" mt-8 py-2 px-3 flex items-center gap-2 mx-auto bg-darknight text-white"
              onClick={logout}
            >
              Logout <CgLogOut />
            </button>

            {users.length && (
              <h4 className="text-4xl text-darknight font-extrabold text-center p-6 ">
                Our Users
              </h4>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-4">
              {users.length > 0 &&
                users.map((user) => (
                  <div key={user.id} className="p-4 shadow-xl border-2 border-l-darknight border-l-8">
                    <h1 className="text-xl font-semibold"> {user.name}</h1>
                    <p> {user.email}</p>
                  </div>
                ))}
            </div>
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
