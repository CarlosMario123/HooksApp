import CounterApp from "./1-useState/CounterApp";
import PostmanLike from "./3-useFetch/InputFetch";
import WindowWidth from "./moreViews/windowWidth";

import CustomForm from "./useEfect/customForm";
import SimpleForm from "./useEfect/simpleForm";



export default function HooksApp() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden" >
        <h1 className="text-2xl font-black" >Hooks app</h1>
        <div className="flex flex-row flex-wrap w-full px-4 mt-10 gap-x-10 gap-y-5">
        <CounterApp/>
         <SimpleForm/>
         <CustomForm/>
        <WindowWidth/>
        <PostmanLike/>
        </div>
       
    </div>
  )
}
