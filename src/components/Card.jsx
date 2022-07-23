import React from 'react'

export default function Card(props) {
    let greeting = "";
    let premium = "";
    let classCard = "";
    const expr = props.client.country;
    switch (expr) {
        case 'es': 
        greeting = "Hola "
        break;
        case 'fr': 
        greeting = "Bonjour "
        break;
        case 'de':
        greeting = "Hallo "
        break;
        case 'en':
        greeting = "Hello "
        break;
    }
    if (props.client.isPremium) {
        premium = "Yes";
        classCard = "card premium"
    } else  {
        premium = "No"
        classCard = 'card';
    }
  return (
    <div className={classCard}>
        <p>{greeting}{props.children}</p>
        <p>Age: {props.client.age}</p>
        <p>Is it a premium client? {premium}</p>
    </div>
  )
}
