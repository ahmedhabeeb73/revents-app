import React, { Component } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

class EventDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
           <EventList/>
          </GridColumn>
          <GridColumn width={6}>
            <EventForm/>
          </GridColumn>
        </Grid>
      </div>
    )
  }
}


export default EventDashboard;