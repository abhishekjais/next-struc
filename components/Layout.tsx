import Link from 'next/link';
import Head from 'next/head';


const Layout = ({ children, title, center }: any) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
            </Head>
            <div className="tabs is-centered">
                <ul>
                    <h3>Ecommerce Task</h3>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/cart"><a>Cart</a></Link>
                    {/* {!isAuthenticated && <Link href="/signin"><a>Sign In</a></Link>}
                    {!isAuthenticated && <Link href="/signup"><a>Sign Up</a></Link>}
                    {isAuthenticated && <Link href="/users"><a>Profile</a></Link>}
                    {isAuthenticated && <li onClick={deauthenticate}><a>Sign Out</a></li>} */}

                </ul>
            </div>

            <div className={!center ? '' : 'has-text-centered'}>
                {children}
            </div>
        </div>
    )
};



export default Layout;