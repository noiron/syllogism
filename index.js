import { splitMajorPremise, splitMinorPremise, isABelongsToB } from "./utils";

const sentence1 = '所有的猫都有尾巴';
const sentence2 = '橘猫是一只猫';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

input1.value = sentence1;
input2.value = sentence2;

document.getElementById('begin').onclick = begin;

function begin() {

  const sentence1 = input1.value;
  const sentence2 = input2.value;

  // ["所有的", "猫", "都", "有尾巴"]
  const result1 = splitMajorPremise(sentence1);
  // ["橘猫", "是", "一只猫"]
  const result2 = splitMinorPremise(sentence2);

  // 橘猫
  const a = result2[0];
  // 猫
  const b = result1[1];
  // 一只猫
  const c = result2[2];

  console.log(a, b);

  if (isABelongsToB(c, b)) {
    console.log(a, result1[3]);
    document.getElementById('result').innerHTML = a + result1[3];
  }
}