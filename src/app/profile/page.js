//profile
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

//toplevel
export default async function Profiles() {
  const { userId } = auth();
  const { rows } =
    await sql`SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;

  const profile = rows?.[0];

  async function handleAddNewProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");
    const photo = formData.get("photo");
    await sql`INSERT INTO profiles (clerk_user_id,username,bio, photo) VALUES (${userId},${username},${bio},${photo})`;

    revalidatePath("/profile");
  }
  return (
    <div>
      <>
        <h2>Your Profile Page</h2>
        {userId && (
          <form action={handleAddNewProfile}>
            <input name="username" placeholder="Create username" />
            <textarea name="bio" placeholder="Tell us all about your woofer" />
            <input
              name="photo"
              placeholder="Add link to image of your loyal companion"
            />
            <button>Submit</button>
          </form>
        )}
        {!userId && <p>Sign in to create a profile</p>}

        {profile && (
          <Link key={profile.userId} href={`/profile/${profile.id}`}>
            {profile.username}
          </Link>
        )}
        {profile && (
          <div key={profile.userId}>
            <p>{profile.bio}</p>
            console.log({profile.photo})
            {profile.photo && (
              <Image
                src={profile.photo}
                alt="Profile"
                width={200}
                height={200}
              />
            )}
          </div>
        )}
      </>
    </div>
  );
}
