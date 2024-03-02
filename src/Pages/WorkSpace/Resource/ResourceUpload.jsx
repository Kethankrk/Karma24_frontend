import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const ResourceUpload = () => {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const params = useParams();
  const navigation = useNavigate();
  const upload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      ``;
      formData.append("description", description);
      formData.append("workspace", params.id);
      const api = import.meta.env.VITE_API;
      const res = await axios.post(`${api}user/upload/`, formData);
      console.log(res.data);
      navigation(`/resource/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute top-0 right-0 w-full h-screen flex justify-center items-center z-10 backdrop-blur">
      <div className="w-[600px] h-[400px] bg-base-300 border rounded-2xl shadow-xl flex flex-col justify-center px-5 py-2 gap-3">
        <h1 className="text-center font-bold text-2xl">Upload Resources</h1>
        <form className="flex flex-col gap-3" onSubmit={upload}>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Upload file</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">File name</span>
            </label>
            <input
              type="text"
              placeholder="Enter the file title"
              className="input input-bordered"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">File discription</span>
            </label>
            <input
              type="text"
              placeholder="Enter the file discription"
              className="input input-bordered"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-5 ">
            <button className=" px-7 btn btn-secondary">Upload</button>
            <button
              className=" px-7 btn btn-error"
              onClick={() => navigation(`/resource/${params.id}`)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourceUpload;
