/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit  = () => {
  
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotion Diary - ${id} 수정`
  },[])

  useEffect(() => {
    if(diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => 
        parseInt(it.id) === parseInt(id)
      )
      //Truthy & Falsy 체크
      if(targetDiary) {
        setOriginData(targetDiary)
      } else {
        alert("없는 일기 입니다.")
        navigate('/', {replace: true});
      }
      //Truthy & Falsy 체크 끝 (diaryList 잘못 접근하였을때)
    }
  }, [id, diaryList])  //id or diaryList가 변할때만


  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  )
}

export default Edit;