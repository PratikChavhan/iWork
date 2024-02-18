import { Container, Row ,Col,Card, CardHeader, CardBody, Form, FormGroup, Label, Button,Input} from "reactstrap";
import Base from "../components/Base";

const Login=()=>{
    return (
        <Base>
      <Container>
        <Row>
            <Col sm={{
                size: 6,
                offset: 3
            }}>

                <Card>
                    <CardHeader align="center">
                    Login Here
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="username">User Name</Label>
                                <Input type="text" id="username" placeholder="Enter the User Name" required></Input>
                                </FormGroup>
                                <FormGroup>
                                <Label for="password">User Name</Label>
                                <Input type="password" id="password" placeholder="Enter the Password" required>
                                </Input>
                                </FormGroup>
                                <FormGroup>
                                {/* <href=https://github.com/AtharvaChothave22/Frontend/blob/main/iwork-frontend/src/Components/SignIn%20and%20SignUp/SignUp.jsx /> */}
                                </FormGroup>
                               <Container className="text-center">
                                 <Button color="success" >Log In</Button>
                    {/* ms=>Margin Spacing */}
                </Container>

                           
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </Container>
        
        </Base>
    )
};
export default Login