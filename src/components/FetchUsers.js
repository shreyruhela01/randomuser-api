import React, { useState, useEffect } from "react";
import moment from 'moment'
const url = "https://randomuser.me/api/";

const FetchUsers = () => {
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
    <div>
      {/* <h1> Users Component</h1> */}

      <section className="bg-gray-900 py-20 px-10">
        {users.map((user) => {
          const {
            gender,
            name: { title, first, last },
            location: {
              street: { number, name },
              city,
              state,
              country,
              postcode,
              coordinates: { latitude, longitude },
              timezone: { offset, description },
            },
            email,
            login: { uuid, username },
            dob: { date, age },
            phone,
            picture: { large },
          } = user;

          return (
            <div key={uuid} className="bg-gray-200 px-5 py-10 rounded-lg">
              <img
                src={large}
                alt={first}
                className="block mx-auto rounded-full"
              />
              <div className="text-center">
                <h3 className="text-3x1 my-3">
                  {title}.{first} {last}
                </h3>
                <p>
                  <span className="font-bold"> DOB: </span>
                  {' '}
                  {moment(`${date}`).format('MMMM Do YYYY')}
                </p>
                <p> Age: {age} yrs</p>
                <div className="underline mx-auto my-5"></div>
              </div>
              <div>
                <p><span className="font-bold">  Email: </span> {email}</p>
                <p> <span className="font-bold">  Username: </span> {username}</p>
                <p> <span className="font-bold">  Cell: </span>{phone}</p>
                <p> <span className="font-bold">  Country: </span>{country}</p>
                <p> <span className="font-bold">  State: </span>{state}</p>
              </div>

              <div>
              <button
                onClick={() => fetchUserData()}
                className="block mx-auto mt-5 bg-gray-900 text-white py-1 px-4 rounded-lg transition-colors hover:bg-gray-600">
                Next Person
              </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchUsers;
