import React, {useState} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contact() {

    
  // const [email,setEmail] = useState("");
  // function sendEmail(event){
  //   const body = event.target.value;
  //   setEmail(click => {
  //       Email.send({
  //           Host:"smtp.gmail.com",
            
  //       })
  //   });

  // }

  return (
    <div className="contact">
    <h3>Feel free to Contact Me</h3>

    <div>
    <form action="mailto:siddhantdaryanani@gmail.com">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
            Message
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword3"/>
        </div>
      </div>
     
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>     
    </div>
    </div>
  );
}

export default Contact;
