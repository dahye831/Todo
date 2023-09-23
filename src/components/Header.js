const Header = () => {
  return (
    <header>
      <h2 className="header__title">오늘은 📅 <strong>{ new Date().toLocaleDateString()}</strong></h2>
    </header>
  )
}

export default Header