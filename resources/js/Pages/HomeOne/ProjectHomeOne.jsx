import React from 'react';
import { useForm, usePage } from '@inertiajs/react'
import projectThumb from '@images/project-thumb.png';

function ProjectHomeOne() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });

    function submit(e) {
        e.preventDefault()
        post('/newsletter', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        })
    }

    const { message } = usePage().props.flash;
    return (
        <>
            <section className="appie-project-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            <h3 className="title">
                                                Subscribe for our newsletter.
                                            </h3>
                                            <p>Subscribe to get the latest news on teas, and monthly specials.</p>

                                            {message && <div className=" mt-30">
                                                <div className='alert bg-white' style={{ color: "#31c369" }}>
                                                    {message.body}
                                                </div>
                                            </div>}

                                            {!message &&
                                                <form onSubmit={submit}>
                                                    <div className="input-box mt-30">
                                                        <input type="email" placeholder="Your email" id="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                                                        <button type="submit">Subscribe</button>
                                                    </div>
                                                    {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                                                </form>}
                                        </div>
                                    </div>
                                </div>
                                <div className="appie-project-thumb">
                                    <img src={projectThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
