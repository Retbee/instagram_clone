import React, {useState} from 'react';
import "./Login.css"

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmitForm = (event) => {
        event.preventDefault()
        handleLogin({ password, email })
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    return (
        <section className="login">
            <div className="login__wrapper">
                <h1 className="login__text">Добро пожаловать!</h1>
                <form action="" className="login_form"
                      onSubmit={handleSubmitForm}>
                    <div className="login__input-wrapper">
                        <input
                            value={email}
                            id={"input_type_email"}
                            type="email"
                            className="login__input"
                            placeholder={" "}
                            required
                            onChange={handleEmailInput}
                        />
                        <label className="login__label">E-mail</label>
                    </div>

                    <div className="login__input-wrapper">
                        <input
                            value={password}
                            id={'input_type_password'}
                            type="password"
                            className="login__input"
                            placeholder={" "}
                            required
                            onChange={handlePasswordInput}
                        />
                        <label className="login__label">Password</label>
                    </div>
                    <button className="login__button">Enter</button>
                </form>
            </div>
        </section>


    );
};

export default Login;