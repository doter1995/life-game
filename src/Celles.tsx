import * as React from 'react';

class Celles extends React.Component {
    render() {
        const { data } = this.props;
        const height = data.length * 11;
        const width = data[0] ? data[0].length * 11 : 0;
        return (
            <svg className="svg" width={width} height={height}>
                {data.map((item, index) => {
                    return (<g key={index} transform={`translate(0,${index * 11})`}>
                        {item.map((item, index) =>
                            (<rect key={index} width={10} height={10} x={index * 11} y={0} fill={item > 0 ? "#0f0" : "#eee"}></rect>)
                        )}
                    </g>)
                }
                )}
            </svg>
        );
    }
}
export default Celles;