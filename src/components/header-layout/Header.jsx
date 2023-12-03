import { Header, Nav, List, Item, Logo, Link, Icon } from './Header.styled.js';
import 'animate.css';

export const Head = () => {
  return (
    <Header>
      <Nav>
        <List>
          <Item>
            <Link to="/">
              <span>&gt;</span>
              Home
            </Link>
          </Item>
          <Item>
            <Link to="/movies">
              <span>&gt;</span>
              Movies
            </Link>
          </Item>
          <Logo className="animate__animated animate__pulse">
            <Link to="/">
              <Icon size="36" className="animate__animated animate__pulse" />
              Movie&gt;hunter
            </Link>
          </Logo>
        </List>
      </Nav>
    </Header>
  );
};
