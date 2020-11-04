import logo from './logo.svg';
import './App.css';

var arrOfItems = ['apples', 'bananas', 'pears'];


function App() {  
  return (
    <div className="App">
      <h1>Grocery Store List</h1>
      <table> 
        <tr>
          <tc>Items</tc>
          <tc>Added to Cart</tc>
        </tr>
        {arrOfItems.map(item => 
          <tr>
            <tc>{item}</tc>
            <tc><input type="checkbox"></input></tc>
            <tc><button type="button">Remove</button></tc>
          </tr>
        )}
      </table>
      {AddItem()}
    </div>
  );
}

function AddItem() {
  return (
    <div>
      <label for="addItem">
      <button type="button" onClick={() => {
        arrOfItems.push(document.getElementById("addItem").value);
        console.log(arrOfItems);
        }} 
      >Add Item</button>
    </label>
    <input type="text" id="addItem"></input>
    </div>
  );
}

export default App;
