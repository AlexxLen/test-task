import { Alert, Button, Form, InputNumber, Spin } from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import { pointsAPI } from '../services/PointsService.ts';
import { formatDateTime } from '../utils/formatDateTime.ts';

const StatisticsPage = () => {
  const [pointsAmount, setPointsAmount] = React.useState<number>(100);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const formatTooltip = (date: Date, weight: number) => {
    return `${formatDateTime(
      date,
    )} <br/> <span style="color:red">[Wk] Вес на крюке: ${weight}</span>`;
  };

  const { data: points, isLoading, isError } = pointsAPI.useFetchPointsQuery(pointsAmount);

  const onButtonClick = () => {
    if (inputRef.current) {
      setPointsAmount(Number(inputRef.current.value));
    }
  };

  const chartOptions: Highcharts.Options = {
    title: {
      text: undefined,
    },

    chart: {
      type: 'line',
    },
    xAxis: {
      type: 'datetime',
      tickInterval: 3600 * 1000,
      lineColor: 'red',
      tickColor: 'red',
    },
    yAxis: {
      title: {
        text: undefined,
      },
      labels: {
        style: { color: 'red' },
      },
      lineColor: 'red',
      tickColor: 'red',
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return formatTooltip(new Date(this.x as string), this.y as number);
      },
    },
    series: [
      {
        type: 'line',
        step: 'left',
        data: points?.map((point) => [new Date(point.x).getTime(), point.y]),
        color: 'red',
      },
    ],
  };

  if (isLoading) {
    return (
      <Spin
        size="large"
        style={{ width: '100%', marginTop: '100px' }}
      />
    );
  }

  if (isError) {
    return (
      <Alert
        message="Ошибка загрузки данных"
        type="error"
      />
    );
  }

  return (
    <div>
      <div className="container">
        <Form
          layout="inline"
          style={{ marginBottom: '20px' }}>
          <Form.Item label="Количество точек: ">
            <InputNumber
              defaultValue={100}
              ref={inputRef}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={onButtonClick}>
              Загрузить точки
            </Button>
          </Form.Item>
        </Form>
        <div style={{ width: '100%' }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
