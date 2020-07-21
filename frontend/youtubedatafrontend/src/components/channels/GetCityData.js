import React, { Component, Fragment } from "react";
import axios from "axios";
import SearchedData from "./SearchedData";
import LoadingSpinner from "./LoadingSpinner";
// import ProjectInfo from "./ProjectInfo";
import { MDBBtn } from "mdbreact";
import { countries } from "country-data";
import { getYtubeData } from "../../actions/ytubedata";
import { connect } from "react-redux";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

const fetchWeather = async (city) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};

class GetCityData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      data: {},
      text: "",
      numb: "",
      show: false,
    };
  }
  search = async (e) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (e.key === "Enter") {
      const data = await fetchWeather(this.state.city);
      this.setState({
        city: "",
        data: data,
      });
    } else {
      const data = await fetchWeather(this.state.city);
      this.setState({
        data: data,
      });
    }
  };
  handleChange = (e) => {
    this.setState({ city: e.target.value });
    this.search(e);
  };
  handleTextChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
    });
  };
  handleNumbChange = (e) => {
    this.setState({
      ...this.state,
      numb: e.target.value,
    });
  };

  // onButtonClick = async () => {
  //   this.setState({
  //     loading: true,
  //     show: false,
  //   });
  //   const body = {
  //     query: this.state.text,
  //     city:
  //       this.state.data.main &&
  //       ` [['${this.state.data.name}' , '${Number(
  //         this.state.data.coord.lat
  //       )} , ${Number(this.state.data.coord.lon)}']]`,
  //     number_queries: this.state.numb,
  //   };
  //   await axios({
  //     method: "post",
  //     url: "http://127.0.0.1:8000/",
  //     data: body,
  //   })
  //     .then((response) => {
  //       this.setState({
  //         loading: false,
  //         ytubeData: response,
  //         show: true,
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  onButtonClick = () => {
    const body = {
      query: this.state.text,
      city:
        this.state.data.main &&
        ` [['${this.state.data.name}' , '${Number(
          this.state.data.coord.lat
        )} , ${Number(this.state.data.coord.lon)}']]`,
      number_queries: this.state.numb,
    };
    this.props.getYtubeData(body);
    console.log("reducer data" + this.props.ytubeData);
    console.log("reducer loading" + this.props.loading);
  };

  render() {
    const { data, city, text, numb } = this.state;
    console.log("reducer data" + this.props.ytubedata);
    console.log("reducer loading" + this.props.loading);
    if (this.props.loading) {
      return <LoadingSpinner />;
    } else {
      return (
        <Fragment>
          <div>
            <input
              type="text"
              className="search"
              placeholder="Search for your city/place name"
              value={city}
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  return this.onButtonClick();
                }
              }}
            />
            <input
              type="text"
              className="search"
              placeholder="What is your interest"
              value={text}
              onChange={this.handleTextChange}
            />
            <input
              type="number"
              className="search"
              placeholder="Time for search"
              value={numb}
              onChange={this.handleNumbChange}
            />
            <MDBBtn
              gradient="aqua"
              type="primary"
              onClick={this.onButtonClick}
              disabled={this.props.loading}
            >
              Search
            </MDBBtn>
            {this.state.data.main && (
              <div className="city">
                <h2 className="city-name">
                  <span>{this.state.data.name}</span>
                  <sup>{this.state.data.sys.country}</sup>
                  <span>{countries[data.sys.country].emoji}</span>
                </h2>
                <div className="city-name">{text}</div>
              </div>
            )}
            <div>
              {this.props.ytubedata.length > 1 ? (
                <SearchedData
                  ytubedata={this.props.ytubedata}
                  city={city}
                  query={text}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  ytubedata: state.ytubedata.ytubedata,
  loading: state.ytubedata.loading,
});

export default connect(mapStateToProps, { getYtubeData })(GetCityData);
