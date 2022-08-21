import { AppBar, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import TButton from "elements/TButton";
import useUserContract from "hooks/useContract";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { total } = useUserContract();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Icon>account_tree</Icon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tree&nbsp;
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
  );
};

export default Header;
