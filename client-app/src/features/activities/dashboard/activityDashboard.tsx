import React, {  useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "../dashboard/activityList";
import ActivityDetails from "../details/activityDetails";
import ActivityForm from "../Form/activityForm";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";


const ActivityDashboard = () => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity } = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList/>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails/>
        )}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            activity={selectedActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
