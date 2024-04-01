function getRandomFromArr(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export function getRandomName() {
  const titleList: string[] = [
    "神秘的",
    "超绝可爱的",
    "忧郁的",
    "下面涨涨的",
    "普通的",
    "路过的",
  ];
  const nameList: string[] = ["萌萌百合豚", "铁血单推人", "vr信", "小男娘"];
  return `${getRandomFromArr(titleList)}${getRandomFromArr(nameList)}`;
}
