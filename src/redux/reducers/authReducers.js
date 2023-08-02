import { LOGIN, PASSWORD } from '../../constants/constants'
//инишиал это начальное состояние нашего логина
const initialState = {
  login: '',
  password: '',
}

export const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN:
      return { ...state, login: actions.payload } //возвращаем старое состояние ...state и передаем экшн пейлод, таким образом менять состояние, когда вводим что-либо в импут
    case PASSWORD:
      return { ...state, password: actions.payload } //такая же логика для пассворда как выше, по хорошему надо делать пассворд саксесс и пасворд эррор
    default:
      return state //если не будет ни одного логина/пароля в диспатче будет возвращаться initialState
  }
}
