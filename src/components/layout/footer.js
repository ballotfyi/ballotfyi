import styled from 'styled-components'
import Link from 'next/link';

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`
const FooterItem = styled.div`
  font-size: 12px;
  letter-spacing: 0.095em;
  text-transform: uppercase;
  padding: 5px 20px;
  cursor: pointer;
  margin-left: 30px;
  text-align: center;
  border-radius: 15px;
  @media not all and (hover: none) {
    &:hover {
      color: white;
      background-color: rgba(0,0,255,0.3);
    }
  }
`;


const Footer = React.forwardRef((props, ref) => {
  const links = [
    {
      label: 'About',
      link: '/about'
    },
    // {
    //   label: 'Our Approach',
    //   link: '/approach'
    // },
    {
      label: 'Investors',
      link: '/investors'
    },
  ];

  const linkComponents = links.map( (item) => (
      <Link href={item.link} key={item.link} tabIndex="0">
        <FooterItem>
          {item.label}
        </FooterItem>
      </Link>
    ));

  return ( 
    <Container ref={ref}>
      {linkComponents}
    </Container>
  )
})

export default Footer;