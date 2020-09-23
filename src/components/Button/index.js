import styled from 'styled-components';

const Button = (props) => {
  const { label, href, children } = props;
  if (href) {
    return (
      <ABlock style={props.style} href={href} target="_blank" rel="noopener noreferrer">
        <StyledButton name={label} col={props.col} bgColor={props.bgColor}>
          {label || children}
        </StyledButton>
      </ABlock>
    );
  }
};

export default Button;

const ABlock = styled.a`
  display: inline-block;
  text-decoration: none;
`;

const StyledButton = styled.button`
  font-size: 12px;
  letter-spacing: 0.195em;
  text-transform: uppercase;
  color: ${(props) => (props.col ? props.col : '#fff')};
  text-transform: uppercase;
  height: 44px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#333')};
  border: 0;
  transition: color 200ms ease-in-out;
  cursor: pointer;

  @media not all and (hover: none) {
    &:hover {
      background-color: PAPAYAWHIP;
    }
  }

  &:focus {
    background-color: PAPAYAWHIP;
  }

  &:disabled {
    cursor: auto;
    background-color: #ccc;
  }
`;
