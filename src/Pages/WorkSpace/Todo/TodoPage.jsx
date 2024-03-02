import { useEffect, useState } from "react";
import TodoComp from "./TodoComp";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

export default function TodoPage() {
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [date, setdate] = useState();
  const [member, setmember] = useState();
  const [data, setdata] = useState();
  const api = import.meta.env.VITE_API;
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const [value, setValue] = useState("");
  const [open, setopen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getdata = async () => {
      try {
        const data = await axios.get(`${api}core/get-page/?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setValue(data.data.page);
        setdata(data.data.details);
        console.log(data.data.details);
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
        setmember(memdata.data);
      } catch (error) {
        console.log(error);
      }
    };

    getmember();
    getdata();
  }, []);
  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const sentdata = {
        title: name,
        due_date: date,
        assigned: member[0].value,
        page: id,
      };
      const reponse = await axios.post(`${api}core/todo/`, sentdata);
      reponse;
      if (reponse.status == 201) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full  px-8 py-4">
      <h1 className="text-4xl font-bold">{value.name} </h1>
      <p className="mt-5">{value.description}</p>
      <div className="flex flex-col mt-4 gap-2 items-start w-[700px]">
        {data ? (
          data.map((e, index) => (
            <TodoComp
              key={index}
              title={e.title}
              complete={e.completed}
              id={e.id}
              due_date={e.due_date}
              assigned={e.assigned.profile.name}
            />
          ))
        ) : (
          <></>
        )}

        {open ? (
          <form className="flex bg-base-300 py-2 px-3 rounded-lg justify-between w-full items-center">
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter todo"
                className="input input-bordered"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Due-date</span>
              </label>
              <input
                type="date"
                // placeholder="Enter todo"
                className="input input-bordered"
                value={date}
                onChange={(e) => setdate(e.target.value)}
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
                options={member}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setmember(e)}
              />
            </div>

            <button className="btn btn-active py-1" onClick={addTodo}>
              Add
            </button>
          </form>
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
