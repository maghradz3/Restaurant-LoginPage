import React from "react";

import classes from "./App.module.css";
import { AuthCont } from "./components/authorization";

const App = () => {
  return (
    <div className={classes.App}>
      <AuthCont />
    </div>
  );
};

export default App;
