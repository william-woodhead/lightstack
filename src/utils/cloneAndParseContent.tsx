export default function cloneAndParseContent(data) {
  const newData = Object.assign({}, data);
  newData.content = JSON.parse(newData.content);
  return newData;
}
