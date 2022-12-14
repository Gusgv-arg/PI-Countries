import React  from "react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {getCountryByName} from "../../Redux/Actions/actions"
import style from "../Search/search.module.css"

function SearchBar(props){

    const [search, setSearch] = useState("")
    
    const searchHandler = (event) =>{
        setSearch(event.target.value)
    }
    
    const dispatch = useDispatch()
    
    const handleClick=(event)=>{
        dispatch(getCountryByName(search))
        setSearch("")
    }
    

    return (

        <div className={style.cont}>
            
            <input type="text" placeholder="Type your country..."
            value={search}
            onChange={searchHandler}
            className={style.input}
            />
            <button className={style.btn} onClick={handleClick}>Search</button>

        </div>

    )
}

export default SearchBar