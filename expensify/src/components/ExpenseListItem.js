import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, note, id }) => (
  <li>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <p>Cost: £{amount}</p>
    <p>CreatedAt: {createdAt}</p>
    <p>Note: {note}</p>
  </li>
);

export default ExpenseListItem;
