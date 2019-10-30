
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function () {
      // Inserts seed entries
      return knex('question').insert([
        { id: 1, description: ' How often do you have difficulty sustaining your attention while doing something for work, school, a hobby, or fun activity (e.g. remaining focused during lectures, lengthy reading or conversations)? ' },

        { id: 2, description: ' How often are you easily distracted by external stimuli, like something in your environment or unrelated thoughts? ' },

        { id: 3, description: ' How often do you avoid, dislike, or are reluctant to engage in tasks that require sustained mental effort or thought? ' },

        { id: 4, description: ' How often do you have trouble listening to someone, even when they are speaking directly to you — like your mind is somewhere else? ' },

        { id: 5, description: ' How often do you have difficulty in organizing an activity or task needing to get done (e.g., poor time management, fails to meet deadlines, difficulty managing sequential tasks)? ' },

        { id: 6, description: ' How often do you fail to give close attention to details, or make careless mistakes in things such as schoolwork, at work, or during other activities? ' },

        { id: 7, description: ' How often do you forget to do something you do all the time, such as missing an appointment or paying a bill? ' },

        { id: 8, description: ' How often do you lose, misplace or damage something that\'s necessary in order to get things done(e.g., your phone, eyeglasses, paperwork, wallet, keys, etc.) ? ' },

        { id: 9, description: ' How often do you have trouble following through on instructions, or failing to finish schoolwork, chores, or duties in the workplace (e.g., you start a task but quickly lose focus and are easily sidetracked)? ' },

        { id: 10, description: ' How often are you unable to play or engage in leisurely activities quietly? ' },

        { id: 11, description: ' How often do you have difficulty waiting your turn, such as while waiting in line? ' },

        { id: 12, description: ' How often do you feel like you\'re "on the go," acting as if you\'re "driven by a motor" (e.g., you\'re unable to be or uncomfortable being still for an extended period of time, such as in a restaurant or a meeting) ? ' },

        { id: 13, description: ' How often do you leave your seat in situations when remaining seated is expected (e.g., leaving your place in the office or workplace)? ' },

        { id: 14, description: ' How often do you blurt out an answer before a question has been completed (e.g., completing another person\'s sentence or can\'t wait your turn in a conversation)? ' },

        { id: 15, description: ' How often do you feel restless -- like you want to get out and do something? ' },

        { id: 16, description: ' How often do you fidget with or tap your hands or feet, or squirm in your seat? ' },

        { id: 17, description: ' How often do find yourself talking excessively? ' },

        { id: 18, description: ' How often do you interrupt or intrude on others, such as butting into their conversation or taking over what others are doing? ' },


      ]);
    });
};


