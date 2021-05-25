import { NextPage } from 'next'
import Head from 'next/head'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>home - css-animation-portfolio</title>
      </Head>

      <div className="container">
        <div className="scene">
          <div className="scene-0">
            <div className="bg"></div>
            <div className="bg"></div>
            <div className="bg"></div>
            <div className="bg">
              <div className="content">
                <h1>
                  {'hello,world'.split('').map((c, key) => (
                    <span key={key} className={`c${key + 1}`}>
                      {c}
                    </span>
                  ))}
                </h1>
                <h1>
                  {'にゃーん(=^・・^=)'.split('').map((c, key) => (
                    <span key={key} className={`c${key + 1}`}>
                      {c}
                    </span>
                  ))}
                </h1>
                <h1>
                  {'I am hota1024!'.split('').map((c, key) => (
                    <span key={key} className={`c${key + 1}`}>
                      {c}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
