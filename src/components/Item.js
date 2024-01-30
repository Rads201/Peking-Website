import React from "react";
import { FaPepperHot } from "react-icons/fa";

// Displays the properties of each document (item)
function Item({ item }) {

    let small = null;
    let large = null;

    let formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }
    let dollarUS = Intl.NumberFormat('en-US', formatting_options)

    if (item.price.length === 1) {
        large = dollarUS.format(item.price[0])
    }
    else if (item.price[0] === 0) {
        large = dollarUS.format(item.price[1])
    }
    else if (item.price.length === 2 && item.price[0] !== 0) {
        small = dollarUS.format(item.price[0])
        large = dollarUS.format(item.price[1])
    }
    else if (item.price.length === 4) {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{dollarUS.format(item.price[0])}</td>
                <td>{dollarUS.format(item.price[1])}</td>
                <td>{dollarUS.format(item.price[2])}</td>
                <td>{dollarUS.format(item.price[3])}</td>
            </tr>
        );
    }

    if (item.extra === "Spicy") {
        return (
            <tr>
                <td className="spicy-text">{item.name} <FaPepperHot /></td>
                <td className="spicy-text">{small}</td>
                <td className="spicy-text">{large}</td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{item.name}</td>
            <td>{small}</td>
            <td>{large}</td>
        </tr>
    );
}

export default Item;