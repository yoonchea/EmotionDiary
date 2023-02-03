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

  ## 3단계 (2023. 02. 02)
    1. EDIT, DiaryPage 페이지구현
    2. utill 디렉토리 생성 후 날짜 생성 함수, 감정 객체 따로 배치(export, import)
    3. LocalStorage 로 데이터베이스 유지
      - Web Storage API(키/값)
      - 객체로 저장시 JSON.stringify({}) => 문자열로 강제로 변환(직렬화)
      - 객체를 불러올 시 숫자형으로 저장했다면 JSON.parse() => 문자열을 숫자로 변환
      - reducer를 통해 localStorage에 저장
    4. 최적화
      - 필요 없이 렌더링 되는 부분 최적화
      - React.memo 로 감싸기

  ## 4단계 (2023. 02. 03)
    1. 배포 전 코드 리팩토링
    2. Title, 파비콘 변경(title 변경 시 useEffect 사용)
    3. npm run build
    4. firebase로 배포하기
    5. Open Graph 설정(공유시 미리보기, description 설정)
      - index.html에서 meta 태그로..
    6. 최종 배포 완료 (https://jeong-emotion-diary.web.app/)
    7. 변경 사항 있을 시
      1. npm run build 
      2. firbase deploy
