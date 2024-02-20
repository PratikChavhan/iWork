
import React, { useState } from 'react';
import ViewAllCategory from './ViewAllCategory';
import ViewAllUser from './ViewAllUser'; 
const AdminLandingPage = () => {

    const [showAllUsers, setShowAllUsers] = useState(false);
    const [showAllCategory, setShowAllCategory] = useState(false);
    const handleViewAllCategory = () => {
        setShowAllCategory(true);
    };
    
    const handleAddCategory = () => {
       
    };
    const handleViewUsers = () => {
        setShowAllUsers(true);
    };

    const handleBack = () => {
       window.history.back();
    };

    const handleLogout = () => {
        
    };

    return (
        <div className="container mt-4">
            <h2>Welcome Admin</h2>
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary mb-2" onClick={handleBack}>Back</button>
                <div>
                    <button className="btn btn-danger mb-2" onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className="btn-group-vertical">
                <button className="btn btn-primary mb-2" onClick={handleAddCategory}>Add New Category</button>
                <button className="btn btn-primary mb-2" onClick={handleViewUsers}>View Users</button>
                <button className="btn btn-primary mb-2" onClick={handleViewAllCategory}>View All Category</button>
            </div>
            {showAllUsers && <ViewAllUser />}
            {showAllCategory && <ViewAllCategory />}

        </div>
    );
};





export default AdminLandingPage;
