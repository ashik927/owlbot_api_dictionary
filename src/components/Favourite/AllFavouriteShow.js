import React from 'react';

const AllFavouriteShow = (props) => {
   
    return (
        <div class="grid">
        <div class="" data-category="transition">
          <p class="symbol">Search Name :{props.favouriteWord.searchName}  (user will favorite the {props.favouriteWord.type})</p>
          <p class="symbol">{props.favouriteWord.type}</p>
          <h3 class="name">{props.favouriteWord.definition}</h3>
          <p class="symbol">{props.favouriteWord.example}</p>
          {
            props.favouriteWord.image_url != null &&
          <img src={props.favouriteWord.image_url}/>
          }
          <button onClick={()=>props.deleteFavourite(props.favouriteWord)}>Delete</button>
          {/* <p class="number">80</p>
          <p class="weight">200.59</p> */}
        </div>
            
        </div>
    );
};

export default AllFavouriteShow;