import React from 'react';
import Calendar from './calendar.js';
import Lineup from './lineup.js';

class Sidebar extends React.Component {
  render(){
    return (
      <div id="sidebar">
        <section id="sidecontain">

          <Calendar />
          <Lineup />
          
        </section>
    </div>
    )
  }
}
export default Sidebar;
