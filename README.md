# <div> <picture> <img align="center" src="https://github.com/kdh4646/react-study/assets/71913953/85a00039-78fa-4efd-845b-d7d8ac23af73" width="80" height="80"> </picture> React </div>
> [!NOTE]
> Reference : https://github.com/academind/react-complete-guide-code/tree/01-getting-started
- A `library` for building user interfaces. 
- `Declarative UI Programming` (define the target UI state(s) - not the steps to get there)

# ✍ Projects
- [Key React Concepts](https://github.com/kdh4646/key-react-concepts/tree/f6287653ed38d692780f8c614a2286491f25a8a8)
- [Expense Tracker](https://github.com/kdh4646/expense-tracker/tree/11d3ec97a59ec211c7220dbbc84fc7cd3e814879)
- [Course Goal](https://github.com/kdh4646/course-goal/tree/095ed625e7adec440007e0d4721eaca2e03f6e8b)
- [Investment Calculator](https://github.com/kdh4646/investment-calculator/tree/49825efeda8f1a6bf43922d2c4b497693434a1f1)

# 📖 How to Setup
- Download
  - <a href="https://code.visualstudio.com/download"> ***VS Code*** </a>
    - Recommended Extension : `Prettier - Code formatter extension`
  - <a href="https://nodejs.org/en/download/current"> ***Node.js*** </a>
  
    > [!IMPORTANT]
    > Write command after making/loading a project
    - Terminal -> New Terminal :
      ```
      npm install
      ```
    - starting server :
      ```
      npm start
      ```
    - terminating server : `Ctrl + C`

    - Creating new react project :
    
      1. Entering where you want to make a project : `react-projects-directory`
      
          ```
          cd react-projects-directory
          ```
      2. Typing the name you want to create : `your-project-name`
      
          ```
          npx create-react-app your-project-name
          ```

#  ✏ Notes
- React Projects Use A `Build Process`

  > React projects require a build process that transforms your code

  1. Raw, unprocessed React code won't execute in the browser -> `JSX` is not a default JavaScript feature
  
  2. In addition, the code would `not be optimized` for production (e.g., not minified)

- React is all about `Components`
  1. Reusability

  2. Separation of Concerns

- `Props` are the `attributes` of your "custom HTML elements" (Components)

- `Composition`
  1. Whenever combine components, using composition
  
  2. `props.children` (which is the context between the opening and closing tags) allows you to create a wrapper component
