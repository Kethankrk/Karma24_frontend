import React, { useEffect, useState } from "react";

function ChatPage() {
  const [chats, Setchats] = useState([
    { text: "Hello", type: "you" },
    { text: "Hi", type: "me" },
  ]);

  const [socket, setSocket] = useState(null);

  const [input, setInput] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();
    if (socket && input.trim() !== "") {
      socket.send(JSON.stringify({ input }));
      setInput("");
    }
  };

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws/chat/`);

    ws.onopen = () => {
      console.log("WebSocket connection opened.");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      Setchats((prevChatLog) => [...prevChatLog, data.message]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  }, []);
  return (
    <main className="px-14 py-10 flex items-center flex-col">
      <div className="max-w-[600px] min-w-[500px] w-full rounded-lg bg-base-300 p-10">
        {chats.map((chat) =>
          chat.type == "you" ? (
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
