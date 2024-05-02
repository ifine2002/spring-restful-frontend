import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { callFetchAccount } from './config/api';
// import App from './app';
// import { Provider } from 'react-redux'
// import { store } from '@/redux/store';

const App1 = () => {
  const getAccount = async () => {
    const res = await callFetchAccount();
    if (res && res.data) {
      // dispatch(doGetAccountAction(res.data))
    }
  }

  useEffect(() => {
    getAccount();
  }, [])

  return (
    <div style={{ padding: "50px" }}>
      <h1>Hello CORS with HoiDanIT</h1>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <App /> */}
    {/* </Provider> */}
    <App1 />
  </React.StrictMode>,
)
