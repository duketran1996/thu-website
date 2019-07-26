import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    borderRadius: 20
  },

  media: {
    height: 140
  },

  content: {
    marginLeft: 10
  },

  title: {
    fontWeight: "bold"
  },

  company: {
    fontSize: "18px"
  },

  dates_employed: {
    fontSize: "16px"
  },

  location: {
    fontSize: "16px"
  },

  field: {
    fontSize: "16px"
  },

  project: {
    fontSize: "16px"
  }
});

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    const data = this.props.data;

    return (
      <>
        <CssBaseline />
        <Card
          className={classes.card}
          style={{ width: data.width, height: data.height }}
        >
          <CardMedia
            className={classes.media}
            image={data.pic_url}
            title={data.pic_title}
          />
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {data.title}
            </Typography>
            <Typography className={classes.company} gutterBottom>
              {data.company}
            </Typography>
            <Typography className={classes.dates_employed} gutterBottom>
              {data.dates_employed}
            </Typography>
            <Typography className={classes.location} gutterBottom>
              {data.location}
            </Typography>
            <Typography className={classes.field} gutterBottom>
              {data.field}
            </Typography>
            <Typography
              className={classes.project}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {data.project}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
