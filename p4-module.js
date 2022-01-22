const {data} = require('./p4-data'); 

const getQuestions = () => {
  let qs = [];
    for(i=0; i < data.length; i++) {
        qs.push(data[i].question);
    }
    return qs;
};

const getAnswers = () => {
  let as = [];
  for(i=0; i < data.length; i++) {
      as.push(data[i].answer);
  }
  return as
};

const getQuestionsAnswers = () => {return data.slice()};

const getQuestion = (number = "") => {
  const q = {
    error: "",
    number: "",
    question: ""
  }
  try {
    if(Number.isInteger(number) == false) throw "Question number must be an integer";
    if(number < 1 ) throw "Question number must be >= 1";
    if(number > data.length ) throw `Question number must be less than the number of questions (${data.length})`;
    
  } catch (err) {
    q.error = err;
  } finally {
    if(q.error === "" ) {
      q.question = data[number - 1].question;
      q.number = number;
    }
    return q;
  }
};

const getAnswer = (number = "") => {
  const a = {
    error: "",
    number: "",
    answer: ""
  }
  try {
    if(Number.isInteger(number) == false) throw "Answer number must be an integer";
    if(number < 1 ) throw "Answer number must be >= 1";
    if(number > data.length ) throw `Answer number must be less than the number of answers (${data.length})`;
    
  } catch (err) {
    a.error = err;
  } finally {
    if(a.error === "" ) {
      a.answer = data[number - 1].answer;
      a.number = number;
    }
    return a;
  }
};

const getQuestionAnswer = (number = "") => {
  const qa = {
    error: "",
    number: "",
    question: "",
    answer: ""
  }
  try {
    if(Number.isInteger(number) == false) throw "Question number must be an integer";
    if(number < 1 ) throw "Question number must be >= 1";
    if(number > data.length ) throw `Question number must be less than the number of questions (${data.length})`;
    
  } catch (err) {
    qa.error = err;
  } finally {
    if(qa.error === "" ) {
      qa.question = data[number - 1].question;
      qa.answer = data[number - 1].answer;
      qa.number = number;
    }
    return qa;
  }
};

const addQuestionAnswer = (info = {}) => {
  const qa = {
    error: "",
    number: "",
    question: "",
    answer: ""
  }
  try {
    if(info.question === undefined) throw "Object question property required";
    if(info.answer === undefined) throw "Object answer property required";
  } catch (err) {
    qa.error = err;
    qa.number = -1;
  } finally {
    if(qa.error === "" ) {
      qa.question = info.question;
      qa.answer = info.answer;
      qa.number = data.length + 1;
      data.push(info);
    }
    return qa;
  }
};

const updateQuestionAnswer = (info = {}) => {
  const qa = {
    error: "",
    message: "",
    number: ""
  }

  try {
    if(info.answer === undefined && info.question === undefined) throw "Object question property or answer property required";
    if(Number.isInteger(info.number) === false || info.number < 1 || info.number > data.length) throw "Object number property must be a valid integer";  
  } catch (err) {
    qa.error = err;
  } finally {
    if(qa.error === "" ) {
      qa.message = `Question ${info.number} updated`;
      qa.number = info.number;
      if(info.question != undefined){
      data[(info.number - 1)].question = info.question;}
      if(info.answer != undefined){
      data[(info.number - 1)].answer = info.answer;}
    }
    return qa;
  }
};

const deleteQuestionAnswer = (info = {}) => {
  const qa = {
    error: "",
    message: "",
    number: ""
  }

  try {
    if(Number.isInteger(info) === false) throw "Question/answer number must be an integer";
    if(info < 1 ) throw "Question/answer number must be >= 1";
    if(info > data.length ) throw `Question/answer number must be less than the number of questions (${data.length})`;
  } catch (err) {
    qa.error = err;
  } finally {
    if(qa.error === "" ) {
      qa.message = `Question ${info} delted`;
      qa.number = info;
      data.splice((info -1), 1);
    }
    return qa;
  }
}

module.exports = {
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  addQuestionAnswer,
  updateQuestionAnswer,
  deleteQuestionAnswer
};



