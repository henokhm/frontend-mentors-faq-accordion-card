import Accordion from "./components/accordion";
import faqsData from "./faqs.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Accordion>
          <Accordion.Title>FAQ</Accordion.Title>
          <Accordion.ItemsContainer>
            {faqsData.map((item) => (
              <Accordion.Item key={item.id}>
                <Accordion.ItemHeader>
                  <Accordion.ItemTitle>{item.question}</Accordion.ItemTitle>
                  <Accordion.ItemCollapeseIcon src="" alt="" />
                </Accordion.ItemHeader>
                <Accordion.ItemBody>{item.answer}</Accordion.ItemBody>
              </Accordion.Item>
            ))}
          </Accordion.ItemsContainer>
        </Accordion>
        <img src="./images/illustration-woman-online-desktop.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
