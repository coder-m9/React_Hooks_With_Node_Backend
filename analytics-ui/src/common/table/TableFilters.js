import React from "react";
import matchSorter from "match-sorter";

// Default Filter
export function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

// Filter to select columns
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id }
}) {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// Handy Text Filter - matchSorter with more options. We cna overide the deafult filter if needed
export function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
}
