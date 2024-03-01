import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkSpaceHome = () => {
  const [data, setdata] = useState([]);
  const params = useParams();
  const api = import.meta.env.VITE_API;
  const id = params.id;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getdata = async () => {
      try {
        const data = await axios.get(`${api}core/workspace/?id=${id}`, {
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

    getdata();
  }, []);

  return (
    <div className="px-8 py-4">
      <h1 className="font-bold text-4xl">{data.name}</h1>
      <p className="mb-6">{data.description}</p>
      <h1>Members</h1>
      <ul>
        {data.members ? (
          data.members.map((e, index) => (
            <li className="ml-3" key={index}>
              {e.profile.name}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default WorkSpaceHome;
