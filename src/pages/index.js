import Header from 'layout/header.js'

import {useAmp} from 'next/amp'
export const config = { 
  amp: 'hybrid' 
}

const IndexPage = () => {
  const isAmp = useAmp();

  return (
    <div>
      <Header/>
      <main>
        {isAmp ? 
          <>
            <div>amp</div>
          </>
          :
          <div>
            not amp
            <br/> Homepage
          </div>
        }

      </main>


    </div>
  )
}

export default IndexPage;