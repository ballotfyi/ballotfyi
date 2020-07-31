import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 -5px 50px 30px rgba(0, 0, 0, 0.025);
`;

const FooterItem = styled.a`
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
      background-color: rgba(0, 0, 255, 0.3);
    }
  }
  &:focus {
    color: white;
    background-color: rgba(0, 0, 255, 0.3);
  }
`;

const Footer = React.forwardRef((props, ref) => {
  const links = [
    {
      label: 'About',
      link: '/about',
    },
    // {
    //   label: 'Privacy',
    //   link: '/privacy',
    // },
    // {
    //   label: 'Terms',
    //   link: '/terms',
    // },
  ];

  const linkComponents = links.map((item) => (
    <Link href={item.link} key={item.link} passHref>
      <FooterItem>{item.label}</FooterItem>
    </Link>
  ));

  return <Container ref={ref}>{linkComponents}</Container>;
});

export default Footer;
