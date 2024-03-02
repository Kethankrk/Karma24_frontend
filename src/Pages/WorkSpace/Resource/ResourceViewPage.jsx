import React, { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ResourceViewPage = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);
  const api = import.meta.env.VITE_API;
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(`${api}user/upload/?workspace=${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  return (
    <div className="px-8 py-4">
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-4xl mb-9">Resources</h1>
        <Link to={`/resource/upload/${id}`} className="btn btn-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.5em"
            width="1.5em"
          >
            <path
              fillRule="evenodd"
              d="M8 0a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 01-1 0z"
            />
          </svg>
          Upload File
        </Link>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {data.map((e, index) => (
          <div className="" key={index}>
            <ResourceCard
              description={e.description}
              name={e.name}
              url={`${api.slice(0, -1)}${e.file}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceViewPage;
