import React from 'react';
import {AWFCity, DEFINED_CITIES} from './awf.model';

interface CitySelectorProps {
    onChange: any;
}

interface CitySelectorState {
    currentCity?: AWFCity | null;
}

class CitySelector extends React.Component<CitySelectorProps, CitySelectorState> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentCity: null
        }
    }

    change = (event: any) => {
        const chosenValue: AWFCity | undefined = DEFINED_CITIES.find((el: any) => el.id === event.target.value);
        this.setState((state, props) => {
            return {currentCity: chosenValue }
        });
        console.log("Chosen city: " + chosenValue?.name);
        this.props.onChange(chosenValue);
    }

    render() {
        const cityOptions = DEFINED_CITIES.map((city: AWFCity) => <option key={city.id}
                                                                          value={city.id}>{city.name}</option>);

        return (
            <select className={"awf-field"} onChange={this.change}>
                <option value="" disabled selected hidden>Select city</option>
                {cityOptions}</select>
        );
    }
}

export default CitySelector;
