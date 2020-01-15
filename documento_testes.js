import React, { Component }  from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
 
/*const useStyles = makeStyles(theme => ({
   fab: {
      margin: theme.spacing(1),
   },
}));
 
const classes = useStyles();
 
export default class SampleComponent extends Component<{}, {}> {
   public render() {
      return (
         <div>
            <Fab color="primary" aria-label="Add" className={classes.fab}><AddIcon /></Fab>
         </div>
       );
   }
}
What we need to do is wrap the useStyles code in a function and replace the code which uses it, so for example

const SampleFab = () => {
   const classes = useStyles();
   return <Fab color="primary" aria-label="Add" className={classes.fab}><AddIcon /></Fab>;
}
 
export default class SampleComponent extends Component<{}, {}> {
   public render() {
      return (
         <div>
            <SampleFab />
         </div>
      );
   }
}





export default function ColorTextFields() {
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      />
      <TextField
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="secondary"
      />
    </form>
  );
}*/