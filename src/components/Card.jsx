import img from '../assets/gojo.jpg'
export default function Card({date, btnName, text, color}) {
    return (
        <div className="card">
           <p>{date}</p>
            <div style={{display:"flex",flexDirection:"row",gap:'15px',alignItems:'center'}}>
                <p className={color}>{btnName}</p>
                <img src={img} style={{width:'50px', height:'50px'}} />
                <p>Kevin Joe</p>
            </div>
            <p>{text}</p>
            <button >Download</button>
        </div>
    );
}