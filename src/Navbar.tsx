import { LinkStyle, ListElements, ListWrapper, NavWrapper } from "./NavBarStyled"
import { FaPhone, FaHome, FaHeart, FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    return (
        <NavWrapper>
            <ListWrapper>
                <ListElements>
                    <LinkStyle to="/">
                        <FaHome /> Home
                    </LinkStyle>
                </ListElements>
                <ListElements>
                    <LinkStyle to="/contact">
                        <FaPhone /> Contact
                    </LinkStyle>
                </ListElements>
                <ListElements>
                    <LinkStyle to="/wishlist">
                        <FaHeart /> Wishlist
                    </LinkStyle>
                </ListElements>
                <ListElements>
                    <LinkStyle to="/cart">
                        <FaShoppingCart /> Cart
                    </LinkStyle>
                </ListElements>
            </ListWrapper>
        </NavWrapper> 
    ) 
}

export default NavBar