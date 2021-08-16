import { useState, useContext, createContext } from "react";
import {
  AccordionContainer,
  Title,
  ItemsContainer,
  Item,
  ItemHeader,
  ItemTitle,
  ItemCollapeseIcon,
  ItemBody,
} from "./style";

const ToggleContext = createContext();

function Accordion({ children, ...restProps }) {
  return <AccordionContainer {...restProps}>{children}</AccordionContainer>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.ItemsContainer = function AccordionItemsContainer({
  children,
  ...restProps
}) {
  return <ItemsContainer {...restProps}>{children}</ItemsContainer>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.ItemHeader = function AccordionItemHeader({
  children,
  ...restProps
}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <ItemHeader onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
    </ItemHeader>
  );
};

Accordion.ItemTitle = function AccordionItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Accordion.ItemCollapeseIcon = function AccordionItemCollapeseIcon({
  children,
  ...restProps
}) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <ItemCollapeseIcon
      {...restProps}
      className={toggleShow ? "invert" : null}
    />
  );
};

Accordion.ItemBody = function AccordionItemBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <ItemBody {...restProps} className={toggleShow ? "open" : "closed"}>
      {children}
    </ItemBody>
  );
};

export default Accordion;
