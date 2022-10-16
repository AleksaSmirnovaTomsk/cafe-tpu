import { YMaps, Map, Placemark } from "react-yandex-maps";
import emoji from "../../images/emoji.png";
import "./Maps.css";

const Maps = () => {
  return (
    <div id="Maps" className="Maps-layer">
      <div>
        <p>
          Ждем вас по адресу: <br /> ул. Усова, д. 4
        </p>
        <p>Время работы с 10:00 до 23:00</p>
        <img src={emoji} alt="emoji" />
      </div>
      <YMaps>
        <Map
          height="90%"
          width="50%"
          defaultState={{ center: [56.464326, 84.956659], zoom: 12 }}
        >
          <Placemark geometry={[56.464326, 84.956659]} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
