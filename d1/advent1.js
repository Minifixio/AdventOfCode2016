var path = ['L4','R2','R4','L5','L3','L1','R4','R5','R1','R3','L3','L2','L2','R5','R1','L1','L2','R2','R2','L5','R5','R5','L2','R1','R2','L2','L4','L1','R5','R2','R1','R1','L2','L3','R2','L5','L186','L5','L3','R3','L5','R4','R2','L5','R1','R4','L1','L3','R3','R1','L1','R4','R2','L1','L4','R5','L1','R50','L4','R3','R78','R4','R2','L4','R3','L4','R4','L1','R5','L4','R1','L2','R3','L2','R5','R5','L4','L1','L2','R185','L5','R2','R1','L3','R4','L5','R2','R4','L3','R4','L2','L5','R1','R2','L2','L1','L2','R2','L2','R1','L5','L3','L4','L3','L4','L2','L5','L5','R2','L3','L4','R4','R4','R5','L4','L2','R4','L5','R3','R1','L1','R3','L2','R2','R1','R5','L4','R5','L3','R2','R3','R1','R4','L4','R1','R3','L5','L1','L3','R2','R1','R4','L4','R3','L3','R3','R2','L3','L3','R4','L2','R4','L3','L4','R5','R1','L1','R5','R3','R1','R3','R4','L1','R4','R3','R1','L5','L5','L4','R4','R3','L2','R1','R5','L3','R4','R5','L4','L5','R2'];

console.log(path.length);
var direction = 'N';
var x = 0;
var y = 0;


for (var current of path){

  var rotation = current.charAt(0);
  var offset = parseInt(current.substring(1, current.lenght));
  console.log('Rotation : %s, Offset : %s', rotation, offset);
  switch(direction){
    case 'N':
      if(rotation == 'R'){
        direction = 'E';
      }else{
        direction = 'O';
      }
      break;

    case 'S':
      if(rotation == 'R'){
        direction = 'O';
      }else{
        direction = 'E';
      }
      break;

    case 'O':
      if(rotation == 'R'){
        direction = 'N';
      }else{
        direction = 'S';
      }
      break;

    case 'E':
      if(rotation == 'R'){
        direction = 'S';
      }else{
        direction = 'N';
      }
      break;

  }

  switch(direction){

    case 'N': y = y + offset; break;

    case 'S': y = y - offset; break;

    case 'O': x = x - offset; break;

    case 'E': x = x + offset; break;

  }

}

console.log('X : %s, Y : %s, Nb de blocks : %s', x, y, Math.abs(x) + Math.abs(y));
