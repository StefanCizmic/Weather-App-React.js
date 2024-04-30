import { localDateTime } from "./localDateTime";
import { unixTimestamp } from "./unixTimestamp";
import moonIcon from "../Images/Icons/moonIcon.png";
import sunIcon from "../Images/Icons/sunIcon.png";
import cloudsIcon from "../Images/Icons/cloudsIcon.png";
import rainIcon from "../Images/Icons/rainIcon.png";
import snowIcon from "../Images/Icons/snowIcon.png";
import mistIcon from "../Images/Icons/mistIcon.png";

export const currentForecastIcon = (weather) => {
  
  const local = localDateTime(weather.timezone_offset).dateTime;
  const currentTime = local.getHours() * 60 + local.getMinutes();

  const calculate = unixTimestamp(weather);
  const sunrise = calculate.sunrise;
  const sunset = calculate.sunset;

  const weatherCondition = weather?.current?.weather[0]?.main;

  if (currentTime <= sunrise) {
    return <img src={moonIcon} alt="moonIcon" />;
  } else {
    switch (weatherCondition) {
      case "Clear":
        return <img src={sunIcon} alt="sunIcon" />;
        break;
      case "Clouds":
        return <img src={cloudsIcon} alt="cloudsIcon" />;
        break;
      case "Rain" && "Drizzle" && 'Thunderstorm':
        return <img src={rainIcon} alt="cloudsIcon" />;
        break;
      case "Snow":
        return <img src={snowIcon} alt="cloudsIcon" />;
        break;
      case "Haze" && "Mist":
        return <img src={mistIcon} alt="cloudsIcon" />;
        break;
      default:
        break;
    }
  }
};
