import Series from "../api/Series.json";

const NetflixCard = () => {
  return (
    <ul className="main-content">
      {Series.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img className="Image-class"
                src={curElem.img_url}
                alt="Error generate"
              />
            </div>
            <h2>Name: {curElem.name} </h2>
            <h2>Rating: {curElem.rating} </h2>
            <h2>Genre:  {curElem.genre} </h2>
            <h2>Description: {curElem.description} </h2>
            <h2>Casting: {curElem.cast} </h2>
            <a  href= {curElem.watch_url} target="...blank">
              <button className="buttonA">Watch now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixCard;
