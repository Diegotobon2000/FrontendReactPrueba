import React from 'react';
import {Container,Form,Button} from "semantic-ui-react"
import {useFormik} from "formik";
import * as Yup from "yup";

 function App() {
   const formik = useFormik({
     initialValues:{
       name: "",
       email:"",
       password:"",
       repeatPassword:"",
     },

     validationSchema: Yup.object({
        name: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string().email("No es un email valido").required("El email es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
        repearPassword: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
     }),
     onSubmit:(formData) => {
       console.log(formData)
     },
   });
  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
    }}
    >
      <h1>Formulario de registro</h1>
      <Form  style={{width:"30%"}}  onSubmit={formik.handleSubmit}>
        <Form.Input type="text" placeholder="Nombre y Apellidos" name="name" onChange={formik.handleChange} error={formik.errors.name } value={formik.values.name}/>
        <Form.Input type="text" placeholder="Correo Electronico" name="email" onChange={formik.handleChange} error={formik.errors.email } value={formik.values.email}/>
        <Form.Input type="password" placeholder="Contraseña" name="password" onChange={formik.handleChange} error={formik.errors.password } value={formik.values.password}/>
        <Form.Input type="password" placeholder="repetir contraseña" name="repeatPassword" onChange={formik.handleChange} error={formik.errors.repeatPassword } value={formik.values.repeatPassword}/>
        <Button type="submit">Registro</Button>
        <Button type="button" onClick={formik.handleReset}>Limpiar Formulario</Button>
      </Form>
    </Container>
    
  );
}

export default App;
