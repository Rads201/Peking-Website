import React from 'react';
import Collapsible from '../components/Collapsible';
import items from '../Food.json';
// import { useState, useEffect } from 'react';

function MenuPage() {
    /**
    const [items, setItems] = useState([]);

    // Function for getting the data from MongoDB
    const loadItems = async () => {
        const response = await fetch('https://peking-backend.herokuapp.com/menu');
        const items = await response.json();
        setItems(items);
    }
    // Runs loadItems()
    useEffect(() => {
        loadItems();
    }, []);
    */

    let appetizers = []
    let soup = []
    let noodleSoup = []
    let friedRice = []
    let loMein = []
    let chowMein = []
    let chowMaiFun = []
    let chopSuey = []
    let sweetSour = []
    let eggFood = []
    let pork = []
    let chicken = []
    let beef = []
    let seafood = []
    let vegetable = []
    let comboPlate = []
    let chefsSpecial = []
    let healthAndDiet = []
    let sideOrder = []
    let lunchSpecial = []
    let specialFriedDishes = []
    let kidsMenu = []

    for (let i = 0; i < items.length; i++) {
        if (items[i]["category"] === "Appetizers") {
            appetizers.push(items[i])
        }
        else if (items[i]["category"] === "Soup") {
            soup.push(items[i])
        }
        else if (items[i]["category"] === "Noodle Soup with Vegetables") {
            noodleSoup.push(items[i])
        }
        else if (items[i]["category"] === "Fried Rice") {
            friedRice.push(items[i])
        }
        else if (items[i]["category"] === "Lo Mein") {
            loMein.push(items[i])
        }
        else if (items[i]["category"] === "Chow Mein") {
            chowMein.push(items[i])
        }
        else if (items[i]["category"] === "Chow Mai Fun") {
            chowMaiFun.push(items[i]);
        }
        else if (items[i]["category"] === "Chop Suey") {
            chopSuey.push(items[i]);
        }
        else if (items[i]["category"] === "Sweet and Sour") {
            sweetSour.push(items[i]);
        }
        else if (items[i]["category"] === "Egg Foo Young") {
            eggFood.push(items[i]);
        }
        else if (items[i]["category"] === "Pork") {
            pork.push(items[i]);
        }
        else if (items[i]["category"] === "Chicken") {
            chicken.push(items[i]);
        }
        else if (items[i]["category"] === "Beef") {
            beef.push(items[i]);
        }
        else if (items[i]["category"] === "Seafood") {
            seafood.push(items[i]);
        }
        else if (items[i]["category"] === "Vegetable") {
            vegetable.push(items[i]);
        }
        else if (items[i]["category"] === "Combination Plates") {
            comboPlate.push(items[i]);
        }
        else if (items[i]["category"] === "Chef's Special") {
            chefsSpecial.push(items[i]);
        }
        else if (items[i]["category"] === "Health and Diet") {
            healthAndDiet.push(items[i]);
        }
        else if (items[i]["category"] === "Side Order") {
            sideOrder.push(items[i]);
        }
        else if (items[i]["category"] === "Lunch Special") {
            lunchSpecial.push(items[i]);
        }
        else if (items[i]["category"] === "Special Fried Dishes") {
            specialFriedDishes.push(items[i]);
        }
        else if (items[i]["category"] === "Kid's Menu") {
            kidsMenu.push(items[i]);
        }
    }

    if (window.innerWidth < 800) {
        return (
            <>
                <Collapsible menu={appetizers}></Collapsible>
                <Collapsible menu={soup}></Collapsible>
                <Collapsible menu={noodleSoup}></Collapsible>
                <Collapsible menu={friedRice}></Collapsible>
                <Collapsible menu={loMein}></Collapsible>
                <Collapsible menu={chowMein}></Collapsible>
                <Collapsible menu={chowMaiFun}></Collapsible>
                <Collapsible menu={chopSuey}></Collapsible>
                <Collapsible menu={sweetSour}></Collapsible>
                <Collapsible menu={eggFood}></Collapsible>
                <Collapsible menu={pork}></Collapsible>
                <Collapsible menu={chicken}></Collapsible>
                <Collapsible menu={beef}></Collapsible>
                <Collapsible menu={seafood}></Collapsible>
                <Collapsible menu={vegetable}></Collapsible>
                <Collapsible menu={comboPlate}></Collapsible>
                <Collapsible menu={chefsSpecial}></Collapsible>
                <Collapsible menu={healthAndDiet}></Collapsible>
                <Collapsible menu={sideOrder}></Collapsible>
                <Collapsible menu={lunchSpecial}></Collapsible>
                <Collapsible menu={specialFriedDishes}></Collapsible>
                <Collapsible menu={kidsMenu}></Collapsible>
            </>
        )
    }
    else if (window.innerWidth > 1400) {
        return (
            <>
                <div className='flex-parent-element'>
                    <Collapsible menu={appetizers}></Collapsible>
                    <Collapsible menu={soup}></Collapsible>
                    <Collapsible menu={noodleSoup}></Collapsible>
                </div>
                <div className='flex-parent-element'>
                    <Collapsible menu={friedRice}></Collapsible>
                    <Collapsible menu={loMein}></Collapsible>
                    <Collapsible menu={chowMein}></Collapsible>
                </div>
                <div className='flex-parent-element'>
                    <Collapsible menu={chowMaiFun}></Collapsible>
                    <Collapsible menu={chopSuey}></Collapsible>
                    <Collapsible menu={sweetSour}></Collapsible>
                </div>
                <div className='flex-parent-element'>
                    <Collapsible menu={eggFood}></Collapsible>
                    <Collapsible menu={pork}></Collapsible>
                    <Collapsible menu={chicken}></Collapsible>
                </div>
                <div className='flex-parent-element'>
                    <Collapsible menu={beef}></Collapsible>
                    <Collapsible menu={seafood}></Collapsible>
                    <Collapsible menu={vegetable}></Collapsible>
                </div>
                <div className='flex-parent-element'>
                    <Collapsible menu={comboPlate}></Collapsible>
                    <Collapsible menu={chefsSpecial}></Collapsible>
                    <Collapsible menu={healthAndDiet}></Collapsible>
                </div>
                <div className='flex-parent-element'>
                    <Collapsible menu={sideOrder}></Collapsible>
                    <Collapsible menu={lunchSpecial}></Collapsible>
                    <Collapsible menu={specialFriedDishes}></Collapsible>
                </div>
                <Collapsible menu={kidsMenu}></Collapsible>
            </>
        )
    }

    return (
        <>
            <div className="flex-parent-element">
                <Collapsible menu={appetizers}></Collapsible>
                <Collapsible menu={soup}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={noodleSoup}></Collapsible>
                <Collapsible menu={friedRice}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={loMein}></Collapsible>
                <Collapsible menu={chowMein}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={chowMaiFun}></Collapsible>
                <Collapsible menu={chopSuey}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={sweetSour}></Collapsible>
                <Collapsible menu={eggFood}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={pork}></Collapsible>
                <Collapsible menu={chicken}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={beef}></Collapsible>
                <Collapsible menu={seafood}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={vegetable}></Collapsible>
                <Collapsible menu={comboPlate}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={chefsSpecial}></Collapsible>
                <Collapsible menu={healthAndDiet}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={sideOrder}></Collapsible>
                <Collapsible menu={lunchSpecial}></Collapsible>
            </div>
            <div className="flex-parent-element">
                <Collapsible menu={specialFriedDishes}></Collapsible>
                <Collapsible menu={kidsMenu}></Collapsible>
            </div>
        </>
    );
}

export default MenuPage;