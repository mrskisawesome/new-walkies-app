export default function BrokenPage() {
  throw new Error("This page is broken. Sorry.");
  //this will mean that if there is an error on the page, it will show the error.js page instead

  return (
    <>
      <div>
        <p>Will you ever see this?</p>
        {posts.map((post) => {
          return <div key={post.title}> {post.title} </div>;
        })}
      </div>
      ;
    </>
  );
}
