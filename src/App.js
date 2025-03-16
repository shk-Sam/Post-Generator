import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    greeting: "",
    message: "",
    image: null,
  });

  const previewRef = useRef(null);

  // Image Upload Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Download Function (JPG Format)
  const handleDownload = () => {
    html2canvas(previewRef.current, { backgroundColor: "#ffffff" }).then(
      (canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg", 1.0); // Convert to JPG
        link.download = "post.jpg";
        link.click();
      }
    );
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Section: Form */}
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header">
              <h3>Post Generator</h3>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    value={profile.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Greeting :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Greeting"
                    onChange={(e) =>
                      setProfile({ ...profile, greeting: e.target.value })
                    }
                    value={profile.greeting}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Message :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Message"
                    onChange={(e) =>
                      setProfile({ ...profile, message: e.target.value })
                    }
                    value={profile.message}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Image:</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

        {/* Right Section: Preview & Download */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Preview</h3>
            </div>
            <div className="card-body">
              <div ref={previewRef} className="preview" style={{ 
                padding: "20px", 
                textAlign: "center", 
                // background: "#ffffff", 
                border: "1px solid #ddd",
                width: "100%",
                // maxWidth: "400px",
                margin: "auto"
              }}>
                {profile.image && (
                  <img
                    src={profile.image}
                    alt="Uploaded"
                    style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                  />
                )}
                <h3>{profile.name || "Hello"}</h3>
                <p>{profile.greeting || "As salam alaikum"}</p>
                <p>{profile.message || "Download your post by the button below"}</p>
              </div>
              <Button style={{ marginTop: "10px" }} onClick={handleDownload}>
                Download as JPG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
