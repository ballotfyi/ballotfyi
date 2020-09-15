import styled from 'styled-components';
import Link from 'next/link';

const Footer = React.forwardRef((props, ref) => {
  const items = [
    {
      label: 'All Props',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Privacy',
      link: '/privacy',
    },
  ];

  const linkItems = items.map((item) => (
    <Link href={item.link} key={item.link} passHref>
      <FooterItem>{item.label}</FooterItem>
    </Link>
  ));

  return <Set ref={ref}>{linkItems}</Set>;
});

export default Footer;

const Set = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  background-color: white;
`;

const FooterItem = styled.a`
  display: flex;
  align-items: center;
  font-family: Inter, Helvetica;
  font-size: 12px;
  letter-spacing: 0.095em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 20px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  color: black;
  transition: all 200ms ease-out;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 5px;
    margin-left: 3px;
    margin-right: 3px;
    font-size: 10px;
    height: 30px;
  }
  @media not all and (hover: none) {
    &:hover {
      background-color: #eddd19;
    }
  }
  &:focus {
    background-color: #eddd19;
  }
`;
