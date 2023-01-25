import { createContext, useContext, useState, useEffect } from "react";
import {useRouter} from 'next/router';

const Context = createContext();

export const StateContext = ( { children } ) => {
    const teste = "Teste ApiFetchContext";

    // Router Data Control  #########################################################
    const router = useRouter();
    useEffect(()=>{
        setConfigs();
        setItems();
    },[router]);


    // Data                  #########################################################
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
            {name: "product3", value: 100, qty: 10, images: ["img1", "img2", "img3"]},
            {name: "product4", value: 100, qty: 10, images: ["img1", "img2", "img3"]}

        ],
        Images: [
            {name: "image1.png", key: "123141151image.png"},
            {name: "image2.png", key: "123141151image.png"},
            {name: "image3.png", key: "123141151image.png"},
            {name: "image4.png", key: "123141151image.png"},
            {name: "image5.png", key: "123141151image.png"},
        ]
    }


    // Dashboard             #########################################################
    const [components, setComponents] = useState("");
    const [items, setItems] = useState([]);
    const [configs, setConfigs] = useState([]);
    useEffect(()=>{ 
        setItems(Data[components]);
        setConfigs();
    },[components]);



    return(
        <Context.Provider value={{
            Data,
            components,
            setComponents,
            items,
            setItems,
            configs,
            setConfigs,
            teste
        }}>
        {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);