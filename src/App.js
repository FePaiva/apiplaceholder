import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import User from './User';



function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
 

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([])
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState('true')

  useEffect(() => { 
      const fetchItems = async () => {
        try {
            const response = await fetch(`${API_URL}${reqType}`);
            if (!response.ok) throw Error('I could not get the users for you. Reload.')
            const data = await response.json();
            console.log(data);
            setItems(data);
            setFetchError(null);
        } catch (error) {
            console.log(error.message)
        } finally {
          setIsLoading(false);
        }
      }
      fetchItems()
  }, [reqType])

  return (
    <div className="App">
        <Form 
            reqType={reqType}
            setReqType={setReqType}
        />
        <List items={items} />
    </div>
  );
}

export default App;
