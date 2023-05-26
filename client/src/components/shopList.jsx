import React from "react"
import "../index.css"

const ShopList =({
    items,
    onItemSelect,
    selectedItem}) => {

    if (!Array.isArray(items)) {
        return (

            <ul className="list-shop">
                {Object.keys(items).map((item) => (
                    <li
                        key={item._id}
                        className={
                            "list-shop-item" +
                            (items[item] === selectedItem ? "active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
    return (
        
        <ul className="list-shop">
            {items.map((item) => (
                <li
                    key={item._id}
                    className={
                        "list-shop-item"
                         +
                        (item === selectedItem ? "active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};



 export default ShopList;