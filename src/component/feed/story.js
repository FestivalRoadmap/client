import React from 'react';

class Story extends React.Component {
  render(){
    return (
      <section className="stories">

             <p className="profileicon">
             </p>
             <p className="username">
               Sol.Winer
             </p>
               <p className="festivalname">
               [Festival Name]
             </p>

             <p className="datetime">
               Date/Time <br /><br /><br />
               * * * * *


             </p>

             <p className="storytext">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque mattis neque sit amet tempor.
      <br />
      <br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc in erat ut quam iaculis pulvinar sit amet ut justo. Duis et nisi mauris.
      <br />
      <br />
      Sed porttitor, ex eu finibus lobortis, tellus urna facilisis elit, nec porttitor tellus augue non arcu. Sed viverra eget libero quis tincidunt. Curabitur a risus orci.
      <br />
      <br />
      Vivamus metus ante, vestibulum eget odio ac, ultrices vestibulum nunc. Duis aliquet mi eu justo tincidunt iaculis sit amet sit amet ex.

             </p>
             <article className="commentbar">
             <img className="thumbsup" src="https://i.imgur.com/lBQIyRC.png" />
             <img className="thumbsdown" src="https://i.imgur.com/sjQPXIX.png" />
               <p className="votes">
               </p>
             </article>

             </section>
    )
  }
}
export default Story;
