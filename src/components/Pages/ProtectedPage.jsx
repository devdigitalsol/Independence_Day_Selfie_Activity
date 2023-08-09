import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Route } from "react-router-dom";

const ProtectedPage = ({ element: Element, ...rest }) => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  if (!authenticated) {
    navigate("/");
    return null;
  }

  return <Route {...rest} element={<Element />} />;
};
export default ProtectedPage;
