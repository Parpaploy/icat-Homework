"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
const fetchAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get("https://icat-trainee-api.onrender.com/getData");
    /* console.log({
            name: data.data.data[0].name,
            age: data.data.data[0].age,
            hobbyName: data.data.data[0].hobbyName
        },
        {
            name: data.data.data[1].name,
            age: data.data.data[1].age,
            hobbyName: data.data.data[1].hobbyName
        },
        {
            name: data.data.data[2].name,
            age: data.data.data[2].age,
            hobbyName: data.data.data[2].hobbyName
        }
    ) */
    //console.log(data.data.data[2].hobbie[0].rate, data.data.data[2].hobbie[1].rate, data.data.data[2].hobbie[2].rate)
    function information(name, age, hobbyName) {
        return { name, age, hobbyName };
    }
    function compareHobby(i) {
        // if(data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[1].rate && data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[2].rate) {
        //         return data.data.data[i].hobbie[0].hobbyName
        //     }
        // if(data.data.data[i].hobbie[1].rate > data.data.data[i].hobbie[0].rate && data.data.data[i].hobbie[1].rate > data.data.data[i].hobbie[2].rate) {
        //         return data.data.data[i].hobbie[1].hobbyName
        //     }
        // if(data.data.data[i].hobbie[2].rate > data.data.data[i].hobbie[0].rate && data.data.data[i].hobbie[2].rate > data.data.data[i].hobbie[1].rate) {
        //     return data.data.data[i].hobbie[2].hobbyName
        // }
        if (data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[1].rate) {
            if (data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[2].rate) {
                return data.data.data[i].hobbie[0].hobbyName;
            }
            else {
                return data.data.data[i].hobbie[2].hobbyName;
            }
        }
        else if (data.data.data[i].hobbie[1].rate > data.data.data[i].hobbie[2].rate) {
            return data.data.data[i].hobbie[1].hobbyName;
        }
        else {
            return data.data.data[i].hobbie[2].hobbyName;
        }
    }
    console.log(information(data.data.data[0].name, data.data.data[0].age, compareHobby(0)));
    console.log(information(data.data.data[1].name, data.data.data[1].age, compareHobby(1)));
    console.log(information(data.data.data[2].name, data.data.data[2].age, compareHobby(2)));
    // const information:dataApi = {
    //     name: data.data.data[0].name,
    //     age: data.data.data[0].age,
    //     hobbyName: data.data.data[0].hobbyName
    // }
});
fetchAPI();
// const DataApi:dataApi {
//     name: data.data.data[0].name,
//     age: data.data.data[0].age,
//     hobbyName: data.data.data[0].hobbyName
// }
// const fetchAPI = async () => {
//      const MyAPI = axios.get('${myAPI}/api');
// const api = await Promise.all(MyAPI)
// console.log({
//     name: api.data.name,
//     age: api.data.age,
//     hobbyName: api.data.hobbyName,
//     })
// }
// fetchAPI();
// const axios = require("axios");
// const fetchAPI = async () => {
//     try {
//         const { data } = await axios.get("https://icat-trainee-api.onrender.com/getData");
//         // Assuming the structure of the returned data
//         // For example, data might look like this:
//         // { data: [{ name: 'bj', age: 0, hobbyName: 'kl' }, ...] }
//         if (Array.isArray(data)) {
//             data.forEach(item => {
//                 console.log(item.name);
//             });
//         } else {
//             console.error("Unexpected data structure:", data);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };
// fetchAPI();
// const data_api:dataApi = [
//     {
//         name: "bj",
//         age: 0,
//         hobbyName: "kl"
//     },
//     {
//         name: "oij",
//         age: 0,
//         hobbyName: "jo"
//     },
//     {
//         name: "o",
//         age: 0,
//         hobbyName: "pi"
//     }
// ]
