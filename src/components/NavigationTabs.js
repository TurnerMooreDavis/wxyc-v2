import React from 'react';
import Tabs, {
  Tab
} from 'material-ui/Tabs';

const styles = {
  tabs: {
    textAlign: "center",
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
export default class NavigationTabs extends React.Component {

  render() {
    return (
      <div>
        <Tabs style={styles.tabs}>
          <Tab label="Schedule" >
            <div>
              <h2 style={styles.headline}>Schedule</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="Merch" >
            <div>
              <h2 style={styles.headline}>Merch</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="About" >
            <div>
              <h2 style={styles.headline}>About</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="Contact" >
            <div>
              <h2 style={styles.headline}>Contact</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
