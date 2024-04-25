import Link from "next/link";
import React from "react";
import LoginStudent from "./loginstudent/page";

const login = () => {
  return (
    <div>
      <h1 className="heading">Login Pages</h1>
      <h2>Login For student </h2>
      <br />
      <Link href="/login/loginstudent">Login For student</Link>
      <br />
      <br />
      <br />
      <Link href="/login/loginteacher">Login For teacher</Link>
      <br />
      <br />

      <Link href={"/"}>Go to Home Page</Link>
    </div>
  );
};

export default login;
