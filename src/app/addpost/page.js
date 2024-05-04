import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import pg from "pg";


export default function page() {
    async function handleSubmit (formData){
        "use server";
        const accompaniment = formData.get("accompaniment").toString()
        const rating = parseInt(formData.get("rating"))
        const comment = formData.get("comment").toString()

        console.log(accompaniment, rating, comment)

        const connectionString = process.env.NEXT_PUBLIC_SUPABASE_CONN_STRING
        const db = new pg.Pool({connectionString: connectionString})
        const queryString = `INSERT INTO chip_accomps (accompaniment, rating, comment) VALUES ('${accompaniment}', ${rating}, '${comment}')`
        console.log(queryString)
        const data = await db.query(queryString)


        revalidatePath("/");
        redirect("/database")

    }
  return (
    <div>
        <form className="formAddAcc" action={handleSubmit}>

            <label htmlFor="accompaniment">Accompaniment</label>
            <input type='text' name='accompaniment' id='accompaniment' placeholder="accompaniment"/>

            <label htmlFor="rating">Rating</label>
            <input type='number' name='rating' id='rating' placeholder="rating/5"/>

            <label htmlFor="comment">Comment</label>
            <input type='text' name='comment' id='comment' placeholder="comment"/>

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}
