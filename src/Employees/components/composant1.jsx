import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee, updateEmployee, addEmployee } from '../store/employeesSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 

function Composant1() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const loading = useSelector((state) => state.employees.loading);
  const error = useSelector((state) => state.employees.error);

  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    nomEmp: '',
    prenomEmp: '',
    poste: '',
    departement: {
      codeDep: '',
      nomDep: '',
    },
  });

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEditClick = (employee) => {
    setNewEmployee(employee);
    setIsEditing(true);
    setShowForm(true); 
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    if (isEditing) {
      dispatch(updateEmployee(newEmployee));
    } else {
      dispatch(addEmployee({ ...newEmployee, id: `e${employees.length + 1}` }));
    }
    resetForm();
  };

  const resetForm = () => {
    setNewEmployee({
      id: '',
      nomEmp: '',
      prenomEmp: '',
      poste: '',
      departement: {
        codeDep: '',
        nomDep: '',
      },
    });
    setIsEditing(false);
    setShowForm(false); 
  };

  const handleAddNewEmployee = () => {
    resetForm();
    setShowForm(true); 
  };

  if (loading) {
    return <div>Chargement des employés...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Liste des employés</h2>

      <div className="text-center mb-3">
        <button className="btn btn4" onClick={handleAddNewEmployee}>
          Ajouter un nouvel employé
        </button>
      </div>

      {showForm && (
        <div className="mt-4">
          <h3>{isEditing ? 'Modifier l\'employé' : 'Ajouter un nouvel employé'}</h3>
          <form>
            <div className="mb-3">
              <label>Nom</label>
              <input
                type="text"
                className="form-control"
                name="nomEmp"
                value={newEmployee.nomEmp}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Prénom</label>
              <input
                type="text"
                className="form-control"
                name="prenomEmp"
                value={newEmployee.prenomEmp}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Poste</label>
              <input
                type="text"
                className="form-control"
                name="poste"
                value={newEmployee.poste}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Département</label>
              <input
                type="text"
                className="form-control"
                name="nomDep"
                value={newEmployee.departement.nomDep}
                onChange={(e) => handleChange({
                  target: {
                    name: 'departement',
                    value: { ...newEmployee.departement, nomDep: e.target.value },
                  },
                })}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSaveClick}>
              {isEditing ? 'Enregistrer' : 'Ajouter'}
            </button>
            <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>
              Annuler
            </button>
          </form>
        </div>
      )}

      <div className="mt-4">
        {employees.length > 0 ? (
          <table className="table table-bordered table-hover table-stripped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Poste</th>
                <th>Département</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.nomEmp}</td>
                  <td>{employee.prenomEmp}</td>
                  <td>{employee.poste}</td>
                  <td>{employee.departement.nomDep}</td>
                  <td>
                    <button className="btn btn1 me-2" onClick={() => handleEditClick(employee)}>Modifier</button>
                    <button className="btn btn2" onClick={() => handleDeleteClick(employee.id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Aucun employé trouvé.</div>
        )}
      </div>
    </div>
  );
}

export default Composant1;
