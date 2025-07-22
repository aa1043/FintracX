export const validateEmail = (email) => {
    const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  export const getInitials = (name) => {
    if (!name) return "";
  
    const words = name.split(" ");
    let initials = "";
  
    for (let i = 0; i < Math.min(words.length, 2); i++) {
      initials += words[i][0];
    }
  
    return initials.toUpperCase();
  };

  export const addThousandsSeparator = (num) => {
    if (num === null || isNaN(num)) return "";
  
    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return fractionalPart
      ? `${formattedInteger}.${fractionalPart}`
      : formattedInteger;
  };

  export const prepareExpenseBarChartData = (data = []) => {
    const chartData = data.map(((item) => ({
      category: item?.category,
      amount: item?.amount,
    })));
  
    return chartData;
  };

import moment from "moment";

export const prepareIncomeBarChartData = (transactions = []) => {
  if (!transactions || transactions.length === 0) return [];

  const grouped = {};

  transactions.forEach((tx) => {
    const date = moment(tx.date).format("Do MMM");
    const key = `${date}-${tx.source}`;

    if (!grouped[key]) {
      grouped[key] = {
        date,
        source: tx.source,
        amount: tx.amount,
        category: `${tx.source} (${date})`, // for X-axis
      };
    } else {
      grouped[key].amount += tx.amount;
    }
  });

  return Object.values(grouped);
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date)); 

  const chartData = sortedData.map((item, index) => ({
    // Make x-axis label unique by adding index or time
    month: moment(item?.date).format('Do MMM') + ` (${item.category})`,
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};