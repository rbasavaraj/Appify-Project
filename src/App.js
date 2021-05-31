import './App.css';
import Button from './Components/Button';
import Textarea from './Components/Textarea';
import Textbox from './Components/Textbox';

function App() {
  var name = '';
  var date = '';
  var address = '';
  var title = 'Create Account';
  const processName = (obj) => {
    name = obj.target.value;
  };
  const processDate = (obj) => {
    date = obj.target.value;
  };
  const processAddress = (obj) => {
    address = obj.target.value;
  };
  const saveAccount = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Date', date);
    localStorage.setItem('Address', address);
    // console.log(localStorage.getItem('Name'));
    // console.log(localStorage.getItem('Date'));
    // console.log(localStorage.getItem('Address'));
    document.getElementById('name').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('address').value = "";
    //The Below code stores the Input Data in JSON format
    var oldItems = JSON.parse(localStorage.getItem('contactDetails')) || [];
    var newItem = {"Title": title};
    oldItems.push(newItem);
    var newItem1 = {"Name": localStorage.getItem('Name')};
    oldItems.push(newItem1);
    var newItem2 = {"Date of Birth": localStorage.getItem('Date')};
    oldItems.push(newItem2);
    var newItem3 = {"Address": localStorage.getItem('Address')};
    oldItems.push(newItem3);
    localStorage.setItem("contactDetails", JSON.stringify(oldItems));
    console.log(JSON.parse(localStorage.getItem("contactDetails")));
    localStorage.removeItem('contactDetails'); //to remove
  };
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4 col-sm-12'>
          <h2 className='text-center'>{title}</h2>
          <Textbox id='name' type='text' label='Name:' onChange={processName} />
          <Textbox id='dob' type='date' label='Date of Birth:' onChange={processDate} />
          <Textarea id='address' label='Address:' onChange={processAddress} />
          <br />
          <Button text='Save' onClick={saveAccount} />
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  );
}

export default App;
