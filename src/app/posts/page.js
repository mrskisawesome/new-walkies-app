import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import { Button } from "@radix-ui/themes";
import { HeartIcon } from "@radix-ui/react-icons";

//toplevel
export default async function Posts() {
  const { userId } = auth();
  const { rows } =
    await sql`SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;

  const profile = rows?.[0];
  const posts = await sql`SELECT * FROM posts`;

  // async function handleAddNewProfile(formData) {
  //   "use server";
  //   const username = formData.get("username");
  //   const bio = formData.get("bio");
  //   const photo = formData.get("photo");
  //   await sql`INSERT INTO profiles (clerk_user_id,username,bio, photo) VALUES (${userId},${username},${bio},${photo})`;

  //   revalidatePath("/profile");
  // }

  async function handleAddNewPost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title,content, profile_id) VALUES (${title},${content},${profile.id})`;

    revalidatePath("/posts");
  }
  async function handleAddLike(postId) {
    "use server";
    const { profile_id } = profile; // Assuming profile is defined in the scope
    // Check if the user has already liked the post
    const existingLike =
      await sql`SELECT * FROM post_likes WHERE post_id = ${postId} AND profile_id = ${profile_id}`;
    if (existingLike.rows.length === 0) {
      // If the user hasn't liked the post yet, insert a new like
      await sql`INSERT INTO post_likes (post_id, profile_id) VALUES (${postId}, ${profile_id})`;
    }
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
            <Link key={post.title} href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <div key={post.title}>
              <p>{post.content}</p>
            </div>
            <div>
              <Button onClick={() => handleAddLike(post.id)}>
                <HeartIcon width="16" height="16" /> Like
              </Button>
            </div>
          </>
        );
      })}
    </div>
  );
}
