import './App.css';
import LoginScreen from '../src/screens/Login.js'
import SignUpScreen from '../src/screens/signup/SignupScreen'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ForgotPassword from './screens/forgotPassword/ForgotPasswordScreen';
import ChangePassword from './screens/changePassword/ChangePassword';
import UserVerificationScreen from './screens/userVerification/UserVerificationScreen';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import OnboardingStepsScreen from './screens/onboardingSteps/OnboardingStepsScreen';
import HocSample from './hoc/HocSample';
import PureCompEx from './screens/pureComponent/PureCompEx';
import MemoEx from './screens/memoEx/MemoEx';

function App() {
return (
      <div>
          <Switch>
              <Route exact path='/' component={LoginScreen} />
              <Route path='/signup' component={SignUpScreen} />
              <Route path='/forgotPassword' component={ForgotPassword} />
              <Route path='/changePassword' component={ChangePassword} />
              <Route path='/userVerification' component={UserVerificationScreen} />
              <Route path='/onboarding' component={OnboardingScreen} />
              <Route path='/hoc' component={HocSample} />
              <Route path='/onboardingSteps' component={OnboardingStepsScreen} />
              <Route path='/pc' component={PureCompEx} />
              <Route path='/memoEx' component={MemoEx} />

         
          </Switch>
    </div>
  );
}

export default App;
