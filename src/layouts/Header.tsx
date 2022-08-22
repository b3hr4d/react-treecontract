import { AppBar, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import useUserData from "context/hooks/useUserData";
import TButton from "elements/TButton";
import { toUsd } from "helpers";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [{ total }] = useUserData();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Icon>account_tree</Icon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tree&nbsp;
          {toUsd(total)}
        </Typography>
        <TButton color="error" onClick={() => window.location.reload()}>
          Reset
        </TButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
