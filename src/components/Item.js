import React, { useState } from 'react';

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({ id, buyItem, name, description, stock, onBuy}) {
  const [cant, setCantidad] = useState(stock)

  const sale = () => {
    setCantidad(cant - 1)
    buyItem()
  }

  return (
    <div className='product' key ={id + name}>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5> On stock : {cant > 0 ? cant : <span> Sold out </span>}</h5>
      <button onClick={sale} disabled={cant <= 0 ? true : false}> {cant > 0 ? 'To buy' : 'Sold out'}</button>
    </div>
  )
}