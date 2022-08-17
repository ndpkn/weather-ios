import './hourly.scss'

const Hourly = (days) => {
    // console.log(days);
    return (
        <div className="hourly container">

            {/* <div className="hourly-descr">
                <p>Грозы с 16:00 до 18:00; ожидается преимущественно ясная погода в 21:00</p>
            </div> */}

            <div className="hourly-info">
                {days.days.map((item, index) => {
                    const time = new Date(item.dt * 1000).getHours()
                    const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`
                    
                    return(
                        <div className="hourly-info__day" key={index}>
                            <div className="hourly-info__time">
                                <p>{time < 10 ? '0' + time : time}</p>
                            </div>
                            <div className="hourly-info__icon">
                                <img src={icon} alt="" />
                            </div>
                            <div className="hourly-info__temp">
                                <p>{Math.floor(item.main.temp)}°</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hourly