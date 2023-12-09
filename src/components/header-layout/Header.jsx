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
            <Link to="/movie">
              <span>&gt;</span>
              Movies
            </Link>
          </Item>
          <Logo>
            <Link to="/">
              <Icon className="logo" size="36" />
              Movie&gt;hunter
            </Link>
          </Logo>
        </List>
      </Nav>
    </Header>
  );
};
