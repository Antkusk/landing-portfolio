import React, { useState, useRef } from 'react'
import './Contacts.css'
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';

export default function Contacts() {

	const [show, setShow] = useState(false);
	const form = useRef();

	console.log(form.current);
	const sendEmail = (e) => {
		// e.preventDefault();


		emailjs.sendForm('service_nlfunsk', 'template_3iq87d9', form.current, 'chDaIv_63XYBavYhC')
			.then((result) => {
				console.log(result.text);

			}, (error) => {
				console.log(error.text);
			});
	};




	return (
		<section className='contacts'>

			<Formik
				initialValues={{ email: '', textarea: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setShow(true);
					setSubmitting(false);
					sendEmail();

				}}
			>

				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form ref={form} onSubmit={handleSubmit}>
						<div className="form-wrapper">
							<label htmlFor="">Введите вашу почту</label>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && errors.email}
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Введите сообщение</label>
							<textarea name="textarea"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.textarea}
								id="" cols="40" rows="5">
							</textarea>
							{errors.textarea && touched.textarea && errors.textarea}
						</div>
						<button type="submit" disabled={isSubmitting}>
							Отправить
						</button>
					</form>
				)}
			</Formik>

			{show && (<p> Данные успешно отправлены </p>)}
		</section>
	)
}
