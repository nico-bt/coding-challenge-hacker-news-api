import { Link, Route } from "wouter"
import Header from "./components/Header"
import TopStoriesPage from "./pages/TopStoriesPage"
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <>
      <Header />

      <div>
        <Link href="/items/1">
          <a className="link">Top Stories</a>
        </Link>

        <Route path="/" component={TopStoriesPage} />
        <Route path="/items/:id" component={DetailPage} />
      </div>
    </>
  )
}

export default App
