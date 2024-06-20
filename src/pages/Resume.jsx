import resume from '../../assets/Garnsey_Resume_Fullstack.pdf';
export default function Resume(){

  return (
    <div>
      <h3>Resume</h3>
      <div>
        <a download="Resume" href={resume} target='_blank'>Download my resume</a>
      </div>
      <div>
        <h4>Front-end Proficiencies</h4>
        
        <ul className="">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>Handlebars</li>
        </ul>
        
      </div>
      <div>
        <h4>Back-end Proficiencies</h4>
        
        <ul className="">
          <li>APis</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>Graphql</li>
        </ul>
        
      </div>
    </div>
  );
}