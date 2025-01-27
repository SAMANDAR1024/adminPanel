import axios from "axios";
import { useEffect, useState } from "react";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/companies")
      .then((res) => {
        console.log(res);

        setCompanies(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl font-bold">Companies</h1>
      </div>
      <div className="mx-auto my-5">
        <table className="w-[800px]  border-gray-400 border">
          <thead>
            <tr className="border">
              <th className="text-start px-2 py-6 border">Id</th>
              <th className="text-start px-1 py-6 border">Name</th>
              <th className="text-start px-1 py-6 border">Country</th>
              <th className="text-start px-4 py-6 border">Address</th>
              <th className="text-start px-4 py-6 border">Industry</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((item) => {
              return (
                <tr className="border">
                  <td className="px-2 py-3   border">{item.id}</td>
                  <td className="px-4 py-3  border">{item.name}</td>
                  <td className="px-4 py-3  border">{item.country}</td>
                  <td className="px-4 py-3  border">{item.address}</td>
                  <td className="px-4 py-3  border">{item.industry}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Companies;
