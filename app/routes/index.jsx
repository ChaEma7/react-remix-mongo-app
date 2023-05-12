import { json } from "@remix-run/node";
import { useLoaderData } from "react-router";
import connectDb from "~/db/connectDb.server";

export async function loader() {
  const db = connectDb();
  const plants = await db.models.Plant.find();

  console.log(plants);
  return json(plants);
}

export default function Index() {
  const plants = useLoaderData();

  return (
    <>
      <h1 className="bold bg-amber-400">HEJ ALTSÅ</h1>
      <ul className="mx-auto flex flex-wrap justify-center gap-4">
        {plants.map((plant) => {
          return (
            <li key={plant._id} className="bg-amber-700">
              <div>
                <h2>{plant.name}</h2>
                <p>{plant.family}</p>
                <p>{plant.color}</p>
                <img src={plant.img} alt={`Plant: ${plant.name}`} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
