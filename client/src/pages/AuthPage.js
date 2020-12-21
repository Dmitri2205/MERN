import React,{useState,useEffect} from 'react'
import {useHttp} from "../hooks/http.hooks";
import {useMessage} from "../hooks/messageHook";

export const AuthPage = () => {
	const { loading,request,error, cleanError} = useHttp();
	const [form,setForm] = useState({email:'',password:''});
	const message = useMessage();


	useEffect(()=>{
		message(error);
		cleanError();
	},[error,message,cleanError])

	const changeHandler = event => {
		setForm({ ...form,[event.target.name]:event.target.value })
	}

	const registerHandler = async () => {
		try{
			const data = await request('api/auth/register','POST',{...form});
			console.log('Data',data)
		}catch(e){

		}
	}

	return(
	<div className="row">
		<div className="col s6 offset-s3">
		<h1>Проект</h1>
		    <div className="card blue-grey darken-1">
		        <div className="card-content white-text">
		        <span className="card-title">Авторизация</span>
		        </div>
			        <div className="row" style={{padding:'10px'}}>
				        <div className="input-field col s12">
				          	<input 
					          	id="email"
					          	type="email"
					          	className="validate"
						        name="email"
						        onChange={(event)=>changeHandler(event)}
				          	/>
				          <label htmlFor="email">Email</label>
				        </div>
				        <div className="input-field col s12">
				          	<input 
					          id="password" 
					          type="password" 
					          className="validate"
					          name="password"
					          onChange={(event)=>changeHandler(event)}
				           	/>
				          <label htmlFor="password">Пароль</label>
				        </div>
			        </div>
		        <div className="card-action">
			        <button 
				        className="btn limegreen" 
				        style={{margin:"10px"}}
				        disabled={loading}
				        >
					        Вход
				        </button>
			        <button 
				        className="btn blue darken-1" 
				        style={{margin:"10px"}}
				        onClick={(event)=>registerHandler()}
				        >
				        Регистрация
				        </button>
		        </div>
		      </div>
		</div>
	</div>
	)
}