import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

class QuoteGenerator extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
 quotes: [
{quote: "All our dreams can come true; if we have the courage to pursue them.",
 author: "– Walt Disney"},
{quote: "However difficult life may seem, there is always something you can do and succeed at.",
 author: "– Stephen Hawking"},
{quote: "It always seems impossible until it's done.",
 author: "– Nelson Mandela"},
{quote: "Success isn't overnight. It’s when everyday you get a little better than the day before. It all adds up.",
 author: "– Dwayne Johnson"},
{quote: "It does not matter how slowly you go as long as you do not stop.",
 author: "– Confucius"},
{quote: "Do what you can, with what you've got, where you are.",
 author: "– Teddy Roosevelt"},
{quote: "Success consists of going from failure to failure without loss of enthusiasm.",
 author: "– Winston Churchill"},
{quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
 author: "– Thomas A. Edison"},
{quote: "There are no limits. There are only plateaus, and you must not stay there — you must go beyond them.",
 author: "– Bruce Lee"},
{quote: "The best revenge is massive success.",
 author: "– Frank Sinatra"},
{quote: "Failure is success in progress.",
 author: "– Albert Einstein"},
{quote: "Most people give up just when they're about to achieve success. They quit on the one yard line. They give up at the last minute of the game one foot from a winning touchdown.",
 author: "– Ross Perot"},
{quote: "Success does not consist in never making mistakes but in never making the same one a second time.",
 author: "– George Bernard Shaw"},
{quote: "Failures, repeated failures, are finger posts on the road to achievement. One fails forward toward success.",
 author: "– C. S. Lewis"},
{quote: "Even a mistake may turn out to be the one thing necessary to a worthwhile achievement.",
 author: "– Henry Ford"},
{quote: "It is hard to fail, but it is worse never to have tried to succeed.",
 author: "– Theodore Roosevelt"},
{quote: "In order to attain the impossible, one must attempt the absurd.",
 author: "– Miguel de Cervantes"},
{quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.",
 author: "– Booker T. Washington"},
{quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
 author: "– Colin Powell"},
{quote: "Work hard in silence, let your success be your noise.",
 author: "– Frank Ocean"},
{quote: "All you need in this life is ignorance and confidence, and then success is sure.",
 author: "– Mark Twain"},
{quote: "I attribute my success to this – I never gave or took any excuse.",
 author: "– Florence Nightingale"},
{quote: "For success, attitude is equally as important as ability.",
 author: "– Walter Scott"},
{quote: "The ladder of success is best climbed by stepping on the rungs of opportunity.",
 author: "– Ayn Rand"},
{quote: "There are people who make things happen, there are people who watch things happen, and there are people who wonder what happened. To be successful, you need to be a person who makes things happen.",
 author: "– Jim Lovell"}
], 
 colors: ["rgba(255, 0, 0, 0.4)",
 "rgba(0, 0, 255, 0.5)",
 "rgb(39, 174, 96)",
 "rgb(52, 34, 36)",
 "rgba(255, 127, 0, 0.7)",
 "rgb(231, 76, 60)",
 "rgba(0, 127, 255, 0.8)",
 "rgb(243, 156, 18)",
 "rgba(127, 0, 255, 0.8)",
 "rgba(127, 127, 127, 1)"], 
 quoteNum: Math.floor(Math.random() * 25), 
 colorNum: Math.floor(Math.random() * 10)
  };
  }  
  
  getNewQuote = (event) => {
    this.setState((state) => ({quoteNum: Math.floor(Math.random()*25), colorNum: Math.floor(Math.random()*10)}));
  }

  render() {
    let quoteNum = this.state.quoteNum;
    let colorNum = this.state.colorNum;
    let quote = this.state.quotes[quoteNum];
    let color = this.state.colors[colorNum];
    
    return (
      <div id="wrapper" className={'enter'} key= {Math.random()} style={{backgroundColor: color}}>
        <div id="quote-box" style={{color: color}}>
          <div id="text">"{quote.quote}"</div>
          <div id="author">{quote.author}</div>
          <div className="clickables">
            <div className="socials">
              <a href="twitter.com/intent/tweet" title="Tweet this quote!" style={{color: color}} target="_blank" id="tweet-quote"><i className="fa fa-twitter-square" /></a>
              <a href="facebook.com" title="Post this quote on facebook!" style={{color: color}} target="_blank" id="post-quote-on-facebook"><i className="fa fa-facebook-square" /></a>
            </div>
            <button id="new-quote" onClick= {this.getNewQuote} style={{backgroundColor: color}}>New quote</button>
          </div>
        </div>
        <footer>for <a href="www.freecodecamp.org" target="_blank">freeCodeCamp</a></footer>
      </div>
    );
  }
}

ReactDOM.render(<QuoteGenerator/>, document.getElementById('target'));
