import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Worksapcecard from "./Worksapcecard";
import Select from "react-select";

export default function WorkSpaceSideNav() {
  const [pop, setpop] = useState(false);
  const [pop2, setpop2] = useState(false);
  const [image, setimage] = useState();
  const [name, setname] = useState();
  const [data, setdata] = useState({ joined: [], owned: [] });
  const [members, setmembers] = useState([]);

  const [workspacename, setworkspacename] = useState("");
  const [discription, setdiscription] = useState("");
  const [WorkspaceMembers, setWorkspaceMembers] = useState([]);
  const api = import.meta.env.VITE_API;
  const createworkspace = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const data = {
        name: workspacename,
        description: discription,
        members: WorkspaceMembers.map((e) => e.value),
        owners: [],
      };
      console.log(data);
      const response = await axios.post(`${api}core/workspace/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setpop(false);
  };

  useEffect(() => {
    setimage(localStorage.getItem("image"));
    setname(localStorage.getItem("name"));
    const token = localStorage.getItem("token");
    const getdata = async () => {
      try {
        const data = await axios.get(`${api}user/get-workspaces/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setdata(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getmember = async () => {
      try {
        const memdata = await axios.get(`${api}user/get/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setmembers(memdata.data);
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
    getmember();
  }, []);

  // const [firstName, lastName] = name.split(" ");

  // const firstLetterOfFirstName = firstName.charAt(0);
  // const firstLetterOfLastName = lastName.charAt(0);

  return (
    <div className="flex flex-col w-2/12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-screen bg-base-200 px-4 py-3 gap-2 ">
      <div className="flex  items-center gap-2  px-3 w-full py-2">
        <div className="avatar">
          <div className="w-12 rounded-full ">
            <img src={image} />
          </div>
        </div>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <button
        className="btn btn-active btn-primary flex gap-4"
        onClick={() => setpop(true)}
      >
        <h1> New WorkSpace</h1>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="2em"
          width="2em"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </button>
      <div>
        <h1 className="font-bold mt-2">Owned Workspaces</h1>
        {data.owned.length !== 0 ? (
          data.owned.map((workspace, index) => (
            <Worksapcecard
              key={index}
              setpop={setpop2}
              pop2={pop2}
              name={workspace.name}
              id={workspace.id}
              pages={workspace.pages}
            />
          ))
        ) : (
          <h1 className="text-sm">No owned workspaces</h1>
        )}

        <h1 className="font-bold mt-2">Joined Workspaces</h1>
        {data.joined.length !== 0 ? (
          data.joined.map((workspace, index) => (
            <Worksapcecard
              key={index}
              setpop={setpop2}
              pop2={pop2}
              name={workspace.name}
              id={workspace.id}
              pages={workspace.pages}
            />
          ))
        ) : (
          <h1 className="text-sm">No joined workspaces</h1>
        )}
      </div>

      {pop ? (
        <div className="absolute top-0 right-0 w-full h-screen flex justify-center items-center z-10 backdrop-blur">
          <div className="w-[600px] h-[400px] bg-base-300 border rounded-2xl shadow-xl flex flex-col justify-center px-5 py-2 gap-3">
            <h1 className="text-center font-bold text-2xl">Create new page</h1>
            <form className="flex flex-col gap-3" onSubmit={createworkspace}>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Workspace name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="input input-bordered"
                  required
                  value={workspacename}
                  onChange={(e) => setworkspacename(e.target.value)}
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Workspace discription</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the  discription"
                  className="input input-bordered"
                  value={discription}
                  onChange={(e) => setdiscription(e.target.value)}
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Add members</span>
                </label>
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={members}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => setWorkspaceMembers(e)}
                />
              </div>

              <div className="flex gap-5 ">
                <button className=" px-7 btn btn-secondary" type="submit">
                  Create
                </button>
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
}
