function diffFinder(
  targetArray: string[],
  compareArray: string[],
  originaLArray: string[]
): { duplicatedElement: string | null; replaceElement: string | null } {
  let duplicatedElement: string | null = null;
  let replaceElement: string | null = null;

  targetArray.forEach((element, index) => {
    if (compareArray.includes(element)) {
      duplicatedElement = element;
      replaceElement = originaLArray[index];
      targetArray[index] = replaceElement;
    }
  });

  return {
    duplicatedElement,
    replaceElement,
  };
}

const pokemon: string[] = ['피카츄', '라이츄', '파이리', '꼬부기'];
const digimon: string[] = ['코로몬', '테일몬', '가브몬', '꼬부기'];
const digimonOriginalData: string[] = ['코로몬', '테일몬', '가브몬', '브이몬'];

console.log(diffFinder(digimon, pokemon, digimonOriginalData));
