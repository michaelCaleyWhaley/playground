import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilters extends Component {
  constructor() {
    super();
    this.state = {
      calendarFocused: null,
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDate, setEndDate } = this.props;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused });
  };

  onTextChange = (e) => {
    const { setTextFilter } = this.props;
    setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    const { sortByDate, sortByAmount } = this.props;
    if (e.target.value === "date") {
      sortByDate();
    } else if (e.target.value === "amount") {
      sortByAmount();
    }
  };

  render() {
    const { text, sortBy, startDate, endDate } = this.props.filters;
    return (
      <div>
        <input type="text" value={text} onChange={this.onTextChange} />
        <select value={sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={startDate}
          startDateId="expensesStartDate"
          endDate={endDate}
          endDateId="expensesEndDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (textValue) => dispatch(setTextFilter(textValue)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: () => (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
