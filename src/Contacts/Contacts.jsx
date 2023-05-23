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
			<h2 className='contacts-title'>Contacts</h2>
			<p className='contacts-descr'>Напишите мне, и я обязательно Вам отвечу</p>
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
					setSubmitting(true);
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
							<label className="form-label" htmlFor="">Введите вашу почту</label>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>



							<p className='error-mesg'>{errors.email && touched.email && errors.email}</p>
						</div>
						<div className="form-wrapper">
							<label className="form-label" htmlFor="">Введите сообщение</label>
							<textarea name="textarea"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.textarea}
								id="" cols="40" rows="5">
							</textarea>
							{errors.textarea && touched.textarea && errors.textarea}
						</div>
						<div className="form-button">
							<button className='send-message-btn' type="submit" disabled={isSubmitting}>
								Отправить
							</button>
						</div>
					</form>
				)}
			</Formik>
			<div className="form-mesg">
				{show && (<p className='form-mesg-sucs'> Данные успешно отправлены </p>)}
			</div>

		</section>
	)
}
