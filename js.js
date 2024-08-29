document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class '.fa-plus-circle' and '.fa-minus-circle'
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
  
    // Function to update the total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);
        total += quantity * unitPrice;
      });
      document.querySelector('.total').textContent = `${total.toFixed(2)} $`; }
  
    // Add event listeners to plus buttons
    plusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const card = this.closest('.card');
        const quantityElement = card.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    // Add event listeners to minus buttons
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const card = this.closest('.card');
        const quantityElement = card.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice();
        }
      });
    });
  
    // Add event listeners to delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
          const card = this.closest('.card'); // Select the entire card element
          card.remove(); // Remove the entire card element
          updateTotalPrice(); // Update the total price
        });
      });
  
    // Add event listeners to heart buttons
    heartButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('liked');
        if (this.classList.contains('liked')) {
          this.style.color = 'red';
        } else {
          this.style.color = 'gray';
        }
      });
    });
    
    // Initial calculation of total price
    updateTotalPrice();
  });
  



////////////
document.addEventListener('DOMContentLoaded', function() {
    // Get all the buttons and items
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
  
    // Update the total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const price = parseFloat(card.querySelector('.unit-price').textContent);
        total += quantity * price;
      });
      document.querySelector('.total').textContent = total.toFixed(2) + ' $';
    }
  
    // Increase quantity
    plusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantity = this.closest('.card').querySelector('.quantity');
        quantity.textContent = parseInt(quantity.textContent) + 1;
        updateTotalPrice();
      });
    });
  
    // Decrease quantity
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantity = this.closest('.card').querySelector('.quantity');
        if (parseInt(quantity.textContent) > 0) {
          quantity.textContent = parseInt(quantity.textContent) - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Delete item
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.closest('.card').remove();
        updateTotalPrice();
      });
    });
  
    // Like item
    heartButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'gray' : 'red';
      });
    });
  
    // Calculate initial total
    updateTotalPrice();
  });
  