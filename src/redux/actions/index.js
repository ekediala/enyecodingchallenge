export default function actionCreator(type, userData = {}) {
  return {
    type,
    userData,
  };
}
