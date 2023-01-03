import '../styles/globals.css'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }) {
  return
  <SessionProvider session={session}>
   <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </SessionProvider>
}

export default MyApp
