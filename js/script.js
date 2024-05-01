// Function to calculate room booking cost
function calculateRoomBookingCost() {
    const roomType = document.getElementById('room-type').value;
    const numAdults = parseInt(document.getElementById('num-adults').value);
    const numChildren = parseInt(document.getElementById('num-children').value);
    const duration = parseInt(document.getElementById('duration').value);
    const extraRequirements = document.getElementById('extra-requirements').value;

    // Define base costs for different room types
    const baseCosts = {
        single: 25000,
        double: 35000,
        triple: 40000
    };

    // Calculate base cost based on room type
    let baseCost = baseCosts[roomType] || 0;

    // Calculate cost for additional adults and children
    const extraAdultCost = numAdults * 0; // Assuming no extra cost for adults
    const extraChildCost = numChildren > 0 ? numChildren * 5000 : 0; // Additional cost for children above 5 years

    // Calculate total cost for the room booking
    let totalCost = baseCost + extraAdultCost + extraChildCost;

    // Handle extra requirements
    if (extraRequirements.includes('WiFi')) {
        totalCost += 0; // Assuming WiFi is free
    }
    if (extraRequirements.includes('pool view')) {
        totalCost += 0; // Assuming pool view is free
    }
    if (extraRequirements.includes('garden view')) {
        totalCost += 0; // Assuming garden view is free
    }

    // Display total cost
    alert('Room booking total cost: ' + totalCost + ' LKR');
}

// Function to calculate adventure booking cost
function calculateAdventureBookingCost() {
    const adventureType = document.getElementById('adventure-type').value;
    const addGuide = document.getElementById('add-guide').checked;

    // Define costs for different adventure types
    const adventureCosts = {
        divingLocalAdults: 5000,
        divingLocalKids: 2000,
        divingForeignAdults: 10000,
        divingForeignKids: 5000
    };

    // Get base cost for adventure
    let adventureCost = adventureCosts[adventureType] || 0;

    // Add extra cost for guide if selected
    if (addGuide) {
        adventureCost += 1000; // Additional cost for guide
    }

    // Display total cost
    alert('Adventure booking total cost: ' + adventureCost + ' LKR');
}

// Function to handle room booking submission
function handleRoomBooking(event) {
    event.preventDefault(); // Prevent form submission
    calculateRoomBookingCost();
    // Display confirmation message or update UI with booking details
    // Reset form fields or clear booking details after submission
}

// Function to handle adventure booking submission
function handleAdventureBooking(event) {
    event.preventDefault(); // Prevent form submission
    calculateAdventureBookingCost();
    // Display confirmation message or update UI with booking details
    // Reset form fields or clear booking details after submission
}

// Function to handle promo code input
function handlePromoCode() {
    const promoCode = document.getElementById('promoCodeInput').value;
    const validPromoCodes = ['123', '456', '789']; // Define valid promo codes
    const discountPercentage = 5; // Define discount percentage

    if (validPromoCodes.includes(promoCode)) {
        // If the promo code is valid, apply the discount
        applyDiscount(discountPercentage);
        alert(`Promo code applied successfully! Discount of ${discountPercentage}% applied.`);
    } else {
        // If the promo code is invalid, display an error message
        alert('Invalid promo code. Please enter a valid promo code.');
    }
}

// Function to apply discount to the total cost
function applyDiscount(discountPercentage) {
    const totalCostDisplay = document.getElementById('totalCostDisplay');
    const totalCost = parseFloat(totalCostDisplay.textContent);
    const discountAmount = (totalCost * discountPercentage) / 100;
    const discountedTotalCost = totalCost - discountAmount;
    totalCostDisplay.textContent = discountedTotalCost.toFixed(2);
}

// Function to handle checking loyalty points
function handleCheckLoyalty() {
    // Add logic to display earned loyalty points
}

// Add event listeners
document.getElementById('bookNowButton').addEventListener('click', handleRoomBooking);
document.getElementById('bookAdventureButton').addEventListener('click', handleAdventureBooking);
document.getElementById('promoCodeInput').addEventListener('change', handlePromoCode);
document.getElementById('checkLoyaltyButton').addEventListener('click', handleCheckLoyalty);
