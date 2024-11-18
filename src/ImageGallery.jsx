import harrypotterfrnds from "./assets/harrypotterfrnds.png";
import allpeople from "./assets/allpeople.png";
import boyprofile4 from "./assets/boyprofile4.png";
import girlprofile from "./assets/girlprofile.png";

function ImageGallery() {
  const imageslist = [
    harrypotterfrnds,
    allpeople,
    boyprofile4,
    girlprofile,
  ];
  return (
    <div className="photo-gallery">
      <p className="title-heading">Latest Photos</p>
      {imageslist.map((picture, index) => (
        <img className="latest-fleid-img" src={picture} />
      ))}
    </div>
  );
}

export default ImageGallery;
