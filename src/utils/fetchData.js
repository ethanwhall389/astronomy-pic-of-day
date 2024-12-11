export default async function fetchData(url, setImages, setIsLoading) {
    const response = await fetch(url)   
    const data = await response.json()
    setIsLoading(false);
    
    // Check if the response is already an array; if not, create one. This is so .map will work properly.
    if (data.length !== undefined) {
        setImages(data)
    } else {
        setImages([data]);
    }
}