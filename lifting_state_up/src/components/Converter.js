export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenhit(celsius) {
    return celsius * (9 / 5) + 32;
}

export function converter(temperature, convert) {
    const data = parseFloat(temperature);

    if (Number.isNaN(data)) {
        return '';
    }

    const output = convert(data);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
