import AnimatedLetters from '../AnimatedLetters'
import React,{ useEffect,useRef,useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    useEffect(() => {

        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            'service_ytwgtkq',
            'template_387bti8',
            form.current,
            'g-lIWu-ptdcYnrjbJ'
            
            
        )
        .then(
            () => {
                alert("Messgae successfully sent!")
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, Please try again! ')
            }
        );
      };
    return (
        <>
        <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass}
                 strArray={['C','o','n','t','a','c','t',' ','M','e']}  
                idx={15}
                
                />
            </h1>
            <p>
                I am a 3rd  year Student and open for Working with coding enthusiasts.
            </p>
            <div className="contact-form">
                <form ref={form} onSubmit={(e)=> sendEmail(e)}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder='Name' required />
                        </li>
                        <li className="half">
                            <input type="email" name="email" placeholder='Email' required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject"required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required/>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className="info-map">
            Anant Sharan Pandey <br />
            India <br />
            Lucknow <br />
            <span> anantsharanpandey@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[26.8467, 80.9462]} zoom={13}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.8467, 80.9462]}>
              <Popup className='msg'>Anant lives here, come over for a cup of tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}
export default Contact