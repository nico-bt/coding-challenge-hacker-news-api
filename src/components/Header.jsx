import { header, link } from "./Header.css"

function Header() {
  return (
    <nav className={header}>
      <img className="" src="/logo.gif" alt="Logo de Hacker News" />
      <a className={link} href="/">
        Hacker News
      </a>
    </nav>
  )
}
export default Header
