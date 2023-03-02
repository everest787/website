function Question() { 
  return (  
    <div className="blog-page__blog-details__content">
      <p>
        &emsp;
        Imagine there existed a computer that had all the information of the universe at any given moment stored 
        within it, and it had the capabilities to run a simulation of that universe, would the computer be 
        able to perfectly predict anything that could happen or any choice any person might make?<br/><br/>
        &emsp;
        I have gotten very different answers from many different people on this question. 
        Some people will argue that no, the computer would not be able to predict everything, there is just too 
        much randomness in the universe for that.<br/><br/>
        &emsp;
        Others will argue that yes, by definition the computer would be able to perfectly simulate everything, 
        because this computer is theoretical and theoretically it knows everything, so why would it not be able to?<br/><br/>
        &emsp;
        When I originally thought of this question, I fell into the second camp. If a computer knew everything 
        and could perfectly simulate the universe, then of course it would be able to predict anything that could 
        ever happen. <br/><br/>
        &emsp;
        I have recently changed my mind on this though, as not too long ago I came across this 

        <a href="https://youtu.be/HeQX2HjkcNo" className="blog-page__blog-details__link" target="_blank" rel="noreferrer"> Veritasium video </a>

        on YouTube. The video discusses whether or not our system of Math is Complete, Consistent, and Decidable:<br/><br/>

        <b>Complete:</b> Is there a way to prove every true statement?<br/><br/>

        <b>Consistent:</b> Is it free of contradictions?<br/><br/>

        <b>Decidable:</b> Is there an algorithm that can always determine if a statement follows the axioms?<br/><br/>
        &emsp;
        In 1930, Kurt Gödel proved that math was not Complete, through a flaw of self reference in Set Theory. 
        Very soon after he published a theorem that stated any formal system of math cannot prove its own consistency. 
        This means that we could always bump into something down the line that will show the system we have been 
        working with this whole time has contradictions.<br/><br/>
        &emsp;
        In 1936, Alan Turing found that math was not Decidable through the
        <a href="https://en.wikipedia.org/wiki/Halting_problem" className="blog-page__blog-details__link" target="_blank" rel="noreferrer"> Halting Problem</a>
        , which is the 
        question of whether given an input and a computer program, if that program will run forever or will halt. 
        There is no way to know if a computer program will halt on a given input, there is just no program that 
        could be built to determine that.<br/><br/>
        &emsp;
        Given all this information, in 2015 a paper was published on 
        <a href="https://arxiv.org/pdf/1502.04135.pdf" className="blog-page__blog-details__link" target="_blank" rel="noreferrer"> Undecidability of the Spectral Gap</a>
        . 
        The spectral gap is a problem in quantum mechanics, as some systems has a difference of energy from 
        it ground state to its first excited state, and some have a continuum of energy levels all the way 
        down to the ground state. This paper proved that this problem was undecidable.<br/><br/>
        &emsp;
        This brings us back to the main question and why my opinion on it changed after watching this video. 
        If math cannot prove every true statement, if it could have contradictions and there is no way to 
        build an algorithm that could determine if a statement follows the axioms, then it doesn't really 
        make sense that a computer such as the one I described could ever exist. Especially if undecidability 
        is something that exists in our physical world in the spectral gap and not just as a theory on paper. 
        A computer couldn't be created such that it would be able to perfectly predict anything that could happen, 
        so if a computer could simulate the universe as I described, it wouldn't be perfect, it simply couldn't be.<br/><br/>
        &emsp;
        I love asking this question to people because it creates a conversation that allows you to see how people 
        think, why they come to the conclusions that they do and what kinds of things are important to them. 
        Its a great conversation starter.<br/><br/>

        Do you think about this in a different way? I would love to know! Send me a message or email!<br/><br/>
      </p>
    </div>
  );
}

export default Question;