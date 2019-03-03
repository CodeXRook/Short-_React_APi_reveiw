import React from 'react'; //Routes from app will connect here
import axios from 'axios'; //AXIOS IS NEEDED TO MAKE API CALLS

// HOME PAGE NEEDS AN API CALL TO SHOW LIST OF YOUTUBE VIDEOS
// HOME CLASS IS STATFUL REACT COMPONENT
class Home extends React.Component {

    //PARTICULAR SEARCH TYPE
    
    state ={
        searchTerm: 'skateboarding'
    }

    //HOW DO WE GET THE SEARCH? AXIOS. IMPORT AXIOS.

    
    render() {
        return(
            <h1>Home Page</h1>
        )
    }
}

export default Home;