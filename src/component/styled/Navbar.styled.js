import styled from "styled-components";
export const Navbar = styled.nav`
  width: 100%;
  max-width: 1280px;
  background: ${({ bg }) => bg};
  margin: 0 auto;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LinkWrapp = styled.div`
  display: flex;
  align-items: center;

  a {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    text-decoration: none;
    transition: all linear 0.4s;

    &:hover {
      background: #0169fe;
    }
    &:active {
      background: #0169fe;
    }
  }
`;
export const Payment = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #a0a0a0;
    width: max-content;
    text-align: center;
  }
`;
export const ViseCard = styled.img`
  width: 100%;
  max-width: 32px;
  max-height: 25px !iportant;
  border-radius: 5px;
`;
