import React from "react";
import Container from "../components/Container";

function profile() {
  return (
    <Container>
      <section className="min-h-screen font-montserrat">
      <h4 className="text-4xl text-darknight font-extrabold text-center p-6 ">
        Profile
      </h4>
      <p className="text-center">Not Logged In</p>
      </section>
    </Container>
  );
}

export default profile;
