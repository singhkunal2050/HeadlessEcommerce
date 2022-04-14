import Client from "shopify-buy";
export  const client = Client.buildClient({
  domain: process.env.SHOPIFY_API_ENDPOINT ,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN 
 });