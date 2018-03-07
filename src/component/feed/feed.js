import React from 'react';
import Story from './story.js'

class Feed extends React.Component {
  render(){
    return (
      <div id="content">
        <div id="concontain">
          <p id="conheadbox">
            FEATURED STORIES
          </p>
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
      </div>
    )
  }
}
export default Feed;
