import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, UserButton } from "./style";

const LogOut = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    const isConfirm = window.confirm("Chiqishni xohlaysizmi?");

    if (isConfirm) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <UserButton onClick={() => setOpen(!open)}>
        👤
      </UserButton>

      {open && (
        <Menu>
          <MenuItem onClick={logout}>Log out</MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default LogOut;