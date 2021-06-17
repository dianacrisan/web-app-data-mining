import { TopLine, InfoContainer, InfoWrapper, InfoRow, Heading, TextWrapper, Description } from './TimeSeriesChartElements';
import React from 'react';
import Select from 'react-select';
import Chart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        console.log("aici")
        console.log(this.props.values)

        this.state = {

            series: [{
                name: "Price",
                data: this.props.values
            }],
            options: {
                chart: {
                    width: '100%',
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ["#11c0b9"],
                dataLabels: {
                    // enabled: true,
                    style: {
                        colors: ["#000"]
                    }
                },
                stroke: {
                    curve: 'smooth',
                },
                markers: {
                    size: 3
                },
                title: {
                    text: 'Daily Price Evolution',
                    align: 'left'
                },
                xaxis: {
                    categories: this.props.dates,
                    type: "datetime",

                },
                tooltip: {
                    theme: 'dark',
                    style: {
                        colors: ["#11c0b9"]
                    },
                }
            }
        };
    }

    render() {
        return <>
            <div align="center">
                <Chart options={this.state.options} series={this.state.series} type="line" width={500} height={320} />
                <br />
            </div>
        </>
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

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            selectedProductId: null,
            timeSeriesValues: [],
            timeSeriesDates: [],
            // timeSeriesValues: [0, 0, 0, 0],
            // timeSeriesDates: ["2021-06-01", "2021-06-02", "2021-06-03", "2021-06-04"],
        }
    }


    handleChange = selectedOption => {
        this.chartRef = null;
        
        this.setState(
            {
                selectedOption,
                selectedProductId: selectedOption.product_id
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
                            // timeSeriesDataPoints.push([element.date.substring(0, 10), element.price]);
                        })
                    })
                    .catch(function (err) { console.error(err); });

                this.setState({
                    timeSeriesValues: seriesValues,
                    timeSeriesDates: seriesDates,
                });

                this.chartRef = React.createRef();
            }
        )
    };

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
                />
                <TextWrapper>
                    <Description />
                </TextWrapper>
                <ApexChart key={this.chartRef} values={this.state.timeSeriesValues} dates={this.state.timeSeriesDates} />
            </>
        )
    }
}




const TimeSeriesChartSection = ({ lightBg, id, topLine, lightText, darkText, headline, description }) => {

    let productsArray = [];
    fetch("http://localhost:3001/search-products")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                productsArray.push({ value: element.product_name, label: element.product_name, product_id: element.product_id, measurement_unit: element.measurement_unit, no_reviews: element.no_reviews });
            })
        })
        .catch(function (err) { console.error(err); });

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                        </TextWrapper>
                    </InfoRow>
                    <SearchBar searchList={productsArray} />
                    <TextWrapper>
                        <Description>{description}</Description>
                    </TextWrapper>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default TimeSeriesChartSection;
