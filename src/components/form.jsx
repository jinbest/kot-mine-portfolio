import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class Form extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        console.log("formData", this.state.formData);
        let data = this.state.formData;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", '/api/send_email', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
            }
        }
        xhr.send(JSON.stringify(data));
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ 
                formData: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                },
                submitted: false 
            }), 3000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    className="col-md-12 mb-3"
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    className="col-md-12 mb-3"
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Subject"
                    onChange={this.handleChange}
                    className="col-md-12 mb-3"
                    name="subject"
                    value={formData.subject}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="Message"
                    onChange={this.handleChange}
                    className="col-md-12 mb-3"
                    name="message"
                    value={formData.message}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                    className="contact-btn main-btn btn btn-block"
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}