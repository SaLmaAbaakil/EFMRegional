import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 

function Composant3() {
  const employees = useSelector((state) => state.employees.employees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleSearch = () => {
    const result = employees.filter(employee =>
      employee.departement.nomDep.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEmployees(result);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Recherche par Département</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Entrez le nom du département"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="text-center mt-2">
          <button className="btn btn3" onClick={handleSearch}>
            Rechercher
          </button>
        </div>
      </div>

      {filteredEmployees.length > 0 ? (
        <ul className="list-group mt-3">
          {filteredEmployees.map((employee) => (
            <li key={employee.id} className="list-group-item">
              <strong>Nom :</strong> {employee.nomEmp} {employee.prenomEmp}<br />
              <strong>Poste :</strong> {employee.poste}<br />
              <strong>Département :</strong> {employee.departement.nomDep}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 text-center">
          {searchTerm && <p>Aucun employé trouvé pour le département : <strong>{searchTerm}</strong>.</p>}
        </div>
      )}
    </div>
  );
}

export default Composant3;
