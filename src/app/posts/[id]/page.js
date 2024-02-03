import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export default async function IndividPosts({ params }) {
  const { rows } = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const post = rows?.[0];
  //if there is no post, run the notFound function to show the not-found.jsx page
  if (!post) {
    notFound();
  }

  async function handleAddComment(formData) {
    "use server";
    const profile_id = formData.get("profile_id");
    const content = formData.get("content");

    await sql`INSERT INTO comments profile_id,content, post_id) VALUES (${profile_id}, ${content}, ${params.id})`;
    revalidatePath(`/posts/${params.id}`);
  }

  return (
    <div>
      <h2>{post.rows[0].title}</h2>
      <p>{post.rows[0].content}</p>
      <form action={handleAddComment}>
        <h3>Add a comment</h3>
        <input name="profile_id" placeholder="Username" />
        <textarea name="content" placeholder="Comment"></textarea>
        <button>Submit</button>
      </form>
      {comments.rows.map((comment) => {
        return (
          <div key={comment.profile_id}>
            <h3>{comment.profile_id}</h3>
            <p>{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
}
