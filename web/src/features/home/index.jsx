import InputSearch from "./components/InputSearch";
import CatgeoriesCard from "./components/Categories";
import SubcategoryCarousel from "./components/SubcategoryCarousel";
import bgImage from "../../../svg/bg1.jpg";
import ico from "./../../../svg/ico.svg";
import Autocomplete from "../../components/Autocomplete";
import { useEffect, useState } from "react";

export default function Home() {
	const [input, setInput] = useState("");

	const onchange = (value) => {
		console.log(value);
		setInput(value.toLowerCase());
	};
	const data = [
		{ value: "Juan", id: 1 },
		{ value: "María", id: 2 },
		{ value: "Luis", id: 3 },
		{ value: "Ana", id: 4 },
		{ value: "Pedro", id: 5 },
		{ value: "Sofía", id: 6 },
		{ value: "Daniel", id: 7 },
		{ value: "Laura", id: 8 },
		{ value: "Javier", id: 9 },
		{ value: "Isabel", id: 10 },
	];

	const onSelected = (value) => {
		console.log(value);
	};
	const data1 = data.filter((op) => op.value.toLowerCase().includes(input));

	return (
		<div className="w-[900px] pb-52">
			<Autocomplete onChange={onchange} options={data1} onSelected={onSelected} />
		</div>
	);
}

// export default function Home() {
//   //data del carrusels
//   const subcategories = [
//     {
//       id: "1",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "Europe Street beat",
//       description: "www.instagram.com",
//     },
//     {
//       id: "2",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "Cualquier cosa",
//       description: "henrym.718@hotmail.com",
//     },
//     {
//       id: "3",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "otra situacion de empleabilidad",
//       description: "www.google.com",
//     },
//     {
//       id: "4",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "Feria de esoania",
//       description: "idealistga.com",
//     },
//     {
//       id: "5",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "Europe Street beat",
//       description: "www.instagram.com",
//     },
//     {
//       id: "6",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "Cualquier cosa",
//       description: "henrym.718@hotmail.com",
//     },
//     {
//       id: "7",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "otra situacion de empleabilidad",
//       description: "www.google.com",
//     },
//     {
//       id: "8",
//       url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//       title: "Feria de esoania",
//       description: "idealistga.com",
//     },
//   ];

//   const onchange = (value)=>{
//     console.log(value)
//   }
//   return (
//     <div className="flex flex-col gap-[40px]">
//       <div className="relative h-[500px]">
//         <img
//           src={bgImage}
//           alt="background"
//           className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//         />
//         <div className=" flex flex-col absolute top-0 left-0 w-full h-full justify-center items-center">
//           <h2 className="text-6xl text-white text-center mb-5 ">
//             Encuentra el servicio <br />
//              freelance adecuado de <br />
//             inmediato
//           </h2>
//           <InputSearch />
//         </div>
//       </div>
//           <Autocomplete
//           onChange={onchange}
//           />
//       <CatgeoriesCard categories={categories} />

//       <h1 className="text-5xl text-gray-700">Servicios populares</h1>
//       <div>
//         <SubcategoryCarousel subcategories={subcategories} />
//       </div>
//     </div>
//   );
// }

// const categories = [
//   {
//     id: 1,
//     name: "categoria 1",
//     ico: ico,
//   },
//   {
//     id: 2,
//     name: "categoria 2",
//     ico: ico,
//   },
//   {
//     id: 3,
//     name: "categoria 3",
//     ico: ico,
//   },
//   {
//     id: 4,
//     name: "categoria 4",
//     ico: ico,
//   },
//   {
//     id: 5,
//     name: "categoria 4",
//     ico: ico,
//   },
//   {
//     id: 6,
//     name: "categoria 4",
//     ico: ico,
//   },
//   {
//     id: 7,
//     name: "categoria 4",
//     ico: ico,
//   },
//   {
//     id: 8,
//     name: "categoria 4",
//     ico: ico,
//   },
// ];
