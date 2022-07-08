import React from 'react';
import styled from 'styled-components';

function Coaching() {
    return (
        <PageContainer>
            <PageTitle>코칭</PageTitle>
            <MainContainer>
                <Diet>
                    <DietInfo>
                        <DietDate>2022.07.05</DietDate>
                        <ContentTitle>
                            헬스장 가기 전에 먹기 좋은 식단
                        </ContentTitle>
                        <DietCalorie>1850 kcal</DietCalorie>
                    </DietInfo>
                </Diet>
                <DietDetailContainer>
                    <DietDetail>
                        <ContentTitle>아침</ContentTitle>
                    </DietDetail>
                    <DietDetail>
                        <ContentTitle>점심</ContentTitle>
                    </DietDetail>
                    <DietDetail>
                        <ContentTitle>저녁</ContentTitle>
                    </DietDetail>
                </DietDetailContainer>
                <UserInfo>
                    <ContentTitle>회원정보</ContentTitle>
                    <InfoBox>
                        <InfoName>키(cm)</InfoName>
                        <InfoValue>180</InfoValue>
                    </InfoBox>
                    <InfoBox>
                        <InfoName>몸무게(kg)</InfoName>
                        <InfoValue>80</InfoValue>
                    </InfoBox>
                </UserInfo>
                <Comment>
                    <ContentTitle>코멘트 작성</ContentTitle>
                    <CommentInputBox />
                    <CommentWriteBtn>작성 완료</CommentWriteBtn>
                </Comment>
            </MainContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    width: 85vw;
    margin: 100px auto;
`;

const PageTitle = styled.h2`
    font-size: 24px;
`;

const MainContainer = styled.div`
    background-color: white;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Diet = styled.div`
    width: 75%;
    height: 8rem;
    background-color: #faf3e3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 30px;
    border-radius: 5px;
`;

const DietInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

const DietDate = styled.div`
    font-size: 1rem;
    font-weight: bold;
    width: 6rem;
    height: 1.5rem;
    background-color: white;
    text-align: center;
    border-radius: 5px;
`;

const ContentTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 15px 0;
`;

const DietCalorie = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #999999;
    margin: 0;
`;

const CommentWriteBtn = styled.button`
    background-color: #51cf66;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    width: 10rem;
    height: 2rem;
    :hover {
        cursor: pointer;
    }
    margin: 0 auto;
`;

const DietDetailContainer = styled.div`
    background-color: #f5f5f5;
    width: 75%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-radius: 5px;
`;

const DietDetail = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`;

const UserInfo = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin: 30px 0;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`;
const InfoName = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
`;

const InfoValue = styled.p`
    font-size: 1rem;
    margin: 0;
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

const CommentInputBox = styled.textarea`
    resize: none;
    width: 100%;
    height: 10rem;
    padding: 10px;
    margin-bottom: 25px;
    border: 1px solid #d9d9d9;
    outline: none;
`;

export default Coaching;