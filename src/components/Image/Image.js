/** Using with next.js, which automatically picks up <amp-img> tag and imports appropriate script
 * Also gives a convenient hook useAmp() which allows to detect if amp is in use.
 * Follows best pratices from web.dev and https://github.com/aFarkas/lazysizes
 * Wishlist:
 * [x] wide browser support
 * [x] AMP and non-AMP
 * [x] webp-first, jpg, png, svg support
 * [x] optional lazy-loading (per web.dev's suggestion: https://web.dev/use-lazysizes-to-lazyload-images/)
 * [x] doesn't cause FOUC/layout thrashing
 * [ish] gracefully handle no javascript <noscript>
 * */
import PropTypes from 'prop-types'
import {extname} from 'path'
import { useEffect, useState} from 'react';
import {useAmp} from 'next/amp'
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

/**
  * Example usage:
    <SomeContainerWithAWidth>
      <Image
        alt="alt text example"
        srcset={[
          {url: './static/lostcoast-sm.jpg', width: 800},
          {url: './static/lostcoast-sm.webp', width: 800},
          {url: './static/lostcoast-md.jpg', width: 1200},
          {url: './static/lostcoast-md.webp', width: 1200},
          {url: './static/lostcoast-lg.jpg', width: 1400},
          {url: './static/lostcoast-lg.webp', width: 1400},
        ]}
        width={3}
        height={2}
      />
    </SomeContainerWithAWidth>
  *
  * 
  * */

const Image = (props) => {
  const isAmp = useAmp();
  const [srcsetWebp, setSrcsetWebp] = useState('');
  const [srcWebp, setSrcWebp] = useState('');
  const [srcsetFallback, setSrcsetFallback] = useState('');
  const [srcFallback, setSrcFallback] = useState('');
  const [ext, setExt] = useState('jpeg');
  
  const { srcset, lazyload, alt, width, height, style } = props;

  //-- effect for when srcset changes. otherwise, inf loop of rerenders
  useEffect( () => {
    //-- when srcSet array changes, update srcset string
    const [webpArr, fallbackArr] = separateFileTypes(srcset)
    const [srcWebp, srcsetWebp] = extractSrcAndSrcset(webpArr);
    const [srcFallback, srcsetFallback] = extractSrcAndSrcset(fallbackArr);
    const extension = extname(srcFallback).substring(1).toLowerCase();
    if(extension !== 'jpg') setExt(extension); //-- bc we default to 'jpeg', foo.jpg -> ext == 'jpeg'
    setSrcWebp(srcWebp);
    setSrcsetWebp(srcsetWebp);
    setSrcFallback(srcFallback);
    setSrcsetFallback(srcsetFallback);
    
  }, [srcset])
  

  const separateFileTypes = (srcsetArr) => {
    let webpArr = [];
    let fallbackArr = [];
    srcsetArr.forEach(img => {
      extname(img.url).toLowerCase()==='.webp' ? webpArr.push(img) : fallbackArr.push(img)
    })
    return [webpArr, fallbackArr]
  }

  //-- isolating logic outside of useEffect so that it can be used by AMP
  const extractSrcAndSrcset = (arr) => {
    //-- convert array to usable srcset string (e.g. "/static/img.jpg 1200w, ...")
    let srcset = '';
    arr.forEach( (img, i) => {
      srcset += `${img.url} ${img.width}w${i<arr.length-1 ? ', ': ''}`
    })
    const src = arr.length > 0 ? arr[Math.floor(arr.length/2)].url : undefined
        
    return [src, srcset]
  }

  if(isAmp) {
    // useEffect isn't called in AMP, so have to run logic in here.
    // AMP does not have a lazyload option without additional custom js
    const [webpArr, fallbackArr] = separateFileTypes(srcset)
    const [srcWebp, srcsetWebp] = extractSrcAndSrcset(webpArr);
    const [srcFallback, srcsetFallback] = extractSrcAndSrcset(fallbackArr);
    const hasWebp = webpArr.length > 0;
    return (
      <>
      <amp-img
        src={hasWebp ? srcWebp : srcFallback}
        srcset={hasWebp ? srcsetWebp : srcsetFallback}
        alt={alt}
        width={`${width}`}
        height={`${height}`}
        layout="responsive"
      >
        {
          // only include fallback when using webp
          hasWebp &&
            <amp-img
              fallback=""
              src={srcFallback}
              srcset={srcsetFallback}
              alt={alt}
              width={`${width}`}
              height={`${height}`}
              layout="responsive"
            ></amp-img>
        }
        <noscript>
          <img src={srcFallback} width={`${width}`} height={`${height}`} alt={alt}/>
        </noscript>
      </amp-img>
      </>
    )
  } else {
    if(lazyload) {
      return (
        <picture style={{width: '100%', ...style}}>
          <source data-srcset={srcsetWebp} type="image/webp"/>
          <source data-srcset={srcsetFallback} type={`image/${ext}`}/> 
          <img 
            src={srcFallback}
            srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-sizes="auto"
            data-srcset={srcsetFallback}
            className='lazyload'
            alt={alt}
            style={{width: '100%', ...style}}/>
        </picture>
      )
    } else { //-- not lazyload, recommended for small images
      return (
        <picture style={{width: '100%', ...style}}>
          <source srcSet={srcsetWebp} type="image/webp"/>
          <source srcSet={srcsetFallback} type={`image/${ext}`}/> 
          <img 
            src={srcFallback}
            srcSet={srcFallback}
            alt={alt}
            style={{width: '100%', ...style}}/>
        </picture>
      )
    }
  }
}

export default Image;

Image.propTypes = {
  //-- srcset of format {[url, width],...}
  srcset: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      width: PropTypes.oneOfType([PropTypes.number,PropTypes.string])
    })).isRequired,
  //-- required for a11y reasons
  alt: PropTypes.string.isRequired,
  //-- required for AMP
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  //-- required for AMP
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  //-- to use lazyloading in non-AMP
  lazyload: PropTypes.bool, 
  //-- In AMP, to hide the loading indicators on page load. Recommended to turn off for logos and small images/icons.
  ampLoading: PropTypes.bool 
}

Image.defaultProps = {
  srcSet: [],
  alt: "",
  width: 1,
  height: 1,
  lazyload: true,
  ampLoading: true,
}