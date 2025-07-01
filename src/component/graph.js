import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    // "na me": "0",
    user: 100,
    guest: 200,
    amt: 2400,
  },
  {
    name: "Week 1",
    user: 400,
    guest: 300,
    amt: 2400,
  },
  {
    name: "Week 2",
    user: 50,
    guest: 148,
    amt: 2210,
  },
  {
    name: "Week 3",
    user: 350,
    guest: 300,
    amt: 2290,
  },
  {
    name: "Week 4",
    user: 100,
    guest: 208,
    amt: 800,
  },
  {
    name: "",
    user: 189,
    guest: 350,
    amt: 281,
  },
];
const yTicks = [0, 100, 200, 300, 400, 500];

class Linechart extends PureComponent {
  render() {
    return (
      <div className="chart-container">
        <ResponsiveContainer min-width={"100%"} height={250}>
          <LineChart
            height={250}
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            padding={{ left: 20, right: 20 }}
          >
            <CartesianGrid strokeDasharray="none" vertical={false} />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis ticks={yTicks} domain={[0, 500]} axisLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              height={40}
            />
            <Line
              type="monotone"
              dataKey="guest"
              stroke="#E9A0A0"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="user"
              stroke="#9BDD7C"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default Linechart;
