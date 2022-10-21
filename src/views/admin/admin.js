
import * as Api from '/api.js';

window.onload = async function () {
    const localData = window.localStorage.getItem('user')
    if (localData != null){
        const postData = await Api.get('http://localhost:8080/api/consultings');
        const tables = document.getElementById('member')
        let datas = ''
        let n = 1
        for (const i of postData){
            datas += `<tr><td>${n}</td><td>${i.phone} / ${i.ip}</td><td>${i.car}</td><td>${i.selects}</td><td>${i.name}</td><td>${i.kr_time}</td></tr>`
            n += 1
        }
        tables.innerHTML += datas
    } else {
        location.href = "/login";
    }
}