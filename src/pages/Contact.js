//allows us to get any query string from the path in the browser
import { useLocation } from "react-router-dom"

export default function Contact() {

    const queryString = useLocation().search
    console.log(queryString)
    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get('name')

    return (
        <div>
            <h2>Hey {name}, Contact Us Here!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda, consequatur culpa hic voluptate accusamus nisi vitae soluta, sint in repellat quaerat molestiae voluptatibus nulla accusantium odio aperiam id distinctio!</p>
        </div>
    )
}
