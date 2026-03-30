import React from "react";
import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  transition: all 0.2s ease-in-out;
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.dark};
  }

  .main-table thead tr th.ant-table-cell.ant-table-row-expand-icon-cell {
    width: 30px !important;
    background-color: red;
  }

  .main-table thead tr th {
    overflow: hidden;
  }

  .main-table thead tr th:first-child {
    padding: 2px 10px;
  }

  .main-table tbody tr td:first-child {
    padding: 2px 10px;
  }

  .main-table thead tr th:last-child {
    padding: 2px 10px;
  }
  .main-table thead tr {
    cursor: pointer;
  }

  .main-table tbody tr {
    cursor: pointer;
  }

  .main-table tbody tr:nth-child(even) {
    background-color: #f6f9ff;
  }

  .main-table tbody tr:nth-child(odd) {
    background-color: white;
  }

  .default-data-div {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .main-table .ant-spin-nested-loading {
    display: inline-table;
    width: 100%;
  }

  .default-data-div p {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: max-content;
  }

  .main-table .ant-table-row-expand-icon-cell {
    min-width: 30px;
    width: 30px;
    max-width: 30px;
  }
  .main-table .ant-table-selection-column {
    min-width: 30px;
    width: 30px;
    max-width: 30px;
  }

  .react-resizable {
    position: relative;
    background-clip: padding-box;
  }

  .resizable-handle {
    position: absolute;
    right: ${(p) => (p.lang == "ar" ? "" : "0px")};
    left: ${(p) => (p.lang == "ar" ? "0px" : "")};
    top: 0;
    height: 100%;
    width: 10px;
    cursor: col-resize;
  }

  .ant-table-wrapper .ant-table-tbody > tr.ant-table-placeholder {
    z-index: 1 !important;
  }
`;
