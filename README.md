#### 식단에 대한 칼로리 및 3대 영양소를 계산해주고,<br> 자신의 식단을 등록해 전문가의 솔루션을 받을 수 있는 서비스입니다.

<br>

### 🥕 기획 의도 / 목적

- 누군가 만들어놓은 다이어트 식단 포맷을 따라가는 서비스들이 많습니다.
- 현재 내가 먹고있는 식단이 대략 몇 칼로리인지, 영양정보는 어떤지는 손수 찾아야 했습니다.
- 누구나 한번쯤 계획했다가 실패하는 다이어트를 칼로리라는 직관적 지표를 통해 도와주는 서비스입니다.
- 다이어트를 계획중인 유저라면 사용 가능하며, 인터넷 서핑이 귀찮은 사람이라도 손쉽게 식단 관리를 할 수 있습니다.
- 남녀노소 사용할 수 있는 간단한 서비스를 만들고자 하였습니다.

<br>

### 🥕 프로젝트만의 차별점

- 나만의 맞춤 식단을 그램 단위로 계산 가능합니다.
- 식단 총 칼로리와 영양정보, 식단 내 아침 점심 저녁 식사별 칼로리와 영양정보, 음식 낱개의 영양정보를 제공합니다.
- 영양학적 솔루션은 전문가들의 도움을 받아 식단을 더욱 개선해 나만의 맞춤 건강식단을 제공합니다.
- 목표 고객층이 특정되어 있지 않습니다.

<br>

### 🥕 서비스 메인 / 서브 기능

- **메인 기능**
  - 검색창을 통한 음식 검색 기능, 영양소&칼로리 계산 기능
    - 음식 검색
      <br>
      ![식단 계산](https://user-images.githubusercontent.com/86966661/181795707-04063cf6-40a3-45e2-ad6e-510e39e9e2ac.gif)
    - 영양소 계산
      <br>
      ![칼로리 계산](https://user-images.githubusercontent.com/86966661/181795768-63e97532-99ac-4e30-a363-35626894679b.gif)
  - 로그인 시 나의 식단 저장, 검색, 삭제 기능
    <br>
    ![식단 저장, 검색, 삭제](https://user-images.githubusercontent.com/86966661/181795747-06e0e3b6-da8c-4c76-b0c9-fe8954d84c73.gif)
  - 사용자 정보 수정, 탈퇴 기능
  - 사용자 상세 정보 입력 시 BMI / RDI 자동 계산 기능
    <br>
    ![회원정보 수정, rdi bmi 자동계산](https://user-images.githubusercontent.com/86966661/181795793-67e9bce2-8d63-4df1-85a0-c5a1aba0d080.gif)
  - 전문가 자격증 이미지 등록 기능
    <br>
    ![자격증 등록](https://user-images.githubusercontent.com/86966661/181795755-cfece2e4-56f4-485b-bba0-86d0a675d261.gif)
  - 전문가 코멘트 추가, 수정, 삭제 기능
    <br>
    ![코멘트 추가](https://user-images.githubusercontent.com/86966661/181795777-603f610d-0828-4ce1-8c6d-fa97a02c59d0.gif)
- **서브 기능**
  - OAuth 로그인 기능
  - 코멘트 확인 시 전문가의 자격증 이미지 확인 기능
    <br>
    ![코멘트 확인, 전문가정보 확인.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6aa21b35-b777-4a21-829d-646d01e7ecd0/%E1%84%8F%E1%85%A9%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9_%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB.gif)

<br>

### 🥕 유저 시나리오

<img src="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/flowchart.png" alt="Flow Chart" /><br>

### 🥕 프로젝트 구성

- 사용 스택
  - 프론트엔드
    - React, React-Bootstrap
    - Styled component
    - Redux
  - 백엔드
    - Express, Node
    - Mongoose, multer, AWS S3
    - Babel
  - 인프라
    - Google Cloud Platform, Docker
  - 컨벤션
    - eslint(Airbnb), prettier

<br>

### 🥕 프로젝트 자료

- 피그마 링크 [Figma](https://www.figma.com/community/file/1134538465665650962)
  <br>
- 시스템 아키텍쳐
  <br>
  <img width="792" alt="시스템 아키텍쳐" src="https://user-images.githubusercontent.com/86966661/181796824-41dac52e-6433-4d1c-b23e-7daca21edb0c.png">
- 스타일 가이드
  <br>
  ![스타일가이드](https://user-images.githubusercontent.com/86966661/181796811-6c56499f-7c28-47d2-94c3-a1d5594455a1.png)

<br>

### 🥕 맡은 역할<br>

#### 백엔드, 팀장

<br>

### 🥕 개인 목표<br>

#### 데이터베이스 커넥션 최소화, 프론트 백 커넥션 최소화

<br>

### 🥕 구현한 기능

- 일반유저, 전문가 유저 데이터처리
- 식단, 코멘트 데이터처리
- 네이버 & 카카오 OAuth 적용
- 전반적인 팀 프로젝트 일정 진행
