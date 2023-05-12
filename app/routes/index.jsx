import { json } from "@remix-run/node";
import connectDb from "~/db/connectDb.server";

export async function loader() {
  const db = connectDb();
  const plants = await db.models.Plant.find();

  console.log(plants);
  return json(plants);
}

export default function Index() {
  return <h1>HEJ ALTSÅ</h1>;
}
