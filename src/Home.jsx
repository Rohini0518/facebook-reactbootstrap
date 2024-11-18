import Header from "./Header";
import LatestPhotos from "./LatestPhotos";
import SideBar from "./SideBar";
import SocialFeed from "./SocialFeed";

function Home() {
  return (
    <div>
      <Header />
      <div className="profile-section-container">
        <SideBar />
        <SocialFeed />
        <LatestPhotos />
      </div>
    </div>
  );
}

export default Home;
