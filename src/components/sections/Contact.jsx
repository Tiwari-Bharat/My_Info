import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";

// ========== Styled Components ==========
const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 20px;
  @media (max-width: 960px) {
    padding: 40px 0px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
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

// ========== Motion Variants ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

// ========== Component ==========
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
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <EarthCanvas />
        </motion.div>

        <Title variants={fadeInUp} initial="hidden" animate="visible">
          Contact
        </Title>

        <Desc variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
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