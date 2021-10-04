import {Link,useHistory} from "react-router-dom"
import {useContext,useState,useEffect} from "react";
import {GlobalContext} from "../Context/GlobalState";
import { v4 as uuid} from "uuid"

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

const AddUser= ()=> {
    const [name,setName] = useState("")
    const [id,setId] = useState("")
    const [birthday,setBirthday] = useState('')
    const [gender, setGender] = useState("")

    const { addUser } = useContext(GlobalContext)
    const history = useHistory();
    const onSubmit = (e)=>{
        e.preventDefault()
        const newUser = {
            birthday:birthday.toString(),
            key:uuid(),
            id,
            name,
            gender,
        }
        addUser(newUser)
        history.push("/")
    }
   const getGender = (e)=>{
       setGender(e.target.value)
    }

    return (
       <Form onSubmit={onSubmit}>
           <FormGroup>
               <div>
                   <Label>Full Name</Label>
                   <Input name="name" onChange = {(e)=>{
                        setName(e.target.value)
                   }} type="text" placeholder="ФИО" value={name}>

                   </Input>
               </div>

               <div>
                   <Label>Id</Label>
                   <Input onChange = {(e)=>{
                       setId(e.target.value)
                   }} type="text" placeholder="Id" name="id">

                   </Input>
               </div>

              <div>
                  <Label>BirthDate</Label>
                  <Input type="date" onChange={(e)=>{
                      setBirthday(e.target.value)
                      console.log(birthday)
                  }} placeholder="ДАТА РОЖДЕНИЯ" name="birthday">

                  </Input>
              </div>
               <div onChange={(e)=>{
                   getGender(e)
               }}>
                   <input className="m-lg-25" type="radio"  name="gender" id="male" value="male"/>
                   <label htmlFor="male">мужской</label>
                   <input type="radio"  name="gender" id="female" value="female"/>
                   <label htmlFor="female">женский</label>
               </div>

           </FormGroup>
           <Button type="submit" className="btn btn-success " >потвердить</Button>
           <Link to="/" className="btn btn-danger">отменить</Link>

       </Form>
    );
}

export default AddUser;
