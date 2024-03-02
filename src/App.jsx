import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import LandingPage from "./Pages/Landingpage/LandingPage";
import SignupPage from "./Pages/Signup/signupPage";
import WorkSpaceLayout from "./Pages/WorkSpace/WorkSpaceLayout";
import WorkSpaceMainWindow from "./Pages/WorkSpace/WorkSpaceMainWindow";
import NewWorkSpace from "./Pages/WorkSpace/NewWorkSpace";
import WorkSpaceEdit from "./Pages/WorkSpace/WorkSpaceEdit";
import TodoPage from "./Pages/WorkSpace/Todo/TodoPage";
import Forumpage from "./Pages/WorkSpace/Forum/forumpage";
import IndiviForum from "./Pages/WorkSpace/Forum/IndiviForum";
import WorkSpaceHome from "./Pages/WorkSpace/workSpaceHome";
import WorkSpace from "./Pages/WorkSpace/WorkSpace";
import Createnewpage from "./Pages/WorkSpace/Createnewpage";
import ChatPage from "./Pages/Chat/ChatPage";
import CollabarativeTab from "./Pages/WorkSpace/CollabarativeTab";
import CollabWorkspacePreview from "./Pages/WorkSpace/CollabWorkspacePreview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkSpaceLayout />}>
            <Route path="/" element={<WorkSpaceMainWindow />} />

            <Route path="/workspace/:id" element={<WorkSpaceHome />} />
            <Route path="/todo/:id" element={<TodoPage />} />
            <Route path="/blank/:id" element={<WorkSpace />} />
            <Route path="workspace-edit/:id" element={<WorkSpaceEdit />} />
            <Route path="addpage/:id" element={<Createnewpage />} />
            <Route path="forum/:id" element={<Forumpage />} />
            <Route path="/forum-in/:id" element={<IndiviForum />} />
            <Route path="/chat/:id" element={<ChatPage />} />
            <Route path="/collabe/edit/:id" element={<CollabarativeTab />} />
            <Route path="/collabe/:id" element={<CollabWorkspacePreview />} />

            <Route path="/new" element={<NewWorkSpace />} />
            <Route path="/edit" element={<WorkSpaceEdit />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/forum" element={<Forumpage />} />
          </Route>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
