// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../utils/ShopifyClient";

export default function handler(req, res) {
    client.checkout.create().then((checkout) => {
        res.status(200).json(checkout)
    });
  }
  