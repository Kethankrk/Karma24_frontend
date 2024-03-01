import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
const IndiviForum = () => {
  const param = useParams();
  const markdownContent = `# Welcome to Co-Project!

  Hi! I'm your first Markdown file in **Co-project**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.
  `;

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
            <p className="font-bold text-4xl mb-2">sdnjkshd</p>
          </div>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente, illo ab unde laborum eligendi ipsum, id ex perspiciatis
            sunt suscipit consequuntur possimus debitis amet, quo voluptatem
            quisquam voluptatibus. Quaerat?
          </p>
        </div>
        <div className="flex flex-col border-l-2"></div>
      </div>
      <div className="flex w-full justify-end">
        <button className="flex gap-1  btn-primary btn px-10">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.455 15L1 18.5V3a1 1 0 011-1h15a1 1 0 011 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 011 1v13.5L17.545 19H9a1 1 0 01-1-1v-1z" />
          </svg>
          Answer
        </button>
      </div>
      <div className="markdown-window-2">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default IndiviForum;
