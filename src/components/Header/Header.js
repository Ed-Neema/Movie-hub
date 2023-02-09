import './Header.css'
const Header = () => {
    return (
        
      <div className="header" onClick={()=>{window.scroll(0,0)}}>
        <h1>🎬 Movie Hub 🎥</h1>
      </div>
    );
}

export default Header;