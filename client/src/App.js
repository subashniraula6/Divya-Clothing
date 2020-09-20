import React, { useEffect } from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './components/pages/homepage/HomePage'
import ShopPage from './components/pages/shop/shop.component'
import { SignInAndSignUpPage } from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up'

import Header from './components/header/header.component'

import { connect } from 'react-redux'

import CheckoutPage from './components/pages/checkout/checkout.component'
import { checkUserSession } from './redux/user/user.actions'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors'

import ContactPage from './components/pages/contact/contact-page.component'

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
