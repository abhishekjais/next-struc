import Layout from "../components/Layout"
import { Grid, makeStyles, Divider, Typography, Button } from "@material-ui/core";
import Link from "next/link";
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { useState, useEffect } from "react";
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
        height: 300
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
const Cart = () => {
    const session = sessionStorage.getItem('cart');
    const data: any = session !== null ? JSON.parse(session) : [];
    const [cart, setCart] = useState(data);
    const classes = useStyles();
    console.log(data, 'data');
    useEffect(() => {
        setCart(data);
    }, [JSON.stringify(data)])
    const remove = (id: string) => {
        data.forEach((element: any, i: number) => {
            if (element._id == id) {
                data[i]['qty'] = Number(data[i]['qty']) - 1;
            }
        });
        setCart(data);
        sessionStorage.setItem('cart', JSON.stringify(data));
    }
    const add = (id: string) => {
        data.forEach((element: any, i: number) => {
            if (element._id == id) {
                data[i]['qty'] = Number(data[i]['qty']) + 1;
            }
        });
        console.log(data, 'in card');

        setCart(data);
        sessionStorage.setItem('cart', JSON.stringify(data));
    }

    return (
        <Layout title='Cart'>
            {cart.length > 0 && cart.map((item: any, index: number) => (
                <Grid item container direction="row" justify="space-between" className={classes.rootContainer} key={'cart' + index}>
                    <Grid item xs={5} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt="src" style={{ height: '200px', textAlign: 'center' }} />
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical" flexItem style={{ height: '100%', textAlign: 'center' }} />
                    </Grid>
                    <Grid item xs={6} className={classes.content}>
                        <Grid item>
                            <Typography component='h1' style={{ textTransform: 'uppercase' }}>
                                {item.category}
                            </Typography>
                            <Typography component='h1'>
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component='h1'>
                                ${item.price}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component='h1'>
                                {item.description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ExposureNeg1Icon />}
                                onClick={() => remove(item._id)}
                            > </Button>
                            {item.qty}
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<PlusOneIcon />}
                                onClick={() => add(item._id)}
                            > </Button>

                        </Grid>
                    </Grid>
                </Grid>
            ))}
            {cart.length == 0 ?
                <Grid item container direction="column" alignContent='center' justify="center" className={classes.rootContainer} >
                    <Grid>
                        <Typography style={{ fontSize: '25px' }}> Cart is Empty.....</Typography>
                    </Grid>
                    <Grid>
                        <Typography style={{ fontSize: '25px' }} component='h2'> <Link href="/">Go for Shop</Link></Typography>
                    </Grid>
                </Grid> : ''}
        </Layout>
    )
}
export default Cart;