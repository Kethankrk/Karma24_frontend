import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";

function ChatPage() {
  const params = useParams();
  const id = params.id;
  const [chats, Setchats] = useState([
    { text: "Hello", isMine: true },
    { text: "Hi", isMine: false },
  ]);
  const name = localStorage.getItem("name");
  const [socket, setSocket] = useState(null);

  const [input, setInput] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();
    socket.emit("msg", {
      message: input,
      room: id,
      name: name,
    });
    setInput("");
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://192.168.137.219:3000/chat/${id}`);
        console.log(res.data);
        res.data.map((item) =>
          Setchats((prev) => [
            ...prev,
            { text: item.message, isMine: name == item.name ? true : false },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const ws = io("ws://192.168.137.219:3000");
    ws.on("connect", () => {
      console.log("connected to server");
      setSocket(ws);
      ws.emit("join_room", id);
    });

    ws.on("receive_msg", (msg) => {
      console.log(msg.message);

      if (msg.name == name) {
        Setchats((pre) => [...pre, { text: msg.message, isMine: true }]);
      } else {
        Setchats((pre) => [
          ...pre,
          { text: msg.message, isMine: false, name: msg.name },
        ]);
      }
    });

    return () => {
      return socket && socket.disconnect();
    };
  }, []);
  const [value, setValue] = useState();
  return (
    <main className="px-8 py-3 flex items-start mt-6 flex-col">
      <div className="w-full rounded-lg bg-base-300 min-w-[500px] max-w-[800px] max-h-[500px] min-h-[400px] overflow-y-auto p-10">
        {chats.map((chat) =>
          !chat.isMine ? (
            <YourMessage text={chat.text} name={chat.name} />
          ) : (
            <MyMessage text={chat.text} />
          )
        )}
      </div>
      <form
        className="max-w-[600px] min-w-[500px]  w-full rounded-md p-2 flex gap-1"
        onSubmit={SendMessage}
      >
        {/* <MDEditor height={300} value={value} onChange={setValue} /> */}
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter a message"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="btn" type="submit">
          send
        </button>
      </form>
    </main>
  );
}

export default ChatPage;

function MyMessage({ text }) {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble">{text}</div>
    </div>
  );
}

function YourMessage({ text, name }) {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-secondary flex flex-col">
        <p className="text-xs text-left text-gray-300 font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
}
