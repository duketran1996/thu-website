import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  greeting: {
    width: "12vw",
    height: "16vh",
    fontSize: 100,
    fontWeight: "800",
    fontFamily: "Pacifico",
    color: "black"
  }
});
export default function GreetingHome() {
  const classes = useStyles();
  return <div className={classes.greeting}>Hi!</div>;
}
