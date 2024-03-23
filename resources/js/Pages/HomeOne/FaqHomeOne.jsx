import React, { useState } from 'react';

function FaqHomeOne({ className, faqs }) {
    const [showQues, setQues] = useState(0 + JSON.stringify(faqs[0][0]));
    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <>
            <section className={`appie-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Answers to Common Queries</h3>
                                <p>Have a question? Feel free to get in touch!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {faqs.map((faqGroup, index) => (
                            <div className="col-lg-6" key={index + JSON.stringify(faqGroup)}>
                                <div
                                    className="faq-accordion wow fadeInRight mt-30"
                                    data-wow-duration="1500ms"
                                >
                                    <div
                                        className="accrodion-grp animated fadeIn faq-accrodion wow"
                                        data-wow-duration="1500ms"
                                        data-grp-name="faq-accrodion"
                                    >
                                        {faqGroup.map((faq, id) => (
                                            <div
                                                onClick={() => openQuestion(id + JSON.stringify(faq))}
                                                className={`accrodion ${showQues === id + JSON.stringify(faq) ? 'active' : ''}`}
                                                key={id + JSON.stringify(faq)}
                                            >
                                                <div className="accrodion-inner">
                                                    <div className="accrodion-title">
                                                        <h4>{faq.question}</h4>
                                                    </div>
                                                    <div
                                                        className="accrodion-content"
                                                        style={{
                                                            display: showQues === id + JSON.stringify(faq) ? 'block' : 'none',
                                                        }}
                                                    >
                                                        <div className="inner">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="mailto:himalayabrokersltd@gmail.com">Email us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
