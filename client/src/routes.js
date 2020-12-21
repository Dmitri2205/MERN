import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from "./pages/AuthPage";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailsPage} from "./pages/DetailsPage";



export const useRoutes = isAuth => {
	if (isAuth) {
		return (
			<Switch>
			<Route path="/links" exact>
				<LinksPage/>
			</Route>
			<Route path="/create" >
				<CreatePage/>
			</Route>
			<Route path="/detail/:id">
				<DetailsPage/>
			</Route>
			<Redirect to="/create"/>
			</Switch>
		)
	}
	return(
		<Switch>
		<Route link="/" exact>
			<AuthPage/>	
		</Route>
		<Redirect to="/" />
		</Switch>
	)


}