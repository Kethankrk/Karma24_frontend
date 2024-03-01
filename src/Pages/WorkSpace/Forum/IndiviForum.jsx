import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
const IndiviForum = () => {
  const param = useParams();

  const [data, setdata] = useState([{ forum: {}, messages: [] }]);
  const [pop, setpop] = useState(false);
  const firstText = `# Replay them!
Enter the content
`;

  const [value, setValue] = useState(firstText);
  const api = import.meta.env.VITE_API;
  const params = useParams();
  const id = params.id;

  console.log(id);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(`${api}core/forum-message/?id=${id}`);

      setdata(response.data);
    };
    getdata();
  }, [pop]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const api = import.meta.env.VITE_API;
      const data = {
        forum: id,
        content: value,
      };
      const response = await axios.post(`${api}core/forum-message/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        setpop(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (!data.forum) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <div className="px-8 py-4">
      <div className="grid grid-cols-9 mb-3 border-b pb-3">
        <div className="flex flex-col col-span-8 ">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h4v3a1 1 0 001 1h.5c.25 0 .5-.1.7-.29L13.9 18H20a2 2 0 002-2V4a2 2 0 00-2-2H4m0 2h16v12h-6.92L10 19.08V16H4V4m8.19 1.5c-.89 0-1.6.18-2.14.54-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63.2-.14.42-.21.69-.21.31 0 .58.08.76.26.18.17.27.39.27.69 0 .28-.08.53-.22.74-.17.22-.38.4-.64.54-.52.32-.86.6-1.07.84-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68.09-.17.26-.32.52-.47.46-.21.84-.49 1.13-.85.29-.37.44-.76.44-1.2 0-.7-.27-1.26-.81-1.68-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2h-2z" />
            </svg>
            <p className="font-bold text-4xl mb-2">{data.forum.name}</p>
          </div>
          <p className="text-md">{data.forum.description}</p>
        </div>
        <div className="flex flex-col border-l-2 items-center gap-5">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
          >
            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
          </svg>
          <svg
            className="rotate-180"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
          >
            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
          </svg>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          className="flex gap-1  btn-primary btn px-10 "
          onClick={() => setpop(true)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.455 15L1 18.5V3a1 1 0 011-1h15a1 1 0 011 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 011 1v13.5L17.545 19H9a1 1 0 01-1-1v-1z" />
          </svg>
          Answer
        </button>
      </div>
      {pop ? (
        <div className="px-1 py-2 ">
          <MDEditor
            height={window.innerHeight - 300}
            value={value}
            onChange={setValue}
          />
          <div className="flex justify-end w-full">
            <button className="btn btn-secondary mt-4 " onClick={handleSubmit}>
              Comment
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {data.messages.map((e) => (
        <div
          className="markdown-window-2 border-b-2 py-5 border-gray-600"
          key={e.id}
        >
          <ReactMarkdown>{e.content}</ReactMarkdown>
          <div className="flex w-full justify-end">
            {/* <p>
              Created by :{" "}
              {data.messaged
                ? data.messages.created_by.profile.name
                : "Anonymous"}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndiviForum;
