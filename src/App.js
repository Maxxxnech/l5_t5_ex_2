import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //Вызывается в самом начале. Здесь мы инициализируем состояние
  //В конструкторе можно указывать то, что должно быть сделано ДО монтирования
  constructor(props) {
    super(props);
    this.state = {
      title: "Текущее время",
      date: new Date(),
      counter: 0,
      buttonColor: "red"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Вызывается одтин раз - в тот момент, когда компонент смонтировался
  // Запускаем здесь то, что должно делаться ПОСЛЕ монтирования
  // Например - изменения стейта
  componentDidMount() {
    console.log("%ccomponentDidMount", "color:brown");
    this.intervalFlag = setInterval(() => {
      this.setState((state, props) => ({
        date: new Date(),
        counter: state.counter + 1
      }));
    }, 1000);
  }

  // Срабатывает при обновлении компонента
  // В этом методе апускаем то, что должно должно происходить МЕЖДУ обновлениями
  componentDidUpdate() {
    console.log("%ccomponentDidUpdate " + this.state.counter, "color:lime");
  }

  //Срабатывает перед размонтирванием
  //используется если изменилась навигация или родительский комп
  // Освобождаем ресурсы (отключаем интервалы, слушатели событий)
  componentWillUnmount() {
    console.log(
      "%ccomponentWillUnmount " + this.state.counter,
      "color:crimson"
    );
    clearInterval(this.intervalFlag);
  }

  //Применяется для тонкой настройки - когда рендер должен происходить, а когда не должен
  shouldComponentUpdate() {
    return true
  }
  handleClick() {
    this.setState((prevState) => ({
      buttonColor: prevState.buttonColor === "yellow" ? "red" : "yellow",
    }));
  }
  render() {
    console.log("%crender", "color:yellow");
    const {title, date, counter, buttonColor} = this.state;
    return (
      <div className="App">
        <h1>l5_t5, задание 2: жизненный цикл</h1>
        <p>{title}</p>
        <p>{date.toLocaleTimeString()}</p>
        <p>{counter}</p>
        <button onClick={this.handleClick} className={buttonColor}>Change me!</button>
      </div>
    );
  }
}

export default App;
