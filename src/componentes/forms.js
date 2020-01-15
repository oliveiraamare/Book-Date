//dar uma olhada
// https://codesandbox.io/s/material-demo-o93sw
//https://material-ui.com/components/text-fields/#customized-inputs

import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
 

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Forms = () => {
  const classes = useStyles();
  return (<ThemeProvider theme={classes.root}>
  <TextField id="standard-basic" label="Standard" />
  
</ThemeProvider>)
}
export default Forms;