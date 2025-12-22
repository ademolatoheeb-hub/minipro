import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>Hello, my name is Ademola Toheeb</h1>
        <h2>Build Fast With React</h2>
        <p>Learn components, styling, and image integration.</p>
        <button>Get Started</button>
      </div>
      <img
        src="https://picsum.photos/400/300"
        alt="Hero"
      />
    </section>
  );
};

export default Hero;