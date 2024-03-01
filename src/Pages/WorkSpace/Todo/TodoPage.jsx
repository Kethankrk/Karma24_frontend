import { useState } from "react";
import TodoComp from "./TodoComp";

export default function TodoPage() {
  const [open, setopen] = useState(false);
  const [todolist, settodolist] = useState([]);

  return (
    <div className="w-full  px-8 py-4">
      <h1 className="text-4xl font-bold">Heading </h1>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia
        culpa ducimus ab sequi nulla quam molestias rem debitis vero aliquam
        magni commodi laborum nostrum, quidem nam perspiciatis ea sit.{" "}
      </p>
      <div className="flex flex-col mt-4 gap-2 items-start w-[700px]">
        <TodoComp title="Complete the hackathon" />

        {open ? (
          <div className="flex bg-base-300 py-2 px-3 rounded-lg justify-between w-full items-center">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xl "
              />
            </div>
            <button
              className="btn btn-active py-1"
              onClick={() => setopen(false)}
            >
              Change
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="flex w-full justify-center">
          <button
            className=" flex gap-2 items-center opacity-15 hover:opacity-90"
            onClick={() => setopen(true)}
          >
            Add new
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M256 176v160M336 256H176"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <div className="absolute w-full h-screen top-0 right-0 backdrop-blur"></div> */}
    </div>
  );
}
