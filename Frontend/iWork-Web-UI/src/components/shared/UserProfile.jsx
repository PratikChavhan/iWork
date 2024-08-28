// import React, { useState, useEffect } from "react";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import { useSelector } from "react-redux";
// import EditIcon from "@mui/icons-material/Edit";
// import axios from "axios";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import storage from "../../firebase/firebase";
// import base from "../../assests/dummyUser.png";
// import Grid from "@mui/material/Grid";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import OutlinedInput from "@mui/material/OutlinedInput";

// const MyProfile = () => {
//   const [editMode, setEditMode] = useState(false);
//   const userId = useSelector((store) => store.auth.userId);
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     mobileNumber: "",
//     city: "",
//     country: "India", // Default country is set to India
//     image: "",
//     about: "",
//   });

//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:9091/freelancing/api/users/userById/${userId}`)
//       .then((res) => {
//         setUser(res.data);
//         setImagePreview(res.data.image);
//         fetchCities("India");
//       });
//   }, [userId]);

//   const handleEditClick = () => {
//     setEditMode(!editMode);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);

//       setImage(file);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//     if (name === "country") {
//       fetchCities(value);
//     }
//   };

//   const renderProfileField = (label, value, id) => {
//     const editableFields = ["name", "city", "country", "about"];

//     return (
//       <div key={id} style={{ marginBottom: "16px" }}>
//         <Typography variant="h6" gutterBottom>
//           {label}:
//         </Typography>
//         {editMode && editableFields.includes(id) ? (
//           <TextField
//             id={id}
//             fullWidth
//             variant="outlined"
//             name={id}
//             value={user[id] || ""}
//             label={`Enter ${label.toLowerCase()}`}
//             onChange={handleInputChange}
//             select={id === "country"}
//           >
//             {id === "country"
//               ? ["India"].map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))
//               : null}
//           </TextField>
//         ) : (
//           <Typography variant="body1">{value || "N/A"}</Typography>
//         )}
//       </div>
//     );
//   };

//   const fetchCities = (country) => {
//     let data = [
//       "Pune",
//       "Mumbai",
//       "Delhi",
//       "Bangalore",
//       "Kolkata",
//       "Chennai",
//       "Nagpur",
//     ];
//     setCities(data);
//   };

//   const handleSaveChanges = async () => {
//     try {
//       if (image) {
//         const metadata = {
//           contentType: image.type,
//         };
//         const storageRef = ref(
//           storage,
//           `images/${userId}_${Date.now()}_${image.name}`
//         );
//         const uploadTask = uploadBytesResumable(storageRef, image, metadata);
//         await uploadTask;
//         const downloadURL = await getDownloadURL(storageRef);

//         await axios.put(
//           `http://localhost:9091/freelancing/api/users/updateUserById/${userId}`,
//           {
//             ...user,
//             image: downloadURL,
//           }
//         );
//       }

//       setEditMode(false);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <Container>
//       <div
//         style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
//       >
//         {editMode ? (
//           <Avatar sx={{ width: 120, height: 120, marginRight: "16px" }}>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               style={{ width: "100%", height: "100%", opacity: 0 }}
//             />
//           </Avatar>
//         ) : (
//           <Avatar
//             alt="User Avatar"
//             src={imagePreview || base}
//             sx={{ width: 120, height: 120, marginRight: "16px" }}
//           />
//         )}
//         <div>
//           <Typography variant="h4" gutterBottom>
//             {user.name}
//           </Typography>
//           {editMode && (
//             <Typography variant="body2" gutterBottom>
//               Upload a different photo...
//             </Typography>
//           )}
//         </div>
//       </div>

//       <div>
//         {renderProfileField("Name", user.name, "name")}
//         {renderProfileField("Email", user.email, "email")}
//         {renderProfileField("Mobile Number", user.mobileNumber, "mobileNumber")}
//         {editMode && (
//           <Grid item xs={12} sm={6}>
//             <FormControl sx={{ m: 1, minWidth: 200 }}>
//               <InputLabel id="demo-multiple-chip-label">City</InputLabel>
//               <Select
//                 labelId="demo-multiple-chip-label"
//                 id="demo-multiple-chip-label"
//                 name="city"
//                 input={<OutlinedInput id="select-multiple-chip" label="City" />}
//                 style={{ minWidth: 120 }}
//                 label="City"
//                 value={user.city}
//                 onChange={handleInputChange}
//               >
//                 {cities.map((city) => (
//                   <MenuItem key={city} value={city}>
//                     {city}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         )}
//         {renderProfileField("Country", user.country, "country")}
//         {renderProfileField("About", user.about, "about")}
//       </div>

//       <div style={{ marginTop: "16px" }}>
//         {editMode ? (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSaveChanges}
//           >
//             Save Changes
//           </Button>
//         ) : (
//           <Button
//             variant="outlined"
//             onClick={handleEditClick}
//             startIcon={<EditIcon />}
//           >
//             Edit Profile
//           </Button>
//         )}
//       </div>
//     </Container>
//   );
// };
// export default MyProfile;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import storage from "../../firebase/firebase";
// import base from "../../assests/dummyUser.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import EditIcon from "@mui/icons-material/Edit";

// const MyProfile = () => {
//   const [editMode, setEditMode] = useState(false);
//   const userId = useSelector((store) => store.auth.userId);
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     mobileNumber: "",
//     city: "",
//     country: "India", // Default country is set to India
//     image: "",
//     about: "",
//   });

//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:9091/freelancing/api/users/userById/${userId}`)
//       .then((res) => {
//         setUser(res.data);
//         setImagePreview(res.data.image);
//         fetchCities("India");
//       });
//   }, [userId]);

//   const handleEditClick = () => {
//     setEditMode(!editMode);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);

//       setImage(file);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//     if (name === "country") {
//       fetchCities(value);
//     }
//   };

//   const fetchCities = (country) => {
//     let data = [
//       "Pune",
//       "Mumbai",
//       "Delhi",
//       "Bangalore",
//       "Kolkata",
//       "Chennai",
//       "Nagpur",
//     ];
//     setCities(data);
//   };

//   const handleSaveChanges = async () => {
//     try {
//       if (image) {
//         const metadata = {
//           contentType: image.type,
//         };
//         const storageRef = ref(
//           storage,
//           `images/${userId}_${Date.now()}_${image.name}`
//         );
//         const uploadTask = uploadBytesResumable(storageRef, image, metadata);
//         await uploadTask;
//         const downloadURL = await getDownloadURL(storageRef);

//         await axios.put(
//           `http://localhost:9091/freelancing/api/users/updateUserById/${userId}`,
//           {
//             ...user,
//             image: downloadURL,
//           }
//         );
//       } else {
//         await axios.put(
//           `http://localhost:9091/freelancing/api/users/updateUserById/${userId}`,
//           user
//         );
//       }

//       setEditMode(false);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
// <div className="container">
//   <div className="row align-items-center mb-4">
//     <div className="col-auto">
//       {editMode ? (
//         <div className="avatar">
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="form-control"
//           />
//         </div>
//       ) : (
//         <img
//           alt="User Avatar"
//           src={imagePreview || base}
//           className="rounded-circle"
//           style={{ width: 120, height: 120 }}
//         />
//       )}
//     </div>
//     <div className="col">
//       <h4>{user.name}</h4>
//       {editMode && <p>Upload a different photo...</p>}
//     </div>
//   </div>

//   <form>
//     <div className="mb-3">
//       <label for="name" className="form-label">
//         Name
//       </label>
//       {editMode ? (
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           name="name"
//           value={user.name}
//           onChange={handleInputChange}
//           placeholder="Enter name"
//         />
//       ) : (
//         <p>{user.name || "N/A"}</p>
//       )}
//     </div>

//     <div className="mb-3">
//       <label for="email" className="form-label">
//         Email
//       </label>
//       <p>{user.email || "N/A"}</p>
//     </div>

//     <div className="mb-3">
//       <label for="mobileNumber" className="form-label">
//         Mobile Number
//       </label>
//       {editMode ? (
//         <input
//           type="text"
//           className="form-control"
//           id="mobileNumber"
//           name="mobileNumber"
//           value={user.mobileNumber}
//           onChange={handleInputChange}
//           placeholder="Enter mobile number"
//         />
//       ) : (
//         <p>{user.mobileNumber || "N/A"}</p>
//       )}
//     </div>

//     {editMode && (
//       <div className="mb-3">
//         <label for="city" className="form-label">
//           City
//         </label>
//         <select
//           className="form-select"
//           id="city"
//           name="city"
//           value={user.city}
//           onChange={handleInputChange}
//         >
//           {cities.map((city) => (
//             <option key={city} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//       </div>
//     )}

//     <div className="mb-3">
//       <label for="country" className="form-label">
//         Country
//       </label>
//       {editMode ? (
//         <select
//           className="form-select"
//           id="country"
//           name="country"
//           value={user.country}
//           onChange={handleInputChange}
//         >
//           <option value="India">India</option>
//         </select>
//       ) : (
//         <p>{user.country || "N/A"}</p>
//       )}
//     </div>

//     <div className="mb-3">
//       <label for="about" className="form-label">
//         About
//       </label>
//       {editMode ? (
//         <textarea
//           className="form-control"
//           id="about"
//           name="about"
//           value={user.about}
//           onChange={handleInputChange}
//           placeholder="Enter about"
//         />
//       ) : (
//         <p>{user.about || "N/A"}</p>
//       )}
//     </div>

//     <div className="mt-4">
//       {editMode ? (
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleSaveChanges}
//         >
//           Save Changes
//         </button>
//       ) : (
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={handleEditClick}
//         >
//           <EditIcon /> Edit Profile
//         </button>
//       )}
//     </div>
//   </form>
// </div>
//   );
// };

// export default MyProfile;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/firebase";
import base from "../../assests/dummyUser.png";
import "../css/UserProfile.css";
import { authActions } from "../../store/auth-slice";

const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const userId = useSelector((store) => store.auth.userId);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    country: "India",
    image: "",
    about: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [cities, setCities] = useState([]);
  const imageInputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9091/freelancing/api/users/userById/${userId}`)
      .then((res) => {
        setUser(res.data);
        setImagePreview(res.data.image);
        fetchCities("India");
      });
  }, [userId]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // file type
    const validImageTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validImageTypes.includes(file.type)) {
      alert("Please select a valid image format (jpg, jpeg, png)");
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
      return;
    }
    // file size
    if (file.size > 5000000) {
      alert("File size should be less than 5 MB");
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
      return;
    }
    // image update
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
    if (name === "country") {
      fetchCities(value);
    }
  };

  const fetchCities = (country) => {
    let data = [
      "Pune",
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Kolkata",
      "Chennai",
      "Nagpur",
    ];
    setCities(data);
  };

  const handleSaveChanges = async () => {
    try {
      if (image) {
        const metadata = {
          contentType: image.type,
        };
        const storageRef = ref(
          storage,
          `images/${userId}_${Date.now()}_${image.name}`
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
        dispatch(authActions.updateUserImage(downloadURL));
      } else {
        await axios.put(
          `http://localhost:9091/freelancing/api/users/updateUserById/${userId}`,
          user
        );
      }
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const renderProfileField = (label, value, id) => {
    const editableFields = ["name", "city", "country", "about"];
    return (
      <div key={id} className="mb-4">
        <label
          className="small mb-2"
          for={id}
          style={{
            fontWeight: "600",
            background: "#00000095",
            color: "#ffffff",
            padding: "0px 5px",
          }}
        >
          {label}:
        </label>
        {editMode && editableFields.includes(id) ? (
          id === "country" ? (
            <select
              id={id}
              name={id}
              className="form-control"
              value={user[id]}
              onChange={handleInputChange}
            >
              <option value="India">India</option>
            </select>
          ) : id === "city" ? (
            <select
              id={id}
              name={id}
              className="form-control"
              value={user[id]}
              onChange={handleInputChange}
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          ) : id === "name" ? (
            <input
              type="text"
              className="form-control"
              id={id}
              name={id}
              value={value}
              onChange={handleInputChange}
            />
          ) : id === "about" ? (
            <textarea
              type="text"
              className="form-control"
              id={id}
              name={id}
              value={value}
              onChange={handleInputChange}
              style={{ height: "100px" }}
            />
          ) : (
            <p></p>
          )
        ) : (
          <p>{value || "N/A"}</p>
        )}
      </div>
    );
  };

  return (
    <div className="container mt-3" style={{ padding: "30px" }}>
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              {editMode ? (
                <div>
                  <img
                    className="rounded-circle mb-2"
                    src={imagePreview || base}
                    alt="Profile"
                    style={{ width: "240px", height: "240px" }}
                  />
                  <div style={{ display: "block", margin: "20px" }}>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      ref={imageInputRef}
                    />
                    <p
                      className="mb-4"
                      style={{ fontSize: "12px", color: "red" }}
                    >
                      JPG/JPEG or PNG no larger than 5 MB
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  className="rounded-circle mb-2"
                  src={imagePreview || base}
                  alt="Profile"
                  style={{ width: "240px", height: "240px" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Profile Details</div>
            <div className="card-body">
              <form>
                {renderProfileField("Name", user.name, "name")}
                {renderProfileField("Email", user.email, "email")}
                {renderProfileField(
                  "Mobile Number",
                  user.mobileNumber,
                  "mobileNumber"
                )}
                {renderProfileField("City", user.city, "city")}
                {renderProfileField("Country", user.country, "country")}
                {renderProfileField("About", user.about, "about")}
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={editMode ? handleSaveChanges : handleEditClick}
                >
                  {editMode ? "Save Changes" : "Edit"}
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={handleCancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
