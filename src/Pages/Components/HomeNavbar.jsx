import { Link } from "react-router-dom";
import ChatBot from "./ChatBot";

export default function HomeNavbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <h1 className="text-2xl font-black">CP</h1>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Co-Project</a>
        </div>
        <div className="flex-none">
          <Link
            to={"/login"}
            className="hover:shadow-lg shadow-white btn px-8 font-bold "
          >
            Sign In
          </Link>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
