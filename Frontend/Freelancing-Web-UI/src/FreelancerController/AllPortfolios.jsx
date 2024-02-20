import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const AllPortfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const response = await axios.get('http://localhost:9091/freelancing/api/Portfolio/allPortfolio');
            setPortfolios(response.data);
        } catch (error) {
            console.error('Error fetching portfolios:', error);
        }
    };

    const handleEdit = (id) => {
        console.log('Edit clicked for portfolio ID:', id);
    };

    const handleDelete = async (id) => {
        setDeleteId(id);
        setShowConfirmation(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:9091/freelancing/api/Portfolio/deleteById/${deleteId}`);
            setShowConfirmation(false);
            fetchPortfolios(); // Refresh portfolios after deletion
        } catch (error) {
            console.error('Error deleting portfolio:', error);
        }
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Hourly Charges</th>
                        <th>Category Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolios.map((portfolio, index) => (
                        <tr key={portfolio.id}>
                            <td>{index + 1}</td>
                            <td>{portfolio.title}</td>
                            <td>{portfolio.description}</td>
                            <td>
                                <img src={portfolio.image} alt={portfolio.title} style={{ width: '100px', height: 'auto' }} />
                            </td>
                            <td>{portfolio.hourlyCharges}</td>
                            <td>{portfolio.category.title}</td>
                            <td>
                                <Button variant="dark" className="me-2" onClick={() => handleEdit(portfolio.id)}>Edit</Button>
                                <Button variant="dark" onClick={() => handleDelete(portfolio.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this portfolio?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmation}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AllPortfolios;