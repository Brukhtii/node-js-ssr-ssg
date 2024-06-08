const imagesLinks = require('../assets/imageLinks').imagesLinks;

const getComponent = (index) => 
    `<div class="item" key={${index}}>
      <div class="item-image">
        <img src="${imagesLinks[index % 10]}" alt="Item Name"/>
        <div class="item-actions">
          <button type="button" class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div class="item-details">
        <h3 class="item-title">Item Title: ${index + 1}</h3>
        <p class="item-description">This is a brief description of the item, highlighting its key features and benefits.</p>
        <a href="https://hidden-refuge-97632-934ef58eadcb.herokuapp.com">More info ...</a>
        <div class="item-meta">
          <span class="item-price">$19.99</span>
          <span class="item-rating">Rating: ★★★★☆</span>
        </div>
      </div>
  </div>`;

const getComponentsBlock = ({ componentsQty }) => {  
      const getComponents = () => {
        const arrayWithObjects = Array.from({ length: componentsQty }, (_, index) => (getComponent(index)));
        return arrayWithObjects.join('');
      }
  
    return (
        `<h1 class="font-weight-light components-qty">Components quantity: ${componentsQty}</h1>
        <div id="components" class="components">
          ${getComponents()}
        </div>`
    );
  };

module.exports = {
    getComponentsBlock
}