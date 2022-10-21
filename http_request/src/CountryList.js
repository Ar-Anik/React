import React from "react";
import axios from 'axios';

class CountryList extends React.Component{
    
    state = {
        countryList: []
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                this.setState({
                    countryList: response.data,
                })
                // console.log(response.status)
                // console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){

        const {countryList} = this.state;
        const CountryName = countryList.map((element) => {
            return (
            <>
                <li></li>
                <li>{element.name["common"]}</li>
                <li>{element.capital}</li>
                <li></li>
            </>)
        });

        return(
            <div>
                <ul>
                    {CountryName}
                </ul>
            </div>
        );
    }
}

export default CountryList;
