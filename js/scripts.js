function Piece(player, type, value) {
  this.player = player;
  this.type = type;
  this.value = value;
  this.position = []
}

function Position(x,y) {
  this.x = x;
  this.y = y;
}
var pieces = []
function createPieces() {
  var br1 = new Piece("B", "R", "4")
  var br1pos = new Position(1,8);
  br1.position.push(br1pos);
  var bn1 = new Piece("B", "N", "2")
  var bn1pos = new Position(2,8);
  bn1.position.push(bn1pos);
  var bb1 = new Piece("B", "B", "3")
  var bb1pos = new Position(3,8);
  bb1.position.push(bb1pos);
  var bk = new Piece("B", "K", "6")
  var bkpos = new Position(4,8);
  bk.position.push(bkpos);
  var bq = new Piece("B", "Q", "5")
  var bqpos = new Position(5,8);
  bq.position.push(bqpos);
  var bb2 = new Piece("B", "B", "3")
  var bb2pos = new Position(6,8);
  bb2.position.push(bb2pos);
  var bn2 = new Piece("B", "N", "2")
  var bn2pos = new Position(7,8);
  bn2.position.push(bn2pos);
  var br2 = new Piece("B", "R", "4")
  var br2pos = new Position(8,8);
  br2.position.push(br2pos);


  var wr1 = new Piece("W", "R", "4")
  var wr1pos = new Position(1,1);
  wr1.position.push(wr1pos);
  var wn1 = new Piece("W", "N", "2")
  var wn1pos = new Position(2,1);
  wn1.position.push(wn1pos);
  var wb1 = new Piece("W", "B", "3")
  var wb1pos = new Position(3,1);
  wb1.position.push(wb1pos);
  var wk = new Piece("W", "K", "6")
  var wkpos = new Position(4,1);
  wk.position.push(wkpos);
  var wq = new Piece("W", "Q", "5")
  var wqpos = new Position(5,1);
  wq.position.push(wqpos);
  var wb2 = new Piece("W", "B", "3")
  var wb2pos = new Position(6,1);
  wb2.position.push(wb2pos);
  var wn2 = new Piece("W", "N", "2")
  var wn2pos = new Position(7,1);
  wn2.position.push(wn2pos);
  var wr2 = new Piece("W", "R", "4")
  var wr2pos = new Position(8,1);
  wr2.position.push(wr2pos);
pieces.push(br1, bn1, bb1, bk, bq, bb2, bn2, br2, wr1, wn1, wb1, wk, wq, wb2, wn2, wr2)
  for (i=0;i<8; i++){
    var bp = new Piece("B", "P", "1")
    var bppos = new Position(i+1,7);
    bp.position.push(bppos);
    var wp = new Piece("W", "P", "1")
    var wppos = new Position(i+1,2);
    wp.position.push(wppos);
    pieces.push(bp, wp)
  }
}

$(document).ready(function(){
  createPieces()
  console.log(pieces);
})
