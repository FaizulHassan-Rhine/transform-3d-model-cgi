import '@/styles/globals.css'
import '../styles/footer.css'

import { Provider } from 'react-redux'
import store from '../redux/store'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Provider store={store}>

      {getLayout(<Component {...pageProps} />)}

    </Provider>)


}

