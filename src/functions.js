
let functions = {
    calculateWinner(squares) {
        const lines = [
            [0,1,2], //橫線
            [3,4,5], //橫線
            [6,7,8], //橫線
            [0,3,6], //豎線
            [1,4,7], //豎線
            [2,5,8], //豎線
            [0,4,8], //斜線
            [2,4,6], //斜線
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];
            //第一格不是null
            //第一格和第二格一樣(都是O或X)
            //第二格和第三格一樣(都是O或X)
            if(squares[a] && squares[a] === squares[b] &&  squares[a] === squares[c] ){
                return squares[a]; //O或X
            }
        }
        return null;
    }
}

export default functions;