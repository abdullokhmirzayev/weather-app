import './current-weather-details-card.css'

export const CurrentWeatherDetailsCard = ({ type, value }) => {
  return (
    <div className="current-weather-card">
      <p className="current-weather-card__type">{type}</p>
      <p className="current-weather-card__value">{value}</p>
    </div>
  );
};
