export const Columns = React.useMemo(
    () => [

      {
        Header: 'Track ID',
        accessor: 'track-id',
        filter: 'fuzzyText',
        minWidth: 150,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: s => (
          <span className={s.value === 'New' ? "eventCritical" : "eventMonitor"}>{s.value}</span>
        ),
        Filter: SelectColumnFilter,
        filter: 'includes',
        minWidth: 150,
      },
      {
        Header: 'Hits',
        accessor: 'hits',
        Filter: SliderColumnFilter,
        filter: 'equals',
        minWidth: 150,
      },
      {
        Header: 'First Detect',
        accessor: 'first-detect',
        Filter: '',
        minWidth: 150,

      }, {
        Header: 'Duration',
        accessor: 'duration',
        Filter: NumberRangeColumnFilter,
        filter: 'between',
      }, {
        Header: 'Location',
        accessor: 'location',
        Filter: '',
        minWidth: 150,
      }
    ], []
  )
