import React from "react";
import "./App.css";
import SkillsPage from "./components/skills/SkillsPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManageSkillPage from "./components/skills/ManageSkillPage";
import SearchEmployee from "./components/skills/SearchEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./reducers/store";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <div className="container">
              <Switch>
                <Route exact path="/" component={SkillsPage} />
                <Route exact path="/create-skill" component={ManageSkillPage} />
                <Route
                  exact
                  path="/create-skill/:id"
                  component={ManageSkillPage}
                />
                <Route exact path="/SearchEmployee" component={SearchEmployee} />
              </Switch>              
            </div>
            <ToastContainer autoClose={3000} hideProgressBar />
          </div>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
