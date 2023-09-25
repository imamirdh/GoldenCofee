import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
function Chart({ title, dataKey, grid }) {
  const data = [
    {
      "name": " فروردین",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "ادریبهشت",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "خرداد",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "تیر",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "مرداد",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "شهریور",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "مهر",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "آبان",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "آذر",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "دی",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "بهمن",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "اسفند",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
  ]
  return (
    <div className="chart rounded-lg p-6 shadow-lg border-s-4 border-slate-500 dark:border-none font-Dana">
      <ResponsiveContainer width={1200} aspect={5}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
