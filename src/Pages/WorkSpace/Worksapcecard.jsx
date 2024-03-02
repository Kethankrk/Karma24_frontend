import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Worksapcecard = ({ setpop, pop2, name, id, pages }) => {
  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        {/* <li>
          <a>{id}</a>
        </li> */}
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
                <Link to={`/chat/${id}`}>Chat</Link>
              </li>
              <li>
                <Link
                  to={`/addpage/${id}`}
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
                </Link>
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
              {/* <li>
                <Link to="/todo">Todu One</Link>
              </li> */}
              <li>
                <Link to={`/forum/${id}`}>Forum</Link>
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
    </div>
  );
};

export default Worksapcecard;
