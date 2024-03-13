import { Component } from 'react'
import CarOver from '../../assets/car-over.png'
import CarIn from '../../assets/car-inside.png'
import './styles.css'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import SwitchButton from '../switch-button/SwitchButton'

export default class Overview extends Component {

  constructor (props) {
    super(props)
    this.state = {
      speed: 60,
      temp: 20,
      showIn: false
    }
  }

  toggleView = () => {
    this.setState({...this.state, showIn: !this.state.showIn})
  }

  render() {    
    return (
      <div className='overview'>
        <img src={this.state.showIn ? CarIn : CarOver} className='overview__image' alt="car-over" width={1240} height={697} />
        <div className="car-over-info">
          <div className='way'>
            <span className="label-lg">Запас хода</span>
            <h2 className="typography-1">750км</h2>
          </div>
          <div className='price'>
            <span className="label-lg">Цена</span>
            <h2 className="typography-1">$89, 990</h2>
          </div>
        </div>
        <ul className="car-diteils">
          <li className='card-diteils__item'>
            <div>
              <span className='label-md'>Скорость автомобиля</span>
              <h4 className='typography-2'>{this.state.speed} км/ч</h4>
            </div>
            <div className="controls">
              <img 
                src={arrowUp} 
                alt="arrow-up" 
                onClick={() => this.setState({...this.state, speed: this.state.speed + 1})} 
                width={22} 
                height={22} 
                className='controls__btn up' 
              />
              <img 
                onClick={() => this.setState({...this.state, speed: this.state.speed - 1})} 
                src={arrowDown} alt="arrow-up" width={22} height={22} className='controls__btn down' 
              />
            </div>
          </li>
          <li className='card-diteils__item'>
            <div>
            <span className='label-md'>Температура за окнами</span>
            <h4 className='typography-2'>{this.state.temp}°</h4>
            </div>
            <div className="controls">
              <img 
              onClick={() => this.setState({...this.state, temp: this.state.temp + 1})} 
              src={arrowUp} alt="arrow-up" width={22} height={22} className='controls__btn up' />
              <img 
              onClick={() => this.setState({...this.state, temp: this.state.temp - 1})} 
              src={arrowDown} alt="arrow-up" width={22} height={22} className='controls__btn down' />
            </div>
          </li>
          <li className='card-diteils__item'>
            <div>
              <span className='label-md'>Кондиционер</span>
              <div className='switch-btn'>
                <SwitchButton  />
              </div>
            </div>
          </li>
          <li className='card-diteils__item'>
            <div>
              <span className='label-md'>Версия Long Range</span>
              <div className='switch-btn'>
                <SwitchButton  />
              </div>
            </div>
          </li>
          <li className='card-diteils__item'>
            <div>
              <span className='label-md'>Вид автомобиля</span>
              <div className='switch-btn'>
                <SwitchButton isChecked={this.state.showIn} onChange={this.toggleView} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}