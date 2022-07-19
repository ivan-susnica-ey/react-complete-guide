import "./Chart.scss";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((e) => e.value);
  //transform dataPoint Object in array of numbers
  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum);

  return (
    <div className="chart">
      {props.dataPoints.map((e) => (
        <ChartBar
          value={e.value}
          maxValue={totalMaximum}
          label={e.label}
          key={e.label}
        />
      ))}
    </div>
  );
};

export default Chart;
