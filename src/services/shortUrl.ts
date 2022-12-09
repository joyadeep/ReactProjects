import axios from 'axios';

const shortUrl=async(url:string)=>{
const res=await axios.post('https://url-shortener23.p.rapidapi.com/shorten',{
    headers:{
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1b426aca48mshdbabd82da60fca4p1894bbjsndcf818f12ed0',
    'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
    },
    data: '{"url":"http://drasticcoder.me/terminal.html"}'
})
return res;
}
export default shortUrl