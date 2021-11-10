// import {AgGrid} from './AgGrid';
// import {ReactTable} from './ReactTable'
// import {MeasurePerformance} from './performanceMeasureUtils';

// const componentList = [ReactTable, AgGrid];
// const perf = new MeasurePerformance();
// // first-render
// // perf.firstRender(componentList);

// // rerenders
// // perf.multipleRenders(componentList);

// // table update - one table at a time
// perf.updateCompleteTable(componentList);

import React from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import AgGrid from './AgGrid.js';
import { RenderTimer, FPS } from './tableUtils/tableUtils';

async function performanceTest() {

  //Calculate Initial Render Time
  
    RenderTimer.start({
      sync: false,
      callback() {
        render(<AgGrid />, document.getElementById('test-agGrid'))
      }
    })
    unmountComponentAtNode(findDOMNode(AgGrid).parentNode())
  
  //Change setting & re-evaluate performance
  document.getElementById('test-agGrid').style.backgroundColor = 'red';
  //Calculate Initial Render Time
  // unmountComponentAtNode(<AgGrid />)
    RenderTimer.start({
      sync: true,
      callback() {
        render(<AgGrid />, document.getElementById('test-agGrid'))
      }
    })
}

console.log('Starting Performance Test');
 performanceTest()
console.log('Performance Test Finished')


