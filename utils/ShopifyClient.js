import Client from "shopify-buy";
export  const client = Client.buildClient({
  domain: process.env.SHOPIFY_API_ENDPOINT ?? "diljit-developers.myshopify.com",
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN ?? "107be587cc38f0d2f2763e73835a3866"
 });