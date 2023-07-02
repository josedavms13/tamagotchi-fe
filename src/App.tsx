import {Screen} from "./pages/screen/Screen.tsx";
import {Feed} from "./pages/feed/Feed..tsx";

function App() {
   function feedClick (){
      console.log("feedClick")
   }
}


   return (
      <>
         <Screen />
         <Feed onFeedDisplay={feedClick} hungryStats={40}/>


      </>
   );
}

export default App;
