export async function fetchFood() {
    try{
        const response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}