import React from 'react';
import Item from './Item';

// Takes the JSON data and prints each document (item) in a line
function Menu({ menu }) {

    if (menu[0].category === "Special Fried Dishes") {
        return (
            <>
                <p>A: Plain</p>
                <p>B: Plain Fried Rice, White Rice, or French Fries</p>
                <p>C: Roast Pork or Chicken Fried Rice</p>
                <p>D: Beef or Shrimp Fried Rice</p>
                <table id="special fried">
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, i) => <Item item={item} key={i} />)}
                    </tbody>
                </table>
            </>
        )
    }

    let small = "Small"
    let order = "Large/Order"
    let withString = ""

    if (menu[0].category === "Noodle Soup with Vegetables" || menu[0].category === "Health and Diet"
        || menu[0].category === "Chow Mai Fun" || menu[0].category === "Egg Foo Young" || menu[0].category === "Chef's Special"
        || menu[0].category === "Health and Diet" || menu[0].category === "Kid's Menu") {
        small = ""
        order = "Order"
    }
    else if (menu[0].category === "Combination Plates") {
        small = ""
        order = "Combo"
        withString = "(Combos include 1 Pork Egg Roll and Pork Fried Rice)"
    }
    else if (menu[0].category === "Lunch Special") {
        small = "A"
        order = "B"
        withString = "(A: Includes Vegetable Fried Rice or White Rice) - (B: Also includes Soda)"
    }

    if (menu[0].category === "Chow Mein") {
        withString = "(Includes White Rice and Crispy Noodle)"
    }
    else if (menu[0].category === "Health and Diet") {
        withString = "(Includes White Rice and a choice of Brown/Hunan/White Sauce on the side)"
    }
    else if (menu[0].category === "Soup") {
        withString = "(Includes Crispy Noodle)"
    }
    else if (menu[0].category === "Chop Suey" || menu[0].category === "Sweet and Sour" || menu[0].category === "Egg Foo Young"
        || menu[0].category === "Pork" || menu[0].category === "Chicken" || menu[0].category === "Beef" || menu[0].category === "Seafood"
        || menu[0].category === "Vegetable" || menu[0].category === "Chef's Special") {
        withString = "(Includes White Rice)"
    }

    return (
        <>
            <p>{withString}</p>
            <table id="menu">
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>{small}</th>
                        <th>{order}</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map((item, i) => <Item item={item} key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default Menu;

//{menu.map((item, i) => <Item item={item} key={i} />)}