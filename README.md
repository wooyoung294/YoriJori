# YORIJORI

<br/>

![KakaoTalk_20240313_040230599](https://github.com/wooyoung294/YoriJori/assets/160103260/f09b2dc4-3fc9-4c4d-8afa-e4879063683a)


+ 배포 주소 : http://yorijori.wooyu.world
+ 개발 기간 : 2024-03-06 ~ 2024-03-12

## 프로젝트 소개

레시피를 검색하고 등록하는 사이트입니다. NextJS의 AppRouter를 이용했으면 
로그인의 경우 next-auth를 통해 카카오로그인을 하도록 했습니다.
메인페이지는 레시피 카드들을 보여주는 페이지입니다.
메인페이지의 경우 ReactQuery의 useInfiniteQuery 와 react-intersection-observer의 useInView를 이용해 인피니티 스크롤로 구현했습니다.

<br/>


### Requirement
+ NODE : v20.11.0
+ NPM  : 10.2.4


## STACK

### BACKEND 
![SpringBoot](https://img.shields.io/badge/SpringBoot-444444?style=for-the-badge&logo=SpringBoot)

### DB
![planetscale](https://img.shields.io/badge/planetscale-444444?style=for-the-badge&logo=planetscale) ![MySql](https://img.shields.io/badge/MySql-blue?style=for-the-badge&logo=MySql&logoColor=black)
### Environment
![intellijidea](https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea)
<img src="https://camo.githubusercontent.com/8d433710b84192cd318b602aadcf296eed6c443fea42c2f06fba2ce65a49a412/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666f722d7468652d6261646765266c6f676f3d476974266c6f676f436f6c6f723d7768697465" alt="Git" data-canonical-src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&amp;logo=Git&amp;logoColor=white" style="max-width: 100%;">  <img src="https://camo.githubusercontent.com/dc4e9f7ea9597ea5a27629a36afb9ef8697569c621ccb42369070012b4092ae1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=GitHub&amp;logoColor=white" style="max-width: 100%;">


### Config
<img src="https://camo.githubusercontent.com/03a1992c246dcbdbaa772714e7c4d0fa4bb3b0de8a6a157405d17f8f8bd7cdf0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d4342333833373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465" alt="npm" data-canonical-src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&amp;logo=npm&amp;logoColor=white" style="max-width: 100%;">

### Devleopment
![Typescript](https://img.shields.io/badge/Typescript-444444?style=for-the-badge&logo=Typescript)
![nextdotjs](https://img.shields.io/badge/nextjs-444444?style=for-the-badge&logo=nextdotjs&logoColor=white)
![nextdotjs](https://img.shields.io/badge/nextAuth-444444?style=for-the-badge&logo=nextdotjs&logoColor=white)
![reactquery](https://img.shields.io/badge/reactquery-444444?style=for-the-badge&logo=reactquery)
![zustande](https://img.shields.io/badge/zustande-444444?style=for-the-badge)
<br/>

## 화면구성
|LOGIN|MAIN|CREATEMODAL|DETAIL|
|------|---|---|---|
|![login](https://github.com/wooyoung294/YoriJori/assets/160103260/11cfa44f-fa68-4a41-82e6-6c95cbcfbfb1)|![image](https://github.com/wooyoung294/YoriJori/assets/160103260/b62287a1-9e49-44f3-acf9-efc43868a696)|![create](https://github.com/wooyoung294/YoriJori/assets/160103260/978c8f6d-b28c-4f02-9779-6bac6b6118f1)|![image](https://github.com/wooyoung294/YoriJori/assets/160103260/00659dde-de04-435d-a349-ea034d224e05)|
