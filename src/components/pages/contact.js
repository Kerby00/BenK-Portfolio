import React from 'react';


const Contact = () => {

const clear = () => {
document.getElementById('namer').value = '';
document.getElementById('emailer').value = '';
document.getElementById('emailBody').value = '';
}



    return (
        <div className='d-flex justify-content-center page-pos'>
            <div className='d-inline-flex p-2 pages'>
                <div className='form text-light'>
                    <h5 className='links rounded-pill'>Contact me</h5>
                    <div className="mb-3">
                        <label for="Names" className="form-label">NAME</label>
                        <input type="email" className="form-control" id="namer" placeholder=" " />
                    </div>
                    <div className="mb-3">
                        <label for="Emails" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailer" placeholder=" " />
                    </div>
                    <div className="mb-3">
                        <label for="EmailBody" className="form-label">Message Body</label>
                        <textarea className="form-control form" id="emailBody" rows="3" ></textarea>
                    </div>
                    <div className="mt-5">
                        <button onClick={clear} className='links rounded-pill'>SEND</button>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Contact;