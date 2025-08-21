import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validacion = (datos) => {
    alert("Datos enviados");
    
    reset(); // Esto limpia el formulario
    console.log(datos)
  };

  return (
    <Container className="py-4">
      {/* Título */}
      <div className="text-dark text-center py-3 mb-2">
        <h1>Formulario</h1>
      </div>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body>
              <Form
                onSubmit={handleSubmit(validacion, (errors) =>
                  alert("Completar todos los datos")
                )}
              >
                {/* Nombre */}
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escriba su nombre completo"
                    {...register("nombre", {
                      required: "Por favor ingrese un nombre válido.",
                      minLength: {
                        value: 2,
                        message: "Debe contener al menos 2 caracteres.",
                      },
                      maxLength: {
                        value: 50,
                        message: "Debe contener al menos 50 caracteres.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombre?.message}
                  </Form.Text>
                </Form.Group>

                {/* Apellido */}
                <Form.Group className="mb-3" controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su apellido"
                    {...register("apellido", {
                      required: "Por favor ingrese un apellido válido.",
                      minLength: {
                        value: 2,
                        message: "Debe contener al menos 2 caracteres.",
                      },
                      maxLength: {
                        value: 50,
                        message: "Debe contener al menos 50 caracteres.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.apellido?.message}
                  </Form.Text>
                </Form.Group>

                {/* DNI */}
                <Form.Group className="mb-3" controlId="formDNI">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese su DNI"
                    {...register("dni", {
                      required: "Debe ingresar su número de DNI.",
                      pattern: {
                        value: /^\d{7,8}(?:[-\s]\d{4})?$/,
                        message: "El DNI debe tener al menos 7 u 8 caracteres.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.dni?.message}
                  </Form.Text>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    {...register("email", {
                      required: "Deve ingresar un correo valido.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "Ingrese un correo válido (ejemplo: usuario@uotlook.com).",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                {/* Botón de envío */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
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
