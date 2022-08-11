import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import TButton from "./TButton";

interface HeaderProps {
  total?: number;
}

const Header: React.FC<HeaderProps> = ({ total }) => {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Icon>account_tree</Icon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tree{" "}
            {total?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <TButton color="error" onClick={() => window.location.reload()}>
            Reset
          </TButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
