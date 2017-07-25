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
function printSheet() {
    for(let i=0;i<localStorage,length;i++){
        let key=localStorage.getItem.key(i);
        let value=localStorage.getItem(key);
        value=JSON.parse(value);
        let row=document.createElement('tr');
        let nameCell=document.createElement('td');
        nameCell.innerHTML=value.name;
        
    }

}
//testMessage('4,4,4,4,5:4,4:8,9:4');

