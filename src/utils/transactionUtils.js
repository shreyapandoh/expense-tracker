export const calculateExpenses = (transactions) => {
  return transactions.reduce(
    (acc, curr) => (curr.type === "expenses" ? acc + curr.amount : 0),
    0
  );
};

export const calculateEarnings = (transactions) => {
  return transactions.reduce((acc, curr) => {
    if (curr.type === "earnings") acc += curr.amount;
    return acc;
  }, 0);
};

export const calculateBalance = (transactions) => {
  const earnings = calculateEarnings(transactions);
  const expenses = calculateExpenses(transactions);

  return earnings - expenses;
};
