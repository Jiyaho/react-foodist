# To-do-list Application with React

## 🔷 URL

- Web Site: https://jiyaho.github.io/react-toDoApp/

- Github Repository: https://github.com/Jiyaho/react-toDoApp

## 🔷 Description

- To-do-list web site using local storage in React.

## 🔷 Page Descriptiont

### Home Page

사용자의 이름을 입력하면 LocalStorage에 데이터 저장되고, To-do List Page로 이동합니다.

<img src="https://i.ibb.co/VS9G0MF/react-to-do-list01.png" alt="react-to-do-list01" border="0" loading="lazy" />
<img src="https://i.ibb.co/BtLpP0s/react-to-do-list02.png" alt="react-to-do-list02" border="0" loading="lazy" />

### To-do List Page

사용자가 글을 입력 및 삭제할 수 있으며 데이터는 LocalStorage에 저장됩니다.

<img src="https://i.ibb.co/0mxXsmX/react-to-do-list03.png" alt="react-to-do-list03" border="0" loading="lazy" />

## 🔷 Purpose

- Local Storage를 활용하여 별도의 서버나 DB 구현없이 작동하는 To Do List 작성 웹 페이지를 기획 하였습니다.

## 🔷 Feature Description

- 사용자 로그인 (localStorage에 사용자 정보 저장)
- 인용문구: 사용자 로그인 전 화면 하단 부에 인용문구 랜덤으로 표출
- 사용자가 로그인하면 To Do 작성 페이지로 이동
- 사용자 로그아웃 (Log-out 버튼 클릭 시 localStorage의 데이터들 모두 삭제 후 로그인 전 화면으로 이동)
- To Do List 추가: 사용자 로그인 후 Input Box에 To Do 작성 시, 데이터는 localStorage에 저장되고 페이지에 저장해둔 To Do List 렌더링
- To Do List 삭제: 추가한 리스트 우측 "❌" 버튼 눌러 삭제
- 날짜: 일 / 월 / 년도 순으로 화면에 표출
- 날씨: 사용자의 현재 위치 허용 시, 화면에 날씨 및 도시 표출
- 시간: 현재 시각 표출
- 사용자 환영 문구: 로그인한 사용자 이름 및 인사 문구 화면 중앙부에 표출

## 🔷 Used Skills

<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" style={{ margin: '2px' }} />
  <img
    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"
    style={{ margin: '2px' }}
  />
  <img
    src="https://img.shields.io/badge/CSS Modules-000000?style=for-the-badge&logo=CSS Modules&logoColor=white"
    style={{ margin: '2px' }}
  />
  <img
    src="https://img.shields.io/badge/Local Storage-000000?style=for-the-badge&logo=Local Storage&logoColor=black"
    style={{ margin: '2px' }}
  />
</div>

## 🔷 Trouble Shooting

- **기존에 저장한 To-do list 미출력 문제**
  - 문제점: 투두리스트 작성 후 제출하고 웹 브라우저 새로고침 후 추가로 투두리스트 작성하여 제출했을 때, 기존에 제출한 투두리스트 데이터들은 화면에 출력되지 않고 리셋되는 문제가 발생하였습니다.
  - 해결: useEffect를 통해, 로컬스트리지에 기존 저장값들이 존재한다면 그 값들을 렌더링하도록 하였습니다.

## 🔷 File Tree Structure

```
📦 react-toDoApp
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
└─ src
   ├─ App.js
   ├─ components
   │  ├─ BgImg.js
   │  ├─ Clock.js
   │  ├─ Login.js
   │  ├─ Quotes.js
   │  ├─ Todo.js
   │  └─ WeatherAPI.js
   ├─ css
   │  ├─ BgImg.module.css
   │  ├─ Clock.module.css
   │  ├─ Login.module.css
   │  ├─ Todo.module.css
   │  └─ WeatherAPI.module.css
   └─ index.js
```
