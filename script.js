// Sample data for detail items
const itemsData = {
    1: {
        title: 'Item One - Premium Package',
        description: 'Experience the ultimate features with our premium package. Designed with cutting-edge technology and user experience in mind, this product delivers exceptional value and performance.',
        price: '$99.99',
        availability: 'In Stock',
        rating: '★★★★★ (245 reviews)'
    },
    2: {
        title: 'Item Two - Professional Edition',
        description: 'Elevate your business with our professional edition. Built for teams and enterprises, featuring advanced analytics, collaboration tools, and dedicated support.',
        price: '$149.99',
        availability: 'In Stock',
        rating: '★★★★☆ (189 reviews)'
    },
    3: {
        title: 'Item Three - Enterprise Solution',
        description: 'Transform your organization with our enterprise solution. Custom workflows, integrations, and scalable infrastructure to grow with your business needs.',
        price: '$299.99',
        availability: 'In Stock',
        rating: '★★★★★ (312 reviews)'
    }
};

// Load item details on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id') || '1';
    const message = urlParams.get('message'); // Get message parameter
    
    // Display message if provided
    if (message) {
        const messageBox = document.getElementById('message-box');
        const messageText = document.getElementById('message-text');
        messageBox.style.display = 'block';
        messageText.textContent = decodeURIComponent(message);
    }
    
    const item = itemsData[itemId];
    if (item) {
        document.getElementById('detail-title').textContent = item.title;
        document.getElementById('detail-description').textContent = item.description;
        document.getElementById('detail-price').textContent = item.price;
        document.getElementById('detail-availability').textContent = item.availability;
        document.getElementById('detail-rating').textContent = item.rating;
        document.getElementById('item-name').textContent = item.title;
        document.title = item.title + ' - My Website';
    }
});
