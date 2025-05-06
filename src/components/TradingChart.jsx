import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

const TradingChart = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000000',
      },
      grid: {
        vertLines: { color: '#e0e0e0' },
        horzLines: { color: '#e0e0e0' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    const candleSeries = chart.addCandlestickSeries();
    candleSeries.setData([
      { time: 1714521600, open: 100, high: 110, low: 90, close: 105 },
      { time: 1714608000, open: 105, high: 115, low: 100, close: 110 },
      { time: 1714694400, open: 110, high: 120, low: 105, close: 115 },
      { time: 1714780800, open: 115, high: 125, low: 110, close: 120 },
      { time: 1714867200, open: 120, high: 130, low: 115, close: 125 },
    ]);

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] z-10"
    />
  );
};

export default TradingChart;