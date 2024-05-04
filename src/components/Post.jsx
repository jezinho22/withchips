
export default function Post({post}) {
  return (
    <div key={post.accompaniment} className="accompaniment">
        <h2>{post.accompaniment}</h2>
        <h4>{post.rating}</h4>
        <p>{post.comment}</p>
    </div>
  )
}
