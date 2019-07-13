/**
 * 分解大前提的句子结构
 * 比如将 “所有的猫都有尾巴”，分解成 [所有的, 猫, 都, 有尾巴]
 */
export function splitMajorPremise(sentence) {
  const terms = ['所有的', '都'];
  const splits = [];
  const result = [];

  // 找出分割点
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    const index = sentence.indexOf(term);
    splits.push(index, index + term.length);
  }

  for (let i = 0; i < splits.length; i++) {
    result.push(sentence.slice(splits[i], splits[i+1]));
  }
  return result;
}


/**
 * 分解小前提的句子结构
 * 比如将 '橘猫是一只猫'，分解成 [橘猫, 是, 一只猫]
 */
export function splitMinorPremise(sentence) {
  const terms = ['是'];
  const splits = [];
  const result = [];

  // 找出分割点
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    const index = sentence.indexOf(term);
    splits.push(index, index + term.length);
  }

  result.push(sentence.slice(0, splits[0]));
  for (let i = 0; i < splits.length; i++) {
    result.push(sentence.slice(splits[i], splits[i+1]));
  }
  console.log(result);
  return result;
}


export function isABelongsToB(a, b) {
  if (a === b) {
    return true;
  }

  const numbers = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const classifiers = ['只', '个', '条', '群'];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    for (let j = 0; j < classifiers.length; j++) {
      const classifier = classifiers[j];
      if (a === number + classifier + b) {
        return true;
      }
    }
  }

  return false;
}


