import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialEmployees = [
  {
    id: "e1",
    nomEmp: "Lamrabet",
    prenomEmp: "Oussama",
    poste: "Director",
    departement: {
      codeDep: "1",
      nomDep: "RH",
    },
  },
  {
    id: "e2",
    nomEmp: "Fares",
    prenomEmp: "Amine",
    poste: "Director",
    departement: {
      codeDep: "2",
      nomDep: "Informatique",
    },
  },
  {
    id: "e3",
    nomEmp: "Achibi",
    prenomEmp: "Yassine",
    poste: "Maître",
    departement: {
      codeDep: "1",
      nomDep: "Finances",
    },
  },
  {
    id: "e4",
    nomEmp: "Abouzakaria",
    prenomEmp: "Yassmine",
    poste: "Maitresse",
    departement: {
      codeDep: "4",
      nomDep: "Finances",
    },
  },
  {
    id: "e5",
    nomEmp: "Bentaleb",
    prenomEmp: "Hajar",
    poste: "Director",
    departement: {
      codeDep: "1",
      nomDep: "Logistique",
    },
  },
  {
    id: "e6",
    nomEmp: "Abaakil",
    prenomEmp: "Salma",
    poste: "Director",
    departement: {
      codeDep: "1",
      nomDep: "Finances",
    },
  },
];

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialEmployees);
    }, 1000);
  });
});

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 500);
  });
});

export const updateEmployee = createAsyncThunk('employees/updateEmployee', async (employee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employee);
    }, 500);
  });
});

export const addEmployee = createAsyncThunk('employees/addEmployee', async (newEmployee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newEmployee);
    }, 500);
  });
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(employee => employee.id !== action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(employee => employee.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      });
  },
});

export default employeesSlice.reducer;
