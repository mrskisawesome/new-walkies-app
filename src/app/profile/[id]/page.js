import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Image from "next/image";

export default async function IndividualProfile({ params }) {
  // Fetch the profile
  const profiles = await sql`SELECT * FROM profiles WHERE id = ${params.id}`;

  return (
    <div className="profiles">
      {profiles.rows.map((profile) => (
        <div key={profile.id} className="head" href={`/profiles/${profile.id}`}>
          <h2>{profile.username}</h2>
          <p> {profile.bio}</p>
          {profile.photo && (
            <Image src={profile.photo} alt="Profile" width={200} height={200} />
          )}
        </div>
      ))}
      {comments.rows.map((comment) => (
        <div key={comment.username}>
          <h3>{comment.username}</h3>
          <p>{comment.content}</p>
          <nav>
            <Link href="/">Return Home</Link>
          </nav>
        </div>
      ))}
    </div>
  );
}
