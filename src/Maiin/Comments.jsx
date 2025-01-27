import axios from "axios";
import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/comments")
      .then((res) => {
        console.log(res);

        setComments(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl font-bold">Comments</h1>
      </div>
      <div className="mx-auto my-5">
        <table className="  border-gray-400 border">
          <thead>
            <tr className="border">
              <th className="text-start px-2 py-6 border">Id</th>
              <th className="text-start px-1 py-6 border">Name</th>
              <th className="text-start px-4 py-6 border">email</th>
              <th className="text-start px-4 py-6 border">body</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((item) => {
              return (
                <tr className="border">
                  <td className="px-2    border">{item.id}</td>
                  <td className="px-4   border">{item.name}</td>
                  <td className="px-4   border">{item.email}</td>
                  <td className="px-4   border">{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Comments;
