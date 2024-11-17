import React, { useEffect }from "react";
import './Home.css'; 
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {useEffect(() => { AOS.init();
 AOS.refresh(); }, []);
return (
 <>
 <div className="background">
 <center>
                    
<div className="card mb-3">
<img src="https://robknappdesign.com/wp-content/uploads/2021/07/golds-gym-socal-logo-featured-1080x608.jpg" className="card-img-top" alt="..." style={{width:"100%",margin:"0"}}></img>
<h1 className="card-title">Welcome to the Ultimate Beginner’s Guide to the Gym!</h1>
<p className="card-text">Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy.<br></br> Hence, it is always best to find a workout routine no matter how busy you are. With the numerous diseases that have spread today, many individuals have realized the essence of working out. Specifically, having a workout routine will give an individual the greatest physical, mental, and social benefits. Accordingly, exercise .<br></br> And joining fitness classes is just at your fingertips. Today, we will provide you with ample gym websites designed to help fitness enthusiasts and personal trainers craft unique gym websites with innovation.</p><br></br>
</div>
<hr /> 
<hr></hr><br></br>

<div data-aos="zoom-in" className="card" style={{ marginBottom: "10%" }}>
<img src="https://www.garagegymreviews.com/wp-content/uploads/online-personal-trainer-cover-image.jpeg" className="card-img-top" alt="..." style={{ width: "50%", height: "50%", float: "left" }}></img>
<div className="card-body">
<h1 className="card-title">ONLINE PERSONAL TRAINING</h1>
<div className="jodd"></div>
<p className="card-text"> Gold’s Gym Fitness Institute was started on World Health Day on 7th April 2006. It’s been more than a decade of educating people in fitness. Every year 1000+ students pass out of the institute. Gold’s Gym Fitness Institute offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects of the fitness industry.
Gold’s Gym Fitness Institute is the only Advanced Personal <br></br><br></br>Trainer Program, which offers you low-cost tuition, fast test results and complete career development. Becoming a Gold’s Gym Fitness Institute certified Advanced Personal trainer is your foundation for success. It offers you complete approach to fitness, wellness and business skills. Make an investment in yourself and become a Gold’s Gym Fitness Institute certified Personal Trainer.</p>
</div>
</div>


<div data-aos="zoom-in" className="card" style={{ marginBottom: "10%",textAlign:"center" }}>
<img src="https://ravefitnessstudio.com/wp-content/uploads/2021/11/personal-fitness-training-rave-fitness-studio.jpg" className="card-img-top" alt="..." style={{ width: "50%", height: "50%"}}></img>
<div className="card-body">
<div className="jood">
<h1 className="card-title">OFFLINE PERSONAL TRAINING</h1>
<p className="card-text"> Gold’s Gym Fitness Institute was started on World Health Day on 7th April 2006. It’s been more than a decade of educating people in fitness. Every year 1000+ students pass out of the institute. Gold’s Gym Fitness Institute offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects of the fitness industry.
Gold’s Gym Fitness Institute is the only Advanced Personal <br></br><br></br>Trainer Program, which offers you low-cost tuition, fast test results and complete career development. Becoming a Gold’s Gym Fitness Institute certified Advanced Personal trainer is your foundation for success. It offers you complete approach to fitness, wellness and business skills. Make an investment in yourself and become a Gold’s Gym Fitness Institute certified Personal Trainer.</p>
</div>
</div>
</div>
<hr /> 
</center>
</div>
</>
 );
};

export default Home;
