import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { converter, toCelsius, toFahrenhit } from './Converter';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component{
    state = {
        temperature : '',
        scale: 'c',
    };

    handleChange = (event, scale) => {
        this.setState({
            temperature: event.target.value,
            scale,
        });
    };

    render(){

        const {temperature, scale} = this.state;

        const celsius = scale === 'f' ? converter(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? converter(temperature, toFahrenhit) : temperature;

        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} TemperatureChange={this.handleChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} TemperatureChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
