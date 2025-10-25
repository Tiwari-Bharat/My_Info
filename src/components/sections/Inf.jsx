import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/constants";
import { User, BookOpen, Heart, Phone, Droplets, MapPin, Star } from "lucide-react";
import ProfileImg from "../../images/HeroImage.jpg"; // Import your image
import StarCanvas from "../canvas/Stars";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 16px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Aurora = styled(motion.div)`
  position: absolute;
  width: 140%;
  height: 140%;
  top: -20%;
  left: -20%;
  background: radial-gradient(ellipse at top left, #58a6ff33, transparent 70%),
              radial-gradient(ellipse at bottom right, #22d3ee33, transparent 70%);
  filter: blur(120px);
  z-index: 0;
  animation: flow 12s infinite alternate ease-in-out;

  @keyframes flow {
    0% { transform: translate(-10%, -10%) scale(1); }
    100% { transform: translate(10%, 10%) scale(1.1); }
  }
`;

const Panel = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(22px);
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Header = styled(motion.div)`
  background: linear-gradient(90deg, #2563eb22, #22d3ee22);
  padding: 30px 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: -2;

  @media (max-width: 600px) {
    justify-content: center;
    padding: 25px;
  }
`;

const Profile = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${ProfileImg});
  background-size: cover;
  background-position: center;
  border: 3px solid rgba(88, 166, 255, 0.7);
  box-shadow: 0 0 25px rgba(88, 166, 255, 0.4);

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  color: #e2e8f0;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #fff;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #94a3b8;
  margin-top: 4px;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 14px;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    gap: 18px;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), transparent);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px 22px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 35px rgba(88, 166, 255, 0.25);
  }

  @media (max-width: 480px) {
    padding: 15px 16px;
  }
`;

const CardTitle = styled.div`
  font-size: 20px;
  color: #58a6ff;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  color: #cbd5e1;
  padding: 6px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const Label = styled.span`
  font-weight: 500;
`;

const Value = styled.span`
  color: #94a3b8;
  font-style: italic;
  text-align: right;

  @media (max-width: 480px) {
    text-align: left;
  }
`;

const Inf = () => {
  return (
    <Container id="Inf">
      <Aurora />
      <Panel
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header>
          <Profile />
          <HeaderText>
            <Title>Bharat Tiwari</Title>
            <Subtitle>Aspiring Software & Web Engineer</Subtitle>
          </HeaderText>
        </Header>

        <Body>
          {personalInfo.map((section, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardTitle>
                {section.icon && <section.icon size={18} />}
                {section.section}
              </CardTitle>
              {section.details.map((detail, i) => (
                <Item key={i}>
                  <Label>{detail.title}</Label>
                  <Value>{detail.value}</Value>
                </Item>
              ))}
            </Card>
          ))}
        </Body>
      </Panel>
    </Container>
  );
};

export default Inf;