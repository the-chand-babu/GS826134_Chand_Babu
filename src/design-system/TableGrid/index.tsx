"use client";

import { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import {
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ModuleRegistry,
  RowDragModule,
  RowSelectionModule,
  TextFilterModule,
  ValidationModule,
} from "ag-grid-community";
ModuleRegistry.registerModules([
  ClientSideRowModelApiModule,
  TextFilterModule,
  RowDragModule,
  RowSelectionModule,
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);

export const GridTable = ({ columnDefs, rowData }: any) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const onGridReady = useCallback(() => {}, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <AgGridReact
          rowDragManaged={true}
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={() => onGridReady()}
        />
      </div>
    </div>
  );
};
