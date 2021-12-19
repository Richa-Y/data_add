import React, { Component } from "react";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
class Home extends Component {
  constructor(props) {
    super();
    this.saveChanges = this.saveChanges.bind(this);
    //have defined all the state variables used.
    this.state = {
      data: [],

      item: {},

      modalIsOpen: false,
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      zipcode: "",
      companyname: "",
      catchh: "",
      website: "",
      name2: "",
      email2: "",
      phone2: "",
      street2: "",
      city2: "",
      zipcode2: "",
      companyname2: "",
      catchh2: "",
      website2: "",
      modalIsOpen2: false,
      newdata: "",
      id: "",
    };
  }
  // in componentDid Mount initially according to condition have stored data in localStorage .
  componentDidMount() {
    const { data } = this.state;
    // if (!localStorage.getItem("contacts")) {
    //   console.log("one")
    //   const url =
    //     "https://jsonplaceholder.typicode.com/users";
    //   fetch(url)
    //     .then((response) =>
    //        response.json()
    //     )
    //     .then((json) => {
    //       console.log("firsyyyt",json)

    //       localStorage.setItem("contacts", JSON.stringify(json));
    //       this.storedata()
    //  });
    //   }
    //   else{
    //     console.log("two")
    //     JSON.parse(localStorage.getItem("contacts"));
    //   }
    if (localStorage.getItem("contacts")) {
      console.log("one");
      this.storedata();
    } else {
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("contacts", JSON.stringify(json));
          this.storedata();
        });
    }
  }
  // here getting data from local storage and storing it in a state variable.
  storedata = () => {
    const information = JSON.parse(localStorage.getItem("contacts"));

    if (information !== null) {
      this.setState(
        {
          data: information,
          // list:information,
        },
        () => console.log("happy new year", this.state.data)
      );
    }
  };
  // on click on save button after editing passing the id and storing it .
  saveChanges = (id) => {
    const {
      name,
      email,
      phone,
      city,
      street,
      website,
      zipcode,
      catchh,
      companyname,
      data,
    } = this.state;
    const companyedit = { name: companyname, catchPhrase: catchh };
    const addressedit = { city: city, street: street, zipcode: zipcode };
    const editinfo = {
      id: id,
      name: name,
      username: email,
      phone: phone,
      website: website,
      company: companyedit,
      address: addressedit,
    };

    let p = JSON.parse(localStorage.getItem("contacts"));
    let edit_contact = p.filter((p1) => {
      return p1.id !== id;
    });
    const edit_product2 = [...edit_contact, editinfo];

    localStorage.setItem("contacts", JSON.stringify(edit_product2));
    const editData = JSON.parse(
      localStorage.getItem("contacts", JSON.stringify(edit_product2))
    );
    this.setState({
      data: editData,
      modalIsOpen: false,
    });
  };
  // on click on delete calling this function .
    handleDelete = (id) => {
      console.log("abc")
    const { data } = this.state;
    console.log("delete", id, this.state.data);

    let deleteitem = JSON.parse(localStorage.getItem("contacts"));
    let filtereddata = deleteitem.filter((p1) => {
      return p1.id !== id;
    });
    localStorage.setItem("contacts", JSON.stringify(filtereddata));
    const deleteData = JSON.parse(
      localStorage.getItem("contacts", JSON.stringify(filtereddata))
    );
    console.log("edir", deleteData);

    this.setState({
      data: filtereddata,
    });
  };
  // on click on Add Contacts and then save calling this function . it is creating a object and storing the added data in local storage.
  addSaveChanges = () => {
    const {
      name2,
      email2,
      phone2,
      city2,
      street2,
      website2,
      zipcode2,
      catchh2,
      companyname2,
      data,
      modalIsOpen2,
    } = this.state;
    const company = { name: companyname2, catchPhrase: catchh2 };
    const address = { city: city2, street: street2, zipcode: zipcode2 };
    const addinfo = {
      id: new Date(),
      name: name2,
      username: email2,
      phone: phone2,
      website: website2,
      company: company,
      address: address,
    };
    var itemproducts = [];

    itemproducts = JSON.parse(localStorage.getItem("contacts"));

    const new_product = [...itemproducts, addinfo];

    localStorage.setItem("contacts", JSON.stringify(new_product));

    const addeddata = JSON.parse(
      localStorage.getItem("contacts", JSON.stringify(new_product))
    );

    this.setState({
      data: addeddata,
      modalIsOpen2: false,
    });
  };
 
  //these functions are called in a Modal popup at the time of adding contacts.
  handlename = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleemail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlephone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handlecity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handlestreet = (e) => {
    this.setState({
      street: e.target.value,
    });
  };
  handlezip = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
  };
  handlecompany = (e) => {
    this.setState({
      companyname: e.target.value,
    });
  };
  handlecatchh = (e) => {
    this.setState({
      catchh: e.target.value,
    });
  };
  handlewebsite = (e) => {
    this.setState({
      website: e.target.value,
    });
  };

  //these functions are called in a Modal popup at the time of Editing contacts.

  handleOne = (e) => {
    this.setState({
      name2: e.target.value,
    });
  };
  handleTwo = (e) => {
    this.setState({
      email2: e.target.value,
    });
  };
  handleThree = (e) => {
    this.setState({
      phone2: e.target.value,
    });
  };
  handle4 = (e) => {
    this.setState({
      city2: e.target.value,
    });
  };
  handle5 = (e) => {
    this.setState({
      street2: e.target.value,
    });
  };
  handle6 = (e) => {
    this.setState({
      zipcode2: e.target.value,
    });
  };
  handle7 = (e) => {
    this.setState({
      companyname2: e.target.value,
    });
  };
  handle8 = (e) => {
    this.setState({
      catchh2: e.target.value,
    });
  };
  handle9 = (e) => {
    this.setState({
      website2: e.target.value,
    });
  };

  render() {
    const {
      data,
      modalIsOpen,
      name,
      email,
      phone,
      street,
      city,
      zipcode,
      companyname,
      catchh,
      website,
      name2,
      email2,
      phone2,
      street2,
      city2,
      zipcode2,
      companyname2,
      catchh2,
      website2,
      modalIsOpen2,
      id,
    } = this.state;
    console.log(phone, email, street, city, zipcode);

    console.log(this.state.data, "all");
    const showModal = (val, selecteddata) => {
      this.setState({
        modalIsOpen: true,
        name: selecteddata.name,
        phone: selecteddata.phone,
        email: selecteddata.email,
        street: selecteddata.address.street,
        city: selecteddata.address.city,
        zipcode: selecteddata.address.zipcode,
        companyname: selecteddata.company.name,
        catchh: selecteddata.company.catchPhrase,
        website: selecteddata.website,
        id: selecteddata.id,
      });
      console.log(phone, email, street, city, zipcode);
    };
    const hideModal = () => {
      this.setState({
        modalIsOpen: false,
      });
    };
      const showModal2 = () => {
        console.log("add")
      this.setState({
        modalIsOpen2: true,
      });
    };
    const hideModal2 = () => {
      this.setState({
        modalIsOpen2: false,
      });
    };
    return (
      <Container>
        <Row>
          <div>
            <Button
              style={{ float: "right" }}
              className="btn"
              onClick={() => showModal2(true)}
            >
              {" "}
              Add Contacts
            </Button>
          </div>
          {data.map((item) => (
            <Col md="5" className="box">
              <div className="image">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg"
                  height="60px"
                  alt="image"
                />
                <span>Name : {item.name}</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span className="email"> Email : {item.email}</span>
                <span className="phone"> Phone No : {item.phone}</span>
              </div>
              <h5> Address : </h5>
              <p> Street : {item.address.street}</p>
              <p> City : {item.address.city}</p>
              <p> Zipcode : {item.address.zipcode}</p>
              <h5> Company</h5>
              <p> Company Name : {item.company.name}</p>
              <p> Cathch Phrase :{item.company.catchPhrase}</p>

              <p> Website : {item.website}</p>
              <Button className="btn" onClick={() => showModal(true, item)}>
                {" "}
                Edit{" "}
              </Button>
              <Button
                className="btn"
                onClick={() => this.handleDelete(item.id)}
              >
                {" "}
                Delete{" "}
              </Button>
              {/* <Button  className="btn"onClick={()=>showModal2(true)}> Add </Button> */}
            </Col>
          ))}
        </Row>
        {/* Modal popup for editing. */}
        <Modal
          show={modalIsOpen}
          onHide={hideModal}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form encType="multipart/form-data" method="post" name="fileinfo">
              <br></br>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalInputType"
              >
                <Form.Label column="sm" lg={5}>
                  Name
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="text"
                    name="name"
                    size="sm"
                    value={this.state.name}
                    onChange={this.handlename}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCrop"
              >
                <Form.Label column="sm" lg={5}>
                  Email
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleemail}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label column="sm" lg={5}>
                  Phone No
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handlephone}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label column="sm" lg={5}>
                  City
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handlecity}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label column="sm" lg={5}>
                  street
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="street"
                    onChange={this.handlestreet}
                    value={this.state.street}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Zip Code
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="zip"
                    value={this.state.zipcode}
                    onChange={this.handlezip}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Company Name
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="company"
                    value={this.state.companyname}
                    onChange={this.handlecompany}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Cathch Phrase
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    value={this.state.catchh}
                    name="cath"
                    onChange={this.handlecatchh}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Website
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    value={this.state.website}
                    name="website"
                    onChange={this.handlewebsite}
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => this.saveChanges(this.state.id)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal popup for Additing New Contact. */}

        <Modal
          show={modalIsOpen2}
          onHide={hideModal2}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>ADD Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form encType="multipart/form-data" method="post" name="fileinfo">
              <br></br>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalInputType"
              >
                <Form.Label column="sm" lg={5}>
                  Name
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="text"
                    name="name"
                    size="sm"
                    value={this.state.name2}
                    onChange={this.handleOne}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCrop"
              >
                <Form.Label column="sm" lg={5}>
                  Email
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="email"
                    value={this.state.email2}
                    onChange={this.handleTwo}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label column="sm" lg={5}>
                  Phone No
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="phone"
                    value={this.state.phone2}
                    onChange={this.handleThree}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label column="sm" lg={5}>
                  City
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="city"
                    value={this.state.city2}
                    onChange={this.handle4}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label column="sm" lg={5}>
                  street
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="street"
                    onChange={this.handle5}
                    value={this.state.street2}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Zip Code
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="zip"
                    value={this.state.zipcode2}
                    onChange={this.handle6}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Company Name
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="company"
                    value={this.state.companyname2}
                    onChange={this.handle7}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Cathch Phrase
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    value={this.state.catchh2}
                    name="cath"
                    onChange={this.handle8}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalBrand"
              >
                <Form.Label
                  column="sm"
                  lg={5}
                  className="dvaraBrownText formWeight"
                >
                  Website
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    size="sm"
                    type="text"
                    value={this.state.website2}
                    name="website"
                    onChange={this.handle9}
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal2}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default Home;
