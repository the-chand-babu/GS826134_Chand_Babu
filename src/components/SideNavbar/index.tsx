import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const navItems = [
  { icon: <StoreMallDirectoryIcon />, label: "Store", path: "/store" },
  { icon: <CategoryIcon />, label: "SKU", path: "/skus" },
  { icon: <BarChartIcon />, label: "Planning", path: "/planning" },
  { icon: <InsertChartIcon />, label: "Charts", path: "/chart" },
];

const SideNavbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("this is path", pathname);
  return (
    <div id="side-navbar">
      <ul className="unordered-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="list-item"
            style={{ background: pathname === item.path ? "lightGrey" : "" }}
            onClick={() => item.path && navigate(item.path)}
          >
            {item.icon}
            <p className="content">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
