import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const tileData = [
   {
     img: "../../feed1.jpg",
     title: "WXYC 2000's Dance",
     author: "test",
     link: "https://www.facebook.com/events/113532756028601/?acontext=%7B%22ref%22%3A%223%22%2C%22ref_newsfeed_story_type%22%3A%22regular%22%2C%22feed_story_type%22%3A%2222%22%2C%22action_history%22%3A%22null%22%7D",
   },
   {
     img: "../../feed2.jpg",
     title: "Thursday Night Feature on WXYC",
     author: "test",
     link: "https://www.facebook.com/thursdaynightfeature/?hc_ref=ARQpJkmIJkpj98_-9fAOrZqIqwJjc2JbDU86JfvDePKYeo2R-em3JIdK8zkiMB-EoA0&fref=nf",
   },
   {
     img: "../../feed3.jpg",
     title: "Thursday Night Feature on WXYC",
     author: "test",
     link: "https://www.facebook.com/wxycradio",
   },
   {
     img: "../../feed4.jpg",
     title: "Hiring DJ",
     author: "test",
     link: "https://www.facebook.com/wxycradio"
   },
   {
     img: "../../feed5.jpg",
     title: "WXYC x WKNC Hopscotch Day Party",
     author: "test",
     link: "https://www.facebook.com/events/110835112965293/?acontext=%7B%22ref%22%3A%223%22%2C%22ref_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22null%22%7D",
   },
 ];

function Feed(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <a href={tile.link} target="_blank">
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </a>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Feed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feed);
