import React from "react";
import NumberOfPeople from "../components/questions/NumberOfPeople";
import NavBar from "../components/NavBar";

export default function Index() {
  return (
    <div>
      <NavBar />
      <NumberOfPeople />
    </div>
  );
}
