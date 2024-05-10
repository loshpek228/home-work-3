
import data from '../data/db.json'
import { useState } from 'react';
import Colors from '../components/Colors';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Foooter';

function HomePage() {
    const [query, setQuery] = useState('')
    const [state, setState] = useState('hello')
    console.log(state);
    const [serchRes, setSerchRes] = useState(data)
    const [strana, setStrana] = useState('')

    const handleInputChange = (event) => {
        setQuery(event.target.value)
        setSerchRes(data.filter(item => item.title.includes(event.target.value)))
    }
    const handleInputStrana = (event) => {
        setStrana(event.target.value)
        setSerchRes(data.filter(item => item.country.includes(event.target.value)))
    }

    function HandleDortByAck() {
        return setSerchRes([...serchRes].sort((a, b) => a.price - b.price))
    }

    function HandleDortByDesc() {
        const sortedData = [...serchRes].sort((a, b) => b.price - a.price)
        return setSerchRes(sortedData)
    }
    return (
        <div className="App">
            <Header />
            <Colors />
            <input type='text' value={query} onChange={handleInputChange} />
            <input type='text' value={strana} onChange={handleInputStrana} />

            <div>
                {/* {data.map((item) => <button>{item.country}</button>)} */}
                <select>

                    <option>brazil</option>
                    <option>russia</option>
                    <option>japan</option>
                    <option>malta</option>

                </select>
            </div>
            <div>
                <button onClick={HandleDortByAck}>sort asc</button>
                <button onClick={HandleDortByDesc}>sort desc</button>
                <button onClick={() => setSerchRes(data)}>clear</button>
                <button onClick={() => setState('Jasurbek')}>{state}</button>
            </div>

            <div className='container'>
                {
                    serchRes.map((item) => <Card key={item.id} title={item.title} image={item.image} country={item.country} price={item.price} />)
                }
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
