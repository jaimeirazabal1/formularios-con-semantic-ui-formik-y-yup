import './App.css';
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik"
import * as Yup from "yup";
function App() {
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      repeatPassword:""
    },
    validationSchema:Yup.object({
      name:Yup.string().required('El nombre es obligatorio'),
      email:Yup.string().email("No es un email válido").required('El email es obligatorio'),
      password:Yup.string().required('La contraseña es obligatorio').oneOf([Yup.ref("repeatPassword")],"Las contraseñas no son iguales"),
      repeatPassword:Yup.string().required('La contraseña es obligatorio')
    }),
    onSubmit: (formData) => {
      console.log(formData)
    }
  })
  return (
    <Container
      style={{
        textAlign: 'center',
        display:"flex",
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height:"100vh"
      }}
    >
      <h1>
        Formulario de registro
      </h1>
      <Form 
      onSubmit={formik.handleSubmit}
      style={{
        width:"30%",
      }}>
        <Form.Input type="text" 
        placeholder="Nombre y Apellidos" 
        onChange={formik.handleChange}
        name="name"
        error={formik.errors.name}
        value={formik.values.name}/>
        <Form.Input 
        type="text" 
        placeholder="Correo Electrónico" 
        onChange={formik.handleChange}
        name="email"
        error={formik.errors.email}
        value={formik.values.email}/>
        <Form.Input 
        type="password" 
        placeholder="Contraseña" 
        onChange={formik.handleChange}
        name="password"
        error={formik.errors.password}
        value={formik.values.password}/>
        <Form.Input 
        type="password" 
        placeholder="Repetir Contraseña" 
        onChange={formik.handleChange}
        name="repeatPassword"
        error={formik.errors.repeatPassword}
        value={formik.values.repeatPassword}/>
        <Button type="submit">Registro</Button>
        <Button onClick={formik.handleReset} type="button">Limpiar Formulario</Button>
      </Form>
    </Container>
  );
}

export default App;
