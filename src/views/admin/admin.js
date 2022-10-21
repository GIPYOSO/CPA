
import * as Api from '/api.js';

window.onload = async function () {
    const localData = window.localStorage.getItem('user')
    if (localData != null){
        let postData = await Api.get('http://49.247.45.148:8080/api/consultings');
        const phone_list = []
        const ip_list = []
        for (const i of postData){
            const ip = i.ip
            const phone = i.phone
            ip_list.push(ip)
            let ip_count = ip_list.filter(element => ip === element).length;
            phone_list.push(phone)
            let phone_count = phone_list.filter(element => phone === element).length;
            i.ip_count = ip_count
            i.phone_count = phone_count
        }
        
        postData = postData.reverse()
        const tables = document.getElementById('member')
        let datas = ''
        let n = 1
        for (const i of postData){
            const ip = i.ip
            const phone = i.phone
            datas += `<tr><td>${n}</td><td>${i.phone} ${i.ip}</td><td>${i.ip_count}</td><td>${i.phone_count}</td><td>${i.car}</td><td>${i.selects}</td><td>${i.name}</td><td>${i.kr_time}</td></tr>`
            n += 1
        }
        tables.innerHTML += datas
    } else {
        location.href = "/login";
    }
}