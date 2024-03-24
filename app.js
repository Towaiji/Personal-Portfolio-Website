let tabs = document.querySelectorAll('a[data-tab]');
let activeTab = 'intro';
let zIndex = 2;

tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        let selectedTab = tab.dataset.tab;
        
        if (selectedTab !== null && selectedTab !== activeTab) {
            let activeTabElement = document.querySelector('.tab.active');
            
            if (activeTabElement) {
                activeTabElement.classList.remove('active');
            }

            activeTab = selectedTab;
            let selectedTabElement = document.getElementById(activeTab);
            
            zIndex++;
            selectedTabElement.style.zIndex = zIndex;
            selectedTabElement.style.setProperty('--x', event.clientX + 'px');
            selectedTabElement.style.setProperty('--y', event.clientY + 'px');
            
            selectedTabElement.classList.add('active');
        }
    });
});
