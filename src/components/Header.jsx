import Link from "next/link";
export default function Header() {
  return (
    <div className="header">
        <h1>My Chip Review Site</h1>
        <h3>What are you going to have on those chips</h3>
        <div className="nav">
            <Link href="/">Home</Link>
            <Link href="/addpost">Add post</Link>
      
        </div>
    </div>
  )
}
