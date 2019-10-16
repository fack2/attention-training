const img1 = "https://i.imgur.com/mPyngjW.png"
const img2 = "https://i.imgur.com/KUbmMYm.png"
var parse = require("html-react-parser")

const data = [
  {
    id: 1,
    image: img1,
    name: "What is Hyper focus?",
    type: "superpower",
    title: "What is Hyper focus?",
    description: parse(
      "<div><p>Hyper focus is an intense form of mental concentration or visualization on a subject, topic, or task. Hyper focus may bear a relationship to flow. In some circumstances, both flow and hyper focus can be an aid to achievement, but in other circumstances or situations it could be a liability. It is necessary to discover one's triggers so as to better aim the behaviour.</p><p>In this mini course you will learn about triggers:</p><ul><li>High and clear consequences</li><li>Condensed feedback loops</li><li>Rich environment</li><li>Clear communication</li><li>Clear and detailed goals</li></ul><p>The most vital aspect is individualization and exploration. Your set of triggers are unique to you.</p><p>Once discovered you'll be able to focus for hours on productive and useful material, often at a higher learning rate.</p><p>Once aimed, your productivity should see an increase. Discovering them is the first step to a productive and thriving life.</p></div>"
    )
  },
  {
    id: 2,
    image: img2,
    name: "What are pomodoros?",
    type: "everyday",
    title: "What are pomodoros?",
    description: parse(
      "<div><p>Many people with ADHD suffer from time blindness. We have difficulty estimating how long something has, or will, take. We can easily go down rabbit holes ignoring pressing tasks, or have trouble starting, fearing that we see no end.</p><p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into 25 minutes intervals, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato'.</p><p>The concept was recently popularized by James Clear in his recent best seller. Atomic Habits.</p><p>Pomodoros short circuit our time blindness, and help us get started. You can start using this right now. Set a timer for 25 minutes on your phone, and return to the lessons in this app. Read and apply till it goes off. Focusing fully on the task at hand, ignoring all distractions.</p><p> When it buzzes, go nuts. Walk about, drink water, do a handstand. Leave the lesson. 5 minutes later, you’ll traditionally return.</p><p> Pomodoros have been shown to be particularly great for tracking progress.</p><p> You start by doing 1. Then after a few weeks you can do 4 sessions of 25 minutes, with 5 minute breaks before needing a longer break.</p><p> For those of us with time blindness we often forget how far we’ve progressed. Pomodoros help us get started and keep going.</p><p> In this lesson you’ll learn how to setup your own strategy for growing your focus stamina by using pomodoros.</p></div>"
    )
  }
]

export default data
