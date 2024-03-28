import React from 'react';
import { useForm, usePage } from '@inertiajs/react'

function Forms() {

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        terms_conditions: false,
    });

    function submit(e) {
        e.preventDefault()
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        })
    }

    const { message } = usePage().props.flash;

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>
                                <p>Have any queries? Fill the form and start a new adventure.</p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                        Plot No. 7887, M.R. College Road
                                        <br /> Panchagarh 5000
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        +(880) 1710 035629
                                        <br />
                                        +(880) 1733 145359
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Support</h5>
                                    <p>
                                        <i className="fal fa-envelope"></i>
                                        himalayabrokersltd@gmail.com
                                        <br />
                                        support@himalayabrokersbd.com
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-pinterest-p"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <h4>Drop Us a Message</h4>
                                <p>We can help. Our team of experts is on hand to answer your questions.</p>

                                {message &&
                                    <div className='alert' style={{ color: "#31c369" }}>
                                        {message.body}
                                    </div>
                                }

                                <form onSubmit={submit} className="row">
                                    <div className="col-md-6">
                                        {errors.first_name && <small style={{ color: "red" }}>{errors.first_name}</small>}
                                        <input type="text" id="first_name" value={data.first_name} onChange={e => setData('first_name', e.target.value)} placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        {errors.last_name && <small style={{ color: "red" }}>{errors.last_name}</small>}
                                        <input type="text" id="last_name" value={data.last_name} onChange={e => setData('last_name', e.target.value)} placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                                        <input
                                            type="email"
                                            id="email" value={data.email} onChange={e => setData('email', e.target.value)}
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                                        <input
                                            type="number"
                                            id="phone" value={data.phone} onChange={e => setData('phone', e.target.value)}
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        {errors.subject && <small style={{ color: "red" }}>{errors.subject}</small>}
                                        <input type="text" id="subject" value={data.subject} onChange={e => setData('subject', e.target.value)} placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
                                        <textarea
                                            id="message" value={data.message} onChange={e => setData('message', e.target.value)}
                                            placeholder="How can we help?"
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            {errors.terms_conditions && <small style={{ color: "red" }}>{errors.terms_conditions}</small>}
                                            <input id="terms_conditions" value={data.terms_conditions} checked={data.terms_conditions} onChange={e => setData('terms_conditions', e.target.checked)} type="checkbox" />
                                            <label htmlFor="terms_conditions">
                                                I agree to the <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" name="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bisylms-map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6139480261413!2d88.54811717520361!3d26.3389974769939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e48b1cc997c7d5%3A0xb7bc4d44bc83574!2sHIMALAYA%20BROKERS%20LIMITED!5e0!3m2!1sen!2sbd!4v1711157792309!5m2!1sen!2sbd"
                    width="720"
                    height="600"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}

export default Forms;
