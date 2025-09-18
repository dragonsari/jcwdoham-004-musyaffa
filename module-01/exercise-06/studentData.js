class Student{
    studentName;
    studentMail;
    studentAge;
    studentScore;
    
    constructor(_name,_mail,_age,_score){
        this.studentName=_name;
        this.studentMail=_mail;
        this.studentAge=_age;
        this.studentScore=_score;
    }
    

    GetScore(){
        return this.studentScore;
    }

    GetAge(){
        return this.studentAge;
    }

}