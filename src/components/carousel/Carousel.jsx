import Carousel from 'react-bootstrap/Carousel';
import first from '../../images/first.svg'
import second from '../../images/second.svg'
import third from '../../images/third.svg'
import './Carousel.css'

const Modal = () => {
    return (
        <Carousel fade variant="dark" controls={false} keyboard={false}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={first}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={second}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={third}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Modal