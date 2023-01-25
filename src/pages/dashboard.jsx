import { use, useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";

const Data = {
    Banners: [
        {name: "banner1", img: "imgbanner1", content: "contentbanner", title: "titlebanner"},
        {name: "banner2", img: "imgbanner2", content: "contentbanner", title: "titlebanner"},
        {name: "banner3", img: "imgbanner3", content: "contentbanner", title: "titlebanner"},
        {name: "banner4", img: "imgbanner4", content: "contentbanner", title: "titlebanner"},
        {name: "banner5", img: "imgbanner5", content: "contentbanner", title: "titlebanner"},
        {name: "banner6", img: "imgbanner6", content: "contentbanner", title: "titlebanner"}
    ],
    Products: [
        {name: "product1", value: 100, qty: 10, images: ["img1", "img2", "img3"]},
        {name: "product2", value: 100, qty: 10, images: ["img1", "img2", "img3"]},
        {name: "product3", value: 100, qty: 10, images: ["img1", "img2", "img3"]}
    ]
}

export default function Dashboard() {

    const [items, setItems] = useState();
    const [components, setComponents] = useState("");
    const [configs, setConfigs] = useState();
    useEffect(()=>{ setItems(Data[components])},[components]);

    const { test } = useStateContext();

    return (
        <>
            <div className="container p-5 max-w-full grid grid-cols-12 rounded-lg">
                <div className="first inline col-span-12 md:col-span-2">
                    <header className="text-3xl font-mono bg-gray-100">components</header>
                    <div className="h-fit md:h-screen bg-gray-200 font_items">
                        {Object.keys(Data||{}).map(e => <a onClick={()=> setComponents(e)}><p>{e}</p></a> )}
                    </div>
                </div>
                <div className="secondary col-span-12 md:col-span-2">
                    <header className="text-3xl font-mono bg-gray-300">Items</header>
                    <div className="h-fit md:h-screen bg-gray-400 font_items">
                        {items?.map( e => <a onClick={()=> setConfigs(e)}><p>{e.name}</p></a> )}
                    </div>
                </div>
                <div className="configs col-span-12 md:col-span-8">
                    <header className="text-3xl font-mono bg-gray-500">Configs</header>
                    <div className="h-fit md:h-screen bg-gray-600 font_items">
                        {Object.values(configs||{}).map(e => <p>{e}</p>)}
                    </div>
                </div>
            </div>
        </>
    )
}