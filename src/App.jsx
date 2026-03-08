import "./components/components-style.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/Page404";

import Users from "./pages/users/Users";
import UserList from "./pages/users/UserList";
import UserFindOne from "./pages/users/UserFindOne";
import CreateUser from "./pages/users/CreateUser";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useAuth } from "./security/authContex";

function App() {

  const { isLoggedIn: isAllowed } = useAuth();

  return (
    <Routes>

      <Route
        path="/"
        element={isAllowed ? <Navigate to="/dashboard" replace /> : <Home />}
      />

      <Route
        path="/login"
        element={isAllowed ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route element={<ProtectedRoutes isAllowed={isAllowed} />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/users" element={<Users />}>
          <Route index element={<Navigate to="list" replace />} />
          <Route path="list" element={<UserList />} />
          <Route path="create" element={<CreateUser />} />
          <Route path=":id" element={<UserFindOne />} />
        </Route>

      </Route>

      <Route path="*" element={<Page404 />} />

    </Routes>
  );
}

export default App;