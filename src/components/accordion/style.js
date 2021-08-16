import styled from "styled-components/macro";

//     --very-dark-desaturated-blue
//     --soft-red
//     --very-dark-grayish-blue
//     --dark-grayish-blue
//     --light-grayish-blue

export const AccordionContainer = styled.div``;

export const Title = styled.h1`
  color: var(--very-dark-desaturated-blue);
  text-align: center;
`;

export const ItemsContainer = styled.div``;

export const Item = styled.div`
  padding-bottom: 1em;
  border-bottom: var(--light-grayish-blue) 1px solid;
`;

export const ItemHeader = styled.div`
  color: var(--very-dark-grayish-blue);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  cursor: pointer;
`;

export const ItemTitle = styled.h2`
  font-size: 1.1em;
  font-weight: 400;
`;

export const ItemCollapeseIcon = styled.img`
  height: 0.75em;
`;

export const ItemBody = styled.div`
  color: var(--dark-grayish-blue);
  line-height: 1.4em;
`;
