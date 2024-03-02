import ReactMarkdown from "react-markdown";
import hero from "../../assets/team.svg";

export default function WorkSpaceMainWindow() {
  const markdownContent = `# Welcome to Co-Project!

 
  `;
  return (
    <div className="px-8 py-4 flex flex-col items-center">
      <h1 className="text-4xl font-black mt-8 mb-3">Welcome to Co-Project!</h1>
      <p className="text-center mb-5">
        Welcome to our collaborative project management platform, where we
        streamline the process of bringing ideas to fruition, empowering teams
        to build projects quickly and efficiently.
      </p>
      {/* <div className="flex w-full justify-center "> */}
      <div className="max-w-[500px]">
        <img src={hero} alt="" />
        {/* </div> */}
      </div>
    </div>
  );
}
