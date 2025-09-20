
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchcategoriesById } from '../Slice/categorySlice';
import { Navbar } from '@material-tailwind/react';
import Footer from './Footer';
import {formatPriceUSD} from './currencyFormatter';

const CategoryProducts = () => {
   const { categoryId } = useParams();
  const dispatch = useDispatch();

  const {categoriesId: category,
    categoryLoding,
    categoryError} = useSelector( state => state.categories);


 useEffect(() => {
  if (categoryId) {
    dispatch(fetchcategoriesById(categoryId));
  }
}, [dispatch, categoryId]);

  

  if (categoryLoding) return <p className="text-center mt-20 text-xl font-semibold">Loading...</p>;
  if (categoryError) return <div>Error: {categoryError}</div>;
  if (!category) return <p>Category not found</p>;
  
  return (
    <>
    <div className='  w-full h-full mt-[104px] bg-[#EFECE7]'>
      <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
        <h1 className='font-bold text-[60px] font-oswald text-white'>{category.name}</h1>
        <p className='text-white'><NavLink className='text-white' to="/">Home </NavLink>/{category.name}</p>
      </div>
     
      <div className="product-grid grid  grid-cols-3 gap-4 px-24 py-24   ">
        {category.products.map(prod => (
          <NavLink to={`/product/${prod.id}`} key={prod.id} className="product-card  w-[20rem] h-[29rem] group  rounded-t-xl group-hover:shadow-xl hover:rounded-b-xl text-center transition-all duration-300 hover:bg-[#ffb936] grid grid-flow-row ">
            <div  className=" flex flex-col justify-center items-center  img-button rounded-t-lg  rounded-b-lg  hover:rounded-b-none bg-white group-hover:bg-[#ffb936]     ">
            <img src={prod.imageUrl} className='w-full h-[200px] object-contain mb-4 transition-transform duration-300 group-hover:scale-105' alt="" />
            <button className=' hidden group-hover:inline-block transition-all duration-100 px-[95px] py-[10px] bg-black text-white font-oswald font-semibold text-center rounded-full'>Add To Cart</button>
            </div>
   

            <div className="price-name grid grid-flow-row gap-2   transition-all duration-300  ">
              <div className="grid grid-flow-col justify-center items-center gap-3  ">
              <span className='p-1 rounded-sm bg-[#ffb936] group-hover:bg-white font-medium font-oswald shadow-sm'>-10%</span>
              <p className='text-[16px] font-semibold font-oswald '>{formatPriceUSD(prod.price)}</p>
              </div>
            <h4 className='font-oswald text-[20px] font-semibold '>{prod.name}</h4>
            
            </div>
          </NavLink>
        ))}
      </div>
    </div>
    
    </>
    
  );
};

export default CategoryProducts;
