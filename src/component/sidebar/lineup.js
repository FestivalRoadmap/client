import React from 'react';
import UpcomingFest from './fest.js'

class Lineup extends React.Component {
  render(){
    return (
      <section id="newlineups">
        <p id="newlinehead"> New Lineups </p>

          <UpcomingFest />
          <UpcomingFest />
          <UpcomingFest />
          <UpcomingFest />
          <UpcomingFest />
          <UpcomingFest />

        <p id="personalrec"> Find Personalized Recommendations </p>
      </section>
    )
  }
}
export default Lineup;
