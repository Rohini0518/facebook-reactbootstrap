import suggestpeople from "./assets/suggestpeople.png";
import allpeople from "./assets/allpeople.png";

function Suggestions() {
  const suggestionList = [
    { title: "Suggestions for you", image: allpeople },
    { title: "Friends You may know", image: suggestpeople },
  ];
  return (
    <div>
      {suggestionList.map((item, index) => (
        <div key={index}>
          <p className="title-heading">{item.title}</p>
          <img className="latest-fleid-img" src={item.image} />{" "}
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
