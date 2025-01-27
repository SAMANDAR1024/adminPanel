import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/todos")
      .then((res) => {
        console.log(res);

        setTodos(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl font-bold">Todos</h1>
      </div>
      <div className="mx-auto my-5">
        <table className="w-[800px]  border-gray-400 border">
          <thead>
            <tr className="border">
              <th className="text-start px-1 py-2 border">Id</th>
              <th className="text-start px-4 py-2 border">title</th>
              <th className="text-start px-4 py-2 border">Date</th>
              <th className="text-start px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => {
              return (
                <tr className="border">
                  <td className="px-1   border">{item.id}</td>
                  <td className="px-4  border">{item.title}</td>
                  <td className="px-4  border">2024-03-15</td>
                  <td className="px-4  border">Published</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todos;
