import { useState } from 'react';
const Form = (props) => {
    const { state, setState } = props;
    const [fnTitle, setFnTitle] = useState("");
    const [lnTitle, setLnTitle] = useState("");
    const [eTitle, setETitle] = useState("");
    const [pTitle, setPTitle] = useState("");
    const [cPTitle, setCpTitle] = useState("");
    const [edTitle, setEdTitle] = useState("");
    const [hasBeensubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setState({ ...state, 'firstName': e.target.value });
        if (state.firstName.length < 1) {
            setFnTitle('First name must have at least two characters!');
        } else {
            setFnTitle("");
        }
    }

    const handleLastName = (e) => {
        setState({ ...state, 'lastName': e.target.value });
        if (state.lastName.length < 1) {
            setLnTitle('Last name must have at least two characters!');
        } else {
            setLnTitle("");
        }
    }

    const handleEmail = (e) => {
        setState({ ...state, 'email': e.target.value });
        if (state.email.length < 1) {
            setETitle('Email must have at least two characters!');
        } else {
            setETitle("");
        }
    }

    const handlePassword = (e) => {
        setState({ ...state, 'password': e.target.value });
        if (state.password.length < 7) {
            setPTitle('Password must have at least 8 characters!');
        } else {
            setPTitle("");
        }
    }
    const handleConfirmPassword = (e) => {
        if (state.password !== e.target.value) {
            setCpTitle('Password must match!');
        } else {
            setCpTitle("");
        }
    }

    const handleConfirmEdad = (e) => {
        setState({ ...state, 'edad': e.target.value });
        if (state.edad < 18) {
            setEdTitle('Debes ser mayor de edad!');
        } else {
            setEdTitle("");
        }
    }

    const handleRegistrar = (e) => {
        e.preventDefault();
        /*if (state.firstName.length < 1 || state.lastName.length < 1 || state.email.length < 1 || 
            state.password.length < 7 || state.password !== state.confirmPassword || state.edad < 18) {
            alert("Please fill out all fields correctly!");
            setHasBeenSubmitted(false);
        } else {
            
            console.log("First Name:", state.firstName);
            console.log("Last Name:", state.lastName);
            console.log("Email:", state.email);
            console.log("Password:", state.password);
            console.log("Edad:", state.edad);
        }*/
        setHasBeenSubmitted(true);
    }

    const FormMessage = () => {
        if (hasBeensubmitted) {
            return "¡Gracias por registrarse!";
        } else {
            return "¡Bienvenido! Por favor, regístrese.";
        }
    }


    return (
        <form onSubmit={handleRegistrar}>
            <div className="input">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" size={30} onChange={handleFirstName} />
                {
                    <p style={{ color: 'red' }}> {fnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" size={30} onChange={handleLastName} />
                {
                    <p style={{ color: 'red' }}> {lnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" size={30} onChange={handleEmail} />
                {
                    <p style={{ color: 'red' }}> {eTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" size={30} onChange={handlePassword} />
                {
                    <p style={{ color: 'red' }}> {pTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="confirmPassword">Confirm password: </label>
                <input type="password" name="confirmPassword" size={30} onChange={handleConfirmPassword} />
                {
                    <p style={{ color: 'red' }}> {cPTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="edad">Edad: </label>
                <input type="number" name="edad" size={3} onChange={handleConfirmEdad} onKeyDown={e => e.preventDefault()} />
                {
                    <p style={{ color: 'red' }}> {edTitle}</p>
                }
            </div>
            {/* <h3 style={{ color: 'green' }}>{FormMessage()}</h3> */}
            {
                hasBeensubmitted ?
                <h3 style={{ color: 'green' }}>{FormMessage()}</h3> :
                <h3 style={{ color: 'red' }}>{FormMessage()}</h3>
            }
            <input type="submit" value="Register" />
        </form>
    );
}

export default Form;