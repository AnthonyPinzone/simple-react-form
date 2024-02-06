import { useState } from "react";
import "./App.scss";

const App = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className='simple-form'>
            <h1 className='simple-form__title'>Simple Form</h1>
            <form className='simple-form__form' onSubmit={handleSubmit}>
                <label className='simple-form__label'>
                    First Name
                    <input
                        className='simple-form__input'
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label className='simple-form__label'>
                    Last Name
                    <input
                        className='simple-form__input'
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label className='simple-form__label'>
                    Email
                    <input
                        className='simple-form__input'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <div className='simple-form__button-group'>
                    <button className='simple-form__button' type='submit'>
                        Submit
                    </button>
                    <button
                        className='simple-form__button simple-form__button--outline'
                        type='reset'
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default App;
