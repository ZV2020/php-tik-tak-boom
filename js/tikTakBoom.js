tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        startStop,
    ) {
        this.boomTimer = parseInt(timeAmount.value);
        this.countOfPlayers = parseInt(playerNumber.value);
        this.tasks = JSON.parse(tasks);
        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.startStop = startStop;
        this.needWrongAnswers = 2;
        this.needRightAnswers = 19;
    },

    
    run() {

        this.state = 1;

        this.rightAnswers = 0;

        this.wrongAnswers = 0;


        this.turnOn();

        this.timer();
    },

    turnOn() {
        this.gameStatusField.innerText += ` Вопрос игроку №${this.state}`;
        this.startStop.innerText = `Завершить игру`;

        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;

        this.startStop.addEventListener('click', () => this.finish('lose') );
    },

    turnOff(value) {
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
            this.boomTimer += 5;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
            this.wrongAnswers += 1;
            this.boomTimer -= 5;
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
                // this.startStop.innerText = `Начать игру`;
            } else {
                this.turnOn();
            }
        // if (this.wrongAnswers >= this.needWrongAnswers) {

        // }

        } else {
            this.finish('won');
            this.startStop.innerText = `Начать игру`;
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));

        this.currentTask = task;
    },

    finish(result = 'lose') {
        this.state = 0;
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!`;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.startStop.innerText = `Начать игру`;

        this.startStop.addEventListener('click', () => location.reload());


    },

    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        }
    },
}


    // function getSelectValue() {
    //     var selectValue = document.getElementById("dropdown-item").value;
    //     console.log(selectValue);
    // }
    // getSelectValue();
