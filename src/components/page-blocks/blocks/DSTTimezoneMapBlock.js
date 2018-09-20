import React from 'react'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import {Row, Col} from 'react-flexbox-grid'
import 'components/static/tz-map-styles.css'
import {select} from "d3-selection";
import {geoPath} from "d3-geo";
import {json} from "d3-request";
import {feature} from "topojson";

// code adapted from this example gist: https://gist.github.com/NPashaP/a74faf20b492ad377312

const AttributionContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content: flex-end;
`
const DataAttribution = styled.h5`
  font-size: 11px;
  color: #666;
  text-align: right;
  display: block;
  max-width: 40%;
`

class DSTMap extends React.Component{
  constructor(props) {
    super(props);
    this.width = 900;
    this.height = 520;
    this.graphId = "tz-map";
  }
	componentDidMount() {
    const {stateMap, timezoneMap} = this.props.data;
    this.draw(stateMap, timezoneMap);
	}

  draw = (mapPath, tzMapPath) => {
    const graphId = "#"+this.graphId
    // json('../mapdata/us-states-topo.json', function(error, topoData) {
    json(mapPath, function(error, topoData) {
      const us = feature(topoData, topoData.objects.states);
      select(graphId).selectAll(".region")
        .data(us.features).enter()
        .append("path")
          .attr("d", geoPath())
          .attr("class","region")
          .style("fill", "none")
          .style("stroke", "#999")
          .style("stroke-width", "0.5px")
    });

    json(tzMapPath, function(error, topoData) {
      const tz = feature(topoData, topoData.objects.timezones);
      select(graphId).selectAll(".zones")
        .data(tz.features).enter()
        .append("path")
          .attr("d", geoPath())
          .attr("class","zones")
          .style("fill", "none")
          .style("stroke", "#000")
          .style("stroke-width", "1px")

    });
  }

	render() {
		return(
      <React.Fragment>
        <Row>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={2} md={8}
            lgOffset={2} lg={8}
          >
            <svg width="100%" height="100%" viewBox={`0 0 ${this.width} ${this.height}`} id={this.graphId}></svg>
            <AttributionContainer>
              <DataAttribution>Boundary data: Timezone Boundary Builder project (<a href="https://github.com/evansiroky/timezone-boundary-builder" target="_blank" rel="noreferrer noopener">link</a>). Note that proposed new timezones (California, Florida) are estimated from state boundaries, and not from any legally proposed specification.</DataAttribution>
            </AttributionContainer>
          </Col>
        </Row>
        <Spacer height={30}/>
      </React.Fragment>
    )
  }
}
export default DSTMap
