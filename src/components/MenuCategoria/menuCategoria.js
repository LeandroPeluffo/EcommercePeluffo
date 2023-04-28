import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuCategoria = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "red",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>Categoria</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/categoria/CPU" style={styles.link}>
            CPU
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/GPU" style={styles.link}>
            GPU
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/Perifericos" style={styles.link}>
            Perifericos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/Cables" style={styles.link}>
            Cables
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/adaptadores" style={styles.link}>
            Adaptadores
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/Monitor" style={styles.link}>
            Monitor
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/Componentes" style={styles.link}>
            Componentes
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuCategoria;