import { getById } from "@/services/products";


export default function handler(req, res) {
    if (req.method === "GET") {
        const { productId } = req.query;
        console.log(typeof productId);
        const product = getById(productId);
        return res.status(200).json(product);
    }
    return res.status(404).send();
}