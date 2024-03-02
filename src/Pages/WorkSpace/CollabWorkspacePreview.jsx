import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CollabWorkspacePreview = () => {
  const [data, setdata] = useState();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(
          `http://192.168.137.219:3000/markdown/${id}`
        );
        console.log(response);
        setdata(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  return (
    <div className=" px-8 py-4">
      <h1 className="font-bold text-4xl">Collaborative workspace</h1>
      <div className="flex  w-full justify-end ">
        <Link
          to={`/collabe/edit/${id}`}
          className="flex gap-1 items-center hover:shadow-lg shadow-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
          </svg>
          Edit
        </Link>
      </div>
      <div className="px-4 py-3 rounded-lg mt-3 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <div className="markdown-window">
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default CollabWorkspacePreview;
