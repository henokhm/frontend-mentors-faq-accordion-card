import faqsData from "./faqs.json";

function App() {
  return (
    <div className="App">
      <div className="container"></div>

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
