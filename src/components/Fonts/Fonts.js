import Head from 'next/head';
import { useAmp } from 'next/amp';
//-- thank you @zachleat https://github.com/zachleat/web-font-loading-recipes

const AmpFonts = () => (
  <amp-font
    layout="nodisplay"
    font-family="Inter"
    timeout="2000"
    on-error-remove-class=""
    on-error-add-class=""
    on-load-remove-class="fonts-loading"
    on-load-add-class="fonts-loaded"
  ></amp-font>
);

const NonAmpFonts = () => (
  <Head>
    <script>{`
      (function(){
        if("fonts" in document){
          if(sessionStorage.fontsLoaded) {
            document.documentElement.className+="fonts-loaded";
            return;
          }
          document.fonts.load("1em InterPre").then(function() {
            document.documentElement.className+=" fonts-loading";
            Promise.all([
              document.fonts.load("500 1em Inter"),
              document.fonts.load("italic 500 1em Inter")
            ]).then(function(){
              document.documentElement.className+=" fonts-loaded";
              sessionStorage.fontsLoaded=true;
            });
          });
        }
      })();
    `}</script>
  </Head>
);

const Fonts = () => {
  return useAmp() ? <AmpFonts /> : <NonAmpFonts />;
};

export default Fonts;
