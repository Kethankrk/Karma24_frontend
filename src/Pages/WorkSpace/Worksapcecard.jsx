import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Worksapcecard = ({ setpop, pop2, name, id, pages }) => {
  const [pagename, setname] = useState("");
  const [description, setdescription] = useState("");
  const [type, settype] = useState("");

  const api = import.meta.env.VITE_API;
  console.log(id, name);

  const createpage = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const data = {
        name: pagename,
        description: description,
        page_type: type,
        workspace: id,
      };

      console.log(data);
      const response = await axios.post(`${api}core/page/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setpop(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <a>{id}</a>
        </li>
        <li>
          <details open>
            <summary>
              <Link to={`/workspace/${id}`}>{name}</Link>
            </summary>
            <ul>
              <li>
                <Link to={`/workspace/${id}`}>Home</Link>
              </li>
              <li>
                <button
                  className="m-1 flex items-center gap-1"
                  onClick={() => setpop(true)}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" />
                  </svg>
                  Add page
                </button>
              </li>
              {/* <li>
                <div className="dropdown dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1 flex items-center gap-1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" />
                    </svg>
                    Add page
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Blank page</a>
                    </li>
                    <li>
                      <a>Todo</a>
                    </li>
                    <li>
                      <a>Forum</a>
                    </li>
                  </ul>
                </div>
              </li> */}
              {pages.map((e, index) => (
                <li key={index}>
                  <a
                    href={
                      e.page_type == "TODO" ? `/todo/${e.id}` : `/blank/${e.id}`
                    }
                  >
                    {e.name}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/todo">Todu One</Link>
              </li>
              <li>
                <Link to="/forum">Forum</Link>
              </li>
              {/* <li>
                    <details open>
                    <summary>Parent</summary>
                    <ul>
                        <li>
                        <a>Submenu 1</a>
                        </li>
                        <li>
                        <a>Submenu 2</a>
                        </li>
                    </ul>
                    </details>
                </li> */}
            </ul>
          </details>
        </li>
      </ul>
      {pop2 ? (
        <div className="absolute top-0 right-0 w-full h-screen flex justify-center items-center z-10 backdrop-blur">
          <div className="w-[600px] h-[400px] bg-base-300 border rounded-2xl shadow-xl flex flex-col justify-center px-5 py-2 gap-3">
            <h1 className="text-center font-bold text-2xl">Create new page</h1>
            <form className="flex flex-col gap-3" onSubmit={createpage}>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Page name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your page name"
                  className="input input-bordered"
                  required
                  value={pagename}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              {/* <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Page discription</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the page discription"
                  className="input input-bordered"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div> */}
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Page type</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) => settype(e.target.value)}
                >
                  <option disabled selected>
                    Select page type
                  </option>
                  <option value={"BLANK"}>Blank page</option>
                  <option value={"TODO"}>TODO page</option>
                  {/* <option>Forum</option> */}
                </select>
              </div>
              <div className="flex gap-5 ">
                <button className=" px-7 btn btn-secondary">Create</button>
                <button
                  className=" px-7 btn btn-error"
                  onClick={() => setpop(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Worksapcecard;
