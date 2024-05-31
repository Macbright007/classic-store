import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;

  .innerNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1rem;
  }

  .logoSide {
    display: flex;
    align-items: center;
    gap: 5rem;
    width: 400px;
  }

  .logoSide > h1 {
    /* color: #3d321e; */
    color: ${({ $isScroll }) => ($isScroll ? "#b4ab80" : "#3d321e")};
    font-size: 3rem;
  }

  .navItems {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-top: 0.4rem;
  }

  .navItems > a {
    /* color: #fff; */
    color: ${({ $isScroll }) => ($isScroll ? "#b4ab80" : "#fff")};
    text-decoration: none;
    text-transform: capitalize;
    font-size: 17px;
    font-weight: 500;
  }

  .shop {
    font-size: 22px;
  }

  .navItems > a:last-child {
    position: relative;
    margin-top: 5px;
  }
  .navItems > a > span {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #fff; */
    background-color: ${({ $isScroll }) => ($isScroll ? "#b4ab80" : "#fff")};
    border-radius: 100%;
    font-size: 15px;
    font-weight: 600;
    position: absolute;
    top: -10px;
    right: -13px;
    color: #000;
  }
`;

export const FooterContainer = styled.footer`
  background-color: rgb(107 95 81);

  .footContent {
    padding-block: 3rem;
    display: flex;
    gap: 3rem;
  }

  .footerCard {
    /* color:#b4ab80; */
    color: #fff;
  }

  .footerCard > h1 {
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
  }

  .footerCard > ul {
    margin-top: 1rem;
  }

  .footerCard > ul > li {
    font-weight: 300;
    list-style: none;
    text-transform: capitalize;
    font-size: 13px;
    padding-bottom: .3rem;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .socialIcon{
    font-size: 18px;
    margin-top: 6px;
  }

  .footerCard>h6{
    font-size: 12px;
    font-weight: 400;
    margin-block: 1rem;
  }

  .footInput{
    display: flex;
  }

  .footInput>input{
    background-color: transparent;
    padding: .4rem;
    border: 1px solid #fff;
    outline: none;
    color: #fff;
  }

  .footInput>input::placeholder{
    text-transform: capitalize;
    font-size: 10px;
    color: #fff;
    opacity: .4;
  }

  .footInput>button{
    background-color: #fff;
    padding: .4rem 1rem;
    border: none;
    text-transform: capitalize;
  }
`;
