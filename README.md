### 🥕 Hea17h-Service란?

#### 식단에 대한 칼로리 및 3대 영양소를 계산해주고,<br> 자신의 식단을 등록해 전문가의 솔루션을 받을 수 있는 서비스입니다.

<br>

### 🥕 프로젝트 자료
  <br>
- 시스템 아키텍쳐
  <br>
  <img width="792" alt="시스템 아키텍쳐" src="https://user-images.githubusercontent.com/86966661/181796824-41dac52e-6433-4d1c-b23e-7daca21edb0c.png">
- 스타일 가이드<br>
  ![스타일가이드](https://user-images.githubusercontent.com/86966661/181796811-6c56499f-7c28-47d2-94c3-a1d5594455a1.png)
<br>

### 🥕 맡은 역할<br>

#### 백엔드, 팀장

<br>

### 🥕 개인 목표<br>

#### 데이터베이스 커넥션 최소화, 프론트 백 커넥션 최소화

<br>

### 🥕 프로젝트 구성

- 사용 스택
  - FE
    - React, React-Bootstrap
    - Styled component
    - Redux
  - BE
    - Express, Node
    - Mongoose, multer, AWS S3
    - Babel
  - Infra
    - Google Cloud Platform, Docker
  - 공통
    - eslint(Airbnb), prettier

<br>

### 🥕 구현한 기능

- 일반유저, 전문가 유저 데이터처리
- 식단, 코멘트 데이터처리
- 네이버 & 카카오 OAuth 적용

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



