import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

function App() {
  const [profile, setProfile] = useState({ name: "", greeting: "", message: "" });

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header">
              <h3>Post Generator</h3>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Enter Name :</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Name"
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })} 
                    value={profile.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGreeting">
                  <Form.Label>Enter Greeting :</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Greeting"
                    onChange={(e) => setProfile({ ...profile, greeting: e.target.value })} 
                    value={profile.greeting}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Enter Message :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Message"
                    onChange={(e) => setProfile({ ...profile, message: e.target.value })} 
                    value={profile.message}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="card">
            <div className="card-header">
              <h3>Preview</h3>
            </div>
            <div className="card-body">
              <div className='preview'>
                <h3>{profile.name || "Hello"}</h3><br/>
                <p>{profile.greeting || "As salam alaikum"}</p><br/>
                <p>{profile.message || "Download your post by the button below"}</p><br/>
              </div>
              <Button style={{ marginTop: "3px" }}>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
