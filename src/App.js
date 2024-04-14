import './App.css';
import {useState} from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  function handleQuote() {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
        setQuotes(data);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <section>
        <button onClick={handleQuote}>New Quote</button>
        <h3>
          <span>" </span>
          {quote.text}
          <span>" </span>

        </h3>
        <i>- {quote.author}</i>
      </section>
    </div>
  );
}

export default App;
