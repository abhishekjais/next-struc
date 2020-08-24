import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';
import Product from '../../module/Product/product';
const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
    try {
        const { value } = req.query;
        const query = value ? { name: value } : {};
        const product = await Product.find(query);
        res.status(200).send([...product]);
    } catch (error) {
        console.log(error, 'error');
    }
});

export default handler;