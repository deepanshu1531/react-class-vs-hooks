import './App.css'
import ClassCounter from './classComponent/1-classCounter';
import HooksCounter from './hooksComponent/1-hooksCounter';
import ClassNameObj from './classComponent/2-classNameObj';
import HooksNameObj from './hooksComponent/2-hooksNameObj';
import ClassArray from './classComponent/3-classArray';
import HooksArray from './hooksComponent/3-hooksArray';
import ClassTitleUpdate from './classComponent/4-classTitleUpdate';
import HookTitleUpdate from './hooksComponent/4-hookTitleUpdate';
import ClassMouseMove from './classComponent/5-classMouseMove';
import HookMouseMove from './hooksComponent/5-hookMouseMove';
import ClassAutoIncrement from './classComponent/6-classAutoIncrement';
import HooksAutoIncrement from './hooksComponent/6-hooksAutoIncrement';
import ClassDataFetch from './classComponent/7-classDataFetch';
import HooksDataFetch from './hooksComponent/7-hooksDataFetch';
import ClassContext from './classComponent/8-classContext';
import HooksContext from './hooksComponent/8-hooksContext';
import ClassReducerCounter from './classComponent/9-classReducerCounter';
import HooksReducerCounter from './hooksComponent/9-hooksReducerCounter';
import ClassReducerCounter2 from './classComponent/10-classReducerCounter';
import HooksReducerCounter2 from './hooksComponent/10-hooksReducerCounter';
import ClassReducerContext from './classComponent/11-classReducerContext';
import HooksReducerContext from './hooksComponent/11-hooksReducerContext';
import ClassReducerDataFetch from './classComponent/12-classReducerDataFetch';
import HooksReducerDataFetch from './hooksComponent/12-hooksReducerDataFetch';
import ClassCallBack from './classComponent/13-classCallBack';
import HooksCallBack from './hooksComponent/13-hooksCallBack';
import ClassUseMemo from './classComponent/14-classUseMemo';
import HooksUseMemo from './hooksComponent/14-hooksUseMemo';
import ClassUseRef from './classComponent/15-classUseRef';
import HooksUseRef from './hooksComponent/15-hooksUseRef';
import ClassCustomHooks from './classComponent/16-classCustomHooks';
import HooksCustomHooks from './hooksComponent/16-hooksCustomHooks';


function App() {

  return (
    <>
      <h1>Class vs Hooks</h1>
      <p>Class components are the traditional way of writing React components, while hooks allow you to use state and other React features without writing a class.</p>
      <p>Hooks were introduced in React 16.8, and they provide a more functional approach to building components.</p>
      <p>In this example, we will compare a class component and a functional component using hooks.</p>
      <hr />
      <div className='row'>
        <div className="col">
          <h4>Class Component</h4>
          <hr />
          {/* <ClassCounter /> */}
          {/* <ClassNameObj /> */}
          {/* <ClassArray /> */}
          {/* <ClassTitleUpdate/> */}
          {/* <ClassMouseMove/> */}
          {/* <ClassAutoIncrement/> */}
          {/* <ClassDataFetch /> */}
          {/* <ClassContext /> */}
          {/* <ClassReducerCounter /> */}
          {/* <ClassReducerCounter2 /> */}
          {/* <ClassReducerContext /> */}
          {/* <ClassReducerDataFetch /> */}
          {/* <ClassCallBack /> */}
          {/* <ClassUseMemo /> */}
          {/* <ClassUseRef /> */}
          <ClassCustomHooks />
        </div>
        <div className="col">
          <h4>Hooks Component</h4>
          <hr />
          {/*----------------------- Examples for useState hook -----------------------*/}
          {/* <HooksCounter /> */}
          {/* <HooksNameObj /> */}
          {/* <HooksArray /> */}
          {/*----------------------- Examples for useEffect hook -----------------------*/}
          {/* <HookTitleUpdate/> */}
          {/* <HookMouseMove/> */}
          {/* <HooksAutoIncrement/> */}
          {/* <HooksDataFetch /> */}
          {/*----------------------- Examples for useContext hook -----------------------*/}
          {/* <HooksContext /> */}
          {/*----------------------- Examples for useReducer hook -----------------------*/}
          {/* <HooksReducerCounter /> */}
          {/* <HooksReducerCounter2 /> */}
          {/* <HooksReducerContext /> */}
          {/* <HooksReducerDataFetch /> */}
          {/*----------------------- Examples for useCallback hook -----------------------*/}
          {/* <HooksCallBack /> */}
          {/*----------------------- Examples for useMemo hook -----------------------*/}
          {/* <HooksUseMemo /> */}
          {/*----------------------- Examples for useRef hook -----------------------*/}
          {/* <HooksUseRef /> */}
          {/*----------------------- Examples for custom hooks -----------------------*/}
          <HooksCustomHooks />

        </div>
      </div>
    </>
  )
}

export default App
