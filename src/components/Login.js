import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg'></CTALogoOne>
        <Signup>GET ALL THERE</Signup>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa
          natus numquam quidem nobis sit quisquam quas ipsum? Tempore eos,
          praesentium minima autem quos consequuntur maiores. Corporis neque
          reiciendis accusamus.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png'></CTALogoTwo>
      </CTA>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
    opacity: 1.8;
  }
`;
const CTA = styled.div`
  max-width: 600px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
