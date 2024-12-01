function billingApp() {
    return {
        newItem: { name: '', quantity: 1, price: 0 },
        items: JSON.parse(localStorage.getItem('items') || '[]'),

        addItem() {
            if (this.newItem.name && this.newItem.quantity > 0 && this.newItem.price > 0) {
                this.items.push({ ...this.newItem });
                this.saveItems();
                this.newItem = { name: '', quantity: 1, price: 0 };
            }
        },

        removeItem(index) {
            this.items.splice(index, 1);
            this.saveItems();
        },

        subtotal() {
            return this.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
        },

        tax() {
            return this.subtotal() * 0.10;
        },

        total() {
            return this.subtotal() + this.tax();
        },

        saveItems() {
            localStorage.setItem('items', JSON.stringify(this.items));
        }
    };
}
