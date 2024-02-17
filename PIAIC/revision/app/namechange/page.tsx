"use client";

import { useState } from "react";

export default function name() {
  const [name, setName] = useState("Rizwan Ali");
  const [age, setAge] = useState("25");

  const changeName = () => {
    setName("Khalid Maqbool");
    setName("41");
  };

  return (
    <div>
      <h2>Use state</h2>
      <h3> React hook</h3>
      <br />
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={changeName}>Click to change the name</button>
    </div>
  );
}
