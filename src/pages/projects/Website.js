import keyboardPicture from '../../img/projects/keyboard.jpg';

function Website() {   
    return (  
        <div className="container container__home">
            <div className="container container__projects">
                <div className="project-page lined-background">
                    <div className="project-page__project-details">
                        <img className="project-page__project-details__img" src={keyboardPicture} alt="post" />
                        <div className="project-page__project-details__flex-container">
                            <h1 className="project-page__project-details__heading">This Website</h1>
                            <h3 className="project-page__project-details__date">2023/02/25</h3>
                            <h3 className="project-page__project-details__key">CSS, React, Javascript</h3>
                            <h3 className="project-page__project-details__desc">Learning CSS, and building a personal website as a place to showcase my future projects!</h3>
                        </div>
                        <p className="project-page__project-details__content">
                        &emsp;
                        I have wanted to develop a website for a long time now, but I just never had the time 
                        that I could devote to it. <br/><br/>

                        &emsp;
                        I am pretty good at Javascript, my last job was working as a back end developer in Node.js 
                        after all, but CSS in particular has always been something I feared from afar. 
                        I was always worried that one change to the CSS and the entire page would shift like 
                        when you move an image in a word document.  <br/><br/>

                        &emsp;
                        But recently I have had some time to myself and decided not to live in fear any longer, 
                        so I took 
                        <a href="https://www.udemy.com/user/jonasschmedtmann/" className="project-page__project-details__content__link" target="_blank" rel="noreferrer"> Jonas Schmedtmann's Advanced CSS course </a>
                        and started learning. 
                        Honestly, that course was amazing and he is an excellent teacher, I now feel very 
                        comfortable using CSS and his input as an experienced developer on best practices 
                        was super helpful. <br/><br/>

                        &emsp;
                        The course was about 30 hours in length, but it took me about 2 weeks to get through it 
                        as I was taking careful notes and developing the websites he was building along side him, 
                        which allowed me to sometimes pause the video and try to figure something out before he 
                        explained it.  <br/><br/>

                        &emsp;
                        Immediately after that I started working on this website, which has maybe taken me about 
                        3 weeks to develop. A lot of that time spent thinking about designs that I liked, or maybe 
                        implementing a design, realizing that it doesn't look any good and going back to the drawing 
                        board. I'm not a web designer, you see, I would say my strengths lie in back end development. 
                        But I have a lot of fun when learning new things, and watching something come together 
                        that you have put time and effort into is incredible.  <br/><br/>

                        &emsp;
                        In conclusion, I have put the code for this website up on 
                        <a href="https://github.com/everest787" className="project-page__project-details__content__link" target="_blank" rel="noreferrer"> my GitHub </a>
                        if you would like to see it. 
                        Please let me know if you have any ideas that could maybe spruce things up a bit. 
                        But mostly I hope that you have enjoyed your time here in my little corner of the internet, 
                        and hope you have a wonderful day!  <br/><br/>

                        &emsp;
                        Chelsea
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Website;