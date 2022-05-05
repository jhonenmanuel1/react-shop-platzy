import React, {useState} from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


const App = () => {
	const initialState= useInitialState();
	return (
		<AppContext.Provider  value={initialState}>
				<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/login' element={<Login/>} />
						<Route path='/password-recovery' element={<PasswordRecovery/>} />
						<Route path='/send-mail' element={<SendEmail/>} />
						<Route path='/new-password' element={<NewPassword/>} />
						<Route path='/my-account' element={<MyAccount/>} />
						<Route path='/create-account' element={<CreateAccount/>} />
						<Route path='/check-out' element={<Checkout/>} />
						<Route path='/orders' element={<Orders/>} />
						<Route path='*' element={<NotFound/>} />

					</Routes>

				</Layout>
			</BrowserRouter>


		</AppContext.Provider>
		
	);
}

export default App;