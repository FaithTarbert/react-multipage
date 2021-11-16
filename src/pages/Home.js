import { useFetch } from "../hooks/useFetch"
import { Link } from 'react-router-dom'
//styles
import './Home.css'

export default function Home() {

    const { data: articles, isPending, errors } = useFetch('http://localhost:3000/articles')

    return (
        <div className='home'>
            <h2>Articles</h2>
            {/* msg for when isFetch is loading data */}
            {isPending && <div>Loading...</div>}
            {/* msg for when isFetch has any errors */}
            {errors && <div>Errors: {errors}</div>}
            {/* when articles have loaded, map them */}
            {articles && articles.map((article) => (
                // templating is returned for each article
                <div key={article.id} className="card">
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                    <Link to={`/articles/${article.id}`}>Read More...</Link>
                </div>
            ))}
        </div>
    )
}
