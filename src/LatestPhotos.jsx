import harrypotterfrnds from "./assets/harrypotterfrnds.png";
import Suggestions from "./Suggestions";

function LatestPhotos() {
  return (
    <div className="latestphotos-container">
      <div className="latest-photos">
        <p className="title-heading">Latest Photos</p>
        <img className="latest-fleid-img" src={harrypotterfrnds} />
        <p>
          Harry Potter has left an indelible mark on popular culture, inspiring
          generations with its magical tale of heroism and friendship
        </p>
      </div>

      <Suggestions />
    </div>
  );
}

export default LatestPhotos;
