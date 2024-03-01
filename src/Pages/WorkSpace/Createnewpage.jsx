import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Createnewpage = () => {
  const params = useParams();
  const id = params.id;
  const [pagename, setname] = useState("");
  const [description, setdescription] = useState("");
  const [type, settype] = useState("");

  const api = import.meta.env.VITE_API;
  const navigate = useNavigate();

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

      const response = await axios.post(`${api}core/page/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status == 201) {
        navigate(`/workspace/${id}`);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
              onClick={() => navigate(`/workspace/${id}`)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createnewpage;
