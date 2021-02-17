import React from "react";
import { withRouter } from "react-router-dom";
import LoadingIcon from "../loading/loading";
import HomePageHook from "./home_page";
import HomeFeedHook from "./home_feed";
import { Link } from "react-router-dom";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.props.history.push("/login");
  }

  handleClick2() {
    this.props.history.push("/signup");
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { currentUser } = this.props;

    if (this.state.loading) {
      return <LoadingIcon />;
    }

    return currentUser ? <HomePageHook /> : <HomeFeedHook />;
  }
}
