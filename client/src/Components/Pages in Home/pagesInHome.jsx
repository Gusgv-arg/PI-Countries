import React from "react"
import style from "../Pages in Home/pagesInHome.module.css"


function Pages({countriesPerPage, countriesDb, paginado, pageNumber }){
    const pageNumbers=[]
    
    for (let i=1; i<=Math.ceil(countriesDb/ countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.allpages}>
        {
            pageNumbers && 
            pageNumbers.map(number=>(
                                      
            <div key={number} >
                <button className={pageNumber===number? style.active : style.inactive} onClick={()=>paginado(number)}>{number}</button>
            </div>
            ))
        }
            
        </div>        
    )
}

export default Pages