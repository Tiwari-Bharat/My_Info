import React from "react";
import styled from "styled-components";
import { info } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 40px 0px 40px 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const InfoCard = styled.div`
  width: 100%;
  max-width: 300px;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 0.1) 0%,
    hsla(294, 100%, 50%, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(23, 92, 230, 0.3) 0px 8px 32px;
    border: 1px solid rgba(133, 76, 230, 0.5);
  }

  @media (max-width: 768px) {
    max-width: 280px;
    padding: 24px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const InfoNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const InfoDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Info = () => {
  return (
    <Container id="info">
      <Wrapper>
        <Title>Quick Info</Title>
        <Desc>Here are some highlights about my journey and achievements</Desc>
        <InfoContainer>
          {info.map((item, index) => (
            <InfoCard key={index}>
              <InfoNumber>{item.number}</InfoNumber>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoDescription>{item.description}</InfoDescription>
            </InfoCard>
          ))}
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Info;
