import '#styles/global.css';

const Add = ()=> {
    
    return (
        <div className='absolute bottom-0 right-0
                        p-2 rounded-full bg-green-600/70 hover:bg-green-600/85 shadow-md shadow-green-700/80'
                        onClick={()=> alert('Funcionalidad no disponible')}>
            <img src="Add.png" alt="" className='size-8 opacity-60' />
        </div>
    );
}

export default Add;