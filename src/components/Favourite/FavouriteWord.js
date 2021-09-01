import React, { useEffect, useState } from 'react';
import AllFavouriteShow from './AllFavouriteShow';

const FavouriteWord = () => {
    const [favouriteWord, setFavouriteWord] = useState([]);
    const [favouriteWordCategory, setFavouriteWordCategory] = useState([]);
    useEffect(() => {
        let word = JSON.parse(localStorage.getItem("word"));
        if (word != null) {
            setFavouriteWord(word);
            let duplicateWordRemove = (removeDuplicates(word))
            setFavouriteWordCategory(duplicateWordRemove);
        }
        // console.log("favouriteWord", favouriteWord)
    }, [])

    function removeDuplicates(arr) {
        return arr.reduce((uniqueElements, currentElement) => {
            const hasElement = uniqueElements.find(e => e.type === currentElement.type)
            if (!hasElement) {
                uniqueElements.push(currentElement)
            }
            return uniqueElements
        }, [])

    }

    const deleteFavourite = (newItems) => {
        let result = window.confirm("Do you want to delete your favourite?");
        // debugger
        if (result) {
            let word = JSON.parse(localStorage.getItem("word"));
            const filterItems = word.filter(p => p.serial !== newItems.serial);
            saveWordtToSession(filterItems);
            setFavouriteWord(filterItems);
        }
    }

    const saveWordtToSession = (word) => {
        if (word.length === 0) {
            clearWordFromSession();
        } else {
            localStorage.setItem("word", JSON.stringify(word));
        }
    }

    const clearWordFromSession = () => {
        localStorage.removeItem("word");
    }

    const handleChange = (e) => {
        // debugger
        let word = JSON.parse(localStorage.getItem("word"));
        if (e.target.value != "Selected") {
            if (word != null) {
                let allWord = word
                let categoryBasedWord = allWord.filter((el) => {
                    let wordType = el.type.toLowerCase();
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType.includes(search)
                    );
                });
                setFavouriteWord(categoryBasedWord);
            }
        } else {
            setFavouriteWord(word);
        }
    }

    const handleWordSearch = (e) => {
        let word = JSON.parse(localStorage.getItem("word"));
        let searchValue = e.target.value;
        // console.log(searchValue);
        if (e.target.value.length > 2) {
            if (word != null) {
                let allWord = word
                let searchBasedWord = allWord.filter((el) => {
                    let wordType = el.searchName.toLowerCase();
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType.includes(search)
                    );
                });
                setFavouriteWord(searchBasedWord);
            }
        } else {
            setFavouriteWord(word);
        }
    };

    return (
        <>
            <h2>Total Favourite Word: {favouriteWord.length} </h2>

            <h4>Search Your Favourite Word</h4>
            <p><input type="text" onChange={handleWordSearch} class="quicksearch" placeholder="Search" /></p>


            {favouriteWord && favouriteWord.length > 0 &&
                <>
                    <strong>Select Category Based Favourite Word: </strong>
                    <select onChange={handleChange}>
                        <option value="Selected">Selecte Category</option>

                        {
                            favouriteWordCategory && favouriteWordCategory.length > 0 && favouriteWordCategory.map((favouriteWord, i) => {
                                return (
                                    <option value={favouriteWord.type}>{favouriteWord.type}</option>
                                )
                            })
                        }


                    </select>
                </>
            }
            <br />
            <br />
            <br />
            {
                favouriteWord.length > 0 ?

                    favouriteWord.map((allSearchfavouriteWord) => (
                        <AllFavouriteShow favouriteWord={allSearchfavouriteWord} deleteFavourite={deleteFavourite}></AllFavouriteShow>
                    ))
                    :
                    <h1>No Favoite Added</h1>
            }
        </>
    );
};

export default FavouriteWord;







{/* <option value="noun">Noun</option>
                <option value="prononun">Prononun</option>
                <option value="verb">Verb</option>
                <option value="adverb">Adverb</option>
                <option value="exclamation">exclamation</option>
                <option value="combining form">combining form</option>
                <option value="combining form">abbreviation</option>
                <option value="pronoun & determiner">pronoun & determiner</option>
                <option value="adjective">Adjective</option>
                <option value="conjunction">Conjunction</option>
                <option value="preposition">Preposition</option> */}