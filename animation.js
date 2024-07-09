document.querySelectorAll('.open-btn').forEach(button => {
    button.addEventListener('click', () => {
        const contentDiv = button.nextElementSibling;
        
        if (contentDiv && contentDiv.classList.contains('content')) {
            // Hide other content divs
            document.querySelectorAll('.content').forEach(div => {
                if (div !== contentDiv) {
                    div.style.maxHeight = '0';
                }
            });

            // Toggle max-height to reveal/hide content
            contentDiv.style.maxHeight = contentDiv.style.maxHeight === '0px' ? contentDiv.scrollHeight + 'px' : '0px';
        }
    });
});