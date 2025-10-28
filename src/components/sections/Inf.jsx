import React, { memo, Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/constants";
import {
  User,
  BookOpen,
  Heart,
  Phone,
  Droplets,
  MapPin,
  Star,
  Mail,
  Calendar,
  Globe,
  Code,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import ProfileImg from "../../images/HeroImage.jpg";
const StarCanvas = React.lazy(() => import("../canvas/Stars"));

/* 🌌 Base Layout */
const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #0a0f1e, #020409 85%);
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
`;

const Aurora = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 160%;
  top: -30%;
  left: -30%;
  background: radial-gradient(ellipse at top left, #4f9cff33, transparent 70%),
              radial-gradient(ellipse at bottom right, #00e5ff33, transparent 70%);
  filter: blur(160px);
  animation: auroraFlow 15s infinite alternate ease-in-out;
  @keyframes auroraFlow {
    0% { transform: translate(-10%, -10%) scale(1); }
    100% { transform: translate(10%, 10%) scale(1.05); }
  }
`;

const Panel = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(28px);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

/* ===== Header ===== */
const Header = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 50px 70px;
  background: linear-gradient(90deg, rgba(37,99,235,0.1), rgba(34,211,238,0.1));
  border-bottom: 1px solid rgba(255,255,255,0.08);

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 25px;
  }
`;

const Profile = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url(${ProfileImg});
  background-size: cover;
  background-position: center;
  border: 4px solid rgba(88, 166, 255, 0.8);
  box-shadow: 0 0 45px rgba(88, 166, 255, 0.4);

  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const HeaderText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #e2e8f0;
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 1px;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #a0aec0;
  font-style: italic;
`;

/* ===== Body ===== */
const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 35px;
  padding: 60px 70px;
  background: rgba(255, 255, 255, 0.015);

  @media (max-width: 900px) {
    padding: 40px 25px;
  }

  @media (max-width: 600px) {
    padding: 25px 16px;
    gap: 20px;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 0 25px rgba(88, 166, 255, 0.12);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 0 40px rgba(88, 166, 255, 0.25);
  }
`;

const CardTitle = styled.div`
  font-size: 22px;
  color: #58a6ff;
  font-weight: 600;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #cbd5e1;
  padding: 6px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
  font-size: 16px;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LabelIcon = styled.span`
  color: #58a6ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-weight: 500;
`;

const Value = styled.span`
  color: #94a3b8;
  font-style: italic;
`;

/* ===== Icon Mapper ===== */
const iconMapper = {
  name: User,
  email: Mail,
  phone: Phone,
  birthday: Calendar,
  location: MapPin,
  hobby: Heart,
  education: GraduationCap,
  skills: Code,
  experience: Briefcase,
  website: Globe,
  blood: Droplets,
  favorite: Star,
};

/* ===== Component ===== */
const Inf = memo(() => {
  return (
    <Container id="Inf">
      <Aurora />
      <Suspense fallback={<div style={{ color: "#94a3b8" }}>Loading stars...</div>}>
        <StarCanvas />
      </Suspense>

      <Panel
        initial={{ opacity: 0, y: 70 }}
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
              viewport={{ once: true }}
            >
              <CardTitle>
                {section.icon && <section.icon size={20} />}
                {section.section}
              </CardTitle>

              {section.details.map((detail, i) => (
                <Item key={i}>
                  <LabelGroup>
                    {detail.icon && (
                      <LabelIcon>
                        <detail.icon size={16} />
                      </LabelIcon>
                    )}
                    <Label>{detail.title}</Label>
                  </LabelGroup>
                  <Value>{detail.value}</Value>
                </Item>
              ))}
            </Card>
          ))}
        </Body>
      </Panel>
    </Container>
  );
});

export default Inf;