import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN, PASSWORD } from '../../constants/constants'
import { login } from '../../redux/actions/actions'
import './styles.css' //стили экспортируем в самом низу

const LoginPage = () => {
  const state = useSelector((state) => state.auth) //хук useselector для доступа к стейту, получаем поле с редюссером, которое возвращает наше состояние
  const dispatch = useDispatch() //получаем диспатч с помощью хука useDispatch
  //далее напишем два хендлера, один для получения пароля, другой для получения логина
  const handlerLogin = (event) => {
    dispatch(login(LOGIN, event.target.value)) //LOGIN - это тип, event.target.value - евент.
    console.log(state.login)
  }
  const handlerPassword = (event) => {
    dispatch(login(PASSWORD, event.target.value))
    console.log(state.password)
  }

  return (
    <form className="form">
      <h1>Вход</h1>
      <input className="form_input" onChange={handlerLogin} />
      <input className="form_input" onChange={handlerPassword} />
      <Link
        className={`form_link ${
          state.login === 'pidor' && state.password === '123qwe'
            ? ''
            : 'form_link--disabled'
        }`} //тернарный оператор
        to="/profile"
      >
        Войти
      </Link>
    </form>
  )
}

export default LoginPage // поскольку используем Link от реакт-роутер-дом надо оборачивать в withRouter
