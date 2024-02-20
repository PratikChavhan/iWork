import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div style={{ fontSize: '25px' }}>
                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                        <h3>Contact us</h3>
                        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                        <div className="dbox w-100 d-flex align-items-start">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <div className="text pl-3">
                                <p><span>Address:</span> A-401, Mankichand Galleria, Swastik,Model Colony,Pune-411016</p>
                            </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-phone"></span>
                            </div>
                            <div className="text pl-3">
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 91 8007065051</a></p>
                            </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="text pl-3">
                                <p><span>Email:</span> <a href="mailto:iwork@freelance.gmail.com">iwork@freelance.gmail.com</a></p>
                            </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-globe"></span>
                            </div>
                            <div className="text pl-3">
                                <p><span>Website</span> <a href="#">iwork.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;