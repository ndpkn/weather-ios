import './daily.scss'

const Daily = (days) => {
    // const minTemp = days.days.filter(reading => reading.dt_txt.includes("03:00:00"))
    const maxTemp = days.days.filter(reading => reading.dt_txt.includes("15:00:00"))

    return (
        <div className="daily container">
            <div className="daily-head">
                <p>Прогноз на 5 дней</p>
            </div>
            {maxTemp.map((item, index) => {
                const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`
                let day = new Date(item.dt * 1000).getDay()
                let dayName
                switch(day){
                    case 1:
                        dayName="Пн";
                        break;
                    case 2:
                        dayName="Вт";
                        break;
                    case 3:
                        dayName="Ср";
                        break;
                    case 4:
                        dayName="Чт";
                        break;
                    case 5:
                        dayName="Пт";
                        break;
                    case 6:
                        dayName="Сб";
                        break;
                    case 0:
                        dayName="Вс";
                        break;
                    default:
                        dayName="ошибка";
                    }

                return (
                    <div className="daily-item" key={index}>
                        <div className="daily-item__day"><p>{dayName}</p></div>
                        <div className="daily-item__icon"><img src={icon} alt="" /></div>
                        {/* <div className="daily-item__mintemp"><p></p></div> */}
                        <progress className="daily-item__range" min="10" max="40" value={Math.floor(item.main.temp)}></progress>
                        <div className="daily-item__maxtemp"><p>{Math.floor(item.main.temp)}</p></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Daily