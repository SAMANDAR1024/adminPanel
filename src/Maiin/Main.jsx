import { Route, Routes } from "react-router";
import Posts from "./Posts";
import Home from "./Home";
import Todos from "./Todos";
import Users from "./Users";
import Comments from "./Comments";
import Companies from "./Companies";
import Roles from "./Roles";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/users" element={<Users />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/Companies" element={<Companies />} />
      <Route path="/Roles" element={<Roles />} />
    </Routes>
  );
}

export default Main;
