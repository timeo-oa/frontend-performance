'use strict';

import React, { useMemo, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import {agGridRows} from '../tableUtils/makeData'
import {columnDefs} from '../tableUtils/agGridColumnDefs'



function AgGrid() {

    // never changes, so we can use useMemo
    const modules = useMemo( ()=> [ClientSideRowModelModule, RangeSelectionModule, RowGroupingModule, RichSelectModule], []);


    // never changes, so we can use useMemo
    const defaultColDef = useMemo( ()=> ({
        resizable: true,
        sortable: true
    }), []);
    
    // changes, needs to be state
    const [rowData, setRowData] = useState();

    // gets called once, no dependencies, loads the grid data
    useEffect( ()=> {
        if(agGridRows.rowData) {
            setRowData(agGridRows.rowData)
        }
    }, []);

    return (
        <AgGridReact 
            // turn on AG Grid React UI
            reactUi="true"

            // all other properties as normal...
            // className="ag-theme-alpine"
            // animateRows="true"
            // modules={modules}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowGroupPanelShow="always"
            enableRangeSelection="true"
            rowData={rowData}
            // rowSelection="multiple"
            // groupSelectsChildren="true"
            // suppressRowClickSelection="true"
        />
    );
}

render(<AgGrid></AgGrid>, document.querySelector('#root'));