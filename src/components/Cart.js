import data from '../data/db.json'
import Card from './Card';
function ModalCart({ setOpen }) {

    return (
        <div onClick={() => setOpen(false)} className="mask">
            <div className="modal">
                {data.slice(0, 12).map((item, index) => <div onClick={() => setOpen(true)} className='cardCart'>
                    <img src={item.image} />
                    <h1>{item.title}</h1>
                    <button>delete</button>
                </div>)}
            </div>
        </div>


    )
}

export default ModalCart;