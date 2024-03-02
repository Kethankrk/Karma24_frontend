import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { io } from "socket.io-client";

const CollabarativeTab = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [data, setData] = useState(""); // Use consistent naming convention
  const name = localStorage.getItem("name");
  const [socket, setSocket] = useState(null);
  const [markdownContent, setMarkdownContent] = useState(""); // More descriptive name

  const handleEditorChange = (value) => {
    setMarkdownContent(value);
    socket && socket.emit("collab", { data: value, room: id, name }); // Include name
  };

  useEffect(() => {
    const ws = io("ws://192.168.137.219:3000"); // Replace with production server URL

    ws.on("connect", () => {
      console.log("connected to server");
      setSocket(ws);
      ws.emit("join_room", id);
    });

    ws.on("receive_collab", (msg) => {
      console.log(msg.data);
      setData(msg.data); // Update data state for potential rendering
      setMarkdownContent(msg.data); // Update markdown editor content
    });

    return () => {
      socket && socket.disconnect();
    };
  }, []);
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(
          `http://192.168.137.219:3000/markdown/${id}`
        );
        console.log(response);
        setMarkdownContent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  return (
    <div className="px-8 py-4">
      <div className="flex w-full justify-end gap-3">
        <button
          className="btn btn-primary w-40 mb-3"
          onClick={() => navigate(`/collabe/${id}`)}
        >
          View Preview
        </button>
        {/* <button className="btn btn-accent w-40" onClick={updatedata}>
          Commit changes
        </button> */}
      </div>
      <MDEditor
        height={window.innerHeight - 150}
        value={markdownContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CollabarativeTab;
