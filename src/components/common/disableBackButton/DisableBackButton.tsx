import React, { useContext } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";

class DisableBackButton extends React.Component {
  navigation = useContext(UNSAFE_NavigationContext).navigator as any;
  constructor(props: any) {
    super(props);

    // Store the previous pathname and search strings
    //@ts-ignore
    this.currentPathname = null;
    //@ts-ignore

    this.currentSearch = null;
  }

  componentDidMount() {
    //@ts-ignore
    const { history } = this.props;

    history.navigation((newLocation: any, action: any) => {
      if (action === "PUSH") {
        if (
          //@ts-ignore

          newLocation.pathname !== this.currentPathname || newLocation.search !== this.currentSearch
        ) {
          // Save new location
          //@ts-ignore

          this.currentPathname = newLocation.pathname;
          //@ts-ignore

          this.currentSearch = newLocation.search;

          // Clone location object and push it to history
          history.push({
            pathname: newLocation.pathname,
            search: newLocation.search,
          });
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1);
      }
    });
  }

  render() {
    return <div></div>;
  }
}

export default DisableBackButton;
