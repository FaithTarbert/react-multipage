import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    //useParams gives us access to the "id" variable passed from the Home.js page when an article is clicked - tells us which one was selected
    const { id } = useParams()
    //create the route url to get articles by article id
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)
    const navigate = useNavigate();

    //watch error state so you can redirect to diff web page
    useEffect(() => {
        if (error) {
            //navigate(-1) goes back one page from history
            //navigate(1) goes fwd one page from history
            setTimeout(() => navigate('/'), 2000);
        }
    }, [error, navigate])

    return (
        <div>
            <h3>Article</h3>
            {/* msg for when isFetch is loading data */}
            {isPending && <div>Loading...</div>}
            {/* msg for when isFetch has any errors */}
            {error && <div>Error: {error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
