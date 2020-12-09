tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        startStop,
        // onLoadField,
        // gameQuest
    ) {
        this.preTime = 3;
        this.boomTimer = (parseInt(timeAmount.value) + 1) || 31;
        this.countOfPlayers = parseInt(playerNumber.value) || 2;
        this.tasks = JSON.parse(tasks);
        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        // this.onLoadField = onLoadField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.startStop = startStop;
        // this.gameQuest = gameQuest;
        this.needWrongAnswers = 2;
        this.needRightAnswers = 19;
    },

    gameStart() {
		this.startStop.addEventListener('click', () => {
			this.countOfPlayers = parseInt(playerNumber.value);
            this.boomTimer = (parseInt(timeAmount.value) + 1) || 31;
            this.gameStatusField.innerText = `Приготовьтесь...`;
            // this.gameField();
            this.run();
            this.startStop.addEventListener('click', () => this.finish('lose') );
        })
	},

    // gameField() {
	// 	this.onLoadField.classList.add('quest');
	// 	this.gameSetting.classList.add('quest');
	// 	this.gameQuest.classList.remove('quest');
	// 	this.timerField.classList.remove('quest');
	// 	this.gameStatusField.classList.remove('quest');
	// },

    run() {

        this.state = 1;
        this.rightAnswers = 0;
        this.wrongAnswers = 0;
        this.turnOn();
    },

    turnOn() {
        this.beforeTimer();
        this.gameStatusField.innerText += ` Вопрос игроку №${this.state}`;
        this.startStop.innerText = `Завершить игру`;

        // const taskNumber = randomIntNumber(this.tasks.length - 1);
        // this.printQuestion(this.tasks[taskNumber]);

        // this.tasks.splice(taskNumber, 1);

        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;

        // this.startStop.addEventListener('click', () => this.finish('lose') );
    },

    turnOff(value) {
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
            // this.boomTimer += 5;
            clearTimeout(this.timerTimeout);
        } else {
            this.gameStatusField.innerText = 'Неверно!';
            this.wrongAnswers += 1;
            // this.boomTimer -= 5;
            clearTimeout(this.timerTimeout);
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.turnOn();
            }

        } else {
            this.finish('won');
            this.startStop.innerText = `Начать игру`;
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
    },

    beforeTimer() {
		var i = this.preTime;
		this.timeClear = setInterval(() => {
			this.timerField.innerText = i;
			i--;
			if (i < 0) {
				clearInterval(this.timeClear);
				this.timer();
				this.taskNumber = randomIntNumber(this.tasks.length - 1);
				this.printQuestion(this.tasks[this.taskNumber]);
				this.tasks.splice(this.taskNumber, 1);
			}
		}, 1000);

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
            clearInterval(this.timeClear);
            clearTimeout(this.timerTimeout);
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
            clearTimeout(this.timerTimeout);
            clearInterval(this.timeClear);
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.startStop.innerText = `Начать игру`;

        this.startStop.addEventListener('click', () => {
            this.run();
        })



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
                this.timerTimeout = setTimeout(() => {
                    this.timer();
                },
                    1000,
                );
            } else {
                this.finish('lose');
            }
        }
    },
}

