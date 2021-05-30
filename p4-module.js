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

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  // addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}

// updateQuestionAnswer()
if (testUpdate) {
  testing(
    "updateQuestionAnswer",
    { d: "()", f: updateQuestionAnswer() },
    { d: "({})", f: updateQuestionAnswer({}) },
    { d: '(question: "Q1U")', f: updateQuestionAnswer({ question: "Q1U" }) },
    { d: '(answer: "A1U")', f: updateQuestionAnswer({ answer: "A1U" }) },
    {
      d: '(question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ question: "Q1U", answer: "A1U" }),
    },
    {
      d: '(number: 1, question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ number: 1, question: "Q1U", answer: "A1U" }),
    }
  );
  console.log(data);
}

// deleteQuestionAnswer()
if (testDelete) {
  testing(
    "deleteQuestionAnswer",
    { d: "()", f: deleteQuestionAnswer() },
    { d: "(0)", f: deleteQuestionAnswer(0) },
    { d: "(1)", f: deleteQuestionAnswer(1) },
    { d: "(0)", f: deleteQuestionAnswer(4) }
  );
  console.log(data);
}


