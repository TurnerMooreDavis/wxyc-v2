/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';
import NavigationTabs from '../components/NavigationTabs';
import Feed from '../components/Feed';
import IconButton from 'material-ui/IconButton';
import PlayCircleOutline from 'material-ui-icons/PlayCircleOutline';
import SvgIcon from 'material-ui/SvgIcon';

const styles = {
  mainContent: {
    textAlign: 'center',
    paddingTop: 120,
    backgroundColor: "#a72222",
    paddingBottom: 120,
  },
  titleText: {
    fontWeight: 300,
    color: "white",
    fontSize: 56,
  },
  subtitleText: {
    fontWeight: 300,
    color: "white",
    fontSize: 24,
  },
  nowPlaying: {
    // color: "#03A9F4",
    width: 36,
    height: 36,
    marginBottom: "-4px",
  },
  nowPlayingIcon: {
    width: 33,
    height: 33,
  },
  playNow: {
    backgroundColor: "white",
    color: "#a72222",
    marginTop: 20,
  },
  appBar: {
    color: "black",
    backgroundColor: "white",
  },
  mainImage: {
    width: 200,
  },
  missionStatementContainer: {
    backgroundColor: "rgb(238, 238, 238)",
    paddingBottom: 30,
  },
  missionStatement: {
    fontWeight: 300,
    maxWidth: 700,
    margin: "auto",
    textAlign: "center",
    paddingTop: 30,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 20,
  },
  quoteAuthor: {
    textAlign: "right",
    fontSize: 18,
  },
  quoteText: {
    textAlign: "left",
  },
  feedContainer: {
    marginLeft: 200,
    marginRight: 200,
    marginTop: 80,
    marginBottom: 100,
  },
  feedHeader: {
    textAlign: "center",
    paddingBottom: 20,
  },
  contactButton:{
    color: "white",
    backgroundColor: "#a72222",
    marginBottom: 10,
  },
  footer: {
    backgroundColor: "rgb(33, 33, 33)",
  },
  footerText:{
    fontWeight: 300,
    maxWidth: 700,
    margin: "auto",
    textAlign: "center",
    paddingTop: 30,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 14,
    color: "white",
    paddingBottom: 30,
  },
  uncLogo: {
    width: 30,
  }
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
      <AppBar style={styles.appBar} >
        <NavigationTabs />
      </AppBar>
      <div className={this.props.classes.mainContent} >
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Now Playing</DialogTitle>
          <DialogContent>
            <DialogContentText>This activates now playing</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <img style={styles.mainImage} src="../../wxyc-4-transparent.png" />
        <Typography style={styles.titleText} type="display1" gutterBottom>
          Wxyc Radi
          <SvgIcon style={styles.nowPlaying}>
            <path stye={styles.nowPlayingIcon} d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </SvgIcon>
        </Typography>
        <Typography style={styles.subtitleText} type="subheading" gutterBottom>
          89.3 FM - Chapel Hill, NC
        </Typography>
        <Button style={styles.playNow} raised >
          Play
        </Button>
      </div>
      <div style={styles.missionStatementContainer}>
        <div style={styles.missionStatement}>
          <p style={styles.quoteText}>
            Our mission is to illustrate the relationships between seemingly disparate types of music. We believe that our free-format is the best way to accomplish this mission. Our disc jockeys harness the almighty power of the segue to draw musical linkages across time, culture, and pure sound. A WXYC segue is a nod to the mutual inspirations that musical creations of dissimilar origins possess. Listen in and see if this author's conception doesn't make sense
          </p>
        </div>
      </div>
      <div style={styles.feedContainer}>
        <Typography style={styles.feedHeader} type="display1" gutterBottom>
          See what we've been up to
        </Typography>
        <Feed />
      </div>
      <div style={styles.missionStatementContainer}>
        <div style={styles.missionStatement}>
          <p>
            Want to get in contact with our DJ?
          </p>
          <Button style={styles.contactButton} raised >
            Contact
          </Button>
        </div>
      </div>
      <div style={styles.footer}>
        <div style={styles.footerText}>
          <p>
            WXYC is the student radio station at UNC Chapel Hill
          </p>
          <p>
            WXYC / CB #5210, Carolina Union / Chapel Hill, NC 27599
          </p>
          <a href="http://www.unc.edu/">
            <img src="../../UNC_logo_white.png" style={styles.uncLogo}></img>
          </a>
        </div>
      </div>
    </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
