import { Row, ArticleCol, TitleCol } from 'components/util';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -250px 0
  }
  100% {
    background-position: 900px 0
  }
`;

const GhostBlock = styled.div`
  animation-duration: 2400ms;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: ease-in-ease-out;
  background: #eee;
  background: linear-gradient(30deg, #eee 8%, #ddd 18%, #eee 33%);
  position: relative;
`;

const GhostHeader = styled(GhostBlock)`
  height: 40px;
  margin-bottom: 28px;
  border-radius: 5px;
`;
const GhostText = styled(GhostBlock)`
  height: 16px;
  margin-bottom: 12px;
  border-radius: 5px;
`;
const Container = styled.div`
  margin-top: 60px;
  margin-top: 40px;
`;

const GhostLoader = () => (
  <Container>
    <Row>
      <TitleCol>
        <GhostHeader />
      </TitleCol>
    </Row>
    <Row>
      <ArticleCol>
        <GhostText />
        <GhostText />
        <GhostText />
        <GhostText />
        <GhostText />
      </ArticleCol>
    </Row>
  </Container>
);

export default GhostLoader;
