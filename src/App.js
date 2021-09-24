import React from "react";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  TextField,
  Paper
} from "@material-ui/core";

import BasicModal from "./components/BasicModal.js";

import Example from "./components/Example";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AccessAlarm from '@material-ui/icons/AccessAlarm';

const theme = createTheme({
  palette: {
    type: "dark"
  },
});

const ageExample = [
  { value: 1, key: "Hyderabad" },
  { value: 2, key: "Bangalore" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  p: 4,
  color: "white",
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "hidden",
    background: "#282828",
    minHeight: "100vh"
  },
  mainGrid: {
    height: "100%",
  },
  nav: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
    background: "black",
  },
  col1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "beige",
  },
  col2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  },
  col3: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    
    // background: "red",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    minHeight: "111vh",
    marginTop: "2px",
  },
}));

function App() {
    const classes = useStyles();
    
  const [age, setAge] = useState(16);
    const [modalOpen, setModalOpen] = useState(true);
    //initially modal is not open thats why set this to false
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = () => {
      console.log("nothing");
    };
    //function closeModal() {
    //setModalOpen(false)

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.mainGrid}>
            <Grid item xs={12}>
              {/* <Paper className={classes.nav}>NavBar</Paper> */}
              <Navbar />
            </Grid>

            <Grid item xs={3} className={classes.col1}>
              <Paper className={classes.paper} elevation={20}>
                <Grid style={{height:"100vh"}} container  direction="row" justifyContent="space-between">
                  <Grid item xs={12}>
                    <Example />
                  </Grid>
                  <Grid item xs={12}  container direction="column"  justifyContent="flex-end">
                    <img
                      style={{ width: "100%" }}
                      src="./image3.jpeg"
                      alt="err"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6} className={classes.col2}>
              <Paper className={classes.paper}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <Typography>Maps</Typography>
                  <AccessAlarm onClick={handleOpen}> </AccessAlarm>
                  
                </div> 
                <Paper elevation={24}>
                    <Modal
                      open={open}
                      onClose={handleClose}
                  
                    >
                      <Box sx={style}>
                        <Paper />
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          
                        >
                          <Grid item xs={6}>
                            <TextField
                              id="date"
                              label="Select Date "
                              type="date"
                              defaultValue="2017-05-24"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          style={{ marginTop: "30px" }}
                        >
                          <Grid item xs={12}>
                            <Typography variant="h6" align="center">
                              Select Area (optional)
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          style={{ marginTop: "30px" }}
                        >
                          <Grid item xs={4} alignItems="center">
                            <FormControl style={{ width: "80%" }}>
                              <InputLabel id="demo-simple-select-filled-label">
                                Commissionerate
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}
                              >
                                {ageExample.map((age) => (
                                  <MenuItem value={age.value}>{age.key}</MenuItem>
                                ))}
                                {/* <MenuItem value=""></MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          style={{ marginTop: "30px" }}
                        >
                          <Grid item xs={9}></Grid>
                          <Grid item xs={3}>
                            <Button variant="contained" color="primary">
                              Apply filter
                            </Button>
                          </Grid>

                        </Grid>
                      </Box>
                    </Modal>
                  </Paper>
                 
                {/* <Paper className={classes.paper}>Graph</Paper> */}
                <img
                  src="./image2.jpeg"
                  style={{ width: "100%", margin: "0 auto" }}
                  alt="err"
                />
                <img
                  src="./pathhole.jpeg"
                  style={{ width: "100%", margin: "0 auto" }}
                  alt="err"
                />
              </Paper>
            </Grid>
            <Grid item xs={3} className={classes.col3}>
              <Paper className={classes.paper}>
                <BasicModal />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
}

export default App;
