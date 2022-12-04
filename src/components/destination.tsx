import React,{useState} from 'react';
import './../destination.css';
import CloseIcon from '@mui/icons-material/Close';
import img1 from './../img/img1.jpg';
import img2 from './../img/img2.jpg';
import img3 from './../img/img3.jpg';
import img4 from './../img/img4.jpg';
import img5 from './../img/img5.jpg';

const Destination =() =>{
  let data=[
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
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