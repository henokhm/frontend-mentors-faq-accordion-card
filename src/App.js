import faqsData from "./faqs.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>FAQ</h1>
      {faqsData.map((item) => (
        <div key={item.id}>
          <div>Question: {item.question}</div>
          <div>Answer: {item.answer}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
