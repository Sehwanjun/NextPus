import styled from "styled-components";

const padding = "3em";

const Section = styled.section`
  color: white;
  /* Pass variables as inputs */
  padding: ${padding};
  /* Adjust the background from the properties */
  background: ${props => props.background};
`;

render(<Section background="cornflowerblue">Magic</Section>);

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

// input 스타일

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

render(
  <>
    <Input small placeholder="Small" />
    <Input placeholder="Normal" />
    <Input padding="2em" placeholder="Padded" />
  </>
);

// "as" polymorphic prop"
//This sort of thing is very useful in use cases like a navigation bar where some of the items should be links and some just buttons,
// but all be styled the same way.

const Component = styled.div`
  color: red;
`;

render(
  <Component as="button" onClick={() => alert("It works!")}>
    Hello World!
  </Component>
);

//꾸미기

const Example = styled.div`
  /* all declarations will be prefixed */
  padding: 2em 1em;
  background: papayawhip;

  /* pseudo selectors work as well */
  &:hover {
    background: palevioletred;
  }

  /* media queries are no problem */
  @media (max-width: 600px) {
    background: tomato;

    /* nested rules work as expected */
    &:hover {
      background: yellow;
    }
  }
  > p {
    /* descendant-selectors work as well, but are more of an escape hatch */
    text-decoration: underline;
  }
  /* Contextual selectors work as well */
  html.test & {
    display: none;
  }
`;
render(
  <Example>
    <p>Hello World!</p>
  </Example>
);
