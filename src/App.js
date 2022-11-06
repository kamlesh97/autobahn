import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/editpost/:id" component={EditPost} />
      </Switch>
    </div>
  );
}

export default App;
