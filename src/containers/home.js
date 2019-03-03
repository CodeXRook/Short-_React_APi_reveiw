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
        axios({
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
        .then(response => {
            console.log(response.data);
        })

    }

    render() {
        return(
            <h1>Home Page</h1>
        )
    }
}

export default Home;