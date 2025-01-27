import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/users")
      .then((res) => {
        console.log(res);

        setUsers(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl font-bold">Users</h1>
      </div>
      <div className="mx-auto my-5">
        <table className="  border-gray-400 border">
          <thead>
            <tr className="border">
              <th className="text-start px-1 py-2 border">Id</th>
              <th className="text-start px-1 py-2 border">Name</th>
              <th className="text-start px-4 py-2 border">username</th>
              <th className="text-start px-4 py-2 border">Company</th>
              <th className="text-start px-4 py-2 border">state</th>
              <th className="text-start px-4 py-2 border">phone</th>
              <th className="text-start px-4 py-2 border">email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr className="border">
                  <td className="px-1   border">{item.id}</td>
                  <td className="px-4  border">{item.name}</td>
                  <td className="px-4  border">{item.username}</td>
                  <td className="px-4  border">{item.company}</td>
                  <td className="px-4  border">{item.state}</td>
                  <td className="px-4  border">{item.phone}</td>
                  <td className="px-4  border">{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
