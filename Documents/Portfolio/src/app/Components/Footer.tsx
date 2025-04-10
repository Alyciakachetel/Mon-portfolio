// components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="font-mono">
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/alycia-kachetel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </IconLink>
        <IconLink
          href="https://github.com/Alyciakachetel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </IconLink>
      </IconsContainer>
      <Text>© Alycia Kachetel - 2025 - Tous droits réservés</Text>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const IconLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
`;
export default Footer;
