import React, { Component } from "react";
import "./chartMock.css";

export default class HighChartMock extends Component {
  render() {
    return (
      <div className="chart" id="highChart">
        <h4>
          {" "}
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span> 4.9 out of 5
        </h4>
        <h5> 9,548 customer ratings</h5>
        <h5>
          <a href="#">5 Star </a> <progress value="64" max="100" />{" "}
          <a href="#">64%</a>{" "}
        </h5>
        <h5>
          <a href="#">4 Star </a> <progress value="15" max="100" />{" "}
          <a href="#">15%</a>{" "}
        </h5>
        <h5>
          <a href="#">3 Star </a> <progress value="9" max="100" />{" "}
          <a href="#">9%</a>{" "}
        </h5>
        <h5>
          <a href="#">2 Star </a> <progress value="7" max="100" />{" "}
          <a href="#">7%</a>{" "}
        </h5>
        <h5>
          <a href="#">1 Star </a> <progress value="5" max="100" />{" "}
          <a href="#">5%</a>{" "}
        </h5>
        <hr></hr>
        <a href="#">See all customer reviews &gt; </a>
      </div>
    );
  }
}