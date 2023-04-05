import React, { useState, useEffect } from "react";
import axios from "axios";

// function UseAxios(url){
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);


//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const res = await axios.get(url);
//             const json = await res.json();
//             setResponse(json);
//           } catch (error) {
//             setError(error);
//           }
//           setIsLoading(false);
//         };
//         fetchData();
//       }, []);


//       return { response, error, isLoading };

// }


const UseAxios = (url) => {
const [card, getCards] = useState([]);
console.log(url)

function gettingCards(poke=""){
   
   
    console.log(poke)
    console.log(url)
    if(poke){
        console.log('wentPoke1')
        console.log(url)
       let newUrl = url.split('')
        console.log(newUrl.pop())
        console.log()
        url = newUrl.join('').concat(`${poke}/`)
        
    }






    const getTheData = async () => {
        try {
        let cardRes = await axios.get(url)
         console.log(cardRes)
 
         getCards((oldDeck) => {
            if(poke){
                 console.log('wentPoke')
                oldDeck.push(cardRes.data)
                return [...oldDeck]
            }

            console.log(cardRes)
            oldDeck.push(cardRes.data.cards[0])
            return [...oldDeck]
        
        })  
        
         

         console.log(card)
        } catch (error) {
            console.log(error)
        }
        return card
    }
    
getTheData()
}





    return [card, gettingCards]
}





















export default UseAxios