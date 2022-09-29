import Button from 'react-bootstrap/Button';
import './Record.css'

const Record = () => {
    return (
        <div className='Record-area'>
            <div className='Record-booking'>
                <h1>Успей забронировать столик!</h1>
                <p>При бронировании студентам ТПУ предоставляется скидка</p>
                <Button variant="success">Бронь</Button>{' '}
            </div>
        </div>
    )
}

export default Record