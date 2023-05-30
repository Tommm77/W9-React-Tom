import '../styles/Banniere.css'
import { Link } from 'react-router-dom'

function Banniere() {
  return (
    <div className="banniere">
    <img src="https://static.vecteezy.com/system/resources/previews/019/764/228/original/bmw-logo-free-download-free-png.png" classNam="img_logo"/>
    <h1>Bienvenue sur Blogeo</h1>
    <Link to ="/">Accueil</Link>
    <Link to="/userInfos">Card</Link>
    </div>
  )
}

export default Banniere