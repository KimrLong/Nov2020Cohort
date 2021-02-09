

// let myObj = {
//     fName: 'Kim',
//     lName: 'Long'
// };

//destructuring allows to make 
//declaration.. key name you want to unpack out of OBJ
// const{fName, lName} = myObj;

//same as destructured above^^^
// let fName = myObj.fName;
// let lName = myObj.lName;



class Button { //methods //cont=structor initializes data
    contructor(color, text){//say 'this' cause its a refrerence
        // this.color = color;
        // this.text = text;
        // this.count = 0;

        this.state = { //individual obj
            color: color,
            text: 0
        }
    }
    print(){

        // console.log(this.color);
        console.log(this.state.color);
    }

    count() {
        this.count+=1 //&1234
    }
    render(){

        //code
        const {color, text, count} = this.state;


        this.print();
        this.count();
        let someVar = 9;
        return(<li>
            {someVar} 
        </li>)  //has to be whole 1 unit youre returning
    }
}

let navButton = new Button('red', 'submit');
navButton.count()
let navButton2 = new Button('puruple', 'Post');
navButton2.count() //&5678
