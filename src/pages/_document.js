import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import stylesCss from '!raw-loader!./index.min.css';
import antdCss from '!raw-loader!antd/dist/antd.min.css';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <style
              dangerouslySetInnerHTML={{
                __html: stylesCss,
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: antdCss,
              }}
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
