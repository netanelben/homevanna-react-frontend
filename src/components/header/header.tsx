/** @jsx jsx */
import {jsx} from '@emotion/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css';
import 'hover.css/css/hover-min.css';
import logo from '../../images/logo_icon.png';
import {faBars, faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Button,
    Collapse,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import {collapsedMenu,
    navButton,
    navLink,
    headerSearchBox,
    headerSearchButton} from "./styles.css";
import {useState} from "react";

const MainNavLink: ({href, title}: { href: any; title: any }) => any = ({
    href,
    title
}) =>  <NavLink css={navLink} className={"hvr-underline-from-center"} href={href}>{title}</NavLink>;

function Header() {
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const [collapsed, setCollapsed] = useState(true);

    const headerSearchBar = <div css={headerSearchBox}>
        <InputGroup>
            <Input placeholder={"Enter address, neighborhood, or zip code"}/>
            <InputGroupAddon addonType={"append"}>
                <Button css={headerSearchButton}>
                    <FontAwesomeIcon icon={faSearch}/>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </div>;
    const brandIcon = <div className="navbar_brand_c navbar_brand_clps">
        <a className="navbar-brand" href={"#home"}><img src={logo} alt="logo"/>
            <span>homevanna</span>
        </a>
    </div>;
    const navItems = <Nav navbar className={"ml-auto"}>
        <NavItem>
            <MainNavLink href={"#buy"} title={"Buy"}/>
        </NavItem>
        <NavItem>
            <MainNavLink href={"#sell"} title={"Sell"}/>
        </NavItem>
        <NavItem>
            <MainNavLink href={"#own"} title={"Own"}/>
        </NavItem>
        <NavItem>
            <MainNavLink href={"#blog"} title={"Blog"}/>
        </NavItem>
        <NavItem className={"nav-border-left"}>
            <MainNavLink href={"#login"} title={"Login"}/>
        </NavItem>
        <NavItem className={"nav-item-primary"}>
            <NavLink css={navButton} className={"btn btn-primary"} role={"button"} href={"#login"}>Sign
                Up</NavLink>
        </NavItem>
    </Nav>;
    return (
        <header>
            <Navbar className={"navbar-desktop navbar-expand-md bg-transparent fixed-top"} light={true}>
                <Container>
                    <div className="header_brand_search d-flex align-items-center">
                        {brandIcon}
                        {headerSearchBar}
                    </div>
                    <NavbarToggler className={"text-dark border0"} type={"button"} onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faBars}/>
                    </NavbarToggler>

                    <Collapse navbar id={"collapsibleNavbar"}>
                        {navItems}
                    </Collapse>
                </Container>
            </Navbar>
            <Navbar className={"navbar_mt"}>
                <Container>
                    <Collapse navbar id={"collapsibleNavbar"} isOpen={!collapsed} css={collapsedMenu}>
                        {brandIcon}
                        <div className="navbar_mt_close">
                            <Button type="button" onClick={toggleNavbar}><FontAwesomeIcon icon={faTimes}/></Button>
                        </div>
                        {navItems}
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;