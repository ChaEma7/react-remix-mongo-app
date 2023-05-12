import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import connectDb from "~/db/connectDb.server";

export async function loader({ params }) {
  const db = connectDb();

  return json(await db.models.Plant.findOne({ studentId: params.plantId }));
}

export default function Plant() {
  const { firstname, lastname, age } = useLoaderData();

  return (
    <div>
      <h1 className="my-8 text-center text-5xl font-bold">
        {firstname} {lastname}
      </h1>
      <div className="mx-4 mx-auto max-w-2xl rounded border-2 border-teal-300 px-4 pb-5">
        <p className="mx-auto my-4 block w-96 text-center text-lg">{age}</p>
      </div>
    </div>
  );
}
