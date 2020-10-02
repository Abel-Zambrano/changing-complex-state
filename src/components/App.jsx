import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeInfo(event) {
    const { value, name } = event.target;

    setContact((oldValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: oldValue.lName,
          email: oldValue.email
        }
      } else if (name === "lName") {
        return {
          fName: oldValue.fName,
          lName: value,
          email: oldValue.email
        }
      } else if (name === "email") {
        return {
          fName: oldValue.fName,
          lName: oldValue.lName,
          email: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={changeInfo} placeholder="First Name" value={contact.fName} />
        <input name="lName" onChange={changeInfo} placeholder="Last Name" value={contact.lName} />
        <input name="email" onChange={changeInfo} placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
