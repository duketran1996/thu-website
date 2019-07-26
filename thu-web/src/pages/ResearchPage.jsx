import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import InfoCard from "../components/InfoCard";
import withStyles from "@material-ui/core/styles/withStyles";
import Carousel3D from "../animatedcomponents/Carousel3D";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ArrowLeft from "@material-ui/icons/ArrowLeft";

const data = [
  {
    width: "600px",
    height: "400px",
    pic_url:
      "http://d21gd0ap5v1ndt.cloudfront.net/web02/img.php?src=/images/members/UCI-campus-668x367.jpg&site=gccwater&width=920&height=518&crop",
    pic_title: "UC Irvine",
    title: "Undergraduate Research Assistant",
    company: "UC Irvine",
    dates_employed: "Feb 2018 – Present",
    employment_duration: "1 yr 6 mos",
    location: "Orange County, California Area",
    field: "Chemical Biology",
    project:
      "Structural Characterization of a Quinone Synthetase, TdiA, and Engineering Towards Continuous Flow Biosynthesis"
  },
  {
    width: "600px",
    height: "510px",
    pic_url: "https://www.snopes.com/tachyon/2016/07/math.jpg?resize=865,452",
    pic_title: "Fairmont Preparatory Academy",
    title: "Mathematics Teaching Assistant",
    company: "Fairmont Preparatory Academy",
    dates_employed: "Aug 2015 – Present",
    employment_duration: "4 yrs",
    location: "Anaheim, United States",
    field: "Calculus",
    project:
      "As a teaching assistant at Fairmont, I am currently working for Mr. Stephen Whitlock developing teaching curriculum for Pre-Calculus, Algebra II/ Pre-Calculus and Calculus classes. I am also responsible for writing and grading weekly tests quizzes, coordinating after school tutoring and teaching occasionally on Advanced Placement mathematics level such as implicit differentiation, relative extrema and related rates."
  },
  {
    width: "600px",
    height: "650px",
    pic_url:
      "https://www.gavi.org/uploadedimages/about_the_alliance/partners_in_the_alliance/logos/unicef_700.gif",
    pic_title: "UNICEF",
    title:
      "Community Outreach Coordinator and Representative at the 2018 UNICEF Annual Student Summit",
    company: "UNICEF at UCI",
    dates_employed: "May 2017 – Present",
    employment_duration: "2 yrs 3 mos",
    location: "Orange County, California Area",
    field: "Volunteer",
    project:
      'My roles as a community outreach chair were to plan, search, and collaborate with other on-campus clubs and off-campus organizations for volunteer events around the community. I also worked with Fundraising/Finance chair to plan annual Hunger Banquet and Publicity/Awareness chair to plan Relay for Life. I also presented at 2018 UNICEF Annual Student Summit in Washington, DC on "How to host a successful Hunger Banquet?"I am passionate about advocating for children and promoting children\'s rights through community service activities and providing after school tutoring for underprivileged children at a local soup kitchen.'
  }
];

const styles = theme => ({
  nav: {
    width: 220,
    height: 60,
    margin: "0 auto",
    marginTop: 60
  },

  fab_right: {
    marginLeft: 40
  },

  pagesNav: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    display: "inline-block",
    marginLeft: 40
  }
});

var cards = data.map(function(item, i) {
  var info = {
    key: "card_" + i,
    content: <InfoCard key={i} data={item} />
  };
  return info;
});

class ResearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pages: data.length
    };
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
  }

  nextCard() {
    var next = 1;
    if (
      this.state.currentPage >= 1 &&
      this.state.currentPage < this.state.pages
    ) {
      next = this.state.currentPage + 1;
    }
    this.setState({
      currentPage: next
    });
  }

  prevCard() {
    var prev = this.state.pages;
    if (this.state.currentPage >= 2) {
      prev = this.state.currentPage - 1;
    }
    this.setState({
      currentPage: prev
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <Carousel3D cards={cards} currentPage={this.state.currentPage} />
        <div className={classes.nav}>
          <Fab size="large" aria-label="Arrow Right" onClick={this.prevCard}>
            <ArrowLeft size="large" style={{ fontSize: 50 }} />
          </Fab>
          <Typography className={classes.pagesNav} gutterBottom>
            {this.state.currentPage}/{this.state.pages}
          </Typography>
          <Fab
            className={classes.fab_right}
            size="large"
            aria-label="Arrow Right"
            onClick={this.nextCard}
          >
            <ArrowRight size="large" style={{ fontSize: 50 }} />
          </Fab>
        </div>
      </>
    );
  }
}

ResearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResearchPage);
