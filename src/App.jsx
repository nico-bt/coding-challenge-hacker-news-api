import { Link, Route } from "wouter"
import Header from "./components/Header"
import { Suspense, lazy } from "react"

// Lazy imports
// para que no carguen inicialmente al cargar la pagina de inicio
// Ya que estos componentes son las paginas/routes que se necesitan solo al visitarlas
// Hay que agregar suspense a los elementos lazy para fallback
const TopStoriesPage = lazy(() => import("./pages/TopStoriesPage"))
const DetailPage = lazy(() => import("./pages/DetailPage"))

function App() {
  return (
    <>
      <Header />

      <div>
        <Link href="/">
          <a className="link">Top Stories</a>
        </Link>
        <Suspense fallback="Loading...">
          <Route path="/" component={TopStoriesPage} />
          <Route path="/article/:id" component={DetailPage} />
        </Suspense>
      </div>
    </>
  )
}

export default App
