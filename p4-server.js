
const fastify = require("fastify")();
const {getQuestion, getAnswer, getQuestionAnswer, getQuestions, getAnswers, getQuestionsAnswers, addQuestionAnswer, updateQuestionAnswer, deleteQuestionAnswer} = require('./p4-module'); 


fastify.get("/cit/question", (req, res) => {

    const allQs = {
        error: "",
        statusCode: 200,
        questions: getQuestions()
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(allQs));
});

fastify.get("/cit/answer", (req, res) => {

    const allAs = {
        error: "",
        statusCode: 200,
        answers: getAnswers()
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(allAs));
});

fastify.get("/cit/questionanswer", (req, res) => {

    const allQAs = {
        error: "",
        statusCode: 200,
        questions_answers: getQuestionsAnswers()
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(allQAs));
});

fastify.get("/cit/question/:number", (req, res) => {
    let numberFromClient = req.params.number;
    let toClient = getQuestion(Number(numberFromClient))

    const Qs = {
        error: toClient.error,
        statusCode: 200,
        question: toClient.question,
        number: toClient.number
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(Qs));
});

fastify.get("/cit/answer/:number", (req, res) => {
    let numberFromClient = req.params.number;
    let toClient = getAnswer(Number(numberFromClient));


    const As = {
        error: toClient.error,
        statusCode: 200,
        answer: toClient.answer,
        number: toClient.number
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(As));
});

fastify.get("/cit/questionanswer/:number", (req, res) => {
    let numberFromClient = req.params.number;
    let toClient = getQuestionAnswer(Number(numberFromClient));

    const QAs = {
        error: toClient.error,
        statusCode: 200,
        question: toClient.question,
        answer: toClient.answer,
        number: toClient.number
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(QAs));
});

fastify.get("*", (req, res) => {

    const unmatched = {
        error: "Route not found",
        statusCode: 404,
    }
    
     res
        .code(404)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(unmatched));
});

fastify.post("/cit/question", (req, res) => {
    let fromClient = JSON.parse(req.body);
    let toClient = addQuestionAnswer();
    if(fromClient != null){
        toClient = addQuestionAnswer(fromClient);
    }
    
    

    const QAsAdd = {
        error: toClient.error,
        statusCode: 201,
        number: toClient.number
    }
    
     res
        .code(201)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(QAsAdd));
});


fastify.put("/cit/question", (req, res) => {
    let fromClient = JSON.parse(req.body);
    let toClient = updateQuestionAnswer();
    if(fromClient != null){
        toClient = updateQuestionAnswer(fromClient);
    }
    
    

    const QAUpdate = {
        error: toClient.error,
        statusCode: 200,
        number: toClient.number
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(QAUpdate));
});

fastify.delete("/cit/question/:number", (req, res) => {
    let numberFromClient = req.params.number;
    let toClient = deleteQuestionAnswer(Number(numberFromClient));

    const deleteQ = {
        error: toClient.error,
        statusCode: 200,
        number: toClient.number
    }
    
     res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(JSON.stringify(deleteQ));
});

const hostname = 'localhost';
const port = 8080;
fastify.listen(port, hostname, () => {
    console.log(`server running @ http://${hostname}:${port}/`)
});