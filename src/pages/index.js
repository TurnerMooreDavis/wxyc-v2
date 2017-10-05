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
  whiteText: {
    color: "white",
  },
  nowPlaying: {
    width: 23,
    height: 23,
    marginBottom: "-2.5px",
    color: "white",
  },
  nowPlayingIcon: {
    width: 20,
    height: 20,
  },
  playNow: {
    // backgroundColor: "#A8C7D8",
    marginTop: 50,
  },
  appBar: {
    color: "black",
    backgroundColor: "white",
  },
  mainImage: {
    width: 150,
  },
  missionStatement: {
    paddingTop: 10,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 18,
    marginLeft: 100,
    marginRight: 100
  },
  quoteAuthor: {
    textAlign: "right",
    fontSize: 18,
  },
  quoteText: {
    textAlign: "left",
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
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <img style={styles.mainImage} src="../../wxyc-4-transparent.png" />
        <Typography style={styles.whiteText} type="display1" gutterBottom>
          Wxyc Radi
          <SvgIcon style={styles.nowPlaying} onClick={this.handleClick}>
            <path stye={styles.nowPlayingIcon} d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </SvgIcon>
        </Typography>
        <Typography style={styles.whiteText} type="subheading" gutterBottom>
          89.3 FM - Chapel Hill, NC
        </Typography>
        <Button style={styles.playNow} raised >
          Play Now
        </Button>
      </div>
      <p style={styles.missionStatement}>
        <p style={styles.quoteText}>
          <i>"Our mission is to illustrate the relationships between seemingly disparate types of music. We believe that our free-format is the best way to accomplish this mission. Our disc jockeys harness the almighty power of the segue to draw musical linkages across time, culture, and pure sound. A WXYC segue is a nod to the mutual inspirations that musical creations of dissimilar origins possess. Listen in and see if this author's conception doesn't make sense."</i>
        </p>
        <p style={styles.quoteAuthor}>--Jason Perlmutter, Former Station Manager</p>
      </p>
    </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
