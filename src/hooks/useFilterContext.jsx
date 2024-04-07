import { createContext, useContext, useReducer } from "react";


const FilterContext = createContext({});

const initialState = {
    machines: [],
    status: [],
    startDate: '',
    endDate: '',
    filtersModalOpen: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MACHINES":
            if (action.payload) {
                if (state.machines.includes(action.payload)) {
                    const machinesAfterRemovingSelected = state.machines.filter(machine => machine != action.payload);
                    return { ...state, machines: [...machinesAfterRemovingSelected] };
                } else {
                    return { ...state, machines: [...state.machines, action.payload] };
                }
            }
        case "SELECT_ALL_MACHINES":
            if (action.payload) {
                if (state.machines.length >= 0) {
                    state.machines.length = 0;
                    return { ...state, machines: [...action.payload] }
                }
            } else {
                return { ...state, machines: [] }
            }
        case "SELECTED_STATUS":
            if (action.payload) {
                if (state.status.includes(action.payload)) {
                    const statusAfterRemovingSelected = state.status.filter(stat => stat != action.payload);
                    return { ...state, status: [...statusAfterRemovingSelected] };
                } else {
                    return { ...state, status: [...state.status, action.payload] };
                }
            }
        case "CLEAR_ALL_STATUS":
            return { ...state, status: [] }
        case "SET_START_DATE":
            return { ...state, startDate: action.payload };

        case "SET_END_DATE":
            return { ...state, endDate: action.payload };

        case "CLEAR_DATES":
            return { ...state, endDate: '', startDate: '' };

        case "SHOW_FILTERS_MODAL":
            return { ...state, filtersModalOpen: action.payload };

        case "CLEAR_ALL":
            return { ...initialState };
    }
}

export const FilterProvider = ({ children }) => {
    const [filters, dispatch] = useReducer(reducer, initialState);
    const value = {
        machines: filters.machines,
        status: filters.status,
        startDate: filters.startDate,
        endDate: filters.endDate,
        filtersModalOpen: filters.filtersModalOpen,


        toggleMachines: (payload) => { dispatch({ type: "TOGGLE_MACHINES", payload }) },
        selectAllMachines: (payload) => { dispatch({ type: "SELECT_ALL_MACHINES", payload }) },
        selectedStatus: (payload) => { dispatch({ type: "SELECTED_STATUS", payload }) },
        clearAllStatus: () => { dispatch({ type: "CLEAR_ALL_STATUS" }) },
        setStartDate: (payload) => { dispatch({ type: "SET_START_DATE", payload }) },
        setEndDate: (payload) => { dispatch({ type: "SET_END_DATE", payload }) },
        clearDates: () => { dispatch({ type: "CLEAR_DATES" }) },
        showFiltersModal: (payload) => { dispatch({ type: "SHOW_FILTERS_MODAL", payload }) },
        clearAll: () => { dispatch({ type: "CLEAR_ALL" }) },
    }
    return <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export default useFilterContext