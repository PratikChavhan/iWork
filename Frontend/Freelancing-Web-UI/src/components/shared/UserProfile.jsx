import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/firebase";

const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const userId = useSelector((store) => store.auth.userId);
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    country: "",
    image: "",
    about: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9091/freelancing/api/users/userById/${userId}`)
      .then((res) => {
        setUser(res.data);
        setImagePreview(res.data.image);
      });
  }, [userId]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      setImage(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const renderProfileField = (label, value, id) => {
    return (
      <div key={id} style={{ marginBottom: "16px" }}>
        <Typography variant="h6" gutterBottom>
          {label}:
        </Typography>
        {editMode ? (
          <TextField
            id={id}
            fullWidth
            variant="outlined"
            name={id}
            value={user[id] || ""}
            label={`Enter ${label.toLowerCase()}`}
            onChange={handleInputChange}
          />
        ) : (
          <Typography variant="body1">{value || "N/A"}</Typography>
        )}
      </div>
    );
  };

  const handleSaveChanges = async () => {
    try {
      if (image) {
        const metadata = {
          contentType: image.type,
        };
        const storageRef = ref(
          storage,
          `images / ${userId}_${Date.now()}_${image.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        await uploadTask;
        const downloadURL = await getDownloadURL(storageRef);

        await axios.put(
          `http://localhost:9091/freelancing/api/users/updateUserById/${userId}`,
          {
            ...user,
            image: downloadURL,
          }
        );
      }

      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Container>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
      >
        {editMode ? (
          <Avatar sx={{ width: 120, height: 120, marginRight: "16px" }}>
            <input
              type="file"
              onChange={handleImageChange}
              style={{ width: "100%", height: "100%", opacity: 0 }}
            />
          </Avatar>
        ) : (
          <Avatar
            alt="User Avatar"
            src={
              imagePreview ||
              "https://bootdey.com/img/Content/avatar/avatar7.png"
            }
            sx={{ width: 120, height: 120, marginRight: "16px" }}
          />
        )}
        <div>
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
          {editMode && (
            <Typography variant="body2" gutterBottom>
              Upload a different photo...
            </Typography>
          )}
        </div>
      </div>

      <div>
        {renderProfileField("Name", user.name, "name")}
        {renderProfileField("Email", user.email, "email")}
        {renderProfileField("Mobile Number", user.mobileNumber, "mobileNumber")}
        {renderProfileField("City", user.city, "city")}
        {renderProfileField("Country", user.country, "country")}
        {renderProfileField("About", user.about, "about")}
      </div>

      <div style={{ marginTop: "16px" }}>
        {editMode ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={handleEditClick}
            startIcon={<EditIcon />}
          >
            Edit Profile
          </Button>
        )}
      </div>
    </Container>
  );
};

export default MyProfile;
