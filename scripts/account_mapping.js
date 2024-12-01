function accountMapping() {
    return {
        accName: '',
        accType: '',
        openingBalance: 0,
        narration: '',
        balanceType: '',
        brandName: '',
        productName: '',
        category: '',
        size: '',
        progress: 0,

        save() {
            alert('Save function triggered');
            this.progress = 100;
        },
        
        edit() {
            alert('Edit function triggered');
        },

        delete() {
            alert('Delete function triggered');
            this.resetForm();
        },

        resetForm() {
            this.accName = '';
            this.accType = '';
            this.openingBalance = 0;
            this.narration = '';
            this.balanceType = '';
            this.brandName = '';
            this.productName = '';
            this.category = '';
            this.size = '';
            this.progress = 0;
        }
    };
}
