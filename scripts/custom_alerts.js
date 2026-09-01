// Custom Alert System
(function() {
    // Override the default window.alert
    window.alert = function(message) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'custom-alert-overlay';
        
        // Create alert box
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert-box';
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = 'custom-alert-message';
        messageEl.textContent = message;
        
        // Create button
        const btn = document.createElement('button');
        btn.className = 'custom-alert-btn';
        btn.textContent = 'OK';
        
        // Close function
        const closeAlert = () => {
            document.body.removeChild(overlay);
        };
        
        btn.onclick = closeAlert;
        
        // Close on overlay click
        overlay.onclick = (e) => {
            if (e.target === overlay) closeAlert();
        };

        // Append elements
        alertBox.appendChild(messageEl);
        alertBox.appendChild(btn);
        overlay.appendChild(alertBox);
        document.body.appendChild(overlay);
        
        // Focus button for accessibility
        btn.focus();
    };
})();
