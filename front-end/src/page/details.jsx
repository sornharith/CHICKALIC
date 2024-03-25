import rum_break_image from '../image/image 30.png';
import first from '../image/Group 48.png';
import gin_break_image from '../image/gin_break-picture.png';
import useFetch from './useFetch';

const Details = () => {

    // const [products, setProduct] = useState(null);

    // useEffect(() =>{
    //     fetch('http://localhost:8000/products')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data =>{
    //         setProduct(data);
    //     })
    // });

    const {data: products,isPending, error} = useFetch('http://localhost:8000/products');


    return ( 
        <div className="detail">
            <img src={rum_break_image} />
            <div className="rum-details block h-116 bg-[#54343B]">
                <p className='mb-14 pt-5 font-[kurale] text-white text-3xl text-center underline underline-offset-8'>RUM</p>
                <div className='rum-product flex flex-row gap-10 mx-10'>
                {isPending && <div>Loading...</div> }
                {error && <div>{error}</div>}
                {products && products.map((product)=> (
                    <div key={product.id} className="box flex flex-col item-center max-w-64 border-2 " >
                        <a href='/'>
                            <img className='product-image' src={first} alt="" />
                            <p className='product-name pt-2 mb-3 font-normal font-[Libre] text-white'>{product.name}</p>
                        </a>
                    </div>   
                ))}
                </div>
            </div>
            <img src={gin_break_image} />
        </div>
     );
}
 
export default Details;