var eqn = '(1+((2+3)*(4*5)))';
function solveEqn(x) {
    let op = [];
    let val = [];
    for (var i = 0; i < x.length; i++) {
        let temp = x[i]
        if (temp == ')') {
            var a = val.pop()*1
            var b = val.pop()*1
            var op1 = op.pop()
            var output = ''
            if(op1 =='+'){
                output = a+b;
            } else if(op1 =='*'){
                output = a*b;
            }
          val.push(output);
        } else if (temp == '+' || temp == '*') {
            op.push(temp)
        } else if (temp != '(') {
            val.push(temp);
        }
    }
    console.log('Output',val[0]);
}

solveEqn(eqn);