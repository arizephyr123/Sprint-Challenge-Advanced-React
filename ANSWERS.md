- [ ] Why would you use class component over function components (removing hooks from the question)?

Primarily because Hooks are new and surely we will have to work with legacy pre-hook-class-component-code.

- [ ] Name three lifecycle methods and their purposes.

Mounting- beginning of lifecycle, component is initially rendered. This is where event-listeners are set up and initial data is fetched.
Updating/re-rendering- where changes are monitored and re-rendered as changes to state or props etc, occur. This is the bulk of the life cycle and where most of actions take place. Like useEffect hook
Unmounting- end of life cycle, where clean-up if side-effects occurs and Component is removed from the DOM

- [ ] What is the purpose of a custom hook?

To reuse and combine blocks of stateful logic for DRY, efficient, clean code.

- [ ] Why is it important to test our apps?

It is important to test so that we can ensure that our app works under a variety of circumstances that a user may encounter. It serves as documentation, helps in early identification of problems and aids in debugging. It also keeps us thinking  from the user’s perspective and edge cases that our app may encounter. Rigorous testing reduces manual testing, makes maintaining the code easier and cheaper and more stable.