import { Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label ,Button,Row,Col,CardFooter} from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { useEffect } from "react";
import { signUp } from "../services/user-service";

const Signup=()=>{

    
    const [data,setData]=useState({
         name :'',
         email:'',
         password :'',
    })

    const[error,setError]=useState({
        errors:{},
        isError:false
    })
    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    //handle change
    const handleChange=(event,property)=>{
        //dynamically setting the values
       setData({...data,[property]:event.target.value})

    }

    //Reset data
    const resetData=()=>{
        setData({
            name :'',
         email:'',
         password :'',
        })
    }

    //Submit Form
    const submitForm=(event)=>{
        event.preventDefault()

        console.log(data);

        //Call server api for the sending data
        signUp(data).then((resp)=>{
            console.log(resp)
            console.log("sucess log")
        }).catch((error)=>{
            console.log(error)
            console.log("ërrorlog")
        })
    }

    return (
        <Base>
       <Container>
        <Row>
            <Col sm={{size:6,offset:3}}>
                {/* {JSON.stringify(data)} */}
                {/* Above json .stringify is used to sned object to key value pair */}
            <Card color="dark" outline>
            <CardHeader align="center"> Fill the Info for Register</CardHeader>

            <CardBody>

               <Form onSubmit={submitForm}>
                {/* No need of sending event */}
                {/* Name Field */}
                <FormGroup>
                    <Label for="name" >Enter name</Label>
                    <Input 
                        type="text"
                        placeholder="Enter Name" 
                        // Listener Declaration for viewing value changing
                        id="name" onChange={(e)=>handleChange(e,'name')}
                        value={data.name}>
                     </Input>
                </FormGroup>

                <FormGroup>
                    {/* Email Field */}
                    <Label for="email" required>Enter Email</Label>
                    <Input type="text" placeholder="Enter Name" id="email" required onChange={(e)=>handleChange(e,'email')}
                    value={data.email}></Input>
                </FormGroup>

                <FormGroup>
                    {/* Password Field */}
                    <Label for="password">Enter Password</Label>
                    <Input type="password" placeholder="Enter Password" id="password" required onChange={(e)=>handleChange(e,'password')}
                    value={data.password}></Input>
                </FormGroup>
                {/* <FormGroup>
                    <Label for="password">Confirm Password</Label>
                    <Input type="password" placeholder="Confirm Password" id="password1" required></Input>
                </FormGroup> */}
                <Container className="text-center">
                    <Button color="success" >Register</Button>
                    <Button onClick={resetData} color="dark" type="reset" className="ms-3">Reset</Button>    
                    {/* ms=>Margin Spacing */}
                </Container>


               </Form>
               <CardFooter align="center">
   Iwork @COPY RIGHT
  </CardFooter>
            </CardBody>
        </Card>
            </Col>
        </Row>
       </Container>
        </Base>
    )
};
export default Signup