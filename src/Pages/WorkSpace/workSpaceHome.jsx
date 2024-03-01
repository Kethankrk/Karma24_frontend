import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserListCard from "../Components/UserListCard";

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
      <h1 className="">Owners</h1>
      <div className="flex gap-3 flex-col mt-5">
        {data.owners ? (
          data.owners.map((item, index) => (
            <UserListCard name={item.profile.name} image={item.profile.image} />
          ))
        ) : (
          <>No Members</>
        )}
      </div>
      <h1 className="mt-10">Members</h1>
      <div className="flex gap-3 flex-col mt-5">
        {data.members ? (
          data.members.map((item, index) => (
            <UserListCard name={item.profile.name} image={item.profile.image} />
          ))
        ) : (
          <>No Members</>
        )}
      </div>
    </div>
  );
};

export default WorkSpaceHome;
