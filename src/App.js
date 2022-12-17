import { Container } from "./component/styled/Container.styled";
import {
  Navbar,
  FlexBox,
  LinkWrapp,
  Payment,
  ViseCard,
} from "./component/styled/Navbar.styled";
import { NavLink } from "react-router-dom";
import visa from "./images/visa.png";
import master from "./images/master.png";
import bitcoin from "./images/bitcoin.png";
function App() {
  const links = [
    {
      page: "Home",
      url: "/",
    },
    {
      page: "Cars",
      url: "/car",
    },
    {
      page: "Countries",
      url: "/country",
    },
    {
      page: "Brands",
      url: "/brand",
    },
    {
      page: "Services",
      url: "/sevice",
    },
    {
      page: "About Us",
      url: "/about",
    },
    {
      page: "FAQ",
      url: "/faq",
    },
    {
      page: "Contacts",
      url: "/contact",
    },
  ];

  return (
    <Navbar bg="#000">
      <Container>
        <FlexBox>
          <LinkWrapp>
            {links.map((item, i) => {
              return (
                <NavLink
                  to={item.url}
                  key={i}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.page}
                </NavLink>
              );
            })}
          </LinkWrapp>
          <Payment>
            <h3>Payment methods</h3>
            <ViseCard src={visa} alt="visa" />
            <ViseCard src={master} alt="visa" />
            <ViseCard src={bitcoin} alt="visa" />
          </Payment>
        </FlexBox>
      </Container>
    </Navbar>
  );
}

export default App;
