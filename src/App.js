import Accordion from "./components/accordion";
import faqsData from "./faqs.json";
import arrowDown from "./images/icon-arrow-down.svg";

import styled from "styled-components/macro";

const AppStyles = styled.div`
  display: grid;
  place-items: center;
`;

const ContainerStyles = styled.main`
  background: #fff;
  border-radius: 2em;
  padding: 2em;
  min-width: 350px;
  display: flex;
  flex-direction: column-reverse;
`;

function App() {
  return (
    <div className="App">
      <ContainerStyles className="container">
        <Accordion>
          <Accordion.Title>FAQ</Accordion.Title>
          <Accordion.ItemsContainer>
            {faqsData.map((item) => (
              <Accordion.Item key={item.id}>
                <Accordion.ItemHeader>
                  <Accordion.ItemTitle>{item.question}</Accordion.ItemTitle>
                  <Accordion.ItemCollapeseIcon
                    src={arrowDown}
                    alt="Expand or collapse accordion item icon"
                  />
                </Accordion.ItemHeader>
                <Accordion.ItemBody>{item.answer}</Accordion.ItemBody>
              </Accordion.Item>
            ))}
          </Accordion.ItemsContainer>
        </Accordion>
        <img src="./images/illustration-woman-online-desktop.svg" alt="" />
      </ContainerStyles>
    </div>
  );
}

export default App;
