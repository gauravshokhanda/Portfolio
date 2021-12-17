import "./about.css";
import gaurav from "../../img/gaurav.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={gaurav}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello  I am Gaurav Shokhanda !
        </p>
        <p className="a-desc">
         Hello I am Self Taught Full-Stack Developer. and Graduate From CCS University .My Skills are HTML CSS JAVASCRIPT REACT MOGODB EXPRESS NODEJS . Make many Projects in React To Understand the Fundamentals.
        <br></br>
        <br>
        </br>
        <a href="https://github.com/gauravshokhanda" target="_blank" rel="noreferrer" >
        My GitHub
        </a>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <a href="https://www.instagram.com/gauravshokhanda/">
        My Instagram
        </a>
        </p>
        
      </div>
    </div>
  );
};

export default About;
