// Components
import { Nav } from '../components/Nav';
import { BlogCard } from '../components/BlogCard';
// CSS
import './css/home.css'

export const Home = () => {
    return (
        <main>
            <Nav />
            <header>
                <div className="container">
                    <div className="section">
                        <div className="content">
                        <h1>Blog</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, nobis!</p>
                        </div>
                        <div className="blogs">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </header>
        </main>
    )
}