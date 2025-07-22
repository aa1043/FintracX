import React from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";
const IncomeOverview = ({ transactions = [], onAddIncome }) => {
  const chartData = prepareIncomeBarChartData(transactions);

  return (
    <div className="card mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Income Overview</h2>
          <p className="text-xs mt-1 text-gray-500">
            Track your earnings over time and analyze your income
          </p>
        </div>
        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-sm" />
          Add Income
        </button>
      </div>

      <CustomBarChart
        data={chartData}
        xAxisKey="category"
        tooltipFields={["source", "amount", "date"]}
      />
    </div>
  );
};

export default IncomeOverview;