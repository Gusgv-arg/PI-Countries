import React, { useEffect }  from "react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {getAllCountries, getCountryByName} from "../../Redux/Actions/actions"
import style from "../Search/search.module.css"

function SearchBar(props){

    const [search, setSearch] = useState("")
    
    const searchHandler = (event) =>{
        setSearch(event.target.value)
    }
    
    const dispatch = useDispatch()
    
    const handleClick=(event)=>{
        dispatch(getAllCountries())
        setSearch("")
    }

    useEffect(()=>{
        dispatch(getCountryByName(search))
    },[dispatch, search])
    

    return (

        <div className={style.cont}>
            
            <input type="text" placeholder="Type your country..."
            value={search}
            onChange={searchHandler}
            className={style.input}
            />
            <button className={style.btn} onClick={handleClick}>Refresh</button>

        </div>

    )
}

export default SearchBar