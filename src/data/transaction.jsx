export const transactions = [
  {
    id: 1,
    title: "Salary",
    amount: 420000,
    type: "earnings",
  },
  {
    id: 2,
    title: "SIP Return",
    amount: 25000,
    type: "earnings",
  },
  {
    id: 3,
    title: "Grocery",
    amount: 11500,
    type: "expenses",
  },
  {
    id: 4,
    title: "Rent",
    amount: 33000,
    type: "expenses",
  },
  {
    id: 5,
    title: "EMI",
    amount: 28000,
    type: "expenses",
  },
  {
    id: 6,
    title: "Monthly RD",
    amount: 10000,
    type: "expenses",
  },
  {
    id: 7,
    title: "Monthly SIP",
    amount: 56000,
    type: "expenses",
  },
];

// Can also calculate the earnings and expenses here in this file

// export const earnings = expense.reduce((acc, curr) => {
//     if(curr.type === 'earnings') acc = acc + curr.amount
//     return acc
// }, 0)

// export const expenses = expense.reduce((acc, curr) => {
//     if(curr.type === 'expenses') acc = acc - curr.amount
//     return acc
// }, earnings)
