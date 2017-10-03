import React from 'react';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu, {
  MenuItem,
  MenuList,
} from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    console.log("closing");
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleTouchTap} label="Navigation">
          <MenuIcon />
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <MenuList>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Merch</MenuItem>
            <MenuItem>Schedule</MenuItem>
          </MenuList>
        </Popover>
      </div>
    );
  }
}
