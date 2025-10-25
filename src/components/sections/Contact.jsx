import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";
import StarCanvas from "../canvas/Stars"; // 🌌 Importing the stars

// 🌠 Styled Components
const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Important for the star canvas layer */
  z-index: 1;
`;

const StarBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0; /* Behind all content */
`;

const Wrapper = styled(motion.div)`
  position: relative;
  z-index: 2; /* Content above stars */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1350px;
  padding: 40px 20px 100px;
  gap: 20px;
`;

const Title = styled(motion.h2)`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 10px;
  }
`;

const Desc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled(motion.form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Textarea = styled.textarea`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Button = styled(motion.input)`
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    opacity: 0.9;
    scale: 1.03;
  }
`;

// 🌙 Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatAnimation = {
  y: [0, -20, 0],
  transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
};

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22vj81g",
        "template_fgqh9ub",
        form.current,
        "DyrJjNDrZBL-tsG_8"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container initial="hidden" animate="visible">
      {/* 🌌 Background Stars Layer */}
      <StarBackground>
        <StarCanvas />
      </StarBackground>

      {/* 🌍 Foreground Content */}
      <Wrapper>
        <motion.div
          animate={floatAnimation}
          style={{ width: "100%", maxWidth: "500px", height: "400px" }}
        >
          <EarthCanvas />
        </motion.div>

        <Title variants={fadeInUp}>Contact</Title>

        <Desc variants={fadeInUp}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <ContactTitle>Email Me 🚀</ContactTitle>
          <Input placeholder="Your Name" name="from_name" required />
          <Input placeholder="Your Email" name="from_email" type="email" required />
          <Input placeholder="Subject" name="subject" />
          <Textarea placeholder="Message" name="message" rows={4} required />
          <Button type="submit" value="Send" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;