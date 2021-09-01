import React from 'react';
import AllSearchDisplay from './AllSearchDisplay';

const SearchShow = (props) => {
    return (
        <>
            <h5>Word : {props.searchResult.word}</h5>
            <h5>Pronunciation : {props.searchResult.pronunciation}</h5>
            {props.searchResult &&
                     props.searchResult.definitions.length > 0  &&
                     props.searchResult.definitions.map((allSearch) => (
                            <AllSearchDisplay searchResultdefinitions={allSearch} searchValue={props.searchValue}></AllSearchDisplay>
                          ))}
            {/* <AllSearchDisplay searchResultdefinitions={props.searchResult.definitions}/> */}
        </>
    );
};

export default SearchShow;