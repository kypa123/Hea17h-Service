### 1.관련 페이지

- 서비스 페이지

[HEA17H](http://kdt-sw2-seoul-team17.elicecoding.com/)

- 깃랩 페이지

[Sign in](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project_2/team17/hea17h-service/-/tree/master)

### 2.Hea17h-Service란?

<aside>
💡 식단에 대한 칼로리 및 3대 영양소를 계산해주고, 자신의 식단을 등록해 전문가의 솔루션을 받을 수 있는 서비스입니다.

</aside>

### 3.기획 의도 / 목적

- 누군가 만들어놓은 다이어트 식단 포맷을 따라가는 서비스들이 많습니다.
- 현재 내가 먹고있는 식단이 대략 몇 칼로리인지, 영양정보는 어떤지는 손수 찾아야 했습니다.
- 누구나 한번쯤 계획했다가 실패하는 다이어트를 칼로리라는 직관적 지표를 통해 도와주는 서비스입니다.
- 다이어트를 계획중인 유저라면 사용 가능하며, 인터넷 서핑이 귀찮은 사람이라도 손쉽게 식단 관리를 할 수 있습니다.
- 남녀노소 사용할 수 있는 간단한 서비스를 만들고자 하였습니다.

### 4.프로젝트만의 차별점

- 나만의 맞춤 식단을 **그램 단위로 계산 가능**합니다.
- 식단 총 칼로리와 영양정보, 식단 내 아침 점심 저녁 식사별 칼로리와 영양정보, 음식 낱개의 영양정보를 제공합니다.
- 영양학적 솔루션은 전문가들의 도움을 받아 식단을 더욱 개선해 **나만의 맞춤 건강식단을 제공**합니다.
- 목표 고객층이 특정되어 있지 않아 넓습니다.

### 5.서비스 메인 / 서브 기능

- **메인 기능**
  - 검색창을 통한 음식 검색 기능, 영양소&칼로리 계산 기능
    - 음식 검색
      ![식단 계산.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8ba3520-7315-4171-862b-1bcc72a9c7ff/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A1%E1%86%AB_%E1%84%80%E1%85%A8%E1%84%89%E1%85%A1%E1%86%AB.gif)
    - 영양소 계산
      ![칼로리 계산.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c373b82-21ea-46f4-85f0-1d7280625db5/%E1%84%8F%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A9%E1%84%85%E1%85%B5_%E1%84%80%E1%85%A8%E1%84%89%E1%85%A1%E1%86%AB.gif)
  - 로그인 시 나의 식단 저장, 검색, 삭제 기능
    ![식단 저장, 검색, 삭제.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ff5a346-00fc-4b53-a0dc-44f94fdc4eb6/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A1%E1%86%AB_%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC_%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8_%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6.gif)
  - 사용자 정보 수정, 탈퇴 기능
  - 사용자 상세 정보 입력 시 BMI / RDI 자동 계산 기능
    ![회원정보 수정, rdi bmi 자동계산.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3922ff4a-14fa-45d1-b338-6604e5708a0e/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9_%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_rdi_bmi_%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A8%E1%84%89%E1%85%A1%E1%86%AB.gif)
  - 전문가 자격증 이미지 등록 기능
    ![자격증 등록.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da29cd1a-5af5-42df-a501-a5732bcb97c4/%E1%84%8C%E1%85%A1%E1%84%80%E1%85%A7%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC_%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8.gif)
  - 전문가 코멘트 추가, 수정, 삭제 기능
    ![코멘트 추가.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c9e1310-65e5-47f0-9cf4-a01eda2eaaf5/%E1%84%8F%E1%85%A9%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1.gif)
- **서브 기능**
  - OAuth 로그인 기능
  - 코멘트 확인 시 전문가의 자격증 이미지 확인 기능
    ![코멘트 확인, 전문가정보 확인.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6aa21b35-b777-4a21-829d-646d01e7ecd0/%E1%84%8F%E1%85%A9%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9_%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB.gif)

### 6.유저 시나리오

![유저 시나리오.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a310e433-9785-4608-8efe-8fff52fb64f6/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5_%E1%84%89%E1%85%B5%E1%84%82%E1%85%A1%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9.png)

### 7. 기술스택

- FE
  - React, React-Bootstrap
  - Styled component
  - Redux
- BE
  - Express, Node, ES6
  - Mongoose, multer, AWS S3
  - Babel
- Infra
  - Google Cloud Platform, Docker
- Convention
  - eslint(Airbnb), prettier

### 8. 기술문서

- 피그마
  [Figma](https://www.figma.com/community/file/1134538465665650962)
- 시스템 아키텍쳐
  ![시스템 아키텍쳐.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5836e5b4-5a1c-4c51-b2a9-508e90df8bf4/%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B7_%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%B5%E1%84%90%E1%85%A6%E1%86%A8%E1%84%8E%E1%85%A7.png)
- 스타일 가이드
  ![스타일가이드.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/44cd189d-aca6-4ea4-8c34-b076532bd335/%E1%84%89%E1%85%B3%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3.png)

### 9. 파트 분배
