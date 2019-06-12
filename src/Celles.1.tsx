import * as React from 'react';
import * as d3 from "d3";

class Celles extends React.Component {
    svg = null;
    groups = null;
    rect = null;
    componentDidMount() {
        this.init();
    }
    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }
    init() {
        const { data } = this.props;
        const height = data.length * 11;
        const width = data[0] ? data[0].length * 11 : 0;
        d3.select(this.svg).attr("width", width).attr("height", height);
        this.groups = d3.select(this.svg).selectAll("g").data(data).enter().append("g")
            .attr("transform", (data, index) => `translate(0,${index * 11})`);
        this.rect = this.groups.selectAll("rect").data((data) => data).enter().append("rect")
            .attr("x", (item, index) => (index * 11))
            .attr("y", 0)
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", (d) => (d > 0 ? "#0f0" : "#eee"))
    }
    update(nextProps) {
        const { data } = this.props;
        this.groups = d3.select(this.svg).selectAll("g").data(data)
        this.rect = this.groups.selectAll("rect").data((data) => data)
            .attr("fill", (d) => (d > 0 ? "#0f0" : "#eee"))
    }
    render() {
        return (
            <svg className="svg" ref={(ref) => this.svg = ref} />
        );
    }
}
export default Celles;