import snowmanPicture from '../img/Snowman.jpg';

function AboutMe() {
    return (
      <div className="container container__about">
        <div className="about">
          <header className="about__header">
            <h1 className="about__header-text">
              This is me!
            </h1>
          </header>


          <div className="about__content about__content-right">            
            <div className="about__content__img">
              <figure className="about__content__figure">
                <img src={snowmanPicture} alt="Grade 4"/>
              </figure>
            </div>
            <p className="about__content__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor bibendum justo, quis fermentum nisi malesuada id. Praesent non neque eu tellus consequat euismod. Praesent condimentum enim at neque pulvinar semper. Mauris dignissim, diam a tincidunt tincidunt, justo libero luctus dolor, nec porttitor dui massa a tellus. Sed aliquet magna vel sagittis luctus. Nulla vel nisl ultrices, vestibulum mi eu, condimentum libero. Fusce non magna vitae libero imperdiet auctor. Suspendisse metus est, tincidunt ac dui vel, ultrices interdum quam. Nam eu odio suscipit, scelerisque massa a, hendrerit risus. 
            </p>
          </div>
          <div className="about__content about__content-left">            
            <div className="about__content__img">
              <figure className="about__content__figure">
                <img src={snowmanPicture} alt="Grade 4"/>
              </figure>
            </div>
            <p className="about__content__paragraph">
              Praesent enim ante, tempor a ullamcorper et, maximus sed orci. Praesent at eros egestas, cursus risus eget, congue nisi. Nunc mattis dapibus odio, id interdum quam rhoncus sodales. Morbi velit orci, vehicula sed massa ut, pretium malesuada libero. Nam non risus sit amet urna venenatis cursus in vehicula orci. Praesent sodales, justo et porttitor volutpat, sem velit vestibulum metus, at blandit arcu ante id nulla. Integer in enim orci. Nulla mollis mi vel ligula tincidunt tempor. In id tellus ut eros vestibulum cursus non vel turpis. Nam mollis metus tellus, ac aliquet quam pharetra vel. 
            </p>
          </div>
          <div className="about__content about__content-right">
            <div className="about__content__img">
              <figure className="about__content__figure">
                <img src={snowmanPicture} alt="Grade 4"/>
              </figure>
            </div>
            <p className="about__content__paragraph">
              Ut mattis ipsum vitae tortor finibus fringilla. Duis dictum leo in velit pharetra, consectetur ullamcorper libero pellentesque. Maecenas elementum nulla vel nisi mattis faucibus. Nam tristique orci in egestas venenatis. Mauris tempus, est ac rhoncus porttitor, eros arcu auctor leo, at congue tortor augue non turpis. Donec lobortis efficitur quam, quis auctor risus maximus at. Quisque facilisis efficitur augue, et mollis magna placerat in. Mauris egestas lobortis diam, eu fermentum turpis consectetur sit amet. Duis quis lacus vel quam accumsan auctor. Aliquam egestas suscipit molestie. Nulla id tincidunt sapien. 
            </p>

          </div>
        </div>
        
      </div>
    );
  }
  
  export default AboutMe;
  