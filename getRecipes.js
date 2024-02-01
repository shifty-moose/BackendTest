const getReceipes = async () => {
    try {
        const response = await fetch('http://localhost:8000/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const entries = await response.json();
        console.log(entries);
        } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

console.log(getReceipes());