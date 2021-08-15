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
  return <Item {...restProps}>{children}</Item>;
};

Accordion.ItemHeader = function AccordionItemHeader({
  children,
  ...restProps
}) {
  return <ItemHeader {...restProps}>{children}</ItemHeader>;
};

Accordion.ItemTitle = function AccordionItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Accordion.ItemCollapeseIcon = function AccordionItemCollapeseIcon({
  children,
  ...restProps
}) {
  return <ItemCollapeseIcon {...restProps} />;
};

Accordion.ItemBody = function AccordionItemBody({ children, ...restProps }) {
  return <ItemBody {...restProps}>{children}</ItemBody>;
};

export default Accordion;
