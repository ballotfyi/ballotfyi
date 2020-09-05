import {useState, useEffect, useRef} from 'react'
import Footer from 'components/layout/footer'
import {Col} from 'components/util'

const Page404 = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef();

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.getBoundingClientRect().height);
    }
  }, [footerRef]);

  return (
    <>
      <div style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
        <h1 style={{margin: 0, paddingTop: 40, textAlign:'center'}}>
          Page Not Found
        </h1>
        <Col
          style={{ textAlign: 'center', marginTop: 30 }}
          off={{ xs: 2, sm: 4, md: 5, lg: 5, xl: 5, xxl: 4 }}
          span={{ xs: 20, sm: 16, md: 14, lg: 14, xl: 14, xxl: 16 }}
        >
          You might be navigating to a page that no longer exists (maybe from 2018 or 2016?), or never existed to begin with. Head back to our main home page to find all that we offer.
        </Col>
      </div>
      <Footer ref={footerRef} />
    </>
  );
  
};

export default Page404;
