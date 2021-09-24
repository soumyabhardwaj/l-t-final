import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FUSION
          </Typography>
          <Button color="inherit">L&T SmartWorld</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
