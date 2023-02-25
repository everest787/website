import snowmanPicture from '../img/Snowman.jpg';

function Home() {
  return (
    <div className="container container__home">
      <main className="personal">
        <h1 className="personal__name">
          Chelsea Everest
        </h1>
        <figure className="personal__item">
          <img src={snowmanPicture} alt="Snowman and I" className="personal__photo"/>
        </figure>
      </main>
      <div className="content">
        <div className="content__about-me">
          About Me
        </div>
        <div className="content__pitch">
          <p className="content__pitch-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed urna iaculis, pretium mauris id, imperdiet diam. Donec consectetur interdum libero eget ornare. Nunc volutpat fermentum elementum. Fusce dignissim aliquet enim et ultrices. Praesent venenatis non magna at venenatis. Pellentesque ut diam porttitor, mollis quam et, ultricies lectus. Maecenas cursus justo sit amet vehicula vulputate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
