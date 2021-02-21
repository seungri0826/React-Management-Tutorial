import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '유승리',
  'birthday': '990826',
  'gender': '여자',
  'job': '대학생'
}
function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
