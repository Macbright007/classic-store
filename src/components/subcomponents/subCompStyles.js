import styled from "styled-components";

// styling for search
export const SearchContainer = styled.div`
  /* border-bottom: 2px solid #fff; */
  border-bottom: ${({ isScroll }) =>
    isScroll ? "2px solid #b4ab80" : "2px solid #fff"};
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding-block: 0.4rem;
    background: transparent;
    border: none;
    outline: none;
  }

  ::placeholder {
    text-transform: capitalize;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
  }
`;

// styling for header
export const HeaderWrapper = styled.header`
  height: 100vh;

  .headerSec {
    display: flex;
    height: 100%;

    .leftSide {
      flex: 1;
      background-color: #b4ab80;
      position: relative;
    }
    .rightSide {
      flex: 1;
    }
  }

  .path {
    padding-top: 7rem;
    background-color: #b4ab80;
    height: 60vh;
  }
`;

// styling for banner
export const BannerWrapper = styled.div`
  position: absolute;
  max-width: 650px;
  top: 15rem;
  right: -10rem;

  h1,
  p {
    color: white;
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-block: 1.7rem;
  }

  .btnGroup {
    width: 300px;
    display: flex;
    gap: 0.6rem;
  }

  .btnGroup > button {
    width: 100%;
    padding: 1rem;
    border: none;
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .btnGroup > button:first-child {
    background-color: #3d321e;
    color: white;
  }
  .btnGroup > button:last-child {
    border: 2px solid #514f43;
    background-color: transparent;
    color: #3d321e;
  }
`;

// styling for hot deals
export const HotDealCont = styled.div`
  padding-block: 5rem;

  h1 {
    text-transform: capitalize;
    font-size: 2.2rem;
    font-weight: 500;
  }

  h1 > span {
    color: #3d321e;
  }

  .dealsWrapper {
    margin-block: 7rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }

  .dealsCard {
    height: 50vh;
    position: relative;
  }

  .dealsCard:nth-child(2) {
    height: 60vh;
    margin-top: -2rem;
  }
  .dealsCard:nth-child(4) {
    height: 65vh;
    margin-top: -2rem;
  }

  .tag {
    display: flex;
    align-items: center;
    position: absolute;
    top: -3.5rem;
  }

  .saleIcon {
    font-size: 7rem;
    transform: rotate(90deg);
    color: #3d321e;
  }

  .tag > span {
    position: absolute;
    text-transform: uppercase;
    color: #fff;
    font-size: 1.2rem;
    width: 60px;
    bottom: 1.5rem;
    left: 2.4rem;
  }
  .dealsCard > img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;
// styling for hot deals product card
export const ProductCard = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 3rem;

  img {
    /* flex: 1; */
    width: 43%;
    height: 80vh;
  }

  &:nth-child(even) img {
    order: 2;
    margin-top: -7rem;
    margin-left: 2rem;
  }

  .hotdealContent {
    flex: 1;
  }

  .hotdealContent > h1 {
    font-size: 2%.7;
    font-weight: 600;
  }

  .hotdealContent > h4 {
    text-transform: capitalize;
    margin-block: 1.5rem;
  }

  .hotdealContent > span {
    color: #fff;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 7px;
    font-weight: 500;
  }
`;

// styling for product items
export const ProductItems = styled.div`
  margin-top: 7rem;

  h1{
    text-align: center;
    text-transform: capitalize;
    margin-block: 2rem;
    color: #3d321e;
  }

  .productWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

// styling for product item card
export const ItemCard = styled.div`
  border-radius: 15px;
  height: 40vh;
  background: linear-gradient(220deg, rgb(107 95 81) 50%, grey 50%);
  box-shadow: 0.2rem 0.2rem 7px rgb(107 95 81);
  padding: 1rem;
  position: relative;
  color: #3d321e;

  img {
    width: 100%;
    height: 25vh;
  }

  .card__content {
    margin-top: 0.5rem;
  }

  .card__content > h4 {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
  }

  .card__content > p {
    text-transform: capitalize;
    font-size: 13px;
  }

  .card__content>h2 {
    font-size: 20px;
    color: orange;
    margin-top: 0.4rem;
  }

  .card__content > span {
    position: absolute;
    font-size: 20px;
    color: orange;
    right: 1px;
    bottom: 1px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 4px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// styling for subscribe
export const SubscribeSec = styled.section`
  margin-block: 8rem;

  .subscribeContainer>h1{
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.4rem;
  }

  .inputWrapper{
    max-width: 800px;
    margin: auto;
    display: flex;
    background-color: #fff;
    padding: 5px;
    border-radius: 7px;
    box-shadow:.1rem .2rem 12px #d1cfca;
    /* align-items: center; */
  }

  .inputWrapper>input{
    width: 100%;
    padding-block: .8rem;
    border: none;
    outline: none;
  }

  .inputWrapper>input::placeholder{
    color: #a4a5a4;
    text-transform: capitalize;
    font-size: 16px;
    padding-left: 1rem;
  }

  .inputWrapper>button{
    padding: .8rem 3rem;
    border-radius: 7px;
    color: #fff;
    background-color:  #3d321e;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
  }
`
