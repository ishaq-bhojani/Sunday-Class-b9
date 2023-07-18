import { getAll, save } from "@/services/products";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getAll();
    return res.status(200).json(products);
  } else if (req.method === "POST") {
    const {title, description, price} = req.body;
    save(title, description, price);
    return res.status(201).json({});
  }
  return res.status(404).send();
}
