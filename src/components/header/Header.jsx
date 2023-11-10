import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const Header = () => {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Product Shop 🧸
        </Typography>
        {/* <Button>Login</Button> */}
      </Toolbar>
      

    </AppBar>
    </>
  );
};

export default Header;
