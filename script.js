
    const images = [
        { id: 'image1', newSrc: 'part1.5.png' },
        { id: 'image2', newSrc: 'part2.5.png' },
        { id: 'image3', newSrc: 'part3.5.png' },
    ];

    images.forEach(image => {
        const imgElement = document.getElementById(image.id);
        
        imgElement.addEventListener('click', function() {
            imgElement.src = image.newSrc; // Change to new image on click
        });
    });