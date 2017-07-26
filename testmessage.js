/**
 * Created by chj on 17-7-24.
 */
function testMessage(inputStr) {

    let temp=inputStr.slice().split(",");
    for(let i=0;i<temp.length;i++){
        if(/:/.test(temp[i])){
            temp[i]=temp[i].split(':');
        }
    }
    if(temp.length>=5){
        alert(`学生${temp[0]}的成绩被添加`);
        let stu=new Student(temp[0],temp[1],temp[2],temp[3],temp[4][1],temp[5][1],temp[6][1],temp[7][1]);
        //alert(stu.id);
        //console.log(stu);

        localStorage.setItem(stu.id,JSON.stringify(stu));

    }else{
        alert('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）');
    }

    return false;
}
class Student{
    constructor(name,id,nation,klass,math,chinese,english,code){
        this.name=name;
        this.id=id;
        this.nation=nation;
        this.klass=klass;
        this.math=math;
        this.chinese=chinese;
        this.english=english;
        this.code=code;
    }
}
function changeStu(inputStr) {
    let temp=inputStr.slice().split(",");
    $("#changeTable").empty();
    $("#changeTable").append(`<tr><td>姓名</td><td>语文成绩</td><td>数学成绩</td><td>英语成绩</td><td>编程成绩</td><td colspan="2">修改项</td></tr>`);
    let find=0;
    let str="";
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        let value=localStorage.getItem(key);
        value=JSON.parse(value);
        for(let j=0;i<temp.length;i++){
            if(temp.indexOf(value.id)>=0){
                str+=`<tr date-stuId="${value.id}"><td><input class="input-1" id="${value.id}name" type="text" value="${value.name}"></input></td><td><input class="input-1" type="text" value="${value.chinese}"></input></td><td><input type="text" class="input-1" value="${value.math}"></input></td><td><input type="text" class="input-1" value="${value.english}"></input></td><td><input type="text" class="input-1" value="${value.code}"></input></td><td><input class="input-1 blue button"type="button" value="确认修改" id="change${value.id}"></td><td><input class="input-1 blue button"type="button" id="${value.id}" onclick="deleteStudent(this)" value="确认删除"></td></tr>`
                find=1;

            }


        }
    }
    if(find==1){
        $("#changeTable").append(str);
        let a=document.createElement('input');
        a.type='text';
        a.value="确认修改"
    }else {
        alert("您输入的信息不存在")
    }
}
function deleteStudent(input) {
    alert(input);



}
function printSheet(inputStr) {
    let temp=inputStr.slice().split(",");

    event.preventDefault();
    $("#stuTable").empty();
    $("#stuTable").append(`<tr><td>姓名</td><td>语文成绩</td><td>数学成绩</td><td>英语成绩</td><td>编程成绩</td><td>平均分</td><td>总分</td></tr>`);
    let sumarray=[];
    let str="";
    let find=0;

    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        let value=localStorage.getItem(key);
        value=JSON.parse(value);
        sumarray.push(calSum(value));
        for(let j=0;i<temp.length;i++){
            if(temp.indexOf(value.id)>=0){
                str+=`<tr><td>${value.name}</td><td>${value.chinese}</td><td>${value.math}</td><td>${value.english}</td><td>${value.code}</td><td>${calAvg(value)}</td><td>${calSum(value)}</td></tr>`
                find=1;
            }


        }
    }
    if(find==1){
        let summid=calSumMid(sumarray);
        let sumave=calSumAve(sumarray);
        str+=`<tr><td colspan="2">总分中位数</td><td colspan="5">${summid}</td></tr>`
        str+=`<tr><td colspan="2">总平均分</td><td colspan="5">${sumave}</td></tr>`;
        $("#stuTable").append(str);
    }else {
        alert("您输入的信息不存在");
    }





}
//testMessage('4,4,4,4,5:4,4:8,9:4');

function calSum(student) {
    return parseFloat(student.chinese)+parseFloat(student.math)+parseFloat(student.english)+parseFloat(student.code);
}
function calAvg(student) {
    return (parseFloat(student.chinese)+parseFloat(student.math)+parseFloat(student.english)+parseFloat(student.code))/4;
}
function calSumAve(sumArray) {
    var sum=0;
    var sumAve=0;
    for(var i in sumArray){
        sum+=sumArray[i];
    }
    sumAve=sum/sumArray.length;
    return sumAve;
}
function calSumMid(sumArray) {
    var sumMid=0;
    var orderedSumArray=sumArray.slice().sort();
    if(orderedSumArray.length%2==0){
        sumMid=(orderedSumArray[orderedSumArray.length/2]+orderedSumArray[(orderedSumArray.length/2)-1])/2
    }
    else{
        sumMid=orderedSumArray[(orderedSumArray.length-1)/2];
    }
    return sumMid;
}