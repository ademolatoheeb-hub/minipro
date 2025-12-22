import "./Card.css";

const Card = ({ title, img }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>This is a simple card component.</p>
    </div>
  );
};

export default Card;