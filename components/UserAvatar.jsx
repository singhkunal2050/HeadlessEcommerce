import React from "react";
import { FiUser } from "react-icons/fi";
import Link  from "next/link";
import { useContext , useEffect } from "react";
import { UserContext } from "../context/userContext";

function UserAvatar() {

  const { user, setUser } = useContext(UserContext);

  return (
    <div className="user-wrapper mr-8 cursor-pointer">
      <Link href="/profile">
        <a>
          <FiUser size={25} />
        </a>
      </Link>
    </div>
  );
}

export default UserAvatar;
