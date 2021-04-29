import moment from "moment";

export default [
  { id: "1", description: "Gum", note: "", amount: 195, createdAt: moment(0) },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 1095,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Credit card",
    note: "",
    amount: 4500,
    createdAt: moment(0)
      .add(10, "days")
      .valueOf()
  },
  {
    id: "4",
    description: "Monitor",
    note: "",
    amount: 200,
    createdAt: moment(0)
      .subtract(2, "days")
      .valueOf()
  }
];
