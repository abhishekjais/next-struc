import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import store from '../store/store'
import theme from './theme'

class _App extends App {
    static async getInitialProps({ Component, ctx }) {
        return { pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {} }
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>Ecommerce</title>
                </Head>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </MuiThemeProvider>
            </>
        )
    }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: false })
export default wrapper.withRedux(_App)