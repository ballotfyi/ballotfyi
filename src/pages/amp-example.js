import styled from "styled-components";
import Header from "components/layout/header.js";
import Image from "components/Image/Image";
import Acronym from "components/Acronym/Acronym";
import EmbeddedDoc from "components/EmbeddedDoc/EmbeddedDoc";
import { useAmp } from "next/amp";
import withBasicTemplate from "template/basic";
import Link from "next/link";

import ScrollToTop from "components/ScrollToTop/ScrollToTopButton";

const TallPage = styled.div`
  position: relative;
  height: 2500px;
  background: linear-gradient(#e66465, #9198e5);
  padding: 30px;
`;
const ImageContainer = styled.div`
  width: 50%;
  margin-top: 10px;
`;

const IndexPage = () => {
  const isAmp = useAmp();

  return (
    <>
      <TallPage>
        <Header />
        {isAmp ? (
          <>
            {/* scrollToTopElem is used for ScrollToTop AMP component, needs a target to move to*/}
            <h1 id="scrollToTopElem">ballot.fyi (AMP)</h1>
            <Acronym acronym='CIA' expanded='Central Intelligence Agency' />
            <br/>
            <Link href="/">
              <a>Non-AMP</a>
            </Link>
            <br />
            <Link href="/about?amp=1">
              <a>About</a>
            </Link>
            <br />
            <Link href="/privacy?amp=1">
              <a>Privacy</a>
            </Link>
            <br />
            <ImageContainer>
              <Image
                alt="alt text example"
                srcset={[
                  { url: "./static/lostcoast-sm.jpg", width: 800 },
                  { url: "./static/lostcoast-sm.webp", width: 800 },
                  { url: "./static/lostcoast-md.jpg", width: 1200 },
                  { url: "./static/lostcoast-md.webp", width: 1200 },
                  { url: "./static/lostcoast-lg.jpg", width: 1400 },
                  { url: "./static/lostcoast-lg.webp", width: 1400 },
                ]}
                width={2000}
                height={1333}
              />
            </ImageContainer>
            <div style={{ height: 800 }} />
            <ImageContainer>
              <Image
                alt="alt text example"
                srcset={[
                  { url: "./static/lostcoast-sm.jpg", width: 800 },
                  { url: "./static/lostcoast-sm.webp", width: 800 },
                  { url: "./static/lostcoast-md.jpg", width: 1200 },
                  { url: "./static/lostcoast-md.webp", width: 1200 },
                  { url: "./static/lostcoast-lg.jpg", width: 1400 },
                  { url: "./static/lostcoast-lg.webp", width: 1400 },
                ]}
                width={3}
                height={2}
              />
            </ImageContainer>
            <div style={{ height: 800 }} />
            <ImageContainer>
              <Image
                alt="alt text example"
                srcset={[
                  { url: "./static/lostcoast-sm.jpg", width: 800 },
                  { url: "./static/lostcoast-sm.webp", width: 800 },
                  { url: "./static/lostcoast-md.jpg", width: 1200 },
                  { url: "./static/lostcoast-md.webp", width: 1200 },
                  { url: "./static/lostcoast-lg.jpg", width: 1400 },
                  { url: "./static/lostcoast-lg.webp", width: 1400 },
                ]}
                width={3}
                height={2}
              />
            </ImageContainer>
          </>
        ) : (
          <div>
            <h1>ballot.fyi</h1>
            <Acronym acronym='CIA' expanded='Central Intelligence Agency' />
            <EmbeddedDoc src="https://www.gpo.gov/fdsys/pkg/GPO-CONAN-1992/pdf/GPO-CONAN-1992-6.pdf"/>

            <h2>not amp</h2>
            <Link href="?amp=1">
              <a>AMP <span role="img" aria-label="amp">⚡️</span></a>
            </Link>
            <br />
            <br />

            <Link href="/about">
              <a>About</a>
            </Link>
            <br />
            <br />
            <Link href="/privacy">
              <a>Privacy</a>
            </Link>
            <ImageContainer>
              <Image
                alt="alt text example"
                srcset={[
                  { url: "./static/lostcoast-sm.jpg", width: 800 },
                  { url: "./static/lostcoast-sm.webp", width: 800 },
                  { url: "./static/lostcoast-md.jpg", width: 1200 },
                  { url: "./static/lostcoast-md.webp", width: 1200 },
                  { url: "./static/lostcoast-lg.jpg", width: 1400 },
                  { url: "./static/lostcoast-lg.webp", width: 1400 },
                ]}
                width={3}
                height={2}
              />
            </ImageContainer>
          </div>
        )}

        <ScrollToTop />
      </TallPage>
      {/* bottomEl is used for ScrollToTop AMP component */}
      <div style={{ backgroundColor: "white", height: 100 }} id="bottomEl" />
    </>
  );
};

export default withBasicTemplate(IndexPage);

export const config = {
  amp: "hybrid",
};
