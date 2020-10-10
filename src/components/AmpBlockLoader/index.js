import Chat from 'blocks/Chat';
import Img from 'blocks/Img';
import IntroText from 'blocks/IntroText';
import Links from 'blocks/Links';
import Result from 'blocks/Result';
import SectionTitle from 'blocks/SectionTitle';
import SummaryList from 'blocks/SummaryList';
import TextWithTitle from 'blocks/TextWithTitle';
import VerticalSummaryList from 'blocks/VerticalSummaryList';
import VideoCarousel from 'blocks/VideoCarousel';

const AmpBlockLoader = (props) => {
  const { blocks } = props;

  const renderedBlocks = blocks.map((block, i) => {
    switch (block.type) {
      case 'Chat':
        return <Chat key={i} data={block.data} />;
      case 'Img':
        return <Img key={i} data={block.data} />;
      case 'IntroText':
        return <IntroText key={i} data={block.data} />;
      case 'Links':
        return <Links key={i} data={block.data} />;
      case 'Result':
        return <Result key={i} data={block.data} />;
      case 'SectionTitle':
        return <SectionTitle key={i} data={block.data} />;
      case 'SummaryList':
        return <SummaryList key={i} data={block.data} />;
      case 'TextWithTitle':
        return <TextWithTitle key={i} data={block.data} />;
      case 'VerticalSummaryList':
        return <VerticalSummaryList key={i} data={block.data} />;
      case 'VideoCarousel':
        return <VideoCarousel key={i} data={block.data} />;
      default:
        return <div />;
    }
  });
  return renderedBlocks;
};

export default AmpBlockLoader;
