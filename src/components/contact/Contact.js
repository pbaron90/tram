import './contact.scss'
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div className="contact__container">
      <h1>
        Contact Me
      </h1>

      <div className="contact__box">
        <div className="gradient" />
        <div className="contact__box-phone">
        <Icon icon="fxemoji:cellphone" color="black" />
        <p>: (704) - 123 - 4567</p>
        </div>
        <div className="contact__box-email">
        <Icon icon="logos:google-gmail" color="black" />
        <p>
        : Tramsemail@gmail.com
        </p>
        </div>
        <div className="contact__box-insta">
        <Icon icon="icon-park:instagram" color="black" />
        <p> : @Tramonthebeat</p>
        </div>
        <div className="contact__box-tiktok">
        <Icon icon="logos:tiktok-icon" color="black" />
        <p>: @whatistiktok</p>
        </div>
      </div>
    </div>
  )
}

export default Contact