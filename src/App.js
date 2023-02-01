import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useReducer, useRef } from 'react';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';


// Components
// import MyButton from './components/MyButton';
// import MyHeader from './components/MyHeader';
// import RouteTest from './components/RouteTest';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) => it.id === action.data.id ? {...action.data} : it)
      break;
    }
    default: return state;
  }
  return newState; 
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [{
  id: 1,
  emotion: 1,
  content: "더미데이터",
  date: 1675237000105
},
{
  id: 2,
  emotion: 2,
  content: "더미데이터2",
  date: 1675237000106
},
{
  id: 3,
  emotion: 3,
  content: "더미데이터3",
  date: 1675237000107
},
{
  id: 4,
  emotion: 4,
  content: "더미데이터4",
  date: 1675237000108
},
{
  id: 5,
  emotion: 5,
  content: "더미데이터5",
  date: 1675237000109
}]

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);;

  //CREATE
  const dataId = useRef(0);
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion,
      } 
    })
    dataId.current += 1;
  } 
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId
    })
  }
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route path='/new' element={<New />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
