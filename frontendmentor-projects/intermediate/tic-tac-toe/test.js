function test(oppMoves) {
  const solutions = {
    1: [
      [2, 3],
      [4, 7],
      [5, 9],
    ],
    2: [
      [1, 3],
      [5, 8],
    ],
    3: [
      [1, 2],
      [5, 7],
      [6, 9],
    ],
    4: [
      [1, 7],
      [5, 6],
    ],
    5: [
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6],
    ],
    6: [
      [3, 9],
      [4, 5],
    ],
    7: [
      [1, 4],
      [8, 9],
      [3, 5],
    ],
    8: [
      [2, 5],
      [7, 9],
    ],
    9: [
      [1, 5],
      [3, 6],
      [7, 8],
    ],
  };
  console.log(oppMoves)
  let move;

  for (const tile in solutions) {
    if (move) break
    for (const lst of solutions[tile]) {
      if (oppMoves.has(lst[0]) && oppMoves.has(lst[1])) {
        console.log('test')
        move = tile
        break
      }
    }
  }

  return move
}

