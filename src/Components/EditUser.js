import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    key: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserKey = props.match.params.key;
  useEffect(() => {
    const userKey = currentUserKey;
    const ourUser = users.find((user) => user.key === userKey);
    setSelectedUser(ourUser);
    console.log(ourUser);
  }, [currentUserKey, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <div>
          <Label>Full Name</Label>
          <Input
            value={selectedUser.name}
            onChange={(e) => {
              onChange(e);
            }}
            type="text"
            placeholder="ФИО"
            name="name"
          ></Input>
        </div>

        <div>
          <Label>Id</Label>
          <Input
            value={selectedUser.id}
            onChange={(e) => {
              onChange(e);
            }}
            type="number"
            name="id"
            placeholder="Id"
          ></Input>
        </div>

        <div>
          <Label>BirthDate</Label>
          <Input
            value={selectedUser.birthday}
            onChange={(e) => {
              onChange(e);
            }}
            type="date"
            placeholder="ДАТА РОЖДЕНИЯ"
            name="birthday"
          ></Input>
        </div>
        <div>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">мужской</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">женский</label>
        </div>
      </FormGroup>
      <Button type="submit" className="btn btn-success ">
        потвердить
      </Button>
      <Link to="/" className="btn btn-danger">
        отменить
      </Link>
    </Form>
  );
};

export default EditUser;
