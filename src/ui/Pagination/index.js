import React from "react";
import { Paginator } from "primereact/paginator";

export default function PaginatorSpace({ first, totalRecords, onPageChange, rows }) {
  return (
    <div className="card">
      <Paginator
        first={first}
        rows={1}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        // template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      />
    </div>
  );
}