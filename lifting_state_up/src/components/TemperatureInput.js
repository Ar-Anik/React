import React from 'react';

const tempName = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

function TemperatureInput ({temperature, scale, TemperatureChange}){

        return (
            <div>
                <fieldset>
                    <legend>Enter Temperature in {tempName[scale]}:</legend>
                    <input type="text" value={temperature} onChange={(event) => TemperatureChange(event, scale)}/>
                </fieldset>
            </div>
        );
}

export default TemperatureInput;
