import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { SelectColumnFilter } from "./common/table/TableFilters";
import { Table } from "./common/table/DataTable"; // Table is moved as common component

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
  }
`;

// Parent Component
function UserMetric() {
  const columns = React.useMemo(
    () => [
      {
        Header: "User Metrics",
        columns: [
          {
            Header: "Id",
            accessor: "id",
            disableFilters: true
          },
          {
            Header: "Name",
            accessor: "name",
            filter: "text"
          },
          {
            Header: "Status",
            accessor: "status",
            Filter: SelectColumnFilter,
            filter: "includes",
            canSort: false
          },
          {
            Header: "Description",
            accessor: "description",
            disableFilters: true,
            canSort: false
          },
          {
            Header: "Delta",
            accessor: "delta",
            disableFilters: true,
            canSort: false
          },
          {
            Header: "CreatedOn",
            accessor: "createdOn",
            disableFilters: true,
            sortable: true
          }
        ]
      }
    ],
    []
  );

  const [userdata, setUserData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/analytics/usermetrics")
      .then(({ data }) => {
        console.log("data", data);
        setUserData(data);
      })
      .catch(error => {
        console.log("error occured in calling API:", error);
        setError("Error Occured");
      });
  }, []);

  return userdata ? (
    <Styles>
      <Table columns={columns} data={userdata} defaultPageSize={20} />
    </Styles>
  ) : error ? (
    <div>Error Occured</div>
  ) : (
    <div>Loading...</div>
  );
}

export default UserMetric;
