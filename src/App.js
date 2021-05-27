import "./App.css";
import HomePage from "./components/homePage";
import Layout from "./layout";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Layout>
  );
}

export default App;
