import './basic.css'
import mail from './components/Mail.png'
import linkedin from './components/linkedin.png'

export default function Basic(){
    return (
        <div className='basic'>
        <div class="details">
            <h2>Parthib Datta</h2>
            <h4>Frontend Developer</h4>
            <p>parthibdutta.website</p>
        </div>
        <div class="button">
              <button id="one">
                  <img src={mail} alt=""/>
                  <p>Email</p>
              </button>
              <button id="two">
                  <img src={linkedin} alt=""/>
                  <p>Linkedin</p>
              </button>
        </div>
       </div>
    )
}