

const PropPage = (props) => {
  return (
    <div>Prop: {props.pid}</div>
  )
}

export default PropPage;


//-- next.js unique function
//-- must return paths to prerender. See: https://nextjs.org/docs/basic-features/data-fetching
//-- runs at build, so console.log()s won't work
export async function getStaticPaths() {
  const propNumbers = [1,2,3,4,5,6,7,8,9,10]
  const paths = propNumbers.map( num => ({
    params: {
      pid: `${num}`
    }
  }))
  return {
    paths: paths,
    fallback: false
  }
}

//-- next.js unique function
//-- returned object gets sent to default exported object
//-- such as data needed to render page
export async function getStaticProps({ params }) {
  return { props: {
    ...params
  }}
}