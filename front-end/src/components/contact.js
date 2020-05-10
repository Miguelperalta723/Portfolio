import React, {useState} from "react";

const Contact = () => {
    const [ sender , setSender] = useState({name: "", email: "", message: ""})

    return(
        <div className="form-container">
            <form>
                <label>
                    Name
                    <input 
                        type="text"
                        name="name"
                        value={sender.name}
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="text"
                        name="email"
                        value={sender.email}
                    />
                </label>
                <label>
                    Message
                    <input 
                        type="text"
                        name="message"
                        id="message-box"
                        value={sender.message}
                    />
                </label>
                <button>Send!</button>
            </form>
        </div>
    )
}


export default Contact;