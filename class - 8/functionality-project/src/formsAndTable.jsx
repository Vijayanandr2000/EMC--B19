import React, { useState } from "react";
import useForm from "./hooks/useForm";

const FormsAndTable = () => {
  const { formVal, handleChange } = useForm();
  //   const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  //   const handleChange = (e) => {
  //     let value = e.target.value;
  //     let key = e.target.name;

  //     let userData = {
  //       ...user,
  //       [key]: value,
  //     };
  //     console.log(userData);

  //     setUser(userData);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formVal]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name...!"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Your Email...!"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <table
        border={2}
        style={{
          marginTop: "20px",
        }}
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {/* <tr>
          <td>Vijay</td>
          <td>abc@gmail.com</td>
          <td>
            <button>Delete</button>
          </td>
        </tr> */}
        {users.map((user, idx) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => {
                    users.splice(idx, 1);
                    setUsers([...users]);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default FormsAndTable;
