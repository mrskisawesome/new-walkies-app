import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";

//toplevel
export default async function Posts() {
  const { userId } = auth();
  const posts = await sql`SELECT * FROM posts`;

  async function handleAddNewPost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title,content) VALUES (${title},${content})`;

    revalidatePath("/posts");
  }
  return (
    <div>
      <h2>Your Posts</h2>
      <p>This is the place to post</p>
      {userId && (
        <form action={handleAddNewPost}>
          <input name="title" placeholder="Post title" />
          <textarea name="content" placeholder="Post content" />
          <button>Submit</button>
        </form>
      )}
      {!userId && <p>Sign in to write a post</p>}

      {posts.rows.map((post) => {
        return (
          <>
            <Link key={post.title}>
              <h3>{post.title}</h3>
            </Link>
            <div key={post.title}>
              <p>{post.content}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
