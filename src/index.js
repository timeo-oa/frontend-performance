import {AgGrid} from './AgGrid';
import {ReactTable} from './ReactTable'
import {MeasurePerformance} from './performanceMeasureUtils';

const componentList = [ReactTable, AgGrid];
const perf = new MeasurePerformance();
// first-render
// perf.firstRender(componentList);

// rerenders
// perf.multipleRenders(componentList);

// table update - one table at a time
perf.updateCompleteTable(componentList);