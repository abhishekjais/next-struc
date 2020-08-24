import { Grid, makeStyles, Card, CardContent, CardMedia, CardActionArea } from "@material-ui/core";
import { CATEGORY } from "../utils/contants";
import Link from "next/link";

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
        textAlign: "center",
        padding: 20,
        fontSize: '15px',
        fontWeight: 600
    },
    rootContainer: {
        display: "inline-flex",
        width: "330px",
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
}));
const Category = () => {
    const classes = useStyles();
    return (
        <>
            {CATEGORY.map((item: any, index: number) => (
                <Link href="/products/[catType]" as={`/products/${item.value}`} key={'cat' + index}>
                    <Grid item className={classes.rootContainer} >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.img}
                                    title={item.label}
                                />
                                <CardContent className={classes.content}>
                                    {item.label}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Link>
            ))}
        </>
    )
}
export default Category;