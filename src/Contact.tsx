import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import NavBar from "./Navbar"
import { Button, ContactHeader, ContactInfo, ContactWrapper, FormContainer, FormGroup, Input, Label, TextArea } from "./ContactStyled"

const Contact = () => {

    return (
        <>
            <NavBar />
            <ContactHeader>Contact with us</ContactHeader>
            <ContactWrapper>
                <FormContainer>
                    <h3>Phone number</h3>
                    <ContactInfo><FaPhone /> +48 000 000 000</ContactInfo>
                    <ContactInfo><FaPhone /> +48 111 111 111</ContactInfo>
                    <h3>Location</h3>
                    <ContactInfo><FaMapMarkerAlt /> Wrocław ul. Legnicka 48</ContactInfo>
                </FormContainer>
                <FormContainer>
                    <form>
                        <FormGroup>
                        <Label htmlFor="name">Name:</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="message">Message:</Label>
                        <TextArea
                            id="message"
                            name="message"
                            rows={5}
                            required
                        />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </form>
                </FormContainer>
            </ContactWrapper>
        </>
    )
}

export default Contact