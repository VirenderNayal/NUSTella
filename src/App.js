import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Societies from "./pages/societies/Societies"
import Blog from "./pages/blog/Blog";
import Explore from "./pages/explore/Explore";
// import Single from "./pages/single/Single";
// import Settings from "./pages/settings/Settings";
import Account from "./pages/login/Account";
import GitGithub from "./pages/git-github/GitGithub";
import OpenSource from "./pages/open-source/OpenSource";

function App() {
  // const user = false;
  // const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/explore/git-github" component={GitGithub} />
        <Route exact path="/explore/open-source" component={OpenSource} />
        <Route exact path="/societies" component={Societies} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/account" component={Account} />
        {/* <Route exact path="/single" component={Single} /> */}
        {/* <Route exact path="/settings" component={Settings} /> */}
      </Switch>
    </Router>
  );
}

export default App;
