import axios from 'axios';

const shortUrl=async(url:string)=>{
const res=await axios.post('https://url-shortner10.p.rapidapi.com/lits.rocks/',{
    headers:{
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1b426aca48mshdbabd82da60fca4p1894bbjsndcf818f12ed0',
    'X-RapidAPI-Host': 'url-shortner10.p.rapidapi.com'
    },
    data: '{"url":"http://drasticcoder.me/terminal.html"}'
})
return res;
}
export default shortUrl