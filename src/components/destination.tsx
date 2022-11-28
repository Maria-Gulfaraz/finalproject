import React,{useState} from 'react';
import './destination.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';


const Destination =() =>{
  let data=[
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
  ]
  const [model,setmodel]= useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');
  
  const getImg=(imgSrc:any) =>{
    setTempimgSrc(imgSrc);
    setmodel(true);
  }
  return(
    <>
    <div className ={model? "model open" : "model"}>
    <img  src= {tempimgSrc} alt=""/>
    <CloseIcon onClick ={ ()=> setmodel(false)}/>
    </div> 
 <div className="destination">
  {data.map((item, index)=>{
    return(
<div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}> 
<img  src={item.imgSrc}  alt="" style={{width:'100%'}} />
</div>
    )

  })}


 </div>
    </>)
}


export default Destination