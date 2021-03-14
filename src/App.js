import './App.css';
import Customer from './components/Customer';

const customers = [
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '유승리',
    'birthday': '990826',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '유승은',
    'birthday': '040827',
    'gender': '여자',
    'job': '고등학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '류경주',
    'birthday': '721016',
    'gender': '여자',
    'job': '회사원'
  }
  ]

function App() {
  return (
      <div>
          {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
      </div>
  );
}

export default App;
