import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Formulario = () => {

const [Formdata, setFormdata] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: ''
})


  return (
    <Container className="py-4">
      {/* Título con fondo diferente al body */}
      <div className="text-dark text-center py-3 mb-2">
        <h1>Formulario</h1>
      </div>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body>
              <Form>
                {/* Campo Nombre */}
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" required />
                </Form.Group>

                {/* Campo Apellido */}
                <Form.Group className="mb-3" controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su apellido" />
                </Form.Group>

                {/* Campo DNI */}
                <Form.Group className="mb-3" controlId="formDNI">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su DNI" />
                </Form.Group>

                {/* Campo Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su email" />
                </Form.Group>

                {/* Botón de envío */}
                <div className="d-grid">
                  <Button variant="primary" type="button">
                    Enviar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulario;
