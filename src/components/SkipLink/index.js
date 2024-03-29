import styled from 'styled-components';

const SkipLink = () => {
  const handleClick = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    window.scrollTo({ top: windowHeight, left: 0, behavior: 'smooth' });
  };
  return (
    <SkipButton name="skip to content" onClick={handleClick}>
      Skip to content
    </SkipButton>
  );
};

const SkipButton = styled.button`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  background-color: black;
  font-size: 14px;
  color: white;
  left: calc(50% - 50px);
  padding: 8px;
  margin: 0;
  border: none;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 100ms;

  &:focus {
    transform: translateY(0%);
  }
  &:focus-within {
    transform: translateY(0%);
  }
`;

export default SkipLink;
