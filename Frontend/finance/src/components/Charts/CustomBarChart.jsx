
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({
  data = [],
  xAxisKey = "category", // 👈 default for expense
  barKey = "amount",
  tooltipFields = ["amount"], // 👈 display in order
}) => {
  const getBarColor = (index) => (index % 2 === 0 ? "#875cf5" : "#cfbefb");

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const entry = payload[0].payload;

      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          {tooltipFields.map((field, index) => (
            <p key={index} className="text-sm text-gray-600">
              {field.charAt(0).toUpperCase() + field.slice(1)}:{" "}
              <span className="font-medium text-gray-900">
                {field === "amount" ? `$${entry[field]}` : entry[field]}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey={barKey} radius={[10, 10, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;