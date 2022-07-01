import './footer.css'
import facebook from './components/Facebook Icon.png'
import github from './components/GitHub Icon.png'
import intra from './components/Instagram Icon.png'
import twitter from './components/Twitter Icon.png'

export default function Footer(){
    return (
        <footer>
           <img src={facebook} alt=""/>
           <img src={github} alt=""/>
           <img src={intra} alt=""/>
           <img src={twitter} alt=""/>
       </footer>
    )
}

