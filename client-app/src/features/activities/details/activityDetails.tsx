import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps, Link } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";
import ActivityDetailedChat from "./ActivityDetailedChat";


interface DetailsParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailsParams>> = ({
  match
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity,match.params.id]);

  if (loadingInitial)
    return <LoadingComponent content="loading activity..." />;

    if (!activity) {
      return <h2>Not </h2>;
    }

  return (

    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity}/>
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
      <ActivityDetailedSideBar/>
      </Grid.Column>
    </Grid>

  );
};

export default observer(ActivityDetails);
