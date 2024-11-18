import boyprofile4 from "./assets/boyprofile4.png";
import { Image } from "react-bootstrap";


function About() {
    const aboutlist = [
      {
        heading: "About",
        info: "Hi! i'm Harrypoter",
      },
      { heading: "Joined", info: "November 14,2012" },
      { heading: "Lives", info: "New York,USA" },
      { heading: "E-Mail", info: "theharrypoter@yahho.com" },
      { heading: "Website", info: "www.harrypotter.com" },
      { heading: "Intrests", info: "Acting,Painting" },
      { heading: "Sports", info: "Football,Cricket" },
    ];
  
    return (
      <div className="about-details-container">
            <Image src={boyprofile4} rounded className="profile-image" />

          {aboutlist.map((title,index)=>(<div key={index} className="sibebar-item"><p className="title-heading">{title.heading} :</p>
              <p className="about-info">{title.info}</p></div>))}
        
      </div>
    );
  }
  
  export default About;