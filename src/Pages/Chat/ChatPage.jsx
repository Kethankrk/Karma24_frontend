import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const id = 1;
function ChatPage() {
  const [chats, Setchats] = useState([
    { text: "Hello", isMine: true },
    { text: "Hi", isMine: false },
  ]);

  const [socket, setSocket] = useState(null);

  const [input, setInput] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();
    socket.emit("msg", {
      message: input,
      room: id,
    });
  };

  useEffect(() => {
    const ws = io("ws://192.168.137.219:3000");
    ws.on("connect", () => {
      console.log("connected to server");
      setSocket(ws);
      ws.emit("join_room", id);
    });

    ws.on("receive_msg", (msg) => {
      console.log(msg);
    });

    return () => {
      return socket && socket.disconnect();
    };
  }, []);
  return (
    <main className="px-14 py-10 flex items-center flex-col">
      <div className="max-w-[600px] min-w-[500px] w-full rounded-lg bg-base-300 p-10">
        {chats.map((chat) =>
          !chat.isMine ? (
            <YourMessage text={chat.text} />
          ) : (
            <MyMessage text={chat.text} />
          )
        )}
      </div>
      <form
        className="max-w-[600px] min-w-[500px] w-full rounded-md p-2 flex gap-1"
        onSubmit={SendMessage}
      >
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
    <div className="chat chat-start">
      <div className="chat-bubble">{text}</div>
    </div>
  );
}

function YourMessage({ text }) {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble">{text}</div>
    </div>
  );
}
