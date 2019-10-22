import React from "react"
const SkillImg1 = "https://i.imgur.com/mPyngjW.png"
const SkillImg2 = "https://i.imgur.com/KUbmMYm.png"
const SkillImg3 = "https://i.imgur.com/KRnTQ1v.png"

const data = [
  {
    id: 1,
    image: SkillImg1,
    name: "What is Hyper focus?",
    type: "superpower",
    title: "What is Hyper focus?",
    description: (
      <div>
        <p>
          Hyper focus is an intense form of mental concentration or
          visualization on a subject, topic, or task. Hyper focus may bear a
          relationship to flow. In some circumstances, both flow and hyper focus
          can be an aid to achievement, but in other circumstances or situations
          it could be a liability. It is necessary to discover one's triggers so
          as to better aim the behaviour.
        </p>
        <p>In this mini course you will learn about triggers:</p>
        <ul>
          <li>High and clear consequences</li>
          <li>Condensed feedback loops</li>
          <li>Rich environment</li>
          <li>Clear communication</li>
          <li>Clear and detailed goals</li>
        </ul>
        <p>
          The most vital aspect is individualization and exploration. Your set
          of triggers are unique to you.
        </p>
        <p>
          Once discovered you'll be able to focus for hours on productive and
          useful material, often at a higher learning rate.
        </p>
        <p>
          Once aimed, your productivity should see an increase. Discovering them
          is the first step to a productive and thriving life.
        </p>
      </div>
    )
  },
  {
    id: 2,
    image: SkillImg2,
    name: "Procrastination",
    type: "superpower",
    title: "Procrastination",
    description: (
      <div>
        <p>We can day dream like no ones business.</p>
        <p>This is actually the dual side of the learning process.</p>{" "}
        <p>
          Learning is the act of creating new neural connections. Connections
          also used in creativity.
        </p>
        <p>
          When we're creative or learn, we first intensely focus on the
          available information.
        </p>
        <p>This is the focused phase.</p>
        <p>
          After that we need time to let things fall into place, new connections
          to form and strengthens and ideas to bubble to the surface.
        </p>
        <p>
          That's the diffuse phase. You know it when you have a great idea in
          the shower, after you've given up solving a damn hard problem.
        </p>
        <p>The mind works in mysterious ways.</p>
        <p>Often we have to let ourselves enjoy the structured down time.</p>
        <p>
          As ADHD people we may have such poor productivity track records that
          any down time feels like a waste.
        </p>
        <p>
          When we learn to work we have to learn to relax. To avoid burnout and
          to let our brain be creative.
        </p>
        <p>Just set a timer. Go enjoy your break. And comeback!</p>
      </div>
    )
  },
  {
    id: 3,
    image: SkillImg3,
    name: "Category Freedom",
    type: "superpower",
    title: "Category Freedom",
    description: (
      <div>
        <p>
          When we see a thing we see it as if seeing it for the first time. No
          matter how many times we've seen it. It's connected to low latent
          inhibition
        </p>
        <iframe
          style={{ margin: "auto", display: "flex" }}
          width="270"
          height="200"
          title="myFrame"
          src="https://www.youtube.com/embed/Oyuhtmr36cs"
        >
          frame body
        </iframe>
        <p>
          Most people when they see a thing, their brain registers it, and next
          time they see it, its less shiny.
        </p>
        <p>
          Most people when they see a thing, their brain registers it, and next
          time they see it, its less shiny.
        </p>
        <p>
          Our don't. It's why we can listen to the same song 3.000 times, or
          watch the same movie, or go down the same rabbit hole.
        </p>
        <p>
          It's also why we reexamine the same object till new ways of looking at
          it emerge.
        </p>
        <p>
          It's why we look at things till they REALLY shine through and then we
          obsessively hyper-focus.
        </p>
      </div>
    )
  },
  {
    id: 4,
    image: SkillImg2,
    name: "What are pomodoros?",
    type: "everyday",
    title: "What are pomodoros?",
    description: (
      <div>
        <p>
          Many people with ADHD suffer from time blindness. We have difficulty
          estimating how long something has, or will, take. We can easily go
          down rabbit holes ignoring pressing tasks, or have trouble starting,
          fearing that we see no end.
        </p>
        <p>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. The technique uses a timer to
          break down work into 25 minutes intervals, separated by short breaks.
          Each interval is known as a pomodoro, from the Italian word for
          'tomato'.
        </p>
        <p>
          The concept was recently popularized by James Clear in his recent best
          seller. Atomic Habits.
        </p>
        <p>
          Pomodoros short circuit our time blindness, and help us get started.
          You can start using this right now. Set a timer for 25 minutes on your
          phone, and return to the lessons in this app. Read and apply till it
          goes off. Focusing fully on the task at hand, ignoring all
          distractions.
        </p>
        <p>
          When it buzzes, go nuts. Walk about, drink water, do a handstand.
          Leave the lesson. 5 minutes later, you’ll traditionally return.
        </p>
        <p>
          Pomodoros have been shown to be particularly great for tracking
          progress.
        </p>
        <p>
          You start by doing 1. Then after a few weeks you can do 4 sessions of
          25 minutes, with 5 minute breaks before needing a longer break.
        </p>
        <p>
          For those of us with time blindness we often forget how far we’ve
          progressed. Pomodoros help us get started and keep going.
        </p>
        <p>
          In this lesson you’ll learn how to setup your own strategy for growing
          your focus stamina by using pomodoros.
        </p>
      </div>
    )
  },
  {
    id: 5,
    image: SkillImg3,
    name: "Morning Routine ",
    type: "everyday",
    title: "Morning Routine ",
    description: (
      <div>
        <p>The right start to the day sets you up for success.</p>
        <p>
          Even if you don't feel like it, you can pull yourself out of bed and
          into action with the right series of steps.
        </p>
        <p>
          And they are incredibly simple. Setup a countdown that takes you from
          groggy sleep monster, to fresh and at em.
        </p>
        <p>
          To start, get your alarm away from your bed so that you have to walk
          to switch it off. Then go straight to splashing your face with water
          so that you're wide awake. After that throw 4 eggs in the frying pan.
          <br />
          Fat and protein are excellence brain food and help stabilize your mood
          during the day. <br />
          Will they're frying sit on a comfy chair, straight back, count your
          breaths on the in and out, to a 100. <br />
          Congrats you've just meditated! <br />
          Eat the now ready eggs and choose a book to read. <br />
          Non fiction action info or fiction for better understanding of people.
          <br />
          Read for 10 pages. <br /> Shower and run out the door.
        </p>
        <p> You're all set to take on the world</p>
      </div>
    )
  },
  {
    id: 6,
    image: SkillImg1,
    name: (
      <p>
        A place for everything <br /> and everything in its place
      </p>
    ),
    type: "everyday",
    title: "A place for everything and everything in its place",
    description: (
      <div>
        <p>
          Often people with ADHD have less effective short term memory (called
          working memory). Don't fret, we make up for it with awesome skills.
        </p>
        <p>
          With these easy steps you'll make sure to minimize the fallout and
          keep your surroundings happy.
        </p>
        <ol>
          <li>
            find a fruit bowl. put all your keys, wallet, coins, cards, pens,
            journal etc any daily items in there
          </li>
          <li>they go nowhere but there. </li>
          <li> find a place for your shoes, shirts, belts etc.</li>
          <li>
            build, buy or borrow cupboard space as needed. it doesn't have to be
            perfect. you can optimize later.
          </li>
          <li>find a space for anything that you see in a quick scan</li>
        </ol>
        <p>
          This will free up your mind and conscience and make life infinitely
          better.
        </p>
        <p>
          Whenever you're stuck start tidying up and putting things in their
          place and you'll see how quickly your thoughts fall into place too.
        </p>
      </div>
    )
  }
]

export default data
