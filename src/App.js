import HomePage from "./components/homePage";
import Layout from "./layout";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ServicesPage from "./components/ServisesPage/ServicesPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ProductionPage from "./components/ProductionPage/ProductionPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/production/:productName" component={ProductionPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />

        <Route path="*" exact component={ErrorPage} />
      </Switch>
    </Layout>
  );
}

export default App;
