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
        <Customer
            id={customers[0].id}
            image={customers[0].image}
            name={customers[0].name}
            birthday={customers[0].birthday}
            gender={customers[0].gender}
            job={customers[0].job}
        />
        <Customer
            id={customers[1].id}
            image={customers[1].image}
            name={customers[1].name}
            birthday={customers[1].birthday}
            gender={customers[1].gender}
            job={customers[1].job}
        />
        <Customer
            id={customers[2].id}
            image={customers[2].image}
            name={customers[2].name}
            birthday={customers[2].birthday}
            gender={customers[2].gender}
            job={customers[2].job}
        />
      </div>
  );
}

export default App;
