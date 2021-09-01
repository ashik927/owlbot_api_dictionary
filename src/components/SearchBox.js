import React, { useState } from 'react';
import SearchShow from './SearchShow';

const SearchBox = () => {
    const [searchValue, setsearchValues] = useState();
    const [noSearchValue, setNoSearchValues] = useState(false);
    const [searchResult, setsearchResult] = useState();
    const handleWordSearch = (e) => {
        let searchValue = e.target.value;
        setsearchValues(searchValue);
        // console.log(searchValue);
        // if (searchValue.length > 2) {
        //     fetch(`https://owlbot.info/api/v4/dictionary/owl`, {
        //         method: "GET",
        //         headers: { 'Authorization': 'Token 005634c3cab9d18d0fce6078a8de50ea6a4ad67a' },
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data);
        //         });
        // } else {
        // }
    };

    const handleProductSearch1 = (e) => {
        e.preventDefault();
        try{
            fetch(`https://owlbot.info/api/v4/dictionary/${searchValue}`, {
                method: "GET",
                headers: { 'Authorization': 'Token 005634c3cab9d18d0fce6078a8de50ea6a4ad67a' },
            })
                .then((res) => res.json())
                .then((data) => {
                    // debugger
                    if(data[0]?.message == "No definition :("){
                        setNoSearchValues(true)
                    }else{
                        // console.log(data);
                        setsearchResult(data)
                        setNoSearchValues(false)
                    }
                    
                }); 
        }catch(error){
            // console.log(error);
        }
        
    };
    return (
        <>
        <form onSubmit={handleProductSearch1}>
            <p><input type="text" onChange={handleWordSearch} class="quicksearch" placeholder="Search" /></p>
            <button type="submit">Search</button>
        </form>
        {
            noSearchValue == true ? "No Result Found" :
           searchResult &&  <SearchShow searchResult={searchResult} searchValue={searchValue}/>
        }
        
        </>
    );
};

export default SearchBox;