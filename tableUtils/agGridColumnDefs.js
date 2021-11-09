import { useMemo } from "react";
    // never changes, so we can use useMemo
export const columnDefs = useMemo (() => [
    {
      headerName: 'Track ID',
      field: 'track-id',
      checkboxSelection: true,
      width: 130,
    },
    {
      headerName: 'Status',
      field: 'status',
      width: 110,
      checkboxSelection: false,
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
      checkboxSelection: false,
      width: 100,
    },
    {
      headerName: 'First Detect',
      field: 'first-detect',
      checkboxSelection: false,
      width: 140,
    },
    {
      headerName: 'Duration',
      field: 'duration',
      checkboxSelection: false,
      width: 130,
    },
    {
      headerName: 'Location',
      field: 'location',
      checkboxSelection: false,
      cellRenderer: function(param){
        return param.value[0] + '<br/>' + param.value[1];
      }
    }

  ], []);