import axios from "axios";
import { useEffect, useState } from "react";

function Roles() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/roles")
      .then((res) => {
        console.log(res);

        setRoles(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl font-bold">Roles</h1>
      </div>
      <div className="mx-auto my-5">
        <table className="  border-gray-400 border">
          <thead>
            <tr className="border">
              <th className="text-start px-1 py-2 border">Id</th>
              <th className="text-start px-4 py-2 border">name</th>
              <th className="text-start px-4 py-2 border">description</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((item) => {
              return (
                <tr className="border">
                  <td className="px-6 py-4   border">{item.id}</td>
                  <td className="px-6 py-4  border">{item.name}</td>
                  <td className="px-6 py-4  border">{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Roles;
