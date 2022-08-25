import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const ChartComponent = (props) => {
  const {
    data,
    isMobile
  } = props;

  const colors = {
    backgroundColor: 'white',
    lineColor: '#8A24F3',
    textColor: 'black',
  };

  const {
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  } = colors;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const height = isMobile ? '300' : '450'
    const borderVisible = !isMobile || false

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        drawTicks: false,
        borderVisible,
        borderColor: '#DDE0E9'
      },
      timeScale: {
        borderVisible,
        borderColor: '#DDE0E9'
      },
      watermark: {
        color: 'rgba(0, 0, 0, 0)',
      },
      grid: {
        horzLines: {
          visible: false,
        },
        vertLines: {
          visible: false,
        },
      },
      crosshair: {
        horzLine: {
          visible: true,
          labelVisible: false,
        },
        vertLine: {
          visible: true,
          labelVisible: false,
        }
      },
      width: chartContainerRef.current.clientWidth,
      height,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({ lineColor, topColor: 'white', bottomColor: 'white' });
    newSeries.setData(data);
  

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};


