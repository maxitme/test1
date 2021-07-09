//bai 1

// function reverseString(string) {
//     let reversedString = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i];
//     }

//     return reversedString;
// }
// console.log(reverseString("Hello"));

//bai 2

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
  
// console.log(titleCase("this a test"));

//bai 3


// function unique(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }
//   console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))

//bai 4

// let  FutureAcademy  = [
//     {
//         id:1,
//         Name:"Thịnh",
//         Age:"23",
//         Salary:"10.000.000",
//         Position:"Giám Đốc"
//     },
//     {
//         id:2,
//         Name:"Hoàng",
//         Age:"22",
//         Salary:"7.000.000",
//         Position:"Quản Lý"
//     },
//     {
//         id:3,
//         Name:"Nguyễn",
//         Age:"20",
//         Salary:"5.000.000",
//         Position:"Nhân Viên"
//     },
// ]
// FutureAcademy.forEach(x =>{
//     console.log(`${x.id}.Tên: ${x.Name} \nTuổi : ${x.Age}\nLương : ${x.Salary}\nChức vụ : ${x.Position}`);
// })
// while(true){
//     let taskFromUser = prompt("Enter your command (Create, Update, Delete)");
//     if(taskFromUser === "create"){
//         let nameOfNewTask = prompt("Enter create New Guys");
//         let ageoftask = Number(prompt("Enter Age"))
//         let salaryoftask = Number(prompt("Enter Salary"))
//         let positionoftask =prompt("Enter position")
//         let New = {
//             id:FutureAcademy.length + 1,
//             Name:nameOfNewTask,
//             Age:ageoftask,
//             Salary:salaryoftask,
//             Position:positionoftask,
//         }  
//         FutureAcademy.push(New);
//         console.log(FutureAcademy)
// }else if(taskFromUser == "delete")
// {
//     let checkID = Number(prompt("Nhập id  nhân viên cần xóa"));
//     FutureAcademy.splice((checkID - 1), 1)
//     console.log(FutureAcademy);
// }else if(taskFromUser == "update")
// {
//     let position = Number(prompt(' nhập vị trí update'));
//     let nameOfNewTask = prompt('nhập tên');
//     let ageoftask = prompt('nhập tuổi');
//     let salaryoftask= prompt('nhập lương');
//     let positionoftask = prompt('nhập chức vụ');
//     for(let i in FutureAcademy){
//         if(Number(i) == position){
//             FutureAcademy[i] = {
//                 name: nameOfNewTask,
//                 age: ageoftask,
//                 salary: salaryoftask,
//                 position: positionoftask
//             }
//         }
//         console.log(FutureAcademy);
//     }
// }
// break;
// }
