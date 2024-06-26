import styled from "styled-components";

export const ContactHeader = styled.h1`
    text-align: center;
`

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const ContactInfo = styled.p`
    display: flex;
    align-items: center;
`

export const FormContainer = styled.div`
    max-width: 400px;
    padding: 10px;
    float: left;
    width: 50%;
    display: flex;
    flex-direction: column;

    svg {
        margin-right: 6px;
    }
`

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
`

export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: vertical;
`

export const Button = styled.button`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`