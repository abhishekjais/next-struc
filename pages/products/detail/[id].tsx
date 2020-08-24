import { Grid, makeStyles, Divider, Typography, Button } from "@material-ui/core";
import Layout from "../../../components/Layout";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import middleware from "../../../middlewares/middleware";
import Product from "../../../module/Product/product";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import CustomModal from "../../../components/CustomModal";
import { useState } from "react";
import { useAmp } from 'next/amp'

const useStyles = makeStyles(() => ({
    root: {
        display: "block",
        textTransform: 'uppercase'
    },
    card: {
        maxWidth: 400,
        margin: "auto",
        // height: '120px',
        transition: "0.3s",
        // backgroundColor: "#792141",
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    content: {
        textAlign: "left",
        // padding: 20,
        fontSize: '15px',
        fontWeight: 600,
        // textTransform: 'uppercase'
    },
    rootContainer: {
        display: "inline-flex",
        width: "100%",
        padding: "17px 40px 17px 22px",
        marginBottom: 10,
        height: 400
    },
    cardpadding: {
        padding: '0 30px 0 0',
        '&:last-child': {
            padding: '0 30px 0 0',
        }
    },
    media: {
        height: 250,
        width: 300,
        // paddingTop: '56.25%', // 16:9,
        backgroundSize: 'cover'
    },
    button: {
        margin: '8px',
    },
}));

export const config = { amp: 'hybrid' };
declare namespace JSX {
    interface IntrinsicElements {
        'amp-img': any;
    }
}
const Detail = (data: any) => {
    const classes = useStyles();
    const isAmp = useAmp();
    const [open, setOpen] = useState(false);
    let user = sessionStorage.getItem('user');
    const session = sessionStorage.getItem('cart');
    const cart: any = session !== null ? JSON.parse(session) : [];
    const handleClose = () => {
        setOpen(false);
    };
    const openModal = (val: boolean) => {
        if (!user)
            setOpen(val);
        else
            handleSubmit(user);
    }
    const handleSubmit = (userdata: any) => {
        if (user) {
            if (cart.length) {
                if (cart.find((item: any) => item._id === data._id)) {
                    cart.forEach((element: any, i: number) => {
                        if (element._id === data._id) {
                            cart[i]['qty'] = Number(element.qty) + 1;
                        }
                    });
                    console.log(cart);
                    sessionStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    let newAdd: any = JSON.parse(JSON.stringify(data));
                    newAdd['qty'] = 1;
                    cart.push(newAdd);
                    sessionStorage.setItem('cart', JSON.stringify(cart));
                }

            }
        } else {
            console.log(userdata, '</a>');

            setOpen(false);
            sessionStorage.setItem('user', JSON.stringify(userdata));
            let cart: any = JSON.parse(JSON.stringify([data]));
            cart[0]['qty'] = 1;
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    return (
        <Layout title="Detail" center={true}>
            <Grid item container direction="row" justify="space-between" className={classes.rootContainer}>
                <Grid item xs={5} >
                    {isAmp ? <amp-img className="card-img-top" src={item.image} alt="Card image cap" width="250px" height="250px" /> : <img src={data.image} alt="src" style={{ maxHeight: 400 }} />}

                </Grid>
                <Grid item xs={1}>
                    <Divider orientation="vertical" flexItem style={{ height: '100%', textAlign: 'center' }} />
                </Grid>
                <Grid item xs={6} className={classes.content}>
                    <Grid item>
                        <Typography component='h1' style={{ textTransform: 'uppercase' }}>
                            {data.category}
                        </Typography>
                        <Typography component='h1'>
                            {data.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='h1'>
                            ${data.price}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='h1'>
                            {data.description}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<ShoppingCartIcon />}
                            onClick={() => openModal(true)}
                        > Add to Cart</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<OfflineBoltIcon />}
                            onClick={() => openModal(true)}
                        >Buy Now</Button>
                    </Grid>
                </Grid>
            </Grid>
            {
                open ?
                    <CustomModal
                        open={open}
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                    />
                    : ''
            }

        </Layout>
    )
}
export default Detail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const req = ctx?.req as NextApiRequest;
    const res = ctx?.res as NextApiResponse;
    await middleware.apply(req, res);
    const value = ctx?.query?.id;
    console.log(ctx.query);

    const query = value ? { _id: value } : {};
    const product = await Product.findOne(query);
    // Pass data to the page via props
    return { props: JSON.parse(JSON.stringify(product)) }
}