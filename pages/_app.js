import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* children property */}
      <Component {...pageProps} /> 
      {/* powyzesz cala wstykiwana storna jest renderowana */}
    </Layout>
  )
}

export default MyApp
