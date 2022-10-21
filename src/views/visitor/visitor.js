
import * as Api from '/api.js';

window.onload = async function () {
    const localData = window.localStorage.getItem('user')
    if (localData != null){
        let postData = await Api.get('49.247.45.148:8080/api/visitor');
        
        postData = postData.reverse()
        const tables = document.getElementById('member')
        let datas = ''
        let n = 1
        for (const i of postData){
            datas += `<tr><td>${n}</td><td>${i.ip}</td><td>${i.referrer}</td><td>${i.usergent}</td><td>${i.kr_time}</td></tr>`
            n += 1
        }
        tables.innerHTML += datas
    } else {
        location.href = "/login";
    }
}