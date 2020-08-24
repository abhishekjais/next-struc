
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import actions from '../store/actions';
import Category from '../components/Category';
import List from '../components/Products';
import { Typography } from '@material-ui/core';

const Index = () => {
    return (

        <Layout title="Home" center={true}>
            <Typography component="h1" >Categories</Typography>
            <Category />
            <Typography component="h1" >All Products</Typography>
            <List />
        </Layout>
    )
};

Index.getInitialProps = async function (ctx: any) {
    await ctx.store.dispatch(actions.getProduct('product', {}));
    return {};
};


export default connect(state => state)(Index);