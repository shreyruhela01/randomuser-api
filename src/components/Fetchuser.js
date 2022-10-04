import React, { useState, useEffect } from "react";
import "./FetchUser.css";
const url = "https://randomuser.me/api/";

const Fetchuser = () => {
  const [users, setUsers] = useState([]);
  const fetchUserData = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users.results);
    // console.log(users.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  
  return (
    <div className="container">
      <div className="heading1">
        <h2 className="font-bold text-4xl " >Build Your Profile</h2> <br/>
        <p>This information will let us know more about you</p>
        <p>Let's start with the basic information</p>
      </div>
      <div className="child">
        <h4 className="heading">Basic Detail</h4>
        <hr></hr>
        {users.map((user) => (
          <div className="child-container">
            <div className="icon child-container-child ">
              <img src={user?.picture?.large} alt="first" />
              {console.log(user)}
            </div>
            <div className="inputs child-container-child">
              <div className="inputs-child">
                <label>Full Name</label>
                <div>
                  {user.name.title +
                    " " +
                    user.name.first +
                    " " +
                    user.name.last}
                </div>
              </div>
              <div className="inputs-child">
                <label>Email Address</label>
                <div>{user.email}</div>
              </div>
              <div className="inputs-child">
                <label>Gender</label>
                <div>{user.gender}</div>
              </div>
              <br/>
            </div>
          </div>
        ))}
      </div>
      <div className="child">
        <h4 className="heading">Personal Details</h4>
        <hr></hr>
        {users.map((user) => (
          <div className="child2-container">
            <div className="child2-container-child2 child3">
              <div className="inputs-child">
                <label >DOB</label>

                <div>{user.dob.date}</div>
              </div>
              <div className="inputs-child">
                <label>Phone Number</label>
                <div>{user.phone}</div>
              </div>
              <div className="inputs-child">
                <label>State</label>
                <div>{user.location.state}</div>
              </div>
            </div>
            <div className="child2-container-child2 child4">
              <div className="inputs-child">
                <label>Age</label>
                <div>{user.dob.age}</div>
              </div>
              <div className="inputs-child">
                <label>Cell</label>
                <div>{user.cell}</div>
              </div>
              <div className="inputs-child">
                <label>Country</label>
                <div>{user.location.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => fetchUserData()} className="block mx-auto mt-5 bg-#526CFD text-black py-1 px-4 rounded-lg transition-colors hover:bg-gray-500">
        Show Random User
      </button>
    </div>
  );
};
export default Fetchuser;
