import Navbar from "./navbar";
import Footer from "../footer";
import "./about.css"
const About = () => {
    return ( 
<div className="about-container">
  
 <div className="info">
 <Navbar />

    <h3>HOW TO RECOGNIZE AN ELEWA MEMBER</h3>
    <h2>Dependable, Creative, Supportive, Open Minded and Fun*</h2>
    <h4>*SERIOUS WHEN IT MATTERS</h4>

 </div>
<div className="care">
    <h1>We Care!</h1>
    <div className="cards">
    <div className="paragraph">
        <p>Elewa is a mission-driven organization. We make <br></br>use of our cooperative and shared culture to <br></br>drive the needle for the development of people <br></br>and environment. We care about our growth, but <br></br>also care deeply about the context surrounding us.</p>
    </div>
    <div className="paragraph">
        <p>Our investments are therefore not limited to<br></br> internal ones, but contribute heavily to our <br></br>community and environment. From training the <br></br>next scout leaders on sustainable practices, to <br></br>bridging the employment gap for junior software <br></br>developers.</p>
<div/>
</div>
</div>

<div className="solns">
    <div className="images">
        <img src="" alt="" />
        <h3>We go beyond a simple patch-up but develop lasting solutions through holistic design.</h3>
    </div>
    <div className="images">
        <img src="" alt="" />
        <h3>Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</h3>
    </div>
    <div className="images">
        <img src="" alt="" />
        <h3>Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</h3>
    </div>
</div>
 <div className="footer">
< Footer />
 </div>
    </div>





    </div>);
}
 
export default About;