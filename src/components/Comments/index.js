export default function Comments({ comments }) {
  console.log("comments page", comments);
  return (
    <>
      <h2>Comments: </h2>
      <ul>
        {comments.map((comment, i) => (
          <li key={i}>{comment}</li>
        ))}
      </ul>
    </>
  );
}
