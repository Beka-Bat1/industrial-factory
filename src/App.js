import "./App.css";
import HomePage from "./components/homePage";
import Layout from "./layout";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/"  exact component={HomePage} />
        <Route path="/services" component={ErrorPage} />
        <Route path="*" exact component={ErrorPage} />
      </Switch>
    </Layout>
  );
}

export default App;
