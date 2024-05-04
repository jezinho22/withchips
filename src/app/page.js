import pg from "pg"
import Post from "@/components/Post"

export default async function PostListPage() {
  const connectionString = process.env.NEXT_PUBLIC_SUPABASE_CONN_STRING
  const db = new pg.Pool({connectionString: connectionString})
      

    const data = await db.query('SELECT * FROM chip_accomps')
    const withChips = data.rows
    // reverse the posts array if the sort parameter is set to descending

  
    return (
      <div>
        <h2>Accompaniments for chips</h2>
          <div className = "card-holder">
            {withChips.map((accomp) => <Post key={accomp.id} post={accomp}/>)}
          </div>
      </div>
    );
  }