import { useReducer } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { loading: false, error: null, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "DELETE_DATA":
      return {
        loading: false,
        error: null,
        data: state.data.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case 'ADD_DATA':
        return {loading: false, error: null, data: [...state.data, action.payload]}
  }
}

const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      console.log(data);
    } catch (err) {
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: err.message });
    }
  };

  const deleteData = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
  };

  const addData = (newData) => {
    dispatch({type: 'ADD_DATA', payload: newData})
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error:{state.error}</p>}
      <ul>
        {state.data.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => deleteData(item.id)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addData({
            id: Date.now(),
            title: e.target.title.value
        })
      }}>
        <input type="text" name="title" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UseReducerEx;
