import './Footer.css'
import vk from '../../logo/vk.png'
import tiktok from '../../logo/tik-tok.png'
import telegram from '../../logo/telegram.png'
import youtube from '../../logo/youtube.png'

const Footer = () => {
    return (
        <div className='Footer-area'>
            <p>© TPU-CAFE. All Rights Reserved.</p>
            <div className='Footer-booking'>
                <a
                    href="https://vk.com/alex_vnrms"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='Footer-round'><img src={vk} alt="vk" /></div>
                </a>
                <a
                    href="https://vk.com/alex_vnrms"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='Footer-round'><img src={telegram} alt="telegram" /></div>
                </a>
                <a
                    href="https://vk.com/alex_vnrms"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='Footer-round'><img src={tiktok} alt="tik-tok" /></div>
                </a>
                <a
                    href="https://vk.com/alex_vnrms"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='Footer-round'><img src={youtube} alt="youtube" /></div>
                </a>
            </div>
        </div>
    )
}

export default Footer