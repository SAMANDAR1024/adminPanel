import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/posts")
      .then((res) => {
        console.log(res);

        setTable(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl font-bold">Posts</h1>
        
      </div>
      <div className="mx-auto my-5 ">
        <table className="  border-gray-400 border">
          <thead>
            <tr className="border">
              <th className="text-start px-2 py-6 border">Id</th>
              <th className="text-start px-1 py-6 border">Title</th>
              <th className="text-start px-4 py-6 border">body</th>
              <th className="text-start px-4 py-6 border">link</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => {
              return (
                <tr className="border">
                  <td className="px-2 py-3   border">{item.id}</td>
                  <td className="px-4 py-3  border">{item.title}</td>
                  <td className="px-4 py-3  border">{item.body}</td>
                  <td className="px-4 py-3  border">{item.link}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Posts;
