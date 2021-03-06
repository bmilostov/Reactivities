import React, {  Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../features/nav/NavBar";
import ActivityDashboard from "../features/activities/dashboard/activityDashboard";
import ActivityForm from "../features/activities/Form/activityForm";
import ActivityDetails from "../features/activities/details/activityDetails";
import HomePage from "../features/home/HomePage";
import {ToastContainer} from 'react-toastify';

import { observer } from "mobx-react-lite";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import NotFound from "./layout/NotFound";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <ToastContainer position='bottom-right'/>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
