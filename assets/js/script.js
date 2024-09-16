
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-header div');
    const tabContent = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function() {
            // Remove 'active' class from all tabs and content
            tabs.forEach(item => item.classList.remove('active'));
            tabContent.forEach(item => item.classList.remove('active'));

            // Add 'active' class to clicked tab and corresponding content
            this.classList.add('active');
            const tabID = this.getAttribute('data-tab');
            document.getElementById(tabID).classList.add('active');
        });
    });
});

