import axios from "axios";
import { useState } from "react";

const TodoComp = ({ title, id, complete, due_date, assigned }) => {
  const [pop, setpop] = useState(false);
  const [check, Setcheck] = useState();
  const [titles, settitle] = useState(title);
  const api = import.meta.env.VITE_API;
  const edit = async () => {
    // e.preventDefault();
    try {
      const sentdata = {
        title: titles,
      };
      const reponse = await axios.patch(`${api}core/todo/${id}/`, sentdata);
      reponse;
      if (reponse.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex bg-base-300 py-2 px-3 rounded-lg justify-between w-full items-center">
      <div className=" w-full">
        {pop ? (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full max-w-xs "
              value={titles}
              onChange={(e) => settitle(e.target.value)}
            />
            <button className="btn btn-active py-1" onClick={() => edit()}>
              Change
            </button>
          </div>
        ) : (
          <div className="flex w-full justify-between px-3">
            <p className="max-w-96">{title}</p>
            <p className="max-w-96">nothing</p>
            <p className="max-w-96 text-error">{due_date}</p>{" "}
          </div>
        )}
      </div>
      <div className="flex gap-5">
        <input
          type="checkbox"
          defaultChecked={complete}
          className="checkbox checkbox-primary"
          onChange={(e) => Setcheck(e.target.checked)}
        />
        <button
          className="flex items-center"
          onClick={() => {
            setpop(true);
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
          </svg>
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoComp;
