import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  greeting: {
    width: "auto",
    height: "auto",
    fontSize: props => props.fontSize,
    fontWeight: "800",
    fontFamily: "Pacifico",
    color: "black"
  }
});

export default function GreetingHome(props) {
  const classes = useStyles(props);
  return <div className={classes.greeting}>{props.message}</div>;
}
