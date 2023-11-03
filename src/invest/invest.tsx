import Navbar from "../About/navbar";
import Footer from "../footer";
import "./invest.css"
const Invest = () => {
    return ( 
        <div className="invest">
            <div className="hero">
                <div className="navbar"><Navbar />
</div>

<h3>Trade, not aid</h3>
<p>Southern innovations addressing <br></br>global problems</p>
</div>

<div className="nav2">
    <h2>How we see it differently</h2>
    <p>The global South is rapidly catching up with the "developed" world. It's time<br></br> for you to get to know the rapid development, innovation and drive going on <br></br>in this part of the world (East-Africa, South Asia and beyond).</p>
    <div className="img">
        <img src="/Assets/2.png" alt="img" />
    </div>
</div>

<div className="figures">
    
    <h1>Key figures</h1>
    <div className="figurecards">
        <div className="cards">
            <h2>1.3M</h2>
            <p>Approx. number of Kenyan talents reaching the age of 18 in 2022</p>
        </div>
        <div className="cards">
            <h2>5M</h2>
            <p>number of East-Africans(EAC) reaching the age of 18 in 2022</p>
        </div>
        <div className="cards">
            <h2>2022</h2>
            <p>Democratic Republic of Congo joins the East African Community</p>
        </div>
        <div className="cards">
            <h2>1.5M</h2>
            <p>The number of unfilled IT vacancies in the US and EU markets</p>
        </div>
       
        <div className="cards">
            <h2>10M</h2>
            <p>Number of technical vacancies by 2030</p>
        </div>
        <div className="cards">
            <h2>2050</h2>
            <p>Africa holds the worlds largest workforce</p>
        </div>
        <div className="cards">
            <h2>4.6M</h2>
            <p>Startup funding raised by African startups in 2022</p>

        </div>
        <div className="cards">
            <h2>310%</h2>
            <p>Increase in startup funding for companies with HQ in Kenya</p>
            
        </div>
    </div>
</div>

<div className="informartion">
    <div className="img2">
        <img src="/Assets/3.png" alt="" />
    </div>
    <div className="content">
        <h2>Elewa NV, a multi- <br></br>stakeholder cooperation</h2>
        <p>At the heart of Elewa lies the structure Elewa NV.<br></br> Based in Brussels, Belgium, Elewa NV is a private<br></br> holding company which controls the assets of all <br></br>Elewa activities.<br></br><br></br>

Elewa NV is owned and controlled by Elewa's founder, a <br></br>small community of investors which share in the vision <br></br>of Elewa and Elewa employees based throughout the <br></br>activities of the group.</p>
    </div>
</div>

<div className="information2">
    <div className="content2">
        <h2>The Elewa Creative Hub
</h2>
<p>Coming soon; The Elewa Creative Hub Lies at the heart<br></br> of our organization. A two-acre property at the center <br></br>of Nairobi's creative district, the hub connects all <br></br>Elewa's Activities under a single banner.
<br></br><br></br>
Through partnerships with creative community, the<br></br> Elewa Hub will organize vibrant activites that bring<br></br> talents from different fields (tech, business, art, <br></br>fashion) together to nurture continuous innovat</p>
    </div>
    <div className="img3">
        <img src="/Assets/4.jpg" alt="" />
    </div>
</div>

<div className="information3">
    <div className="img4"> <img src="/Assets/5.jpg" alt="" /></div>
    <div className="content3">
        <h2>Investing in Elewa NV
</h2>
<p>From time to time, we offer investment opportunities <br></br>(private equity & debt) to out community of investors.<br></br> Interested to take part when this opportunity arrives?</p>
<button className="arrow-button">
          join the waiting list
          <span className="circle"></span>
        </button>    </div>
</div>

<div className="info">
    <h2>Become part of our mission.
And start investing</h2>
</div>


<div className="footer">
    <Footer />
</div>

        </div>
     );
}
 
export default Invest;