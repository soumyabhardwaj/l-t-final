import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const ageExample = [
    { value: 1, key: "Hyderabad" },
    { value: 2, key: "Bangalore" },
];

const Example = () => {
    const [age, setAge] = useState(16);
    const handleChange = () => {
        console.log("noth");
    };
    return (
        <Container>
            <Typography>Live System</Typography>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-filled-label">
                    Camera Name
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
                   
                </Select>
            </FormControl>
           
        </Container>
    );
};

export default Example;
