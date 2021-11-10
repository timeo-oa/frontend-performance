'use strict';
import React, { useMemo, useEffect, useState } from 'react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import rowDefs from './tableUtils/makeData'
import {RenderTimer, FPS} from './tableUtils/tableUtils';


function AgGrid() {

  // console.log('rowData.length is', rowDefs)
  const rowData = rowDefs;
// never changes, so we can use useMemo
    const columnDefs = useMemo (() => [
        {
          headerName: 'Track ID',
          field: 'track-id',
          checkboxSelection: true,
          width: 130,
        },
        {
          headerName: 'Status',
          field: 'status',
          cellStyle: function (params) {
            //console.log('Params obj rowHeight is', params.data)
            if (params.value === 'New') {
              //Here you can check the value and based on that you can change the color
              return { color: 'black', backgroundColor: '#FF3838' };
            } else {
              return { color: 'black', backgroundColor: 'yellow' };;
            }
          }
        },
        {
          headerName: 'Hits',
          field: 'hits',

        },
        {
          headerName: 'First Detect',
          field: 'first-detect',
  
        },
        {
          headerName: 'Duration',
          field: 'duration',
 
        },
        {
          headerName: 'Location',
          field: 'location',
        }
    
      ], []);


    // never changes, so we can use useMemo
    const modules = useMemo( ()=> [ClientSideRowModelModule], []);


    // never changes, so we can use useMemo
    const defaultColDef = useMemo( ()=> ({
        resizable: true,
        sortable: true
    }), []);
    
    // changes, needs to be state
    // const [rowData, setRowData] = useState();

    // gets called once, no dependencies, loads the grid data
    // useEffect( ()=> {
    //     if(rowDefs.length) {
    //         setRowData(rowDefs)
    //     }
    // }, []);

    const onGridReady = () => {
        RenderTimer.stop();
    }

    return (
        <AgGridReact 
            // turn on AG Grid React UI
            reactUi="true"
            // all other properties as normal...
            // className="ag-theme-alpine"
            // animateRows="true"
            columnDefs={columnDefs}
            // defaultColDef={defaultColDef}
            // rowGroupPanelShow="always"
            // enableRangeSelection="true"
            rowData={rowData}
            modules={modules}
            // rowSelection="multiple"
            // groupSelectsChildren="true"
            // suppressRowClickSelection="true"
            onGridReady={onGridReady}
        >
           <AgGridColumn field="make"></AgGridColumn>
               <AgGridColumn field="model"></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
        </AgGridReact>
       
    );
}

export default AgGrid;
