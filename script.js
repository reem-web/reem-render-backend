
document.getElementById('sendData').addEventListener('click' ,()=>{
    test()
})
async function test(){
    const dataToSend = {
        name: 'mohammad',
        age: 30,
        email: 'mohammad@gmail.com'
    }

    const response = await fetch('http://localhost:3000',{
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body: JSON.stringify(dataToSend)
    })
   
    try {
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error parsing response:', error);
    }
    
   
   }