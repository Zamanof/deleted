import React, { Fragment } from "react";
import Layout from "../layout/layout/index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/index.js";
import Advert from "../../pages/advert/index.js";
import ProfessionalView from "../../pages/professional-view/index.js";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/advert"} element={<Advert />} />
            <Route path={"/professionals"}>
              <Route path={":id"} element={<ProfessionalView />} />
            </Route>
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
