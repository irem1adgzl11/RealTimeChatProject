//import logo from './logo.svg';
import Login from"./pages/Login";
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import ChatDetail from "./pages/ChatDetail";
import PageContainer from "./containers/PageContainer";
import Sidebar from "./components/SideBar";

function App() {
  
  const{user} = useSelector(state => state.user)

  
  return (
    <><>
      {!user ? <Login /> :
        <Router>
          <PageContainer>
            <Sidebar/>
          <Routes>
            <Route path="/" element={<Chat/>}/>
            <Route path="chat/:id" element={<ChatDetail/>}/>
           
          </Routes>
          </PageContainer>

        </Router>}
    </></>
  );
}

export default App;
