"use client";

import Users from "../components/Users";

/** use client cuando se usa una API de frontent o algun componente  */
export default function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      {/* <button
        onClick={() => {
          alert("No me machuques");
        }}
      >
        Click me
      </button> */}
      {/* {window.localStorage.getItem("token")} */}
      <Users />
    </section>
  );
}
