import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  TextField,
  Paper
} from "@material-ui/core";

//import Button from '@material-ui/core/Button';

import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import AccessAlarm from '@material-ui/icons/AccessAlarm';


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

export default function BasicModal() {
  const [age, setAge] = useState(16);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = () => {
    console.log("nothing");
  };

  return (
    <div>
      <Button >Filters Alerts</Button>
      
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
              <Grid item xs={4} alignItems="center">
                <FormControl style={{ width: "80%" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Zone
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
              <Grid item xs={4} alignItems="center">
                <FormControl style={{ width: "80%" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Police station
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
      <div style={{display: "flex", justifyContent:"end"}}> 
        <AccessAlarm onClick={handleOpen}> </AccessAlarm>
          
      </div>
    
    </div>
  );
}
