import React from 'react'; //Routes from app will connect here
import axios from 'axios'; //AXIOS IS NEEDED TO MAKE API CALLS

// HOME PAGE NEEDS AN API CALL TO SHOW LIST OF YOUTUBE VIDEOS
// HOME CLASS IS STATFUL REACT COMPONENT
class Home extends React.Component {

    //PARTICULAR SEARCH TYPE
    
    state ={
        searchTerm: 'skateboarding',
        videos: []// EMPTY WHEN THERE IS NO API REQUEST
    }
    //HOW DO WE GET THE SEARCH? AXIOS. IMPORT AXIOS.
    //SHOW DATA IN RENDER (STORE IT IN STATE)
    // WHY COMPONENT DID MOUNT? SO IT CAN RENDER FIRST AND MAKE SURE STATE HAS BEEN SET
    componentDidMount(){
        //HERE IS MY API REQUEST
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: 'snippet',

            }
        })

    }

    render() {
        return(
            <h1>Home Page</h1>
        )
    }
}

export default Home;