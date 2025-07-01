import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Basic Tees", value: 55 },
  { name: "Customer Short Pants", value: 31 },
  { name: "Super Hoodies", value: 14 },
];

const COLORS = ["#98D89E", "#EE8484", "#F6DC7D", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          startAngle={270}
          endAngle={-90}
        >
          {data.map((entry, index) => (
            <Cell
              className="pie"
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;
