import { useStateContext } from "../context/StateContext";
import { useApiFetchContext } from "@/context/ApiFetchContext";



export default function Dashboard() {
    
    const { Data, components, setComponents, items, setItems, configs, setConfigs } = useStateContext();
    const { teste } = useApiFetchContext();

    return (
        <>
            <div className="container p-5 max-w-full grid grid-cols-12 rounded-lg">
                <div className="components inline col-span-12 md:col-span-2">
                    <header className="text-3xl font-mono bg-indigo-200">components</header>
                    <div className="h-fit md:h-screen bg-gray-100 font_items">
                        {Object.keys(Data||{}).map( (e, index) => 
                            <a key={index} onClick={()=> setComponents(e)}><p className={components === e ? "bg-indigo-500 transition-all duration-300 text-slate-100" : ""}>{e}</p></a> 
                        )}
                    </div>
                </div>
                <div className="items col-span-12 md:col-span-2">
                    <header className="text-3xl font-mono bg-indigo-200">Items</header>
                    <div className="h-fit md:h-screen bg-gray-200 font_items">
                        {items?.map( (e, index) => 
                            <a key={index} onClick={()=> setConfigs(e)}><p className={configs === e ? "bg-indigo-400 transition-all duration-300 text-slate-100" : ""}>{e.name}</p></a> 
                        )}
                    </div>
                </div>
                <div className="configs col-span-12 md:col-span-8">
                    <header className="text-3xl font-mono bg-indigo-200">Configs</header>
                    <div className="h-fit md:h-screen bg-gray-300 font_items">
                        {Object.values(configs||{}).map((e, index) => <p>{e}</p>)}
                        <hr className="w-1/2 block mr-auto"/>
                        {Object.keys(configs||{}).map((e, index) => {
                            if(e === "content"){
                                return (<div><input key={index} type="text"/> Content </div>)
                            }
                            else if(e === "title"){
                                return (<div><input key={index} type="text"/> Text </div>)
                            }
                            else if(e === "value"){
                                return (<div><input key={index} type="number" step=".10"/> Value </div>)
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}