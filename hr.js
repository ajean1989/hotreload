document.body.style.border = '5px solid blue';



async function hr()
{
    let response = await fetch('http://localhost:8000/hr.php');
    let data = await response.json();
    console.log(data.size);   
    console.log(data.cookie); 
    console.log("------"); 
    console.log(typeof data) 
    let size = data.size;
    let cookie = data.cookie;
    if(size != cookie)
      {
        let previousData = size;
        let wait = await hrSendPreviousData(previousData);
        if(wait)
          {
            window.location.reload();
          }
        

      }
  
}

  async function hrSendPreviousData(previousData)
      {
        let body = JSON.stringify(previousData);
        let response = await fetch('http://localhost:8000/hr.php',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                            },
                        body: body
                    });
        let dataSent = await response.json();
        console.log(dataSent); 
            return true;
      }


  setInterval(hr, 1000);








