import suggestpeople from "./assets/suggestpeople.png";
import allpeople from "./assets/allpeople.png";


function Friends() {
  return (
    <div>
      <div>
        <p className="title-heading" >Friends for you</p>
        <img className="latest-fleid-img" src={allpeople} />
      </div>
      <div>
        <p className="title-heading">Friends You may know</p>
        <img className="latest-fleid-img" src={suggestpeople} />
      </div>

    </div>
  );
}

export default Friends;
