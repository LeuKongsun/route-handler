import { redirect } from "next/navigation";
import { comments } from "../../api/data";

// find by id (dynamic route)
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {

  if (parseInt(params.id) > comments.length) {
    return redirect("/comments");
  } // when there is no comment found
  const comment = comments.find((c) => c.id === parseInt(params.id));
  return new Response(JSON.stringify(comment));

}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const commentIndext = comments.findIndex(
    (cmt) => cmt.id === parseInt(params.id)
  );

  comments[commentIndext].text = text;

  return new Response(JSON.stringify(comments[commentIndext]));
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentIndext = comments.findIndex(
    (cmt) => cmt.id === parseInt(params.id)
  );
  const deletedComment = comments.splice(commentIndext, 1);
  return new Response(JSON.stringify(deletedComment));
}
