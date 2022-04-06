import './Chart.css';
import ChartBar from './ChartBar';
import Card from '../UI/Card';

const Chart = (props) => {
  const maxValue = props.dataPoints.reduce((x, y) =>
    x > y.value ? x : y.value
  );
  return (
    <Card className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
