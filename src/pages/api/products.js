import { connectToDatabase } from "../../../mongodb";

export default async function products(req, res) {
  const client = await connectToDatabase();
  const db = client.db("ProductDB");

  const collection = db.collection("products");
  const data = await collection.find().toArray();

  // console.log(JSON.stringify(data));
  res.status(200).json(data);
}
