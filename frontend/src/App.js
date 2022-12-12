// In Built Modules
import { Fragment } from "react";
import { Provider } from "react-redux";

// CSS
import "./assets/css/app.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/normalize.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/icomoon.css";
import "./assets/css/jquery-ui.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets/css/transitions.css";
import "./assets/css/main.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import "./assets/css/custom.css";

// Custom Modules
import MainLayout from "./hoc/layout/MainLayout";
import RoutesComponent from "./routes/index";

import store from "./store";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Provider store={store}>
          <MainLayout>
            <RoutesComponent />
          </MainLayout>
        </Provider>
      </div>
    </Fragment>
  );
}

export default App;
