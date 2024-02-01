const getReceipes = async () => {
    try {
        // Fetch data from your local server
        const response = await fetch('http://localhost:8000/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Assuming the response is in JSON format
        const entries = await response.json();
        console.log(entries);
        } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

console.log(getReceipes());