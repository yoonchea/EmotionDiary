import { useContext, useEffect, useState } from "react";

import MyHeader from './../components/MyHeader'
import MyButton from './../components/MyButton'
import DiaryList from './../components/DiaryList'
import { DiaryStateContext } from "../App";
const Home  = () => {

  const diaryList = useContext(DiaryStateContext)

  const [data, setData] = useState([])

  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월` // 연도, 월을 가져오는 메서드

  //현재 해당하는 월에 해당하는 일기데이터들만 뽑아오기
  useEffect(() => {
    if(diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime()
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();
      setData(diaryList.filter((it) => firstDay <= it.date && it.date <=lastDay))
    } else {
      setData([]);
    }
  },[diaryList, curDate])


  
  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1))
  }
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1))
  }

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
        />
        <DiaryList diaryList={data} />
    </div>
  )
}

export default Home;