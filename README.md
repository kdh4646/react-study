# <div> <picture> <img align="center" src="https://github.com/kdh4646/react-study/assets/71913953/85a00039-78fa-4efd-845b-d7d8ac23af73" width="80" height="80"> </picture> React </div>
> [!NOTE]
> Reference : https://github.com/academind/react-complete-guide-code/tree/01-getting-started
- A `library` for building user interfaces. 
- `Declarative UI Programming` (define the target UI state(s) - not the steps to get there)

# ✍ Projects
- [Key React Concepts](https://github.com/kdh4646/key-react-concepts)
- [Expense Tracker](https://github.com/kdh4646/expense-tracker)
- [Course Goal](https://github.com/kdh4646/course-goal)
- [Investment Calculator](https://github.com/kdh4646/investment-calculator)
- [User Info](https://github.com/kdh4646/user-info)
- [Email Password Page](https://github.com/kdh4646/email-password-page)
- [The Food Order App](https://github.com/kdh4646/the-food-order-app)
- [Class Based Components](https://github.com/kdh4646/class-based-components)
- [Fetch Movies](https://github.com/kdh4646/fetch-movies)
- [Redux Counter](https://github.com/kdh4646/redux-counter)
- [React Router](https://github.com/kdh4646/react-router)
- [Event Scheduler](https://github.com/kdh4646/event-scheduler)
- [React Events Page with Tanstack](https://github.com/kdh4646/react-events-tanstack)
- [Meetup Scheduler](https://github.com/kdh4646/meetup-scheduler)
- [Manage Challenges](https://github.com/kdh4646/manage-challenges)
- [Using Framer Motion](https://github.com/kdh4646/framer-motion-demo)
- [Favorites (Redux)](https://github.com/kdh4646/favorites-redux)
- [React + TypeScript](https://github.com/kdh4646/react-typescript)

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
 
- Cleaner HTML Code
  - `Fragmet`:
    1. To avoid `<div>` soup
    
    2. React.Fragment
    
    3. `<Fragmet> ... </Fragment>`
  
  - `Portal`:
    1. Render component to other section
  
    2. `ReactDOM.createPortal(which component..., where to...);`
  
  - `Reference`:
    1. For Read only (not for changing -> if changing then `useState()`)

    2. An object which always has `current` prop

    3. Reat.userRef

    4. `const variableName = useRef(defaultValue);`

- `useEffect()` hook
  1. `useEffect(() => {}, [])`: first param is `function` and second param is `dependency array`
  
  2. Runs only if dependency changes
  
  3. Rus "AFTER" every component evaluation

- useState() vs. useReducer()
<table>
  <tr>
    <th>
      <strong>
        useState()
      </strong>
    </th>
    <th>
      <strong>
        useReducer()
      </strong>
    </th>
  </tr>
  
  <tr>
    <th>
      The main state management "tool"
    </th>
    <th>
      Greate if you need "more power"
    </th>
  </tr>
  
  <tr>
    <th>
      Greate for independent pieces of state/data
    </th>
    <th>
      Should be considered if you have related pieces of state/data
    </th>
  </tr>

  <tr>
    <th>
      Greate if state updates are easy and limited to a few kinds of updates
    </th>
    <th>
      Can be helpful if you have more complex state updates
    </th>
  </tr>
</table>

- Rules of Hooks

![image](https://github.com/kdh4646/react-study/assets/71913953/c4b4b587-1fd0-46b3-a359-179d84399052)

- React: behind the scene

![image](https://github.com/kdh4646/react-study/assets/71913953/4308cd11-aed7-4e8e-ac0a-b5b1d3649cb1)

- Re-Evaluating Components !== Re-Rendering the DOM (partially)

![image](https://github.com/kdh4646/react-study/assets/71913953/201bead6-750e-425a-88bb-f1970dda7240)

- `React.memo(component_name)`
  - Check the component's previous props vs. new values
  - Only values of the prop changes, then componenet should be re-executed and re-evalualted
  - If prop doesn't change then component execution is skipped
  - Its child also not executed
  - Do `optimization`
  - Not using a lot since it costs
    - Need to `store the prop values` and need to make the `comparison`
  
  - <h2>It will re-evaluate even though prop doesn't change, if prop contains non-primitive type since JavaScript returns new object every execution and those props are not equal</h2>
  
  - To prevent, if `function` need to NEVER change   
    - use: `useCallback(never_change_function_context, [dependency_list])`
  - `useMemo(data, [dependency_list])`: is used for tracking the unchanged `data` and if no changes then not running again

- Redux: alternative of useContext()

![image](https://github.com/kdh4646/react-study/assets/71913953/e0d1bb63-c31f-4aa7-8830-bd1c83df33c0)

- Where to put our logic

![image](https://github.com/kdh4646/react-study/assets/71913953/ee654809-c5f7-4637-a3af-bac5b88a9a81)

- `npm run build` for build application

- React Framework: Next.js
- command: `npx create-next-app`

![image](https://github.com/kdh4646/react-study/assets/71913953/5332850d-5ecf-46ed-913d-82f4c3db4fc4)

- Testing

![image](https://github.com/kdh4646/react-study/assets/71913953/558cce9e-c02e-41c8-bf52-64e0663c38ed)

