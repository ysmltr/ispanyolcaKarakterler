document.addEventListener('DOMContentLoaded', () => {
    const copyBoxes = document.querySelectorAll('.copy-box');

    copyBoxes.forEach(box => {
        box.addEventListener('click', async () => {
            const text = box.textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                // Just add the copy animation
                box.classList.add('copy-animation');
                
                // Remove animation after delay
                setTimeout(() => {
                    box.classList.remove('copy-animation');
                }, 300);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
});