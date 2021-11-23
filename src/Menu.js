import React from 'react';

const Menu = ( { items } ) =>
{
  return (
    <div className="section-center">
      { items.map( ( menuItems ) =>
      {
        const { id, image, title, price, desc } = menuItems;
        return (
          <article key={ id } className="menu-item">
            <img src={ image } alt={ title } className="photo"/>
            <div className="item-info">
              <header>
                <h4>{ title }</h4>
                <h4 className="price">${ price }</h4>
              </header>
              <p className="item-text">{ desc }</p>
            </div>
          </article> )
      } ) }
    </div>
  )
};

export default Menu;
