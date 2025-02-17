import { useState, useEffect } from "react";
import email from "./assets/icons/email.svg";
import nationality from "./assets/icons/nationality.svg";
import dob from "./assets/icons/dob.svg";
import phone from "./assets/icons/phone.svg";
import location from "./assets/icons/location.svg";

function App() {
  const [user, setUser] = useState(null);
  const [currentInfo, setCurrentInfo] = useState("email");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    };

    fetchUser();
  }, []);

  const reloadUser = () => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    };

    fetchUser();
  };

  const changeInfo = (type) => {
    setCurrentInfo(type);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <div className="bg-green-300 p-8 rounded-lg shadow-lg text-center w-96 h-96">
        <h1 className="text-2xl font-semibold">
          {user.name.first} {user.name.last}
        </h1>

        <img
          src={user.picture.large}
          alt="User Image"
          className="w-32 h-32 rounded-full mx-auto my-4"
        />

        <div>
          {currentInfo === "email" && <p>Email: {user.email}</p>}
          {currentInfo === "nationality" && <p>Nationality: {user.nat}</p>}
          {currentInfo === "dob" && <p>Age: {user.dob.age}</p>}
          {currentInfo === "phone" && <p>Phone: {user.phone}</p>}
          {currentInfo === "location" && (
            <p>
              Location: {user.location.city}, {user.location.country}
            </p>
          )}
        </div>

        <div className="my-4">
          <span
            onMouseOver={() => changeInfo("email")}
            className="cursor-pointer text-xl mx-2 inline-flex justify-center items-center"
          >
            <img
              src={email}
              alt="Email"
              className="w-6 h-6 object-contain transition-all duration-200 hover:scale-125 hover:filter hover:invert"
            />
          </span>

          <span
            onMouseOver={() => changeInfo("nationality")}
            className="cursor-pointer text-xl mx-2 inline-flex justify-center items-center"
          >
            <img
              src={nationality}
              alt="Nationality"
              className="w-6 h-6 object-contain transition-all duration-200 hover:scale-125 hover:filter hover:invert"
            />
          </span>

          <span
            onMouseOver={() => changeInfo("dob")}
            className="cursor-pointer text-xl mx-2 inline-flex justify-center items-center"
          >
            <img
              src={dob}
              alt="Age"
              className="w-6 h-6 object-contain transition-all duration-200 hover:scale-125 hover:filter hover:invert"
            />
          </span>

          <span
            onMouseOver={() => changeInfo("phone")}
            className="cursor-pointer text-xl mx-2 inline-flex justify-center items-center"
          >
            <img
              src={phone}
              alt="Phone"
              className="w-6 h-6 object-contain transition-all duration-200 hover:scale-125 hover:filter hover:invert"
            />
          </span>

          <span
            onMouseOver={() => changeInfo("location")}
            className="cursor-pointer text-xl mx-2 inline-flex justify-center items-center"
          >
            <img
              src={location}
              alt="Location"
              className="w-6 h-6 object-contain transition-all duration-200 hover:scale-125 hover:filter hover:invert"
            />
          </span>
        </div>

        <button
          onClick={reloadUser}
          className="bg-green-400 text-black p-2 rounded mb-4 mt-2 hover:text-white"
        >
          Load New User
        </button>
      </div>
    </div>
  );
}

export default App;
