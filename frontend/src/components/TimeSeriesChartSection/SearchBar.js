import Select from 'react-select';
import ApexChart from './ApexChart';
import React from 'react';
import { TopLine, Heading, TextWrapper, Description } from './TimeSeriesChartElements';

function forecastTimeSeriesValue(dataPoints) {
    let daySum = 0;
    let noDays = 0;
    // dataPoints.forEach(element => {
    //     console.log("reached this")
    //     daySum += element;
    //     noDays++;
    // });
    let x = dataPoints.length - 1; // length and indexing do not work
    while (x >= 0) {
        daySum = daySum + dataPoints[x];
        noDays++;
        x = x - 7;
    }
    return daySum / noDays; //NaN
}

function averageTimeSeriesValues(dataPoints) {
    var sum = 0;
    for(var i = 0; i < dataPoints.length; i++) {
        sum += dataPoints[i];
    }

    var avg = sum/dataPoints.length;
    return avg;
}

function priceModificationTimeSeriesValues(dataPoints) {
    var text = 'has not experienced significant changes, overall.';
    var percentModif = 0;
    var valModif = 0;
    var lastVal = dataPoints[dataPoints.length - 1];
    var oneWeekBeforeVal = dataPoints[0];
    if (lastVal !== oneWeekBeforeVal) {
        percentModif = (lastVal - oneWeekBeforeVal) / oneWeekBeforeVal * 100;
        valModif = lastVal - oneWeekBeforeVal;
        if (percentModif < 0) {
            text = 'has experienced an overall decrease of ' + (-percentModif.toFixed(2)) + '% or ' + (-valModif.toFixed(2)) + ' RON.';
        }
        else if (percentModif > 0){
            text = 'has experienced an overall increase of ' + percentModif.toFixed(2) + '% or ' + valModif.toFixed(2) + ' RON.';
        }
        else if (percentModif === 0) {
            
        }
    }
    return text;
}

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            selectedProductId: null,
            timeSeriesValues: [],
            timeSeriesDates: [],
            forecastedVal: null,
            maxVal: null,
            minVal: null,
            avgVal: null,
            productMeasurement: '',
            productNoRev: '',
            searchHandled: false,
            priceModification: ''
        }
    }

    handleChange = selectedOption => {
        this.chartRef = null;
        this.setState(
            {
                selectedOption,
                searchHandled: true,
                selectedProductId: selectedOption.product_id,
                productMeasurement: selectedOption.measurement_unit,
                productNoRev: selectedOption.no_reviews,
            }, () => { // after state is updated

                let seriesValues = [];
                let seriesDates = [];

                fetch("http://localhost:3001/data-analysis", {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        productId: this.state.selectedProductId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    data.forEach(element => {
                        seriesValues.push(element.price);
                        seriesDates.push(element.date.substring(0, 10));
                    }) 
            
                    this.setState({
                        timeSeriesValues: seriesValues,
                        timeSeriesDates: seriesDates,
                    },
                        () => {
                            var result = forecastTimeSeriesValue(this.state.timeSeriesValues).toFixed(2);
                            var max = Math.max.apply(Math, this.state.timeSeriesValues).toFixed(2);
                            var min = Math.min.apply(Math, this.state.timeSeriesValues).toFixed(2);
                            var avg = averageTimeSeriesValues(this.state.timeSeriesValues).toFixed(2);
                            var modifText = priceModificationTimeSeriesValues(this.state.timeSeriesValues);
                            this.setState({
                                forecastedVal: result,
                                maxVal: max,
                                minVal: min,
                                avgVal: avg,
                                priceModification: modifText
                            });
    
                        })
        
                })
                .catch(function (err) { console.error(err); });

                this.chartRef = React.createRef();
            }
        )
    };

    renderData = () => {
        if(this.state.searchHandled === true) {
            return (
                <TextWrapper>
                        <Description darkText={true}>Measurement unit: <b>{this.state.productMeasurement}</b></Description>
                        <Description darkText={true}>Number of reviews: <b>{this.state.productNoRev}</b></Description><br />
                        <ApexChart key={this.chartRef} values={this.state.timeSeriesValues} dates={this.state.timeSeriesDates} /><br /><br /><br />
                        <TopLine>Time Series Analysis</TopLine>
                        <Heading>See statistics and a forecast for the selected product</Heading><br /><br />
                        <Description darkText={true}>The price <b>{this.state.priceModification}</b></Description>
                        <Description darkText={true}>The maximum observed price: <b>{this.state.maxVal} RON</b></Description>
                        <Description darkText={true}>The minimum observed price: <b>{this.state.minVal} RON</b></Description>
                        <Description darkText={true}>The average computed price: <b>{this.state.avgVal} RON</b></Description>
                        <Description darkText={true}>The forecasted price for the next week: <b>{this.state.forecastedVal} RON</b></Description>
                    </TextWrapper>
            )
        }
    }

    render() {
        return (
            <>
                <Select
                    value={this.state.selectedOption}
                    options={this.props.searchList}
                    onChange={this.handleChange}
                    styles={customStyles}
                    placeholder="Search..."
                    openMenuOnClick={false}
                    classNamePrefix="select"
                /><br/>
                {this.renderData()}
                <br/><br/><br/>
            </>
        )
    }
}

// search bar styling
const customStyles = {
    control: (base, state) => ({
        ...base,
        fontFamily: 'Times New Roman',
        fontSize: 18,
        border: state.isFocused ? 0 : 0,
        boxShadow: state.isFocused ? 0 : 0,
        cursor: 'text',
        borderRadius: 0,
        borderBottom: 'solid 1px',
    }),

    option: (styles, { isFocused }) => {
        return {
            ...styles,
            cursor: 'pointer',
            backgroundColor: isFocused ? 'white' : 'white',
            color: isFocused ? '#11c0b9' : 'black',
            lineHeight: 2,
        }
    },

    input: styles => ({
        ...styles,
        color: 'black',
        fontFamily: 'Times New Roman, Times, Serif',
    }),

    menu: styles => ({
        ...styles,
        marginTop: 0,
        boxShadow: 'none',
        borderRadius: 0,
    }),

    singleValue: styles => ({
        ...styles,
        color: '#11c0b9',
    }),
};