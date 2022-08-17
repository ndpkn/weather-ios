import './main.scss'

const Main = (days) => {
    // console.log(days.days[0].main.temp);
    // console.log(days.days.list);

    return (
        <div className="main">
            <h1 className="main-city">{days.days.city.name}</h1>
            <h2 className="main-temp">{Math.floor(days.days.list[0].main.temp)}°</h2>
            <p className="main-descr">{days.days.list[0].weather[0].description}</p>
            <p className="main-maxmin">Макс.: {Math.floor(days.days.list[0].main.temp_max)}°, мин.: {Math.floor(days.days.list[20].main.temp_min)}°</p>
            <p className="main-descr">Ощущается как {Math.floor(days.days.list[0].main.feels_like)}°</p>
        </div>
    )
}

export default Main