

const user = {
    name: "Pasha",
    lastname: "Puhlikov",
    email: "pashka@ya.ru",
    id: 1,
    about: "Тут рассказываю о себе и своих увлечениях",
    avatar: "https://th.bing.com/th/id/OIP.sz6C1lirzSN5bnOzPDoPEgAAAA?pid=ImgDet&rs=1%22",
};

// const users = {
//     0: { name: "Юлия", lastname: "Петрова" },
//     1: { name: "Константин", lastname: "Тетерин" },
//     2: { name: "Петр", lastname: "Петров" },
//     3: { name: "Терентий", lastname: "Иванов" },
//     4: { name: "Владимир", lastname: "Ульянов" },
// };

export function getUser() {
    return user
}

// export function getUsers() {
//     return users;
// }

export async function getUsers() {
    let response = await fetch("http://a0567429.xsph.ru/getUsers");
    let users = await response.json();
    return users;
}