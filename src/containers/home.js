import React from 'react'; //Routes from app will connect here
import axios from 'axios'; //AXIOS IS NEEDED TO MAKE API CALLS

// HOME PAGE NEEDS AN API CALL TO SHOW LIST OF YOUTUBE VIDEOS
// HOME CLASS IS STATFUL REACT COMPONENT
class Home extends React.Component {

    //PARTICULAR SEARCH TYPE
    
    state ={
        searchTerm: 'skateboarding',// CAN NAME YOUR SEARCH WHATEVER, REMEMBER TO PASS THAT STAT IN Q
        videos: []// EMPTY WHEN THERE IS NO API REQUEST
    }
    //HOW DO WE GET THE SEARCH? AXIOS. IMPORT AXIOS.
    //SHOW DATA IN RENDER (STORE IT IN STATE)
    // WHY COMPONENT DID MOUNT? SO IT CAN RENDER FIRST AND MAKE SURE STATE HAS BEEN SET
    componentDidMount(){
        //HERE IS MY API REQUEST
        axios({// IS A JAVASRIPT OBJECT WE CALL, WE HAVE THE POWER TO CUSTOMIZE REQUEST ANYWAY WE WANT WITH AXIOS TAKE AND REMOVE WHAT WE NEED FROM URL
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: 'snippet',
                maxResults: 8, 
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyCb9A4kjrypWw84UxCN6AwnagElm_90OlU',// THIS IS WHERE YOUR API KEY GOES. WON'T LOAD ANY IMAGES WITHOUT KEY. NEED QUOTES AROUND API
                q: this.state.searchTerm,
                pageToken: ''
            }
        })
        //CONSOLE DATA SEE IF API REQUEST WORKS
        // CHECK CONSOLE ON BROWSER PAGE VIA INSPECT PAGE
        .then(response => {
            console.log(response.data);
            //SAVE INTO STATE
            this.setState({ videos:response.data.items })// ARRAY DATA TYPE VIDEOS AND ITEMS
        })

    }

    render() {
        //CONSOLE LOG THIS.STATE 
        console.log(this.state);

            

        //MAP ALWAYS RETURN AN ARRAY
    //     return (
    //         <ul> 
    //              {     //NEED CURLY BRACE TO SHOW JAVASCRIPT EXPRESSIONS, ONE BY ONE "I AND E" WILL CHANGE
    //                   //MAP HAS A CALL BACK OF e, i
    //                 this.state.video.map((e, i) => {
    //                     return( //NEED KEY TO DYNAMICLYY RENDER COMPONENTS
    //                         <li key={i}>
    //                             <img src={e.snippet.thumbnails.medium.url} alt='' />
    //                             <h5>{e.snippet.title}</h5>
    //                         </li>
    //                     )
    //                 })
    //              }
    //          </ul>  
    //     /*    
    //     [
    //     //ARRAY OF JSX ELEMENTS CAN ONLY WORK IN JSX OTHEWISE USE (<> <h1></h1>  </>)
    //     <h1>Home Page</h1> ,
    //         <h2> LOL </h2>,
    //         <h3>word</h3>
    //     ]
    //     */
        
    //   )
    }
}

export default Home;