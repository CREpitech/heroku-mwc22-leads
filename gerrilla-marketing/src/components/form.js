import React from 'react';
import axios from 'axios';
function Form() {
 
    async function postLead(lead) {
        await axios.post('https://first-try-heroku-deployment.herokuapp.com/api/newlead', {
            name: lead.name,
            email: lead.email,
            location: "MWC22"
        }).then(res => console.log(res.data));
    }
    function onSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value
        const lead = {name: name, email: email};
        postLead(lead)

    }

    return (
        <form  onSubmit={onSubmit}>
            <h3 style={{ color: "orangered" }}>Want To Know More?</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />

            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll not share your email with anyone else.</div>
            </div>


            
            <button type="submit" className="btn btn-primary" >
                I Want to know more!
            </button>


           
        </form>
    )


}
export default Form;