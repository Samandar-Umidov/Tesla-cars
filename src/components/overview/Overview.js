import { Component } from "react";
import CarOver from "../../assets/car-over.png";
import "./styles.css";
import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import SwitchButton from "../switch-button/SwitchButton";

import CarIn from "../../assets/car-inside.png";
import CarWhite from "../../assets/car-bright.png";
import CarBright from "../../assets/car-white.png";

const carColors = {
  black: CarIn,
  bright: CarBright,
  white: CarWhite,
}

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 60,
      temp: 20,
      showIn: false,
      carImg: CarIn 
    };
  }

  toggleView = () => {
    this.setState({ ...this.state, showIn: !this.state.showIn });
  };

  render() {
    return (
      <div className="overview">
        {/*  ======== Overview image ========= */}
        <img
          src={this.state.showIn ? this.state.carImg : CarOver}
          className="overview__image"
          alt="car-over"
          width={1240}
          height={697}
        />
        {/*  ======== Overview image end ========= */}

        {/*  ======== Car price and max speed ========= */}
        <div className="car-over-info">
          <div className="way">
            <span className="label-lg">Запас хода</span>
            <h2 className="typography-1">750км</h2>
          </div>
          <div className="price">
            <span className="label-lg">Цена</span>
            <h2 className="typography-1">$89, 990</h2>
          </div>
        </div>
        {/*  ======== Car price and max speed end ========= */}
        {/*  ======== Diteils start ========= */}
        <ul className="car-diteils">
          {
            this.state.showIn 
             ? (
              <li className="card-diteils__item">
                <div>
                  <span className="label-md">Температура за окнами</span>
                  <div className="colors-wrap">
                    <span className="colors__item black" onClick={() => this.setState({...this.state, carImg: carColors.black})}></span>
                    <span className="colors__item bright" onClick={() => this.setState({...this.state, carImg: carColors.bright})}></span>
                    <span className="colors__item white" onClick={() => this.setState({...this.state, carImg: carColors.white})}></span>
                  </div>
                </div>
              </li>
             )
             : (
              <>
                <li className="card-diteils__item">
            <div>
              <span className="label-md">Скорость автомобиля</span>
              <h4 className="typography-2">{this.state.speed} км/ч</h4>
            </div>
            <div className="controls">
              <img
                src={arrowUp}
                alt="arrow-up"
                onClick={() =>
                  this.setState({ ...this.state, speed: this.state.speed + 1 })
                }
                width={22}
                height={22}
                className="controls__btn up"
              />
              <img
                onClick={() =>
                  this.setState({ ...this.state, speed: this.state.speed - 1 })
                }
                src={arrowDown}
                alt="arrow-up"
                width={22}
                height={22}
                className="controls__btn down"
              />
            </div>
          </li>
          <li className="card-diteils__item">
            <div>
              <span className="label-md">Температура за окнами</span>
              <h4 className="typography-2">{this.state.temp}°</h4>
            </div>
            <div className="controls">
              <img
                onClick={() =>
                  this.setState({ ...this.state, temp: this.state.temp + 1 })
                }
                src={arrowUp}
                alt="arrow-up"
                width={22}
                height={22}
                className="controls__btn up"
              />
              <img
                onClick={() =>
                  this.setState({ ...this.state, temp: this.state.temp - 1 })
                }
                src={arrowDown}
                alt="arrow-up"
                width={22}
                height={22}
                className="controls__btn down"
              />
            </div>
          </li>
          <li className="card-diteils__item">
            <div>
              <span className="label-md">Кондиционер</span>
              <div className="switch-btn">
                <SwitchButton />
              </div>
            </div>
          </li>
          <li className="card-diteils__item">
            <div>
              <span className="label-md">Версия Long Range</span>
              <div className="switch-btn">
                <SwitchButton />
              </div>
            </div>
          </li>
              </>
             )
          }
          <li className="card-diteils__item">
            <div>
              <span className="label-md">Вид автомобиля</span>
              <div className="switch-btn">
                <SwitchButton
                  isChecked={this.state.showIn}
                  onChange={this.toggleView}
                />
              </div>
            </div>
          </li>
        </ul>
        {/*  ======== Diteils end ========= */}
      </div>
    );
  }
}

