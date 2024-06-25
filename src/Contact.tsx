import { FaEnvelope, FaPhone } from "react-icons/fa"
import NavBar from "./Navbar"

const Contact = () => {
    return (
        <>
            <NavBar />
            <div>
                <h2>Contact with us</h2>
                <div>
                    <h3>Phone number <FaPhone /></h3>  
                    <p>+48 000 000 000</p>
                </div>
                <div>
                    <h3>Send email <FaEnvelope /></h3>
                    <form>
                        <label htmlFor="Email">Email</label>
                        <input type="text" required />
                        <label htmlFor="Last name">Subject</label>
                        <input type="text" required />
                        <label htmlFor="Message">Message</label>
                        <textarea required />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact