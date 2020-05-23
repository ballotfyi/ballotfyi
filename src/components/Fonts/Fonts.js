import Head from 'next/head'

const Fonts = () => {
  
  //-- thank you @zachleat https://github.com/zachleat/web-font-loading-recipes
  return (
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
  )
}

export default Fonts;