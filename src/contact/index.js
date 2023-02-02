import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";
import emailjs from "@emailjs/browser"
  // react para que funcione el mail
export default function ContactUs() {
    const sendEmail = (event) => {
        event.preventDefault();
         emailjs.sendForm("service_w8cay5d","template_6qpxi0h", event.target, "a1Ul37jf4HD0M_71y" )
         .then (response => console.log(response))
         .catch (error => console.log (error)) 

    }
  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4"> Contactenos </h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Estamos en contacto.</h3>

          <address>
            <strong>Email:colorhumano73@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Telefono:3812014735</strong>
            </p>
            <strong>
              Dirección:Avenida Nicolás Avellaneda 431 piso 4 dpto 5
            </strong>
          </address>

          <p> {contactConfig.description} </p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100" onSubmit={sendEmail}>
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Nicolás Quintana"
                  type="text"
                  minLength={5}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounder-0"
                  id="email"
                  name="email"
                  placeholder="colorhumano73@gmail.com"
                  type="email"
                  minLength={5}
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0 mt-3"
              id="message"
              name="message"
              placeholder="Mensaje"
              rows="5"
            ></textarea>
            <br/>
            <Row>

                <Col lg="12" className="form-group">
                    <button className="btn btn-primary" type="submit"> Enviar</button>

                </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
