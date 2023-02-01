# 감성일기장 구현(for React)

1. React Router 사용
  - Path Variable(useParams)
  - Query String(useSearchParams)
    - Query: 웹페이지에 데이터를 전달하는 가장 간단한 방법
    - name 과 value를 엮어서 데이터 전송
  - Page Moving(useNavigate)
    - Link 태그를 클릭 안해도 의도적으로 페이지를 변경할 수 있다.

## 1단계 (2023.01.31)
  1. 폰트 세팅 (google fonts)
  2. 레이아웃 세팅
  3. 이미지 세팅
  4. 공통 컴포넌트 세팅

## 2단계 (2023. 02. 01)
  1. APP 컴포넌트에 일기의 상태를 관리할 로직 생성(useReducer사용)
  2. HOME 컴포넌트 구현
    - 날짜 저장하는 state 생성
    - filter 구현(날짜 순, 감정 순, 새일기작성)
    - DiaryList 구현 (emotion, content, 수정하기 버튼)
