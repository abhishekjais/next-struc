import { NextApiRequest, NextApiResponse, GetServerSideProps } from "next"
import middleware from "../../../middlewares/middleware";
import Product from "../../../module/Product/product";
import Layout from "../../../components/Layout";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Divider } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        textTransform: 'uppercase'
    },
    card: {
        maxWidth: 400,
        // margin: "auto",
        // height: '120px',
        transition: "0.3s",
        // backgroundColor: "#792141",
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    content: {
        textAlign: "center",
        padding: 10,
        // fontSize: '20px',
        fontWeight: 600
    },
    rootContainer: {
        display: "inline-flex",
        width: "345px",
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
        backgroundSize: 'contain'
    },
}));
export default function CategoryType(props: any) {
    const classes = useStyles();
    const { data } = props;
    return (
        <Layout title="Product" center={true}>
            {data.length && data.map((item: any, index: number) => (
                <Link href="/products/detail/[id]" as={`/products/detail/${item._id}`} key={'list' + index}>
                    <a><Grid item className={classes.rootContainer} key={'cat' + index}>
                        <Card className={classes.card} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent className={classes.content}>
                                    <Divider />
                                    {/* <Typography gutterBottom variant="h5" component="h5"> */}
                                    {item.title}
                                    {/* </Typography> */}
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        ${item.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid></a>
                </Link>
            ))}
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const req = ctx?.req as NextApiRequest;
    const res = ctx?.res as NextApiResponse;
    await middleware.apply(req, res);
    const value = ctx?.query?.catType;
    const query = value ? { category: value } : {};
    const product = await Product.find(query);
    // Pass data to the page via props
    return { props: { data: JSON.parse(JSON.stringify(product)) } }
}