import { getProject } from "@/controllers/projects";
import { initDb } from "@/lib/initDb";

export async function GET(req, { params }) {
  try {
    await initDb();

    // for getting the id used in the url
    const { id } = await params;
    const project = await getProject(id);

    return Response.json(project);
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
