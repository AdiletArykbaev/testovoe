import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";
import {Link} from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button
}from "reactstrap"


const UserList = ()=>{
    const { users,removeUser } = useContext(GlobalContext)
    return(
        <ListGroup className="mt-4">
            {users.length > 0 ? (
                <>
                    {users.map((user)=>{
                        return <ListGroupItem className="d-flex justify-content-between">
                            <div className="mt-2">

                                <ul>

                                    <li>Имя:{user.name}</li>
                                    <li>id:{user.id}</li>
                                    <li>дата рождения:{user.birthday}</li>
                                    <li>пол:{user.gender}</li>
                                </ul>

                            </div>
                            <div className="mt-0">
                                <Link className="btn btn-warning mr-1" to={`/edit/${user.key}`}>
                                    Edit
                                </Link>
                                <Button onClick = {()=>removeUser(user.key)} color="danger">
                                    delete
                                </Button>
                            </div>
                        </ListGroupItem>

                    })}
                </>
            ):(
                <>
                  <h4 className="text-center">нету базы</h4>
                </>
            )}




        </ListGroup>
    )
}
export default  UserList;