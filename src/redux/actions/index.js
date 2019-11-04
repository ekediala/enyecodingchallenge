export default function actionCreator(type, payload = {}) {
  return {
    type,
    payload,
  };
}
