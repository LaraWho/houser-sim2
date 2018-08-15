import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/dashboard" component={ Dashboard }/>
        <Route exact path="/wizard/1" component={ WizardOne }/>
        <Route exact path="/wizard/2" component={ WizardTwo }/>
        <Route exact path="/wizard/3" component={ WizardThree }/>
        <Route exact path="/wizard/4" component={ WizardFour }/>
        <Route exact path="/wizard/5" component={ WizardFive }/>
    </Switch>
    )