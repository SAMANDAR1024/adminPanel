import React, { useState } from "react";

function Buttons() {
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [qoshish, setQoshish] = useState({ name: "", comment: "" });

  function qoshish1() {
    setQoshish({ name: name, comment: comment });
    setModal(!modal);
  }
  return (
    <div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
        className="bg-blue-700  rounded-lg p-2  text-white"
      >
        + Qo'shish
      </button>

      <table className="w-96 m-auto mt-20">
        <thead className="border">
          <tr>
            <th className="border w-40 ">Ism</th>
            <th className="border w-40 ">Comment</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td className="border w-40  ">{qoshish.name}</td>
            <td className="border w-40  ">{qoshish.comment}</td>
          </tr>
        </tbody>
      </table>

      {modal && (
        <div className="fixed left-0 right-0 top-0 bottom-0  m-auto bg-black/90">
          <div className="w-[500px] mt-[15%] p-6 rounded-lg   m-auto bg-white ">
            <h2 className="text-3xl font-bold">Ma'lumot Kirg'izing...</h2>
            <div className="my-5">
              <label className="text-xl mb-1">Ismingiz</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                className="w-full p-2 mt-2 rounded-lg border  border-gray-400"
                type="text"
                placeholder="Yozin..."
              />
            </div>
            <div>
              <label>Comment</label>
              <textarea
                value={comment}
                onChange={(e) => {
                  setComment(e.currentTarget.value);
                }}
                className="w-full p-3 rounded-lg border border-gray-400"
                placeholder="Comment Yozin..."
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 my-2 text-white">
              <button
                onClick={() => {
                  setModal(!modal);
                }}
                className="bg-red-700 p-2 rounded-lg"
              >
                Bekor Qilish
              </button>
              <button
                onClick={qoshish1}
                className="bg-green-700 p-2 rounded-lg"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
