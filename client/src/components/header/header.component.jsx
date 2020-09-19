import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { HeaderContainer, OptionsContainer, OptionLink, OptionDiv, LogoContainer } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

function Header({ currentUser, hidden, onSignOutStart, ...otherProps }) {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionDiv as='div' onClick={() => {  //See this
                            onSignOutStart();
                            alert("Logged Out")
                        }
                        }>
                            SIGN OUT
                        </OptionDiv>
                        :
                        <OptionLink to="/signin">
                            SIGN IN
                        </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropDown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    onSignOutStart : () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))  //withRouter provides route props to 
//the component even though it is not Routed/component of Route.
//Here, 'header' component is not Routed but also gets route props.
//It is useful to provide child Components route props without passing from
//parent component which is Routed as component of Route.