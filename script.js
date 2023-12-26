const questions = [

    {
        question:"भार के आधार पर पृथ्वी की पपड़ी में ऑक्सीजन का प्रतिशत कितना है?        ",
        answers: [
            { text: "46.60%            ", correct: true},
            { text: "27.72%            ", correct: false},
            { text: "8.13%            ", correct: false},
            { text: "5.00%            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी में सभी खनिजों का मूल स्रोत क्या है?        ",
        answers: [
            { text: "ऊपरी सतह            ", correct: false},
            { text: "मैग्मा            ", correct: true},
            { text: "क्रस्ट            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"क्वार्ट्ज़ का सबसे महत्वपूर्ण घटक कौन सा है?        ",
        answers: [
            { text: "रेत            ", correct: false},
            { text: "ग्रेनाइट            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"कौन सा पाइरोक्सिन का घटक नहीं है?        ",
        answers: [
            { text: "कैल्शियम            ", correct: false},
            { text: "मैग्नीशियम            ", correct: false},
            { text: "आयरन            ", correct: false},
            { text: "ग्रेनाइट            ", correct: true},
        ] 
    },

    {
        question:"ओलिवाइन के प्रमुख तत्व कौन से हैं?        ",
        answers: [
            { text: "आयरन            ", correct: false},
            { text: "सिलिका            ", correct: false},
            { text: "मैग्नीशियम            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"धात्विक खनिज कौन सा है?        ",
        answers: [
            { text: "सिलिका            ", correct: false},
            { text: "कार्बन            ", correct: false},
            { text: "ऑक्सीजन            ", correct: false},
            { text: "सोना            ", correct: true},
        ] 
    },

    {
        question:"इनमें से किसमें धातु की मात्रा नहीं होती है?        ",
        answers: [
            { text: "सल्फर            ", correct: false},
            { text: "नाइट्रेट्स            ", correct: false},
            { text: "फॉस्फेट            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"चट्टानों के विज्ञान को कहा जाता है        ",
        answers: [
            { text: "भूविज्ञान            ", correct: false},
            { text: "प्राणीशास्त्र            ", correct: false},
            { text: "पेट्रोलॉजी            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"ठोस मैग्मा और लावा से बनने वाली चट्टानों को कहा जाता है        ",
        answers: [
            { text: "अवसादी            ", correct: false},
            { text: "एग्न्यू            ", correct: true},
            { text: " रेत चट्टानें            ", correct: false},
            { text: "कायापलट            ", correct: false},
        ] 
    },

    {
        question:"टुकड़ों के निक्षेपण/सीमेंटेशन से किस प्रकार की चट्टानें बनती हैं?        ",
        answers: [
            { text: "अवसादी            ", correct: true},
            { text: "एग्न्यू            ", correct: false},
            { text: "पेग्मैटिक            ", correct: false},
            { text: "कायापलट            ", correct: false},
        ] 
    },

    {
        question:"व्यापक संरचना वाली कर्कश कण वाली चट्टानें कौन सी हैं?        ",
        answers: [
            { text: "पेग्मेटिटिक ग्रेनाइट            ", correct: false},
            { text: "पेग्मेटिटिक डायराइट            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"ग्रेनाइट एक प्रकार की चट्टान है:        ",
        answers: [
            { text: "ग्रैनेटॉइड            ", correct: true},
            { text: "पेग्मैटिक            ",correct: false},
            { text: "ग्लासी                ", correct: false},
            { text: "एफैन्टिक            ", correct: false},
        ] 
    },

    {
        question:"बाहर निकलने वाली चट्टान किस प्रकार की है?        ",
        answers: [
            { text: "ग्रेनेटॉइड            ", correct: false},
            { text: "ग्लासी            ", correct: false},
            { text: "khandit", correct: true},
            { text: "एफैन्टिक            ", correct: false},
        ] 
    },

    {
        question:"बाहरी एजेंसियों द्वारा टुकड़ों के जमाव सीमेंटीकरण को कहा जाता है        ",
        answers: [
            { text: "अवसादन            ", correct: true},
            { text: "कायापलट            ", correct: false},
            { text: "लिथिफिकेशन            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"किस प्रकार की चट्टानें जानवरों और पौधों के स्राव की सक्रिय भागीदारी से बनती हैं        ",
        answers: [
            { text: "सिलिसियस चट्टानें            ", correct: true},
            { text: "रेत चट्टानें            ", correct: false},
            { text: "खंडित चट्टानें            ", correct: false},
            { text: "कांच जैसी चट्टानें            ", correct: false},
        ] 
    },

    {
        question:"किस प्रकार की चट्टानें बड़ी मात्रा में कार्बन युक्त संपीड़ित और परिवर्तित वनस्पति पदाथ बनती हैं?        ",
        answers: [
            { text: "पीट            ", correct: true},
            { text: "रेत चट्टानें            ", correct: false},
            { text: "टुकड़ा            ", correct: false},
            { text: "ग्लासी            ", correct: false},
        ] 
    },

    {
        question:"नमकीन पानी के सांद्रित घोल से निक्षेपण से क्या बनता है?        ",
        answers: [
            { text: "नमक            ", correct: true},
            { text: "पीट            ", correct: false},
            { text: "चूना पत्थर            ", correct: false},
            { text: "रेत            ", correct: false},
        ] 
    },

    {
        question:"उन चट्टानों के प्रकार का नाम बताइए जिनमें मूल कण अधिक या कम पूर्ण बैंड या परतों में पुनर्व्यवस्थित हो जाते हैं।        ",
        answers: [
            { text: "लवण            ", correct: false},
            { text: "पत्तेदार            ", correct: true},
            { text: "कैलकेरियस            ", correct: false},
            { text: "ग्रेनाइट            ", correct: false},
        ] 
    },

    {
        question:"नमक चट्टान का उदाहरण कौन सा है?        ",
        answers: [
            { text: "हैलाइट            ", correct: false},
            { text: "जिप्सम            ", correct: false},
            { text: "पोटाश            ", correct: false},
            { text: "ये सभी            ", correct: true},
        ] 
    },

    {
        question:"जब चट्टानों को टेक्टोनिक प्रक्रियाओं द्वारा निचले स्तर पर धकेला जाता है, तो इस प्रक्रिया को कहा जाता है        ",
        answers: [
            { text: "अवसादन            ", correct: false},
            { text: "कायापलट            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
            { text: "दोनों            ", correct: false},
        ] 
    },

    {
        question:"रूपांतरित चट्टानों को .... में वर्गीकृत किया गया है। प्रमुख समूह.        ",
        answers: [
            { text: "दो            ", correct: true},
            { text: "तीन            ", correct: false},
            { text: "पांच            ", correct: false},
            { text: "छह            ", correct: false},
        ] 
    },

    {
        question:"कायांतरित चट्टानें किस समूह से संबंधित हैं?        ",
        answers: [
            { text: "पत्तेदार            ", correct: false},
            { text: "गैर पत्तेदार            ", correct: false},
            { text: "दोनों            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"लवण और फ़ाइलाइट_______हैं। चट्टानें        ",
        answers: [
            { text: "पत्तेदार            ", correct: true},
            { text: "गैर पत्तेदार            ", correct: false},
            { text: "दोनों            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"गैर-पर्णधारी चट्टानों का उदाहरण कौन सा है?        ",
        answers: [
            { text: "मार्बल            ", correct: true},
            { text: "शिस्ट्स            ", correct: false},
            { text: "साल्ट्स            ", correct: false},
            { text: "फाइलाइट्स            ", correct: false},
        ] 
    },

    {
        question:"सर्पेन्टाइन एक प्रकार की चट्टान है।        ",
        answers: [
            { text: "पत्तेदार            ", correct: false},
            { text: "गैर-पत्तेदार            ", correct: true},
            { text: "लवण            ", correct: false},
            { text: "एफॅटिक            ", correct: false},
        ] 
    },

    {
        question:"वह प्रक्रिया जिसके द्वारा चट्टानें नई चट्टानों में परिवर्तित हो जाती हैं, कहलाती है?        ",
        answers: [
            { text: "चट्टान चक्र            ", correct: true},
            { text: "परिवर्तन            ", correct: false},
            { text: "अवसादन            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },
    {
        question:"वे चट्टानें जो मूल रूप से या तो अवसादी, आग्नेय या रूपांतरित थीं और गर्मी और दबाव द्वारा और अधिक परिवर्तित हो गई हैं, कहलाती हैं:        ",
        answers: [
            { text: "ज्वालामुखीय            ", correct: false},
            { text: "तलछटित            ", correct: false},
            { text: "रूपांतरित            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित खनिजों में एक अधात्विक खनिज है        ",
        answers: [
            { text: "चांदी.            ", correct: false},
            { text: "तांबा.            ", correct: false},
            { text: "जिंक।            ", correct: false},
            { text: "कोयला।            ", correct: true},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी में कौन सा खनिज समूह प्रचुर मात्रा में पाया जाता है?        ",
        answers: [
            { text: "अभ्रक समूह            ", correct: false},
            { text: "फेल्सपार समूह            ", correct: true},
            { text: "ऑक्साइड समूह            ", correct: false},
            { text: "सिलिकेट समूह            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी रूपांतरित चट्टानों की प्रमुख विशेषता है?        ",
        answers: [
            { text: "परिवर्तनशील            ", correct: true},
            { text: "बिल्कुल            ", correct: false},
            { text: "क्रिस्टलीय            ", correct: false},
            { text: "पत्ते            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा सबसे कठोर खनिज है?        ",
        answers: [
            { text: "पुखराज            ", correct: false},
            { text: " हीरा            ", correct: true},
            { text: "क्वार्ट्ज            ", correct: false},
            { text: "फेल्डस्पार            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन ग्रेनाइट के दो मुख्य घटक हैं?        ",
        answers: [
            { text: "लोहा और निकल            ", correct: false},
            { text: "लोहा और चांदी            ", correct: false},
            { text: "सिलिका और एल्यूमिनियम            ", correct: true},
            { text: "आयरन ऑक्साइड और पोटेशियम            ", correct: false},
        ] 
    },

    {
        question:"चट्टानों का विज्ञान कहा जाता है        ",
        answers: [
            { text: "खनिज विज्ञान            ", correct: false},
            { text: "पेट्रोलॉजी            ", correct: true},
            { text: "खनिज विज्ञान            ", correct: false},
            { text: "आयरनोलॉजी            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा रेत और ग्रेनाइट का घटक है?        ",
        answers: [
            { text: "उभयचर            ", correct: false},
            { text: "क्वार्ट्ज            ", correct: true},
            { text: "पाइरोक्सिन            ", correct: false},
            { text: "अभ्रक            ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की पपड़ी पर सबसे प्रचुर मात्रा में पाई जाने वाली चट्टानें हैं        ",
        answers: [
            { text: "आग्नेय चट्टानें।            ", correct: true},
            { text: "तलछटी चट्टानें।            ", correct: false},
            { text: "रूपांतरित चट्टानें।            ", correct: false},
            { text: "ग्रेनाइट चट्टान।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी एक अवसादी चट्टान नहीं है?        ",
        answers: [
            { text: "टिलाइट",            correct: false},
            { text: "बोरेक्स            ", correct: false},
            { text: "बोरेक्स            ", correct: false},
            { text: "संगमरमर            ", correct: true},
        ] 
    },

    {
        question:"लोहा है        ",
        answers: [
            { text: "लौह धातु।            ", correct: true},
            { text: "अलौह धातु।            ", correct: false},
            { text: "कीमती धातु।            ", correct: false},
            { text: "गैर-कीमती धातु।            ", correct: false},
        ] 
    },

    {
        question:"पाइरोक्सिन किस प्रकार के रंग से मिलकर बना होता है?        ",
        answers: [
            { text: "हरा            ", correct: false},
            { text: "काला            ", correct: false},
            { text: "दोनों (ए) और (बी)            ", correct: false},
            { text: "उपरोक्त में से कोई नहीं            ", correct: true},
        ] 
    },

    {
        question:"वे खनिज जिनमें धातु की मात्रा नहीं होती, कहलाते हैं        ",
        answers: [
            { text: "कीमती खनिज ।            ", correct: false},
            { text: "लौह खनिज ।            ", correct: false},
            { text: "गैर-धात्विक खनिज ।            ", correct: true},
            { text: "अलौह खनिज ।            ", correct: false},
        ] 
    },

    {
        question:"मिट्टी का मूल पदार्थ किससे प्राप्त होता है?        ",
        answers: [
            { text: "आग्नेय चट्टानें।            ", correct: false},
            { text: "रूपांतरित चट्टानें।            ", correct: false},
            { text: "तलछटी चट्टानें।            ", correct: true},
            { text: "जैविक क्रिया।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा रूपांतरित चट्टानों का उदाहरण नहीं है        ",
        answers: [
            { text: "देरी            ", correct: false},
            { text: "संगमरमर            ", correct: false},
            { text: "चूना पत्थर            ", correct: true},
            { text: "शिस्ट            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा आठ तत्वों में से नहीं है?        ",
        answers: [
            { text: "ऑक्सीजन और सिलिकॉन            ", correct: false},
            { text: "एल्युमीनियम और लोहा            ", correct: false},
            { text: " कैल्शियम और सोडियम            ", correct: false},
            { text: "अभ्रक और ग्रेनाइट            ", correct: true},
        ] 
    },

    {
        question:"आग्नेय चट्टानें हैं        ",
        answers: [
            { text: "प्राथमिक चट्टानें।            ", correct: true},
            { text: "द्वितीयक चट्टानें।            ", correct: false},
            { text: "तृतीयक चट्टानें।            ", correct: false},
            { text: "नरम चट्टानें।            ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन लौह खनिज है?        ",
        answers: [
            { text: "तांबा            ", correct: false},
            { text: "एल्यूमिनियम            ", correct: false},
            { text: "लौह अयस्क            ", correct: true},
            { text: "टिन            ", correct: false},
        ] 
    },
    {
        question:"निहारिका परिकल्पना किसने दी?        ",
        answers: [
            { text: "इम्मानुअल कांट            ", correct: true},
            { text: "अरस्तू            ", correct: false},
            { text: "चेम्बरलेन            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"नीहारिका परिकल्पना को कब संशोधित किया गया?        ",
        answers: [
            { text: "1796            ", correct: true},
            { text: "1900            ", correct: false},
            { text: "1950            ", correct: false},
            { text: "1920            ", correct: false},
        ] 
    },

    {
        question:"सूर्य घिरा हुआ है        ",
        answers: [
            { text: "सौर निहारिका            ", correct: true},
            { text: "धूल पदार्थ            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
            { text: "दोनों            ", correct: false},
        ] 
    },

    {
        question:"बिग बैंग सिद्धांत किसने दिया?        ",
        answers: [
            { text: "कांट            ", correct: false},
            { text: "चेम्बरलेन            ", correct: false},
            { text: "एडविन हबल            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"बिग बैंग की घटना कब हुई थी?        ",
        answers: [
            { text: "13.6 मिलियन वर्ष पहले            ", correct: false},
            { text: "13.7 बिलियन वर्ष पहले            ", correct: true},
            { text: "4.6 बिलियन वर्ष पहले            ", correct: false},
            
        ] 
    },

    {
        question:"एक आकाशगंगा हाइड्रोजन गैस का एक बड़ा बादल बनाने लगती है जिसे कहा जाता है        ",
        answers: [
            { text: "ग्रह            ", correct: false},
            { text: "पृथ्वी            ", correct: false},
            { text: "पृथ्वी            ", correct: false},
            { text: "नेबुला            ", correct: true},
        ] 
    },

 
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 