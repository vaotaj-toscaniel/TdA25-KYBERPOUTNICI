import { H3Event } from 'h3';

export default defineEventHandler((event: H3Event) => {
  event.node.res.setHeader('Access-Control-Allow-Origin', '*'); // Umožní všechny domény přístup
  event.node.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  event.node.res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
});
