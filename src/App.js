import React, { lazy, Suspense } from "react";
import "./App.css";
// import AsyncComponent from "./components/AsyncComponent";
import Page1 from "./components/Page1";

const Page2Lazy = lazy(() => import("./components/Page2"));
const Page3Lazy = lazy(() => import("./components/Page3"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page2") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else if (this.state.route === "page3") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
