import axios from 'axios';

const iam_token = process.env.IBM_ML_TOKEN;
const wmlToken = `Bearer ${iam_token}`;
const mlInstanceId = process.env.IBM_ML_INSTANCE;
const scoring_url = process.env.SCORING_URL;

async function callMachineLearningService(
  scoring_url,
  token,
  mlInstanceID,
  payload
) {
  const response = await axios({
    method: 'post',
    url: scoring_url,
    data: payload,
    headers: {
      Accept: 'application/json',
      Authorization: token,
      'ML-Instance-ID': mlInstanceID,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  if (response.data.predictions) {
    return response.data.predictions[0].values[0][0];
  }
  return '';
}

exports.callWatsonML = async function(payload) {
  const book_code = await callMachineLearningService(
    scoring_url,
    wmlToken,
    mlInstanceId,
    payload
  );

  return book_code.trim();
};
