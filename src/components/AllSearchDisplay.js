import React from 'react';
import Swal from 'sweetalert2';

const AllSearchDisplay = (props) => {
   
    const addToFavourite = (definition,name) => {
      const newName = name.split(' ');
      let finalName = '';
      newName.map(name=>{
         let text = name[0].toUpperCase() + name.substring(1, name.length) + ".";
         finalName += text;
      })
      // debugger
    if (localStorage.getItem("word") != null) {
        let word = JSON.parse(localStorage.getItem("word"));
        const filterItems = word.filter(p => p.definition == definition.definition);
        if(filterItems.length ==0) {
          const newObj = {
            ...definition,
            searchName:finalName,
            serial: word.length + 1
          }
        let newItems = [...word,newObj];        
        saveWordtToSession(newItems)
        Swal.fire(
          'Thanks!',
          'Favourite Update Successfully',
          'success'
        ) 
        }else{
          alert("Favourite Already exists")
        }
       
    }else{
      let wordArray =[]
        const newObj = {
            ...definition,
            searchName:finalName,
            serial: 1
          }
        let addWord = wordArray.push(newObj)
        Swal.fire(
          'Thanks!',
          'Favourite Update Successfully',
          'success'
        ) 
        saveWordtToSession(wordArray)
    }
    
    }

    const saveWordtToSession = (word) => {
        if(word.length===0){
            clearWordFromSession();
        }else{
          localStorage.setItem("word", JSON.stringify(word));
        }
      }
      const clearWordFromSession = () => {
        localStorage.removeItem("word");
      }
    return (
        <div class="grid">
        <div class="" data-category="transition">
          <p class="symbol">{props.searchResultdefinitions.type}</p>
          <h3 class="name">{props.searchResultdefinitions.definition}</h3>
          <p class="symbol">{props.searchResultdefinitions.example}</p>
          {
            props.searchResultdefinitions.image_url != null &&
          <img src={props.searchResultdefinitions.image_url}/>
          }
          <button onClick={()=>addToFavourite(props.searchResultdefinitions,props.searchValue)}>Add to Favourite</button>
          {/* <p class="number">80</p>
          <p class="weight">200.59</p> */}
        </div>
            
        </div>
    );
};

export default AllSearchDisplay;